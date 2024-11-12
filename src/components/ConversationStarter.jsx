import { getFact } from "../api/getFact"
import { getJoke } from "../api/getJoke"
import { useEffect, useState, useCallback, useReducer } from "react"
import { useSettings } from "../context/settingContext"
import { Settings } from "./Settings"
import { Favorites } from "./Favorites"
import { History } from "./History"

const initialState = {
	randomStarter: null,
	history: []
}

function reducer(state, action) {
	switch (action.type) {
		case 'ADD_TO_HISTORY':
			return {
				...state,
				history: state.randomStarter ? [...state.history, state.randomStarter] : state.history,
				randomStarter: action.payload
			};
		case 'SET_RANDOM_STARTER':
			return {
				...state,
				randomStarter: action.payload
			};
		default:
			return state;
	}

}

export const ConversationStarter = () => {
	// const [randomStarter, setRandomStarter] = useState(null);
	const [favorites, setFavorites] = useState([]);
	// const [history, setHistory] = useState([]);
	const { settings } = useSettings();
	const [state, dispatch] = useReducer(reducer, initialState)

	const getData = useCallback(async () => {
		const [fact, joke] = await Promise.all([getFact(), getJoke()])

		const newStarter = settings === "fact" ? fact : settings === "joke" ? joke : Math.random() < 0.5 ? fact : joke ? fact : joke;

		dispatch({ type: "ADD_TO_HISTORY", payload: newStarter });
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
				<p>{state.randomStarter}</p>
				<button onClick={() => saveAsFavorites(randomStarter)}>Save as favorite</button>
				<button onClick={getData}>Try again</button>
			</div>
			<div>
				<Favorites favorites={favorites} deleteFavorite={deleteFavorite} />
			</div>
			<History history={state.history}/>
			{/* <div>{starterJoke}</div> */}
		</>
	)
}