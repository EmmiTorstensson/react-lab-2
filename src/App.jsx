import './App.css'
import { ConversationStarter } from './components/ConversationStarter'

function App() {

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
    </>
  )
}

export default App
