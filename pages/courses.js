import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'

const style = {
  'width': '18rem'
}

const Courses = props => (

  <Layout>

    {props.courses.map(course => (

      <div className="card" style={style}>
        <img className="card-img-top" src={course.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{ course.title }</h5>
          <p className="card-text">{ course.description}</p>
          <Link as={`/courses/${course._id}`} href={`/course?id=${course._id}`}>
            <a className="btn btn-primary">Go somewhere</a>
          </Link>
        </div>
      </div>
    ))}


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
