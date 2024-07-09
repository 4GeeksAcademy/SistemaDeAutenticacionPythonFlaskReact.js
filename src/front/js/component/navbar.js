import React, { useContext } from "react";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/logoPng.png";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";




export const Navbar = () => {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);


	const handleSession = (e) => {
		console.warn("mensaje al ejecutar la funcion de cierre de sesion")
		actions.logout();
		if (store.isAuthenticated == false) {
			navigate('/');
		}
	};



	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img className="mb-4" src={rigoImageUrl} alt="" width="130" height="80" />
				</Link>
				<div className="ml-auto">
					<form className="h-100 d-flex flex-column justify-content-center" onSubmit={() => handleSession()}>
						<button className="btn btn-primary">Cerrar Sesión</button>
					</form>
				</div>
			</div>
		</nav>
	);
};
