import React, { Component } from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Layout from '../components/layout'
import dropin from 'braintree-web-drop-in'

class Checkout extends Component {
  componentDidMount() {
    dropin.create(
      {
        authorization: 'sandbox_xm63b6rs_cqtncss4w3535nt5',
        container: this.refs.payment,
      },
      (err, clientInstance) => {
        console.error(err)
        console.log(clientInstance)
      },
    )
  }

  render() {
    return (
      <Layout title="Checkout">
        <section id="checkout">
          <div className="container">
            <p>Hi</p>
            <div ref="payment" className="payment" />
          </div>
        </section>
      </Layout>
    )
  }
}

export default Checkout
