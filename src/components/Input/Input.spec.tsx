import { render, screen, userEvent } from '../../test/test-utils'
import { Input } from './'

describe('Input', async () => {
  it('should render the input', () => {
    render(
      <Input
        name="name"
        type="text"
        error={undefined}
        placeholder="Nome da mercadoria"
        label="Nome da mercadoria"
        aria-label="Nome da mercadoria"
      />,
    )
    expect(screen.getByText('Nome da mercadoria')).toBeInTheDocument()
  })
  it('should change input value', async () => {
    render(
      <Input
        name="name"
        type="text"
        error={undefined}
        placeholder="Nome da mercadoria"
        label="Nome da mercadoria"
        aria-label="Nome da mercadoria"
      />,
    )

    screen.logTestingPlaygroundURL()

    const input = screen.getByLabelText('Nome da mercadoria')

    expect(input).toBeInTheDocument()
    await userEvent.type(input, '1337')
    expect(input).toHaveValue('1337')
  })
  it('should render the input with error', () => {
    render(
      <Input
        name="name"
        type="text"
        error="Por favor, digite o seu email"
        placeholder="Nome da mercadoria"
        label="Nome da mercadoria"
        aria-label="Nome da mercadoria"
      />,
    )
    expect(screen.getByLabelText('Nome da mercadoria')).toBeInTheDocument()
    expect(screen.getByRole('alert')).toHaveTextContent(
      'Por favor, digite o seu email',
    )
  })
})
