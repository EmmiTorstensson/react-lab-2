import { getFact } from "../api/getFact"
import { getJoke } from "../api/getJoke"
import { useEffect, useState, useCallback } from "react"
import { Settings } from "./Settings"
import { Favorites } from "./Favorites"
import { useSettings } from "../context/settingContext"

export const ConversationStarter = () => {
	const [randomStarter, setRandomStarter] = useState(null);
	const [favorites, setFavorites] = useState([]);
	const { settings } = useSettings();

	const getData = useCallback(async () => {
		const [fact, joke] = await Promise.all([getFact(), getJoke()])

		if( settings === "fact" ) {
			setRandomStarter(fact)
		} else if ( settings === "joke" ) {
			setRandomStarter(joke)
		} else {
			setRandomStarter(Math.random() < 0.5 ? fact : joke);
		}
	}, [settings])

	useEffect(() => {
		getData();
	}, [getData]);

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
				<button onClick={() => saveAsFavorites(randomStarter)}>Save as favorite</button>
				<button onClick={getData}>Try again</button>
			</div>
			<div>
				<Favorites favorites={favorites} deleteFavorite={deleteFavorite} />
			</div>
			{/* <div>{starterJoke}</div> */}
		</>
	)
}