import { useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ContactCard } from "../components/ContactCard.jsx"

export const Home = () => {

  const {store, dispatch} = useGlobalReducer()
  const [inputValuesFromAddContact, setInputValuesFromAddContact] = useState({
	nameInput: "",
	emailInput: "",
	phoneInput: "",
	addressInput: "",
  })


	return (
		<div className="text-center mt-5">
			<ContactCard/>
		</div>
	);
}; 