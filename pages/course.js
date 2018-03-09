import Link from 'next/link'
import axios from 'axios'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'

const Course = (props) => (
  <Layout>
    <h1>Welcome to courses</h1>
    <ul>
      {props.courses.map(({ title, _id }) => (
        <li key={ _id }>
          <p>{title}</p>

        </li>
      ))}
    </ul>

  </Layout>
)

Course.getInitialProps = async function() {

  const res = await fetch("http://localhost:3000/api/courses")
  const courses = await res.json()

  console.log(courses)

  return { courses }

}

export default Course
