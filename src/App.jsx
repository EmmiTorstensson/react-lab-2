import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
		<div>
       		<h1>Välkommen till Snackstartaren!</h1>
		</div>
		<div>
			<button>Hit me!</button>
			<p>Klicka på knappen för att få en riktigt bra snackstartare att bryta isen med</p>
		</div>
		<div>
			<p>Här är ett roligt ämne framslumpat från ett api</p>
			<button>Spara som favorit</button>
			<button>Ge mig en ny!</button>
		</div>
    </>
  )
}

export default App
