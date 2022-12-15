import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 1.25rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-900']};

  h3 {
    display: none;

    @media (min-width: 768px) {
      display: block;
      text-align: center;
      margin-bottom: 1.25rem;
    }
  }

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

  @media (min-width: 768px) {
    border: 1px solid ${(props) => props.theme['gray-900']};
    border-radius: 0.25rem;
    padding: 1.25rem;

    button {
      align-self: flex-end;
      width: 12.5rem;
      margin-bottom: 0;
    }
  }

  @media (min-width: 1112px) {
    width: 40rem;
    max-height: 24rem;

    button {
      width: 100%;
      margin-bottom: 0;
      margin-top: 0.25rem;
    }
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;

    label {
      width: 25%;
    }

    label:nth-child(2) {
      width: 50%;
    }

    label + label {
      margin-left: 1.25rem;
    }
  }

  @media (min-width: 1112px) {
    flex-direction: column;

    label {
      width: 100%;
    }

    label:nth-child(2) {
      width: 100%;
    }

    label + label {
      margin-left: 0;
    }
  }
`
