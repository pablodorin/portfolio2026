import { readdir, readFile, mkdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = fileURLToPath(new URL('../', import.meta.url))
const contentRoot = path.join(projectRoot, 'src', 'content', 'endpoint')
const generatedModule = path.join(
  projectRoot,
  'src',
  'content',
  'articles',
  'generatedArticles.js',
)
const sitemapPath = path.join(projectRoot, 'public', 'sitemap.xml')
const languages = ['en', 'es', 'fr']
const languageRoots = {
  en: '/endpoint',
  es: '/es/endpoint',
  fr: '/fr/endpoint',
}
const localeMetadata = {
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    siteName: 'Endpoint by Pablo Dorin',
    twitterDescription:
      'Read this article from Endpoint, Pablo Dorin’s software development blog.',
  },
  es: {
    htmlLang: 'es',
    ogLocale: 'es_AR',
    siteName: 'Endpoint por Pablo Dorin',
    twitterDescription:
      'Lea esta nota de Endpoint, el blog de desarrollo de software de Pablo Dorin.',
  },
  fr: {
    htmlLang: 'fr',
    ogLocale: 'fr_FR',
    siteName: 'Endpoint par Pablo Dorin',
    twitterDescription:
      'Lisez cet article d’Endpoint, le blog de développement logiciel de Pablo Dorin.',
  },
}

function fail(message) {
  throw new Error(`Endpoint content error: ${message}`)
}

function parseFrontmatter(source, filePath) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/u)
  if (!match) {
    fail(`${filePath} has no valid frontmatter block`)
  }

  const metadata = {}
  for (const line of match[1].split(/\r?\n/u)) {
    const separator = line.indexOf(':')
    if (separator < 1) {
      fail(`${filePath} contains an invalid frontmatter line: ${line}`)
    }
    const key = line.slice(0, separator).trim()
    const rawValue = line.slice(separator + 1).trim()
    try {
      metadata[key] = JSON.parse(rawValue)
    } catch {
      fail(`${filePath} contains an invalid JSON value for "${key}"`)
    }
  }

  return { metadata, body: match[2].trim() }
}

function parseSections(body, filePath) {
  const sections = []
  let current = null

  for (const block of body.split(/\r?\n\s*\r?\n/u)) {
    const heading = block.match(/^##\s+(.+)$/u)
    if (heading) {
      current = { heading: heading[1].trim(), paragraphs: [] }
      sections.push(current)
    } else if (current) {
      current.paragraphs.push(block.replace(/\r?\n/gu, ' ').trim())
    } else if (block.trim()) {
      fail(`${filePath} contains text before its first level-two heading`)
    }
  }

  if (
    sections.length === 0 ||
    sections.some(({ paragraphs }) => paragraphs.length === 0)
  ) {
    fail(`${filePath} must contain headings with at least one paragraph each`)
  }

  return sections
}

function countWords(value) {
  return value.trim().split(/\s+/u).filter(Boolean).length
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function articleHtml(article, translation) {
  const language = translation.language
  const locale = localeMetadata[language]
  const alternates = Object.fromEntries(
    languages.map((code) => [
      code,
      article.translations[code].canonicalUrl,
    ]),
  )
  const description = escapeHtml(translation.cardCopete)
  const title = escapeHtml(translation.title)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${translation.canonicalUrl}#article`,
    headline: translation.title,
    description: translation.cardCopete,
    url: translation.canonicalUrl,
    mainEntityOfPage: translation.canonicalUrl,
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    author: {
      '@type': 'Person',
      '@id': 'https://pablodorin.com/#person',
      name: 'Pablo Dorin',
      url: 'https://pablodorin.com/#person',
    },
    publisher: {
      '@type': 'Person',
      '@id': 'https://pablodorin.com/#person',
      name: 'Pablo Dorin',
    },
    keywords: article.tags,
    inLanguage: language,
  }
  const alternateLinks = languages
    .map(
      (code) =>
        `    <link rel="alternate" hreflang="${code}" href="${alternates[code]}" />`,
    )
    .join('\n')
  const tagMetadata = article.tags
    .map(
      (tag) =>
        `    <meta property="article:tag" content="${escapeHtml(tag)}" />`,
    )
    .join('\n')

  return `<!doctype html>
<html lang="${locale.htmlLang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="google" content="notranslate" />
    <meta name="description" content="${description}" />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Pablo Dorin" />
    <meta name="color-scheme" content="light dark" />
    <meta name="theme-color" content="#ffffff" />
    <link rel="canonical" href="${translation.canonicalUrl}" />
${alternateLinks}
    <link rel="alternate" hreflang="x-default" href="${alternates.en}" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>${title} | Endpoint</title>
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="${locale.siteName}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${translation.canonicalUrl}" />
    <meta property="og:locale" content="${locale.ogLocale}" />
    <meta property="article:published_time" content="${article.datePublished}" />
    <meta property="article:author" content="Pablo Dorin" />
${tagMetadata}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${title} | Endpoint" />
    <meta name="twitter:description" content="${escapeHtml(locale.twitterDescription)}" />
    <script src="/initial-theme.js"></script>
    <script type="application/ld+json">${JSON.stringify(structuredData)}</script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
    <!-- Cloudflare Web Analytics -->
    <script
      type="module"
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"token":"c51bc5a05998485b95b2f2e410a36c18"}'>
    </script>
    <!-- End Cloudflare Web Analytics -->
  </body>
</html>
`
}

async function markdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await markdownFiles(entryPath)))
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(entryPath)
    }
  }

  return files
}

