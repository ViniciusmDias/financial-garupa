import * as S from './styles'
import { Select } from '../Select'
import { Input } from '../Input'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTransaction } from '../../redux/reducers/transactions'

export function Form() {
  const [type, setType] = useState('Compra')
  const [name, setName] = useState('')
  const [value, setValue] = useState('')
  const [isActive, setIsActive] = useState(false)

  const dispatch = useDispatch()

  const handleAddExpense = () => {
    const newExpense = {
      type,
      name,
      value,
    }

    dispatch(addTransaction(newExpense))
  }

  const activeButton = useCallback(() => {
    if (name && value !== '') {
      setIsActive(true)
    } else {
      setIsActive(true)
    }
  }, [name, value])

  useEffect(() => {
    activeButton()
  }, [activeButton])

  return (
    <S.Container>
      <h3>Nova transação</h3>
      <S.InputsContainer>
        <Select
          label="Tipo de transação"
          name="type"
          options={['Compra', 'Venda']}
          onChange={(e) => setType(e.target.value)}
        />
        <Input
          label="Nome da mercadoria"
          name="name"
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <Input
          type="number"
          label="Valor"
          name="value"
          onChange={(e) => {
            setValue(e.target.value)
          }}
        />
      </S.InputsContainer>

      <button type="button" disabled={!isActive} onClick={handleAddExpense}>
        Adicionar transação
      </button>
    </S.Container>
  )
}
