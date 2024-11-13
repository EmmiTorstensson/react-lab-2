import { useSettings } from "../context/settingContext";
import styled from "styled-components";

const Select = styled.select `
	border-radius: 8px;
	border: 1px solid #243E36;
	padding: 0.6em 1.2em;
	font-size: 1em;
	font-weight: 500;
	font-family: inherit;
	background-color: #E0EEC6;
	color: #191919;
	min-width: 150px;
	text-align: center;
`;

export const Settings = () => {
	const {settings, updateSettings} = useSettings();

	const handleChange = (e) => {
		updateSettings(e.target.value)
	}

	return (
		<div>
			<h2>Choose starter type</h2>
			<Select value={settings} onChange={handleChange}>
				<option value="Random">Random</option>
				<option value="fact">Fact</option>
				<option value="joke">Joke</option>
			</Select>
		</div>
	)
}