import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default function About({ data }) {
  return (
    <Layout>
      <h1>About {data}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}
export const query = graphql`
 query{
  book(id:"5efb967be228472b647e07b1"){
    name,
    id
  }
}
`