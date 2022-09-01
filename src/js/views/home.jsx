import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context)
	return (
		<>
			<div className="d-flex flex-column justify-content-center align-items-center ">
				<div className="container carrusel">
					{store.characters.map((character, index) => {
						return (
								<div className="card col-3" key={`${index}${character.name}`}>
									{/* <img src="..." className="card-img-top" alt="..."/> */}
									<div className="card-body">
										<h5 className="card-title">{character.name}</h5>
										<div className="card-text">
											<p>Height: {character.height}</p>
											<p>Mass: {character.mass}</p>
											<p>Gender: {character.gender}</p>
										</div>
										<div className="d-flex justify-content-between mx-1">
											<Link to={`/character/${index}`} className="btn btn-primary">Learn more!</Link>
											<button className="btn btn-warning" onClick={() => actions.addFavorites(character)}><i className={store.favorites.includes(character)?"fa-solid fa-star":"fa-regular fa-star"}></i></button>
										</div>
									</div>
								</div>
						);
					})}
				</div>
				<div className="container carrusel mt-5 mb-5">
					{store.planets.map((planet, index) => {
						return (
								<div className="card col-3" key={`${index}${planet.name}`}>
									{/* <img src="..." className="card-img-top" alt="..."/> */}
									<div className="card-body">
										<h5 className="card-title">{planet.name}</h5>
										<div className="card-text">
											<p>Population: {planet.population}</p>
											<p>Terrain: {planet.population}</p>
										</div>
										<div className="d-flex justify-content-between -mx-1">
											<Link to={`/planet/${index}`} className="btn btn-primary">Learn more!</Link>
											<button className="btn btn-warning" onClick={() => actions.addFavorites(planet)}><i className={store.favorites.includes(planet)?"fa-solid fa-star":"fa-regular fa-star"}></i></button>
										</div>
									</div>
								</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
