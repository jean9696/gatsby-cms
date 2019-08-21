import * as React from 'react'

import { WidgetProps } from './data'
import { borders } from 'netlify-cms-ui-default'

const PageWidget: React.FunctionComponent<PageWidgetProps> = ({
  value,
  onChange,
  field,
                                                                setActiveStyle,
                                                                classNameWrapper,
}) => {

console.log(borders)
  const languages = field.get('languages').toJS()
  return <div className={classNameWrapper}>test</div>
}

interface PageWidgetProps extends WidgetProps<{ languages: string[] }> {}

export default PageWidget
