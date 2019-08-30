import { set, clone, get } from 'lodash'
import * as React from 'react'

import Context from './formContext'

const Form: React.FunctionComponent<FormProps> = ({
  children,
  onChange,
  value,
  language,
}) => {
  const handleChange = React.useCallback(
    (path: string) => (v: any) => {
      const newValue = clone(value)
      console.log(v)
      set(newValue, `${language}.${path}`, v)
      onChange(newValue)
    },
    [language, onChange, value]
  )
  return (
    <Context.Provider
      value={{ value: get(value, language), onChange: handleChange }}
    >
      {children}
    </Context.Provider>
  )
}

interface FormProps {
  value: any
  onChange: (value: any) => void
  language: string
}

export default Form
