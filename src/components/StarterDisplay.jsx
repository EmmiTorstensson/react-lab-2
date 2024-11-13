

export const StarterDisplay = ({randomStarter, saveAsFavorites, getData}) => {
	return (
		<div>	
			<p>{randomStarter}</p>
			<button onClick={() => saveAsFavorites(randomStarter)}>Save as favorite</button>
			<button onClick={getData}>Try again</button>
		</div>
	)
}