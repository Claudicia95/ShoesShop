import { useState } from "react";
import React from "react";
import DetailsModal from "./DetailsModal";


function Card({ name, size, model, color, price, picture, onDelete }) { // Assurer que 'onDelete' est une prop ici
    const [isModalOpen, setIsModalOpen] = useState(false);

    const styles = {
        cardContainer: {
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            textAlign: 'center',
            width: '200px',
            margin: '10px',
            
        },
        imgCard: {
            width: '100%',
            height: '150px',
            objectFit: 'cover',
        },
        btnAjouter: {
            backgroundColor: 'lightblue',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
        },
    };

    return (
        <div style={styles.cardContainer}>
            <img src={picture} alt={name} style={styles.imgCard} />
            <h3>{name}</h3>
            <p>Size: {size}</p>
            <p>Model: {model}</p>
            <p>Color: {color}</p>
            <p><strong>Price: ${price}</strong></p>
            <button
                style={styles.btnAjouter}
                onClick={() => setIsModalOpen(true)}
            >
                Afficher
            </button>
            
            <DetailsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                shoe={{ name, size, model, color, price, picture }} />
        </div>
    );

}

export default Card;
