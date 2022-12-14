import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import store from './redux/store'

import { Home } from './pages/Home'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </Provider>
  )
}
