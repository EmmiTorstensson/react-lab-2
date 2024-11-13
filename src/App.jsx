import './App.css'
import { ConversationStarter } from './components/ConversationStarter'
import { SettingsProvider } from './context/settingContext'

function App() {

  return (

	<SettingsProvider>
		<div>
       		<h1>Welcome to the conversation starter!</h1>
			<p>Click on the button to get the conversation going</p>
		</div>
		<div>
			<ConversationStarter />
		</div>
	</SettingsProvider>
  )
}

export default App
