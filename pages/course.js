import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'

const Course = (props) => (
  <Layout>
  <div className="col-lg-6 col-md-offset-3">
  <div className="card mb-3">
    <img className="card-img-top" src={props.course.image} alt="Card image cap" />
    <div className="card-body">
    <h5 className="card-title">{ props.course.title }</h5>
    <p className="card-text">{ props.course.descroption}</p>
    <p className="card-text"><small class="text-muted">{ props.course.price }</small></p>
    </div>
  </div>
  </div>

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
