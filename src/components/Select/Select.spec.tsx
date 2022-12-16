import { render, screen, userEvent } from '../../test/test-utils'
import { Select } from './'

describe('Select', async () => {
  const selectOptions = ['Compra', 'Venda']

  it('should render the select', () => {
    render(
      <Select
        name="name"
        placeholder="Tipo de transação"
        label="Tipo de transação"
        options={selectOptions}
      />,
    )
    expect(screen.getByText('Tipo de transação')).toBeInTheDocument()
  })
  it('should change select value', async () => {
    render(
      <Select
        name="name"
        placeholder="Tipo de transação"
        label="Tipo de transação"
        options={selectOptions}
      />,
    )

    screen.logTestingPlaygroundURL()

    const select = screen.getByText('Tipo de transação')

    expect(select).toBeInTheDocument()

    await userEvent.click(screen.getByText('Tipo de transação'))

    await userEvent.click(screen.getByText('Venda'))

    expect(screen.getByText('Venda')).toBeInTheDocument()
  })
})
