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
	margin: 15px;
	font-size: 20px;
	margin-top: 0;
	margin-bottom: 25px;
	font-weight: 700;
`;
const ButtonWrapper = styled.div `
	display: flex;
	gap: 10px;

	@media (max-width: 768px) {
		flex-direction: column;
  }

`;

const Button = styled.button `
	flex-grow: 1;
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
  `



export const StarterDisplay = ({randomStarter, saveAsFavorites, getData}) => {
	return (
		<Wrapper>	
			<P>{randomStarter}</P>
			<ButtonWrapper>
				<Button onClick={getData}>New one</Button>
				<Button onClick={() => saveAsFavorites(randomStarter)}>Save as favorite</Button>
			</ButtonWrapper>
		</Wrapper>
	)
}