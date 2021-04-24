import Router, { RouteProps } from 'preact-router'
import AsyncRoute from 'preact-async-route'
import { h } from 'preact'
import type { FunctionComponent } from 'preact'

import AppContextProvider from './context/AppContext'

import Counter from 'components/Counter'

/** demo header nav+search */
const Home: FunctionComponent<{
  matches?: any
  path?: string
  url?: string
}> = ({ matches, path, url }) => {
  return (
    <div>
      <Counter />
    </div>
  )
}

/** demo header nav+search */
const Header = () => (
  <header>
    <nav data-testid="nav">
      <a href="/">Home</a>
      <a href="/home">Home2</a>
    </nav>
  </header>
)

/** fall-back route (handles unroutable URLs) */
const Error: FunctionComponent<{
  type?: string
  url?: string
}> = ({ type, url }) => (
  <section class="error">
    <h2>Error {type}</h2>
    <p>It looks like we hit a snag.</p>
    <pre>{url}</pre>
  </section>
)

const App: FunctionComponent = () => {
  return (
    <AppContextProvider>
      <Header />
      <Router>
        <Home path="/" />
        <Home path="/home" />
        <Error type="404" default />
      </Router>
    </AppContextProvider>
  )
}

export default App
