import { h } from 'preact'
import type { FunctionComponent } from 'preact'

import AppContextProvider from './context/AppContext'

import Counter from 'components/Counter'

const App: FunctionComponent = () => {
  return (
    <AppContextProvider>
      <Counter />
    </AppContextProvider>
  )
}

export default App
