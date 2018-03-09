import Header from './head'
import Nav from './nav'

const Layout = (props) => (
  <div>
    <Header />
    <Nav />
    { props.children }
  </div>
)

export default Layout
