import {
  ArrayInput as DefaultArrayInput,
  TextInput as DefaultTextInput,
} from '@habx/thunder-ui'

import withForm from './withForm'
export { default as Form } from './Form'

export const ArrayInput = withForm(DefaultArrayInput)
export const TextInput = withForm(DefaultTextInput)
