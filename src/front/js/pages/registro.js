import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/logoPng.png";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Registro = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSignup = async (e) => {
        e.preventDefault();
        await actions.signup(email, password, nombre, apellido, telefono);
        navigate('/');
    };



    return (
        <div className="d-flex align-items-center justify-content-center vh-100 py-4 bg-body-tertiary">
            <main className="form-signin" style={{ width: '500px', height: '400px' }}>
                <form className="h-100 d-flex flex-column justify-content-center" onSubmit={handleSignup}>
                    <img className="mb-4" src={rigoImageUrl} alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Registrar Usuario</h1>

                    <div className="form-floating">
                        <input type="text" className="form-control arriba" id="nombre" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        <label htmlFor="nombre">Nombre</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control abajo" id="apellido" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                        <label htmlFor="apellido">Apellido</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control arriba" id="telefono" placeholder="Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                        <label htmlFor="telefono">Telefono</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control arriba" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control abajo" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="btn btn-primary w-100 py-2 mt-2" type="submit" /*onClick={() => actions.signup(email, password, nombre, apellido, telefono)}*/>Guardar usuario </button>
                    <Link to="/" className="mt-5">
                        <span className="mt-5 mb-3 text-body-secondary">Volver a inicio</span>
                    </Link>

                </form>
            </main>
        </div>


    );
};