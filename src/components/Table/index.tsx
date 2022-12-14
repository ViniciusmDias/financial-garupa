import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Wallet } from '../../@types'
import { fetchTransactions } from '../../redux/reducers/transactions'
import { sumTransactions } from '../../utils/sumTransactions'
import { transformProfit } from '../../utils/transformProfit'
import { transformType } from '../../utils/transformType'
import * as S from './styles'

export function Table() {
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  const allTransactions = useSelector(
    (state: Wallet) => state.wallet.transactions,
  )

  const totalValueTransactions = useMemo(
    () => sumTransactions(allTransactions),
    [allTransactions],
  )

  const profit = useMemo(
    () => transformProfit(totalValueTransactions),
    [totalValueTransactions],
  )

  const setTableInfo = useCallback(() => {
    setLoading(true)

    try {
      dispatch(fetchTransactions())
    } catch (error) {
      console.error(error)
    }

    setLoading(false)
  }, [dispatch])

  useEffect(() => {
    setTableInfo()
  }, [setTableInfo])

  return (
    <S.Container>
      <S.ListHeader>
        <S.Row>
          <th></th>
          <th>Mercadoria</th>
          <th>Valor</th>
        </S.Row>
      </S.ListHeader>
      <S.ListBody>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          allTransactions.map((transaction) => {
            return (
              <S.Row key={transaction.id}>
                <td>{transformType(transaction.type)}</td>
                <td>{transaction.name}</td>
                <td>R$ {Number(transaction.value).toFixed(2)}</td>
              </S.Row>
            )
          })
        )}
      </S.ListBody>
      <S.ListFooter>
        <S.Row>
          <td></td>
          <td>Total</td>
          <td>
            R$ {totalValueTransactions.toFixed(2)}
            <span>{profit}</span>
          </td>
        </S.Row>
      </S.ListFooter>
    </S.Container>
  )
}

export default Table
