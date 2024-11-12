import { getFact } from "../api/getFact"
import { getJoke } from "../api/getJoke"
import { useEffect, useState } from "react"
import { Settings } from "./Settings"
import { Favorites } from "./Favorites"

export const ConversationStarter = () => {
	const [randomStarter, setRandomStarter] = useState(null);
	const [favorites, setFavorites] = useState([]);

	const getData = async () => {
		const [fact, joke] = await Promise.all([getFact(), getJoke()])

		const randomStarter = Math.random() < 0.5 ? fact : joke;
		console.log(randomStarter)
		setRandomStarter(randomStarter)
	}

	useEffect(() => {
		getData();
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
				<p>{randomStarter}</p>
				<button onClick={() => saveAsFavorites(randomStarter)}>Spara som favorit</button>
				<button onClick={getData}>Ge mig en ny!</button>
			</div>
			<div>
				<Favorites favorites={favorites} deleteFavorite={deleteFavorite} />
			</div>
			{/* <div>{starterJoke}</div> */}
		</>
	)
}