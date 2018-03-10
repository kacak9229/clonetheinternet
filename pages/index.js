import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Layout from '../components/layout'

const images = [
  { src: '/static/Facebook.svg', alt: 'facebook' },
  { src: '/static/Snapchat.svg', alt: 'snapchat' },
  { src: '/static/Tinder.svg', alt: 'tinder' },
  { src: '/static/Whatsapp.svg', alt: 'whatsapp' },
].map(image => {
  image.key = `banner-img-${image.src}-${image.alt}`
  return image
})

export default () => (
  <div>
    <Layout>
      <section id="home">
        <div className="container text-white text-center">
          <div className="jumbotron" id="jum">
            <h1 className="display-2">Clone The Internet</h1>
            <p id="description" className="lead mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              suscipit incidunt esse, aspernatur ullam facere.
            </p>
            <p className="lead">
              <Link href="/login">
                <a className="btn btn-success btn-nice btn-lg">
                  Get Exclusive Access Now!
                </a>
              </Link>
            </p>
          </div>
          <div className="row">
            {images.map(({ key, src, alt }) => (
              <div className="col-md-3 mb-5">
                <img className="banner-img" key={key} src={src} alt={alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>

    <style jsx>{`
      #jum {
        background-color: transparent;
      }

      #description {
        font-size: 2.3rem;
      }

      .banner-img {
        width: 100%;
        max-width: 200px;
        height: 100%;
      }
    `}</style>
  </div>
)
