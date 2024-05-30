import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/logoPng.png";
import "../../styles/home.css";

export const Registro = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="d-flex align-items-center justify-content-center vh-100 py-4 bg-body-tertiary">
            <main className="form-signin" style={{ width: '500px', height: '400px' }}>
                <form className="h-100 d-flex flex-column justify-content-center">
                    <img className="mb-4" src={rigoImageUrl} alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Registrar Usuario</h1>

                    <div className="form-floating">
                        <input type="text" className="form-control arriba" id="nombre" placeholder="Nombre" />
                        <label htmlFor="nombre">Nombre</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control abajo" id="apellido" placeholder="Apellido" />
                        <label htmlFor="apellido">Apellido</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control arriba" id="telefono" placeholder="Telefono" />
                        <label htmlFor="telefono">Telefono</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control arriba" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control abajo" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="btn btn-primary w-100 py-2 mt-2" type="submit">Guardar usuario </button>
                    <Link to="/" className="mt-5">
                        <a href="" className="mt-5 mb-3 text-body-secondary">Volver a inicio</a>
                    </Link>

                </form>
            </main>
        </div>


    );
};