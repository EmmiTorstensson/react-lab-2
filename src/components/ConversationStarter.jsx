import { getFact } from "../api/getFact"
import { getJoke } from "../api/getJoke"
import { useEffect, useState } from "react"
import { Settings } from "./Settings"
import { Favorites } from "./Favorites"

export const ConversationStarter = () => {
	const [starterFact, setStarterFact] = useState(null);
	const [starterJoke, setStarterJoke] = useState(null);
	const [favorites, setFavorites] = useState([]);

	const getConvoStarter = async () => {
		const fact = await getFact();
		setStarterFact(fact);
	};
	
	const getJokeStarter = async () => {
		const joke = await getJoke();
		setStarterJoke(joke)
	};

	useEffect(() => {
		getConvoStarter();
		getJokeStarter();
	}, []);

	const saveAsFavorites = (fav) => {
		setFavorites(prevFavorites => [...prevFavorites, fav]);
	};

	const deleteFavorite = (indexDelete) => {
		setFavorites(prevFavorites => prevFavorites.filter((_, index) => index !== indexDelete));
	}

	return (
		<>	
			<div>
				<Settings />
			</div>
			<div>	
				<p>{starterFact}</p>
				<button onClick={() => saveAsFavorites(starterFact)}>Spara som favorit</button>
				<button onClick={getConvoStarter}>Ge mig en ny!</button>
			</div>
			<div>
				<Favorites favorites={favorites} deleteFavorite={deleteFavorite} />
			</div>
			<div>{starterJoke}</div>
		</>
	)
}