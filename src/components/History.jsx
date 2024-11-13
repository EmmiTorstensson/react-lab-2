import styled from "styled-components"

const Wrapper = styled.div `
	margin: 50px 0;
	background-color: #243E36;
	border-radius: 10px;
	padding: 20px;
	color: #ffffff;
`;

const List = styled.ul `
	padding: 0;
`;

const StyledListItem = styled.li `
	list-style: none;
	padding: 5px 10px;
	font-size: 12px;

	+ li {
		margin-top: 5px;
	}
`;

export const History = ({history, index}) => {
	return (
		<Wrapper>
			<h2>History</h2>
			<List>
				{history.map((item, index) => (
					<StyledListItem key={index}>{item}</StyledListItem>
				))}
			</List>
		</Wrapper>
	)
}