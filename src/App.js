import './App.css'
import Home from './components/Home/Home'
import { Provider as ReduxProvider } from 'react-redux'
import DarkThemeProvider from './redux/DarkThemeProvider'
import store from './redux/store'
import GlobalStyle from './utils/GlobalStyles'

function App() {
  return (
    <ReduxProvider store={store}>
      <DarkThemeProvider>
        <GlobalStyle />
        <Home />
      </DarkThemeProvider>
    </ReduxProvider>
  )
}

export default App
