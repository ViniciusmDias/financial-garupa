import { Form } from '../../components/Form'
import { Header } from '../../components/Header'
import Table from '../../components/Table'
import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <Form />
        <Table />
      </S.Content>
      <S.Footer />
    </S.Container>
  )
}
