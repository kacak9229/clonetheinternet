import Header from './head'
import Nav from './nav'

const Layout = props => (
  <div>
    <Header title={props.title} />
    <Nav />
    {props.children}
    <style jsx global>{`
      html {
        height: 100%;
      }

      nav {
        box-shadow: none !important;
      }

      body {
        height: 100%;
        background-color: #fafafa;
        // background-repeat: no-repeat;
        // background-attachment: fixed;
        // background: #9cecfb; /* fallback for old browsers */
        // background: -webkit-linear-gradient(
        //     to bottom,
        //     #0052d4,
        //     #65c7f7,
        //     #9cecfb
        //   )
        //   fixed; /* Chrome 10-25, Safari 5.1-6 */
        // background: linear-gradient(to bottom, #0052d4, #65c7f7, #9cecfb) fixed; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }

      .btn-nice {
        background-color: #9fe37e;
        border-color: #9fe37e;
        color: white;
      }

      .btn-nice:hover,
      .btn-nice:active {
        background-color: #6eb150;
        border-color: #6eb150;
        color: white;
      }

      .btn-nice.focus,
      .btn-nice:focus {
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
      }
    `}</style>
  </div>
)

export default Layout
