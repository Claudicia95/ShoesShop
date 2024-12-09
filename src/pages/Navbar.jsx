import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

function Navbar() {
  const styles = {
    navbarContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'LightBlue', 
      padding: '20px 0',
    },
    logoTitleContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      padding: '20px 0',
    },
    logo: {
      width: '50px',
      height: '50px',
    },
    title: {
      color: '#333', // Couleur du texte du titre
      fontSize: '24px',
      margin: '0',
    },
    nav: {
      width: '100%',
    },
    navList: {
      display: 'flex',
      justifyContent: 'center',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
    },
    navItem: {
      margin: '0 20px',
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '18px',
      fontWeight: 'bold',
      transition: 'color 0.3s ease',
    },
    navLinkHover: {
      color: '#ff6347', // Couleur au survol
    },
    navLinkActive: {
      color: '#ffa500', // Couleur au clic
    },
  };

  return (
    <div style={styles.navbarContainer}>
      {/* Logo et Titre */}
      <div style={styles.logoTitleContainer}>
        <img src={logo} alt="Chaussure" style={styles.logo} />
        <h3 style={styles.title}>Shoes Shop</h3>
      </div>

      {/* Navbar avec les liens */}
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}><Link to="/" style={styles.navLink}>Accueil</Link></li>
          <li style={styles.navItem}><Link to="/shop" style={styles.navLink}>Boutique</Link></li>
          <li style={styles.navItem}><Link to="/about" style={styles.navLink}>À Propos</Link></li>
          <li style={styles.navItem}><Link to="/contact" style={styles.navLink}>Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
