import './App.css'
import { ConversationStarter } from './components/ConversationStarter'
import { SettingsProvider } from './context/settingContext'


function App() {

  return (

	<SettingsProvider>
		<div>
       		<h1>Welcome to the conversation starter!</h1>
			<p>Don't know what to talk about? Let us help!</p>
		</div>
		<div>
			<ConversationStarter />
		</div>
	</SettingsProvider>
  )
}

export default App
