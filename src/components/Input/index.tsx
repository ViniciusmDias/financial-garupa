import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

import * as S from './styles'

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string
  name: string
  error?: string | undefined
}

export function Input({ label, name, error, ...rest }: InputProps) {
  return (
    <>
      <S.Label htmlFor={name}>
        <h5>{label}</h5>
        <input name={name} {...rest} />
      </S.Label>
      {error ? <span role="alert">{error}</span> : null}
    </>
  )
}
