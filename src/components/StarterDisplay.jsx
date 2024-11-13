import styled from "styled-components"

const Wrapper = styled.div `
	margin: 50px 0;
	background: #fff;
	border-radius: 10px;
	border: 1px solid #C2A83E;
	padding: 30px;
`;

const P = styled.p `
	padding: 0;
	margin: 0 0 15px;
`;

const Button = styled.button `
	border-radius: 8px;
	border: 1px solid transparent;
	padding: 0.6em 1.2em;
	font-size: 1em;
	font-weight: 500;
	font-family: inherit;
	background-color: #7CA982;
	cursor: pointer;
	transition: background-color 0.25s;


	&:hover {
		background-color: #65996c;

	}

	&:active {
		background-color: #4e7653;
	}

	+ button {
		margin-left: 10px;
	}
  `



export const StarterDisplay = ({randomStarter, saveAsFavorites, getData}) => {
	return (
		<Wrapper>	
			<P>{randomStarter}</P>
			<Button onClick={getData}>New one!</Button>
			<Button onClick={() => saveAsFavorites(randomStarter)}>Save as favorite</Button>
		</Wrapper>
	)
}