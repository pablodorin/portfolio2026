import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'
import ArticlePage from './components/endpoint/ArticlePage.jsx'
import { getArticlePage } from './content/articles/index.js'
import I18nProvider from './i18n/I18nProvider.jsx'
import './styles/global.css'

const articlePage = getArticlePage(window.location.pathname)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nProvider>
      {articlePage ? <ArticlePage {...articlePage} /> : <App />}
    </I18nProvider>
  </StrictMode>,
)
