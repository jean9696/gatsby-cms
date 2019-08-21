import { get, find } from 'lodash'
import * as React from 'react'
import styled from 'styled-components'

import { DefaultTemplate } from '@components/templates'

const ButtonsContainer = styled.div`
  border-bottom: solid 1px grey;
  padding: 8px 0;
`

const PagePreview = ({ entry }) => {
  const data = entry.toJSON().data
  const pages = get(data, 'pages', [])
  const languages: string[] = pages.map(page => get(page, 'language')) || ['fr']
  const [currentLanguage, setLanguage] = React.useState(languages[0])

  const currentData =
    find(pages, ({ language }) => currentLanguage === language) || {}
  return (
    <div>
      <ButtonsContainer>
        {languages.map(l => (
          <button key={l} onClick={() => setLanguage(l)}>
            {l}
          </button>
        ))}
      </ButtonsContainer>
      <DefaultTemplate {...currentData} />
    </div>
  )
}

export default PagePreview
