import Header from './head'
import Nav from './nav'

const Layout = props => (
  <div>
    <Header />
    <Nav />
    {props.children}
    <style jsx global>{`
      html {
        height: 100%;
      }

      body {
        height: 100%;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background: #9cecfb; /* fallback for old browsers */
        background: -webkit-linear-gradient(
          to bottom,
          #0052d4,
          #65c7f7,
          #9cecfb
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
          to bottom,
          #0052d4,
          #65c7f7,
          #9cecfb
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }

      .btn-nice {
        background-color: #3ecf8e;
        border-color: #3ecf8e;
        color: white;
      }

      .bg-main {
        background-color: transparent;
      }
    `}</style>
  </div>
)

export default Layout
