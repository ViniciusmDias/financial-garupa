import { configureStore } from '@reduxjs/toolkit'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { describe, it, expect } from 'vitest'
import wallet from '../../redux/reducers/transactions'
import { Home } from '.'

describe('Home', () => {
  it('should render the Home', () => {
    const store = configureStore({ reducer: wallet })

    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    )

    expect(screen.getByText(/Controle financeiro/i)).toBeInTheDocument()
  })
})
