import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'

const Courses = props => (
  <Layout>
    <h1> Welcome to courses </h1>
    <ul>
      {props.courses.map(course => (
        <li key={course._id}>
          <p> {course.title} </p> <img src={course.image} />
          <p> {course.description} </p>
        </li>
      ))}
    </ul>
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
