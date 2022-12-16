import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('should render the App', () => {
    render(<App />)
    expect(screen.getByText(/Controle financeiro/i)).toBeInTheDocument()
  })
})
