import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'

const Register = props => (
  <Layout>
    <section id="login">
      <div className="container">
        <div id="loginDialogue">
          <img id="logo" src="/static/cloneblack2.png" alt="logo" />
          <p className="lead mt-3 text-center">Sign Up and Start Learning!</p>
          <form className="mt-5">
            <input
              type="text"
              name="text"
              className="form-control"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              className="form-control mt-4"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              className="form-control mt-4"
              placeholder="Password"
            />
            <input
              type="password"
              name="password"
              className="form-control mt-4"
              placeholder="Confirm Password"
            />

            <a className="btn btn-block btn-lg btn-primary btn-login mt-5 text-white">
              Sign Up
            </a>
          </form>
        </div>
      </div>
    </section>
    <style jsx>{`
      #logo {
        width: 100%;
      }

      #loginDialogue {
        width: 350px;
        background-color: white;
        margin: 150px auto;
        border-radius: 2px;
        padding: 40px;
        -moz-box-shadow: 2px 2px 10px 2px #ccc;
        -webkit-box-shadow: 2px 2px 10px 2px #ccc;
        box-shadow: 2px 2px 10px 2px #ccc;
      }

      input,
      input:focus {
        background-color: #ededed;
      }

      input {
        border: none;
        color: #2a83e3 !important;
        padding: 10px 20px;
        font-weight: bold;
        font-size: 18px;
      }

      .btn-login {
        background-color: #62c4f6;
        color: white;
        border: #62c4f6;
      }
    `}</style>
  </Layout>
)

export default Register
