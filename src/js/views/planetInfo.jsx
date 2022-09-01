import React, { useState, useEffect, useContext } from "react";
import PropTypes, { element } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetInfo = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

    let planet = store.planets.find((element, index) => index == params.id)
	console.log(planet)


	return (
		<>
			<div className="container">
				<div className="col-12 fs-1 star-text">
					{planet?.name}
				</div>
				<div className="row">
					<div className="col-6 fs-3 star-text">
						Rotation Period: {planet?.rotation_period} <br/>
						Orbital Period: {planet?.orbital_period} <br/>
						Diameter: {planet?.diameter} km <br/>
						Gravity: {planet?.gravity} <br/>
					</div>
					<div className="col-6 fs-3 star-text">
						Terrain: {planet?.terrain} <br/>
						Surface Water: {planet?.surface_water} <br/>
						Population: {planet?.population} <br/>
					</div>
				</div>
			</div>
		</>
	);
}

PlanetInfo.propTypes = {
	match: PropTypes.object
};

