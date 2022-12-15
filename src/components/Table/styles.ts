import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.25rem;
  width: 100%;

  h3 {
    text-align: center;
    margin-top: 0.25rem;
    padding-top: 1.25rem;
  }

  @media (min-width: 1112px) {
    padding-right: 0;
    padding-left: 0;
  }
`

export const Content = styled.table`
  display: flex;
  flex-direction: column;
`

export const ListHeader = styled.thead`
  th {
    padding: 0.5rem 0;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.75rem;
    color: ${(props) => props.theme.black};
  }

  th:first-child {
    width: 2rem;
  }
  th:last-child {
    margin-left: auto;
    padding-right: 1.5rem;
  }
`

export const Row = styled.tr`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid ${(props) => props.theme['gray-900']};

  td:first-child {
    width: 2rem;
  }
  td:last-child {
    margin-left: auto;
    padding: 0.5rem 1rem;
  }

  td {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 60%;
    min-height: 2rem;
    padding: 0.5rem 0;

    & + td {
      border-left: 1px solid transparent;
    }
  }
`

export const ListBody = styled.tbody`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.125rem;
  overflow: auto;
  max-height: 21vh;

  @media (min-width: 768px) {
    height: auto;
    max-height: 40vh;
  }
`

export const ListFooter = styled.tfoot`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${(props) => props.theme['gray-900']};

  ${Row} {
    border-bottom: none;
  }

  td {
    font-weight: 700;
  }

  td:last-child {
    justify-content: flex-end;
  }
`
