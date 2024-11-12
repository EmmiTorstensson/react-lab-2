import './App.css'
import { ConversationStarter } from './components/ConversationStarter'
import { SettingsProvider } from './context/settingContext'

function App() {

  return (

	<SettingsProvider>
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
	</SettingsProvider>
  )
}

export default App
