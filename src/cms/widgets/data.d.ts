export interface WidgetProps<ConfigKeys> {
  onChange: Function
  forID: string
  value?: any
  field: {
    get: (
      key: keyof ConfigKeys
    ) => {
      toJS: () => ConfigKeys[keyof ConfigKeys]
    }
  }
  fetchID?: string
  query: Function
  queryHits: any | any[]
  classNameWrapper: string
  setActiveStyle: Function
  setInactiveStyle: Function
}
