import { h } from 'preact'
import { useState } from 'preact/hooks'

const Counter = () => {
  const [count, setCount] = useState(0)
  const onBtnClick = (e: MouseEvent): void => {
    e.preventDefault()
    setCount(count + 1)
  }
  return (
    <div style={{ color: 'white' }}>
      <div>value : {count}</div>
      <button onClick={onBtnClick}>Click</button>
    </div>
  )
}

export default Counter
