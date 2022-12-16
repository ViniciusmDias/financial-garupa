import { configureStore } from '@reduxjs/toolkit'
import { render, screen } from '../../test/test-utils'
import { Form } from './'
import wallet from '../../redux/reducers/transactions'
import { Provider } from 'react-redux'

describe('Form', async () => {
  it('should render the Form', () => {
    const store = configureStore({ reducer: wallet })

    render(
      <Provider store={store}>
        <Form />
      </Provider>,
    )
    expect(screen.getByText('Nova transação')).toBeInTheDocument()
  })
})
