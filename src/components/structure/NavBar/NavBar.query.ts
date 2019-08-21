import { graphql, useStaticQuery } from 'gatsby'

import { sections } from './types/sections'

export const useSectionsQuery = () =>
  useStaticQuery<sections>(graphql`
    query sections {
      allSectionsJson {
        nodes {
          pages
          title
        }
      }
    }
  `)
