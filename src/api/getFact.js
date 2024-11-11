import axios from "axios";

export const getFact = async () => {
	const response = await axios.get("https://uselessfacts.jsph.pl/random.json?language=en");
	const data = response.data.text;
	return data;
}