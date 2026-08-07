/** @jest-environment node */
import { readFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import { articles, articleLanguages } from './index.js'

const projectRoot = process.cwd()

describe('Endpoint publication contracts', () => {
  test('every article has all translations, valid metadata, and unique routes', async () => {
    const routes = []
    const contentRoot = path.join(projectRoot, 'src', 'content', 'endpoint', '2026')
    const contentDirectories = await readdir(contentRoot, { withFileTypes: true })
    for (const directory of contentDirectories.filter((entry) => entry.isDirectory())) {
      const localizedFiles = await readdir(path.join(contentRoot, directory.name))
      expect(localizedFiles.filter((file) => /^(en|es|fr)\.md$/u.test(file)).sort()).toEqual([
        'en.md',
        'es.md',
        'fr.md',
      ])
    }

    for (const article of articles) {
      expect(article.id).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/u)
      expect(article.datePublished).toMatch(/^\d{4}-\d{2}-\d{2}$/u)
      expect(Number.isNaN(Date.parse(`${article.datePublished}T00:00:00Z`))).toBe(false)
      expect(Object.keys(article.translations).sort()).toEqual([...articleLanguages].sort())

      for (const language of articleLanguages) {
        const translation = article.translations[language]
        expect(translation.language).toBe(language)
        expect(translation.path).toMatch(
          language === 'en' ? /^\/endpoint\//u : new RegExp(`^/${language}/endpoint/`, 'u'),
        )
        routes.push(translation.path)
      }
    }
    expect(new Set(routes).size).toBe(routes.length)
  })

  test('registry navigation metadata is circular and consistent', () => {
    articles.forEach((article, index) => {
      expect(article.previousId).toBe(articles.at(index - 1).id)
      expect(article.nextId).toBe(articles[(index + 1) % articles.length].id)
      expect(article.order).toBe(index + 1)
    })
  })

  test('sitemap contains every public route exactly once', async () => {
    const sitemap = await readFile(path.join(projectRoot, 'public', 'sitemap.xml'), 'utf8')
    const expectedPaths = ['/', '/es/', '/fr/', ...articles.flatMap((article) =>
      Object.values(article.translations).map(({ path: routePath }) => routePath),
    )]
    const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/gu)].map(
      (match) => match[1],
    )
    expect(sitemapUrls).toEqual(
      expectedPaths.map((routePath) => `https://pablodorin.com${routePath}`),
    )
  })

  test.each([
    ['index.html', 'en', 'https://pablodorin.com/'],
    ['es/index.html', 'es', 'https://pablodorin.com/es/'],
    ['fr/index.html', 'fr', 'https://pablodorin.com/fr/'],
  ])('%s has localized SEO contracts', async (file, language, canonical) => {
    const html = await readFile(path.join(projectRoot, file), 'utf8')
    expect(html).toContain(`<html lang="${language}">`)
    expect(html.match(/<title>/gu)).toHaveLength(1)
    expect(html).toMatch(/<meta\s+name="description"/u)
    expect(html).toContain(`rel="canonical" href="${canonical}"`)
    expect(html.match(/hreflang=/gu)).toHaveLength(4)
    expect(html).toContain('property="og:title"')
    expect(html).toContain('name="twitter:title"')
    const jsonLd = html.match(
      /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/u,
    )
    expect(() => JSON.parse(jsonLd[1])).not.toThrow()
  })
})
