import { createContext, useContext, useState } from "react";

const SettingsContext = createContext(undefined);

export const useSettings = () => {
	const context = useContext(SettingsContext)

	return context
}

export const SettingsProvider = ({ children }) => {
	const [settings, setSettings] = useState("Random");

	const updateSettings = (newSetting) => {
		setSettings(newSetting)
	}

	return (
		<>
			<SettingsContext.Provider value={{settings, updateSettings}}>
			{ children }
			</SettingsContext.Provider>
		</>
	)
}