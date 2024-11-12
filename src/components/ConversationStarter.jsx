import { getFact } from "../api/getFact"
import { useEffect, useState } from "react"
import { Favorites } from "./Favorites"

export const ConversationStarter = () => {
	const [starter, setStarter] = useState(null);
	const [favorites, setFavorites] = useState([]);

	const getConvoStarter = async () => {
		const fact = await getFact();
		setStarter(fact);
	};
	
	useEffect(() => {
		getConvoStarter();
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
				<p>{starter}</p>
				<button onClick={() => saveAsFavorites(starter)}>Spara som favorit</button>
				<button onClick={getConvoStarter}>Ge mig en ny!</button>
			</div>
			<div>
				<Favorites favorites={favorites} deleteFavorite={deleteFavorite} />
			</div>
		</>
	)
}