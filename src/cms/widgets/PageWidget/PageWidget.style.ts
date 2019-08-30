import styled from 'styled-components'

export const LanguagesContainer = styled.div`
  position: absolute;
  right: 0;
  top: -2px;
  user-select: none;
  border-radius: 0 5px 0;
  border-bottom: solid 2px rgb(223, 223, 227);
  border-left: solid 2px rgb(223, 223, 227);
`

export const LanguageButton = styled.button`
  background: none;
  border: none;
  border-right: solid 2px rgb(223, 223, 227);
  &:hover {
    cursor: pointer;
    background: rgba(223, 223, 227, 0.6);
  }
  &:last-child {
    border: none;
  }
  &[data-selected='true'] {
    background: rgba(223, 223, 227, 0.8);
  }
`
