import styled from 'styled-components'

export const Container = styled.section`
  display: block;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 91vh;

  @media (min-width: 768px) {
  }

  @media (min-width: 1112px) {
    flex-direction: row;
    height: 89vh;
    max-width: 1110px;
    margin: 0 auto;
  }
`

export const Footer = styled.hr`
  align-self: flex-end;
  height: 1vh;
  background-color: ${(props) => props.theme['gray-100']};
`
