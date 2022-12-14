export const transformType = (type: `Compra` | `Venda`) => {
  switch (type) {
    case `Venda`:
      return '-'
    case 'Compra':
      return '+'

    default:
      return '+'
  }
}
