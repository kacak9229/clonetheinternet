import Link from 'next/link'
import axios from 'axios'
import Layout from '../components/layout'

const Course = (props) => (
  <Layout>
    <h1>Welcome to courses</h1>

  </Layout>
)

Course.getInitialProps = async function() {
  const res = await axios('http://localhost:3000/api/courses')
  const data = await res.json()
  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    courses: data
  }

}

export default Course
