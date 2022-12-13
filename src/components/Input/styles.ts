import styled from 'styled-components'

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  input {
    border: 1px solid ${(props) => props.theme['gray-900']};
    border-radius: 0.25rem;
    background-color: transparent;
    padding: 0.5rem 0.75rem;
    margin-bottom: 1.25rem;
  }
`
