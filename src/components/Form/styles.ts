import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 1.25rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-900']};

  img {
    width: 2rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.625rem;
    background-color: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme.white};
    border-radius: 0.25rem;
    border: 1px solid ${(props) => props.theme['gray-100']};
    margin-bottom: 1.75rem;
  }

  hr {
    color: ${(props) => props.theme.black};
  }
`
