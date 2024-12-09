//En-tête contenant le logo, le titre, etc.
import React from "react";
import logo from '../assets/logo.png'


const styles = { 
    logoContainer : { 
        padding: '10px 30px',        // Ajuste le padding pour un bon espacement
        justifyContent: 'space-between',  // Laisse de l'espace entre le logo et le titre
        height: '60px',               // Hauteur de la navbar
    },

    logo : {
        width: '120px',               // Ajuste la taille du logo si nécessaire
        height: 'auto',              // Conserve les proportions du logo
    },

    title : {
        color: 'blue',
        fontSize: '24px',
        margin: '0',                 // Enlève les marges par défaut
    },
};




function Header(){
    return(
        <div style={styles.logoContainer}>
            <img style={styles.logo} src={logo} alt="logo"/>
            <h3 style={styles.title}>Boutique de Chaussure</h3>
        </div>
    )
}
export default Header