import * as React from 'react'
import { StyleSheetManager } from 'styled-components'

const withCss = WrappedComponent =>
  class CSSInjector extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        iframeRef: '',
      }
    }

    componentDidMount() {
      const iframe = document.querySelector('[class*="PreviewPaneFrame"]')
      // @ts-ignore
      const iframeHeadElem = iframe.contentDocument.head
      this.setState({ iframeRef: iframeHeadElem })
    }

    render() {
      // @ts-ignore
      const iframeRef = this.state.iframeRef
      return (
        <div>
          {iframeRef && (
            <StyleSheetManager target={iframeRef}>
              <WrappedComponent {...this.props} />
            </StyleSheetManager>
          )}
        </div>
      )
    }
  }

export default withCss
