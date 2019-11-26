import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allKontentItemFullData {
      nodes {
        elements {
          linked___element {
            linked_items {
              id
              system {
                codename
              }
            }
          }
        }
      }
    }
    allKontentItemTestModel {
      nodes {
        elements {
          linked_items {
            linked_items {
              id
              system {
                codename
              }
            }
          }
        }
      }
    }
  }
`

export default ComponentName
