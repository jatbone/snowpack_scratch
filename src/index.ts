import App from './components/App.svelte'

import './assets/styles/main.scss'

const { SNOWPACK_PUBLIC_TEST } = import.meta.env
console.log('this is env var test: ', SNOWPACK_PUBLIC_TEST)

const app = new App({
  target: <HTMLElement>document.getElementById('app')!,
})

export default app
