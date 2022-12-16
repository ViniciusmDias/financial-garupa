import { render, screen } from '../../test/test-utils'
import { Header } from './'

describe('Header', async () => {
  it('should render the Header', () => {
    render(<Header />)
    expect(screen.getByText('Controle financeiro')).toBeInTheDocument()
  })
})
