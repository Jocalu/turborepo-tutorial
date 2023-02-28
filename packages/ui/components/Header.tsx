import './Header.css'

interface HeaderLink {
  id: number
  url: string
  label: string
}

interface Props {
  links: HeaderLink[]
}

export const Header = (props: Props) => {
  const { links } = props

  return (
    <header className="header">
      <nav>
        <ul className="header__list">
          {links.map((link) => (
            <li className="header__item" key={link.id}>
              <a className="header__link" href={link.url}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
