import { SelectHTMLAttributes } from 'react'
import * as S from './styles'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  text: string
  htmlFor: string
  options: string[]
}

export function Select({ text, htmlFor, options, ...rest }: SelectProps) {
  return (
    <S.Label htmlFor={htmlFor}>
      <h5>{text}</h5>
      <select name={htmlFor} {...rest}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </S.Label>
  )
}
