// Button.jsx
import React from "react";

const Button = ({ label, onClick, color = "blue", size = "medium", icon = null }) => {
  // Définition des styles dynamiques
  const styles = {
    button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: color,
      color: "white",
      border: "none",
      borderRadius: "5px",
      padding: size === "small" ? "5px 10px" : size === "large" ? "15px 30px" : "10px 20px",
      fontSize: size === "small" ? "12px" : size === "large" ? "18px" : "16px",
      cursor: "pointer",
      gap: "8px", // Espace entre l'icône et le texte
      transition: "background-color 0.3s ease",
    },
    icon: {
      fontSize: size === "small" ? "14px" : size === "large" ? "22px" : "18px",
    },
  };

  return (
    <button style={styles.button} onClick={onClick}>
      {icon && <span style={styles.icon} className={`icon-${icon}`}></span>}
      {label}
    </button>
  );
};

export default Button;
