import React from 'react'

import * as S from './styles'

interface InputProps {
  text: string
  htmlFor: string
}

export function Input({ text, htmlFor, ...rest }: InputProps) {
  return (
    <S.Label htmlFor={htmlFor}>
      <h5>{text}</h5>
      <input name={htmlFor} {...rest} />
    </S.Label>
  )
}