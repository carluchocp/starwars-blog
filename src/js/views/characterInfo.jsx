import React, { useState, useEffect, useContext } from "react";
import PropTypes, { element } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterInfo = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

    let character = store.characters.find((element, index) => index == params.id)
	console.log(character)


	return (
		<>
		<div className="container">
			<div className="col-12 fs-1 star-text">
				{character?.name}
			</div>
			<div className="row">
				<div className="col-6 fs-3 star-text">
					Birth Year: {character?.birth_year} <br/>
					Gender: {character?.gender} <br/>
					Height: {character?.height} cm <br/>
					Weight: {character?.mass} kg <br/>
				</div>
				<div className="col-6 fs-3 star-text">
					Hair: {character?.hair_color} <br/>
					Skin Color: {character?.skin_color} <br/>
					Eye Color: {character?.eye_color} <br/>
				</div>
			</div>
		</div>
		</>
	);
};

CharacterInfo.propTypes = {
	match: PropTypes.object
};


