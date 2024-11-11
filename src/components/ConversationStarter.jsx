import { getFact } from "../api/getFact"
// import { useState } from "react"

export const ConversationStarter = () => {
	// const [fact, setFact] = useState("")

	const getConvoStarter = async () => {
		const fact = await getFact();
		console.log(fact)
	};

	getConvoStarter();
	
	return (
		<p>hej</p>
	)
}