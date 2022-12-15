import styled from 'styled-components'

export const Container = styled.header`
  background-color: ${(props) => props.theme['gray-500']};
  display: flex;
  height: 8vh;
  flex-direction: column;

  @media (min-width: 1112px) {
    height: 10vh;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 1.25rem;
  position: relative;

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

  @media (min-width: 1112px) {
    max-width: 1110px;
    margin: 0 auto;

    h2 {
      margin: 0 auto 0 1.25rem;
      justify-self: flex-start;
    }
  }
`

export const Menu = styled.ul`
  bottom: 0;
  right: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 2;
  background-color: ${(props) => props.theme['gray-100']};
  height: 100vh;
  width: 85vw;
  align-self: flex-end;
  list-style-type: none;
  transform: translate(100%, 0);
  transition: 0.5s ease-in-out;

  hr {
    display: none;
  }

  &.active {
    transform: translate(0%, 0);
  }

  li {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 0.5rem;

    a {
      width: 100%;
      text-decoration: none;
      font-weight: 700;
      text-align: right;
      font-size: 1rem;
      line-height: 1.25rem;
      color: ${(props) => props.theme.white};
      padding: 0.5rem 1.35rem;
      transition: all 0.2s ease-in-out;

      :hover {
        background-color: ${(props) => props.theme['gray-900']};
      }
    }

    button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background-color: transparent;
      border: none;
      padding: 1.35rem;

      :hover {
        background-color: ${(props) => props.theme['gray-900']};
      }
    }
  }

  @media (min-width: 767px) {
    width: 16rem;
    transform: translate(100%, 0);
  }

  @media (min-width: 1111px) {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 2.5rem;
    width: auto;
    margin: 1.25rem 0;
    background-color: ${(props) => props.theme.white};
    transform: none;
    bottom: unset;

    li:first-child {
      display: none;
    }

    li {
      margin-bottom: 0;

      a {
        color: ${(props) => props.theme['gray-100']};

        :hover {
          background-color: unset;
          opacity: 0.6;
        }
      }

      button {
        padding: 0;
      }
    }

    hr {
      display: flex;
      width: 1px;
      height: 1.25rem;
      background-color: ${(props) => props.theme['gray-900']};
    }
  }
`
