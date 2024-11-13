import { useMemo } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons'; // Import the "x" icon


const Wrapper = styled.div `
	margin: 50px 0;
	background-color: #C2A83E;
	border-radius: 10px;
	padding: 20px;
	color: #ffffff;
`;
const List = styled.ul `
	padding: 0;
`;

const StyledListItem = styled.li `
	list-style: none;

	+ li {
		padding-top: 10px;
		position: relative;
	
	}
`;

const Button = styled.button `
	background-color: #88472b;
	border-radius: 100%;
	height: 20px;
	width: 20px;
	border: none;
	font-size: 8px;
	margin-left: 10px;
	display: inline-flex;
    align-items: center;
    justify-content: center;
	cursor: pointer;
	transition: background-color .2s ease;

	&:hover {
		background-color: #4e2919;
	}
`;

export const Favorites = ({ favorites, deleteFavorite }) => {
	const sortedFavorites = useMemo(() => {
		return [...favorites].sort();
	}, [favorites]);

	return (
		<Wrapper>
			<h2>Favorites</h2>	
			<List>
				{sortedFavorites.map((favorite, index) => (
					<StyledListItem key={index}>
						<span>
							{favorite}
							<Button onClick={() => deleteFavorite(index)}><FontAwesomeIcon icon={faX} /></Button>
						</span>
					</StyledListItem>	
				))}
			</List>
		</Wrapper>
	)
}