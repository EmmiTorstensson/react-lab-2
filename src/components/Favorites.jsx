import { useMemo } from "react"
import styled from "styled-components"

const Wrapper = styled.div `
	margin: 50px 0;
	background-color: #C2A83E;
	border-radius: 10px;
	padding: 20px;
	color: #ffffff;
`;

const StyledListItem = styled.li `
	list-style: none;
	display: flex;
	align-items: center;
	gap: 20px;
	justify-content: space-between;
	flex-direction: row;
	text-align: center;
	flex-grow: 1;

	+ li {
		margin-top: 10px;
	}
`;

const Button = styled.button `
	padding: 4px 8px;
	white-space: nowrap;

`;

export const Favorites = ({ favorites, deleteFavorite }) => {
	const sortedFavorites = useMemo(() => {
		return [...favorites].sort();
	}, [favorites]);

	return (
		<Wrapper>
			<h2>Favoriter</h2>	
			<ul>
				{sortedFavorites.map((favorite, index) => (
					<StyledListItem key={index}>{favorite}<Button onClick={() => deleteFavorite(index)}>Ta bort</Button></StyledListItem>	
				))}
			</ul>
		</Wrapper>
	)
}