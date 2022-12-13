import * as S from './styles'
import { Select } from '../Select'
import { Input } from '../Input'

export function Form() {
  return (
    <S.Container>
      <Select text="Tipo de transação" htmlFor="type" options={[]} />
      <Input text="Nome da mercadoria" htmlFor="name" />
      <Input text="Valor" htmlFor="value" />

      <button type="button">Adicionar transação</button>
    </S.Container>
  )
}
