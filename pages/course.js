import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'

const Course = props => (
  <Layout>
    <section id="course">
      <div className="container p-3">
        <div className="row">
          <div className="col mx-auto">
            <div className="card card-cascade wider">
              <div className="view overlay">
                <img src={props.course.image} className="img-fluid" />
              </div>
              <div className="card-body text-center">
                <h3 className="card-title">
                  <strong>{props.course.title}</strong>
                </h3>
                <p className="card-text">{props.course.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

Course.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`http://localhost:3000/api/courses/${id}`)
  const course = await res.json()

  console.log(course)

  return { course }
}

export default Course
