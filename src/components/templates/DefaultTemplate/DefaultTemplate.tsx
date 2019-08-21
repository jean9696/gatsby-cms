import * as React from 'react'
import styled from 'styled-components'

import { DefaultTemplateData } from './data'

const Test = styled.div`
  background: red;
`

const DefaultTemplate: React.FunctionComponent<DefaultTemplateData> = ({
  body,
}) => {
  return <Test>{body}</Test>
}

export default DefaultTemplate
