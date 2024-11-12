import { useSettings } from "../context/settingContext";

export const Settings = () => {
	const {settings, updateSettings} = useSettings();

	const handleChange = (e) => {
		updateSettings(e.target.value)
	}

	return (
		<div>
			<h2>Choose starter type</h2>
			<select value={settings} onChange={handleChange}>
				<option value="Random">Random</option>
				<option value="fact">Fact</option>
				<option value="joke">Joke</option>
			</select>
		</div>
	)
}