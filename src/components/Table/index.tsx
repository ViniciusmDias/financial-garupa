import * as S from './styles'

export function Table() {
  return (
    <S.Container>
      <h3>Extrato de transações</h3>
      <S.ListHeader>
        <S.Row>
          <th></th>
          <th>Mercadoria</th>
          <th>Valor</th>
        </S.Row>
      </S.ListHeader>
      <S.ListBody>
        <S.Row>
          <td>+</td>
          <td>Lorem ipsum dolor sit amet consectetur</td>
          <td>R$ 99,99 </td>
        </S.Row>
        <S.Row>
          <td>-</td>
          <td>Quis nostrud exercitation</td>
          <td>R$ 99,99 </td>
        </S.Row>
        <S.Row>
          <td>+</td>
          <td>Lorem ipsum</td>
          <td>R$ 9,99 </td>
        </S.Row>
      </S.ListBody>
      <S.ListFooter>
        <S.Row>
          <td></td>
          <td>Total</td>
          <td>
            R$ 12.909,99
            <span>[Lucro]</span>
          </td>
        </S.Row>
      </S.ListFooter>
    </S.Container>
  )
}

export default Table
