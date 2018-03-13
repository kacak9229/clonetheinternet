import Head from './head'
import Link from 'next/link'

const links = [
  { href: '/courses', label: 'Courses' },
  { href: '/login', label: 'Login' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const style = {
  alignItems: 'left',
  marginLeft: '50px',
}

const Nav = () => (
  <nav className="nav navbar navbar-expand-md navbar-light">
    <div className="container">
      <Link prefetch href="/">
        <a className="navbar-brand">
          <img src="/static/cloneblack2.png" alt="logo" />
        </a>
      </Link>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        style={style}
        className="collapse navbar-collapse flex-column"
        id="navbarNav"
      >
        <ul className="navbar-nav ml-auto">
          {links.map(({ key, href, label }) => (
            <li key={key} className="nav-item">
              <Link href={href}>
                <a className="nav-link">{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <style jsx>{`
      .nav {
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, 0.0975);
      }
    `}</style>
  </nav>
)

export default Nav
