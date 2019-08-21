import * as React from 'react'

import { NavBar } from '@components/structure'
import { DefaultTemplate } from '@components/templates'

const PageLayout: React.FunctionComponent<PageLayoutProps> = ({
  pageContext,
}) => {
  console.log(pageContext)
  return (
    <div>
      <NavBar />
      <DefaultTemplate {...pageContext} />
    </div>
  )
}

interface PageLayoutProps {
  pageContext: {
    body: string
  }
}

export default PageLayout
