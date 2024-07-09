import React, { Component } from "react";
import "../../styles/footer.css"

export const Footer = () => (
	<footer className="footer">
        <div className="footer-container">
            <div className="footer-section">
                <h2>Sobre Nosotros</h2>
                <p>En Mascotas Felices, ofrecemos una amplia variedad de productos y servicios para el bienestar de tu mejor amigo. ¡Visítanos y descubre cómo podemos ayudarte a cuidar de tu mascota!</p>
            </div>
            <div className="footer-section">
                <h2>Enlaces Útiles</h2>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h2>Síguenos</h2>
                <ul className="social-media">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">YouTube</a></li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2024 Delicias en la Cocina. Todos los derechos reservados.</p>
        </div>
    </footer>
);
