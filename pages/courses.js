import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'

const style = {
  width: '20rem',
}

const Courses = props => (
  <Layout title="Courses">
    <section id="courses">
      <div className="container p-5">
        <div className="row justify-content-center">
          {props.courses.map(course => (
            <div
              key={course._id}
              className="col-lg-4 d-inline-flex align-items-stretch mb-5"
            >
              <div className="card card-cascade narrower">
                <div className="view overlay">
                  <img
                    className="img-fluid"
                    src={course.image}
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <h3 className="green-text display-4">${course.price}</h3>
                  <h4 className="card-title">{course.title}</h4>
                  <p className="card-text">{course.description}</p>
                  <Link
                    as={`/courses/${course._id}`}
                    href={`/course?id=${course._id}`}
                  >
                    <a className="btn btn-nice btn-lg btn-block">
                      Check me Out!
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
)

Courses.getInitialProps = async function() {
  const res = await fetch('http://localhost:3000/api/courses')
  const courses = await res.json()

  console.log(courses)

  return {
    courses,
  }
}

export default Courses
