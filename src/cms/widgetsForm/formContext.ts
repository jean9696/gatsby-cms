import * as React from 'react'

export type contextType = {
  value: any
  onChange: (path: string) => (v: any) => void
}
const context = React.createContext<contextType>({} as contextType)

export default context
