import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'

const Register = props => (
  <Layout title="Register">
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
            <a className="m-0 btn btn-block btn-lg btn-primary mt-5 text-white">
              Sign Up
            </a>
          </form>
        </div>
      </div>
    </section>
    <style jsx>
      {`
        #logo {
          width: 100%;
        }

        #loginDialogue {
          width: 350px;
          background-color: white;
          margin: 150px auto;
          border-radius: 2px;
          padding: 40px;
          -moz-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
            0 2px 10px 0 rgba(0, 0, 0, 0.12);
          -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
            0 2px 10px 0 rgba(0, 0, 0, 0.12);
          box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
            0 2px 10px 0 rgba(0, 0, 0, 0.12);
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
          background-color: #9fe37e;
          color: white;
          border: #9fe37e;
        }
      `}
    </style>
  </Layout>
)

export default Register
