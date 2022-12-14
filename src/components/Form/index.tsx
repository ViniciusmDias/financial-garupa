import * as S from './styles'
import { Select } from '../Select'
import { Input } from '../Input'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTransaction } from '../../redux/reducers/transactions'

export function Form() {
  const [type, setType] = useState('Compra')
  const [name, setName] = useState('')
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const handleAddExpense = () => {
    const newExpense = {
      type,
      name,
      value,
    }

    dispatch(addTransaction(newExpense))
  }

  return (
    <S.Container>
      <Select
        text="Tipo de transação"
        htmlFor="type"
        options={['Compra', 'Venda']}
        onChange={(e) => setType(e.target.value)}
      />
      <Input
        text="Nome da mercadoria"
        htmlFor="name"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="number"
        text="Valor"
        htmlFor="value"
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="button" onClick={handleAddExpense}>
        Adicionar transação
      </button>
    </S.Container>
  )
}
