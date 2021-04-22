import { FunctionComponent } from 'preact';
export interface AppContextValue {
    authenticated: boolean;
    lang: string;
    theme: string;
}
export interface AppContextProviderProps {
    initialValue?: AppContextValue;
}
declare const AppContextProvider: FunctionComponent<AppContextProviderProps>;
export default AppContextProvider;
