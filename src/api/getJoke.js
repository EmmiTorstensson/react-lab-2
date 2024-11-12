import axios from "axios"

export const getJoke = async () => {
	const response = await axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist&type=single")
	const joke = response.data.joke;
	return joke;
};