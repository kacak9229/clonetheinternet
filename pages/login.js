import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'

const Login = props => (
  <Layout>
    <section id="login">
      <div className="container">
        <div id="loginDialogue">
          <img id="logo" src="/static/cloneblack2.png" alt="logo" />
          <p className="lead mt-3 text-center">Login now to get access!</p>
          <form className="mt-5">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              className="form-control mt-4"
              placeholder="Password"
            />

            <a className="btn btn-block btn-lg btn-primary btn-login mt-5 text-white">
              Sign In
            </a>
          </form>
          <p className="mt-3 lead font-weight-bold text-center">OR</p>
          <a className="btn btn-block btn-social btn-facebook text-white text-left">
            <span className="fa fa-facebook" />
            <span className="ml-5">Login With Facebook</span>
          </a>
          <p className="mt-2 mb-0 text-center text-lead">
            Dont have an account?
          </p>
          <Link href="/register">
            <a id="signuplink" className="text-center">
              Sign up now!
            </a>
          </Link>
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

      .btn-facebook {
        color: #fff;
        background-color: #3b5998;
        border-color: rgba(0, 0, 0, 0.2);
      }

      #signuplink {
        display: inherit;
      }
    `}</style>
  </Layout>
)

export default Login
