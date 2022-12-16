import { configureStore } from '@reduxjs/toolkit'
import { render, screen } from '../../test/test-utils'
import { Table } from './'
import wallet from '../../redux/reducers/transactions'
import { Provider } from 'react-redux'

describe('Table', async () => {
  it('should render the Table', () => {
    const store = configureStore({ reducer: wallet })

    render(
      <Provider store={store}>
        <Table />
      </Provider>,
    )

    expect(screen.getByText('Total')).toBeInTheDocument()
  })
})
