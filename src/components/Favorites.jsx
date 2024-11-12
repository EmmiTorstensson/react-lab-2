import { useMemo } from "react"

export const Favorites = ({ favorites, deleteFavorite }) => {
	const sortedFavorites = useMemo(() => {
		return [...favorites].sort();
	}, [favorites]);

	return (
		<div>
			<h2>Favoriter</h2>	
			<ul>
				{sortedFavorites.map((favorite, index) => (
					<li key={index}>{favorite}<button onClick={() => deleteFavorite(index)}>Ta bort</button></li>	
				))}
			</ul>
		</div>
	)
}