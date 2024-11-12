import { useMemo } from "react"

export const Favorites = ({ favorites }) => {
	const sortedFavorites = useMemo(() => {
		return [...favorites].sort();
	}, [favorites]);

	return (
		<div>
			<h2>Favoriter</h2>	
			<ul>
				{sortedFavorites.map((favorite, index) => (
					<li key={index}>{favorite}<button>Ta bort</button></li>	
				))}
			</ul>
		</div>
	)
}