import * as React from 'react'

import { useSectionsQuery } from './NavBar.query'

const NavBar: React.FunctionComponent = () => {
  const data = useSectionsQuery()
  console.log(data)
  return <nav>{data.allSectionsJson.nodes.map(page => page.title)}</nav>
}

export default NavBar