async function clearGeneratedArticlePages() {
  const roots = [
    path.join(projectRoot, 'endpoint'),
    path.join(projectRoot, 'es', 'endpoint'),
    path.join(projectRoot, 'fr', 'endpoint'),
  ]

  for (const root of roots) {
    await rm(root, { recursive: true, force: true })
  }
}

const records = []
for (const filePath of await markdownFiles(contentRoot)) {
  const source = await readFile(filePath, 'utf8')
  const { metadata, body } = parseFrontmatter(source, filePath)
  const required = [
    'id',
    'number',
    'datePublished',
    'tags',
    'language',
    'slug',
    'kicker',
    'cardCopete',
    'title',
    'copete',
    'bajada',
  ]

  for (const field of required) {
    if (
      metadata[field] === undefined ||
      metadata[field] === '' ||
      (Array.isArray(metadata[field]) && metadata[field].length === 0)
    ) {
      fail(`${filePath} is missing "${field}"`)
    }
  }
  if (!languages.includes(metadata.language)) {
    fail(`${filePath} has unsupported language "${metadata.language}"`)
  }
  if (!/^\d{4}-\d{2}-\d{2}$/u.test(metadata.datePublished)) {
    fail(`${filePath} has invalid datePublished "${metadata.datePublished}"`)
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/u.test(metadata.slug)) {
    fail(`${filePath} has invalid slug "${metadata.slug}"`)
  }
  if (!Array.isArray(metadata.tags)) {
    fail(`${filePath} tags must be an array`)
  }

  records.push({
    ...metadata,
    sections: parseSections(body, filePath),
    filePath,
  })
}

const groups = new Map()
for (const record of records) {
  if (!groups.has(record.id)) {
    groups.set(record.id, [])
  }
  groups.get(record.id).push(record)
}

const articles = []
const usedPaths = new Set()
for (const [id, translations] of groups) {
  for (const language of languages) {
    if (!translations.some((item) => item.language === language)) {
      fail(`${id} is missing its ${language} translation`)
    }
    if (translations.filter((item) => item.language === language).length > 1) {
      fail(`${id} has more than one ${language} translation`)
    }
  }

  const reference = translations[0]
  for (const translation of translations) {
    for (const field of ['number', 'datePublished']) {
      if (translation[field] !== reference[field]) {
        fail(`${id} has inconsistent "${field}" values between translations`)
      }
    }
    if (JSON.stringify(translation.tags) !== JSON.stringify(reference.tags)) {
      fail(`${id} has inconsistent tags between translations`)
    }
  }

  const localized = Object.fromEntries(
    languages.map((language) => {
      const translation = translations.find(
        (item) => item.language === language,
      )
      const routePath = `${languageRoots[language]}/${translation.slug}/`
      if (usedPaths.has(routePath)) {
        fail(`duplicate route "${routePath}"`)
      }
      usedPaths.add(routePath)
      const text = [
        translation.title,
        translation.copete,
        translation.bajada,
        ...translation.sections.flatMap(({ heading, paragraphs }) => [
          heading,
          ...paragraphs,
        ]),
      ].join(' ')

      return [
        language,
        {
          slug: translation.slug,
          kicker: translation.kicker,
          cardCopete: translation.cardCopete,
          title: translation.title,
          copete: translation.copete,
          bajada: translation.bajada,
          disclosure: translation.disclosure,
          sections: translation.sections,
          language,
          path: routePath,
          canonicalUrl: `https://pablodorin.com${routePath}`,
          wordCount: countWords(text),
        },
      ]
    }),
  )

  articles.push({
    id,
    number: reference.number,
    datePublished: reference.datePublished,
    tags: reference.tags,
    translations: localized,
  })
}

articles.sort(
  (left, right) =>
    Number.parseInt(left.number, 10) - Number.parseInt(right.number, 10),
)
for (const [index, article] of articles.entries()) {
  article.order = index + 1
  article.previousId =
    articles[(index - 1 + articles.length) % articles.length].id
  article.nextId = articles[(index + 1) % articles.length].id
}

await clearGeneratedArticlePages()
for (const article of articles) {
  for (const language of languages) {
    const translation = article.translations[language]
    const outputPath = path.join(
      projectRoot,
      translation.path.slice(1),
      'index.html',
    )
    await mkdir(path.dirname(outputPath), { recursive: true })
    await writeFile(outputPath, articleHtml(article, translation), 'utf8')
  }
}

await mkdir(path.dirname(generatedModule), { recursive: true })
await writeFile(
  generatedModule,
  `// Generated by scripts/generate-endpoint.mjs. Do not edit.\nexport default ${JSON.stringify(articles, null, 2)}\n`,
  'utf8',
)

const staticUrls = ['/', '/es/', '/fr/']
const articleUrls = articles.flatMap((article) =>
  languages.map((language) => ({
    path: article.translations[language].path,
    lastmod: article.datePublished,
  })),
)
const sitemapEntries = [
  ...staticUrls.map(
    (url) => `  <url>\n    <loc>https://pablodorin.com${url}</loc>\n  </url>`,
  ),
  ...articleUrls.map(
    ({ path: routePath, lastmod }) =>
      `  <url>\n    <loc>https://pablodorin.com${routePath}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
  ),
].join('\n')
await writeFile(
  sitemapPath,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`,
  'utf8',
)

console.log(
  `Generated ${articles.length} Endpoint articles across ${records.length} localized pages.`,
)
