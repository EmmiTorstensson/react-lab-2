import { getFact } from "../api/getFact"
import { useEffect, useState } from "react"

export const ConversationStarter = () => {
	const [starter, setStareter] = useState(null)

	useEffect(() => {
		const getConvoStarter = async () => {
			const fact = await getFact();
			setStareter(fact);
		};
		getConvoStarter();
	}, []);

	return (
		<p>{starter}</p>
	)
}