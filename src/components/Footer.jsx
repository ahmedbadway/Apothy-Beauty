import { useLanguage } from '../context/LanguageContext'

const FOOTER_LINKS = [
  { id: 'home', key: 'home' },
  { id: 'about', key: 'about' },
  { id: 'products', key: 'products' },
  { id: 'contact', key: 'contact' },
]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="glass border-x-0 border-b-0 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-start">
        <p className="text-sm font-semibold text-text-soft">{t.footer.rights}</p>
        <nav aria-label={t.footer.quickLinks}>
          <ul className="flex flex-wrap justify-center gap-5">
            {FOOTER_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-sm font-semibold text-text transition-colors duration-200 hover:text-accent"
                >
                  {t.nav[link.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
