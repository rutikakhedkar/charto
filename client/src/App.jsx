import useCountStore from "./store/useCountStore"

function App() {
  const {count,name,setCount,setName,resetAll }=useCountStore();

  return (
    <>
    <div>
      <p>Count: {count}</p>
      <p>Name: {name}</p>

      {/* Set new values */}
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setName('Alice')}>Set Name to Alice</button>
      <button onClick={() => resetAll()}> Reset all </button>

    </div>

  </>
  )
}

export default App
