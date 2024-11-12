export const History = ({history, index}) => {
	return (
		<div>
			<h2>History</h2>
			<ul>
				{history.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	)
}