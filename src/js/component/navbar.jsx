import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import Starwars from "../../img/Star-Wars-Logo.png"


export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const navigate = useNavigate()
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="d-flex justify-content-between align-items-center w-100 m-2">
				<div>
					<img className="logo" onClick={() => navigate("/")} src={Starwars}/>
				</div>
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu">
						{store.favorites.map((favorite) => {
							return (
								<li onClick={() => actions.addFavorites(favorite)}><a className="dropdown-item" href="#">{favorite.name}</a></li>
							);
						})}

					</ul>
				</div>
			</div>
		</nav>
	);
};
