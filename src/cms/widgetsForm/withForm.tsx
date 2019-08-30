import { get } from 'lodash'
import * as React from 'react'
import { useContext } from 'react'

import Context from './formContext'

const withForm = <T extends object>(
  WrappedComponent: React.ComponentType<T>
): React.FunctionComponent<
  Omit<T, 'onChange' | 'value'> & { name: string }
> => ({ name, ...props }) => {
  const { value, onChange } = useContext(Context)
  return (
    <WrappedComponent
      onChange={onChange(name)}
      value={get(value, name)}
      {...(props as T)}
    />
  )
}

export default withForm
