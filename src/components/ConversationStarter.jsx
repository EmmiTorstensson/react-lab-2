import { getFact } from "../api/getFact"
import { useEffect, useState } from "react"

export const ConversationStarter = () => {
	const [starter, setStareter] = useState(null);
	const [favourites, setFavourites] = useState([]);

	const getConvoStarter = async () => {
		const fact = await getFact();
		setStareter(fact);
	};

	const saveAsFavourite = (fav) => {
		setFavourites(prevFavourites => [...prevFavourites, fav]);
	};
	console.log(favourites)

	useEffect(() => {
		getConvoStarter();
	}, []);

	return (
		<>
			<p>{starter}</p>
			<button onClick={() => saveAsFavourite({starter})}>Spara som favorit</button>
			<button onClick={getConvoStarter}>Ge mig en ny!</button>
		</>
	)
}