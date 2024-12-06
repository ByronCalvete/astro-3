import { useState } from 'preact/hooks'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h5 class="text-green-400 text-xl mb-4">Count: {count}</h5>
      <button class="border px-4 py-2 text-xl" onClick={() => setCount(count + 1)}>Increment</button>
      <button class="border px-4 py-2 text-xl" onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  )
}