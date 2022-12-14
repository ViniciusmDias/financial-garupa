import { Form } from '../../components/Form'
import { Header } from '../../components/Header'
import Table from '../../components/Table'
import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <Header />
      <Form />
      <h3>Extrato de transações</h3>
      <Table />
    </S.Container>
  )
}
