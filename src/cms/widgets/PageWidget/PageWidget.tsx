import * as React from 'react'

import { ArrayInput, Form, TextInput } from '../../widgetsForm'
import { WidgetProps } from '../data'

import { LanguageButton, LanguagesContainer } from './PageWidget.style'

const PageWidget: React.ForwardRefExoticComponent<
  PageWidgetProps
> = React.forwardRef(
  (
    {
      value = {},
      onChange,
      field,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle,
    },
    ref
  ) => {
    const languages = field.get('languages').toJS()
    if (!languages) {
      throw new Error('Languages is a required field in config')
    }
    React.useImperativeHandle(ref, () => ({
      wrappedControlValid: () => {},
    }))

    const [currentLanguage, setLanguage] = React.useState<string>(languages[0])
    const [active, setActive] = React.useState<boolean>(false)
    const containerRef = React.useRef<HTMLDivElement>()
    React.useEffect(() => {
      const handleClick = e => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
          setActive(false)
          setInactiveStyle()
        }
      }
      if (window && active) {
        window.addEventListener('click', handleClick)
      }
      if (!active) {
        setActive(false)
      }
      return () => window.removeEventListener('click', handleClick)
    }, [active, containerRef, setInactiveStyle])
    const handleActive = () => {
      setActiveStyle()
      setActive(true)
    }
    return (
      <div
        ref={containerRef}
        className={classNameWrapper}
        onClick={handleActive}
      >
        <LanguagesContainer>
          {languages.map(language => (
            <LanguageButton
              data-selected={currentLanguage === language}
              onClick={() => setLanguage(language)}
            >
              {language}
            </LanguageButton>
          ))}
        </LanguagesContainer>
        <Form value={value} onChange={onChange} language={currentLanguage}>
          <TextInput
            name="label"
            label="Label"
            placeholder="Ce qui va apparaitre dans les liens"
          />
          <ArrayInput
            name="sections"
            itemTitleComponent={() => 'coucou'}
            itemComponent={() => 'test'}
          />
        </Form>
      </div>
    )
  }
)

interface PageWidgetProps extends WidgetProps<{ languages: string[] }> {}

export default PageWidget
