import { h, createContext, FunctionComponent } from 'preact'

export interface AppContextValue {
  authenticated: boolean
  lang: string
  theme: string
}

const defaultContext: AppContextValue = {
  authenticated: true,
  lang: 'en',
  theme: 'light',
}

const AppContext = createContext(defaultContext)

export interface AppContextProviderProps {
  initialValue?: AppContextValue
}

const AppContextProvider: FunctionComponent<AppContextProviderProps> = ({
  initialValue,
  children,
}) => {
  return (
    <AppContext.Provider value={{ ...defaultContext, ...initialValue }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
