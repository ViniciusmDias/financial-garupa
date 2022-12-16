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
  const { transactions } = useSelector((state: Wallet) => state.wallet || [])

  const dispatch = useDispatch()

  const totalValueTransactions = useMemo(() => {
    return sumTransactions(transactions)
  }, [transactions])

  const profit = useMemo(() => {
    return transformProfit(totalValueTransactions)
  }, [totalValueTransactions])

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
      <h3>Extrato de transações</h3>
      <S.Content>
        <S.ListHeader>
          <S.Row>
            <th></th>
            <th>Mercadoria</th>
            <th>Valor</th>
          </S.Row>
        </S.ListHeader>
        {!loading && (
          <S.ListBody>
            {transactions?.map((transaction) => {
              return (
                <S.Row key={transaction.id}>
                  <td>{transformType(transaction.type)}</td>
                  <td>{transaction.name}</td>
                  <td>R$ {Number(transaction.value).toFixed(2)}</td>
                </S.Row>
              )
            })}
          </S.ListBody>
        )}
        <S.ListFooter>
          <S.Row>
            <td></td>
            <td>Total</td>
            <td>
              {totalValueTransactions
                ? `R$ ${totalValueTransactions?.toFixed(2)}
                `
                : `R$ ${0}`}
              <span>{profit}</span>
            </td>
          </S.Row>
        </S.ListFooter>
      </S.Content>
    </S.Container>
  )
}

export default Table
