import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.75rem;
  background-color: ${(props) => props.theme['gray-500']};
  padding: 0 1.25rem;

  img {
    width: 2rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem;
    background-color: transparent;
    border: none;

    img {
      width: 1.25rem;
    }
  }
`
