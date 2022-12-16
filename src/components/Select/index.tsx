import { DetailedHTMLProps, SelectHTMLAttributes } from 'react'
import * as S from './styles'

interface SelectProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  label: string
  name: string
  options: string[]
}

export function Select({ label, name, options, ...rest }: SelectProps) {
  return (
    <S.Label htmlFor={name}>
      <h5>{label}</h5>
      <select name={name} {...rest}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </S.Label>
  )
}
