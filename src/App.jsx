import { useState } from 'react'
import './App.css'
import { ConversationStarter } from './components/ConversationStarter'

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
			<ConversationStarter />
		</div>
		<div>
			<p>Favoriter</p>
			<ul>
				<li>Fovorit 1 <button>Ta bort</button></li>
				<li>Fovorit 2 <button>Ta bort</button></li>
			</ul>
		</div>
    </>
  )
}

export default App
