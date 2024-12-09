// Composant pour afficher les chaussures

import React from "react";


function Card({name, size, model, color, price, picture}){

const styles ={ 

CardContanier:
{
  padding: '30px',
   border: "1px solid #ddd",
   borderRadius: "8px",
   textAlign: "center",
   width: "200px",
   margin: '5px',
},

imgCard :
{
  width :'100%',
  height: '150px',
   objectFit: "cover"
},

btnAjouter:
{
    backgroundColor: "LightBlue", // Couleur de fond
    color: "white", // Couleur du texte
    padding: "10px 20px", // Espacement interne
    border: "none", // Supprimer les bordures
    borderRadius: "5px", // Coins arrondis
    cursor: "pointer", // Curseur interactif
    fontSize: "16px", // Taille du texte
    transition: "all 0.3s ease", // Effets de transition
}
}

    return(
        <div style={styles.CardContanier}>
            <img src={picture} alt="name" style={styles.imgCard} />
            <h3>{name}</h3>
            <p>Size:{size}</p>
            <p>Model:{model}</p>
            <p>Color:{color}</p>
            <p><strong>Price:{price} $</strong></p>
            <button className="btnAjouter" style={styles.btnAjouter}>Afficher</button>
        </div>
    )
}
export default Card