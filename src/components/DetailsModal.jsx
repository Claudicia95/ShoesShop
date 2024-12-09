//Composant pour afficher les détails d'une chaussure

import React from "react";

function DetailsModal({ isOpen, onClose, shoe }) {
    if (!isOpen) return null; // Ne pas afficher la modale si elle est fermée

    const styles = {
        modalOverlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        },
        modalContent: {
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '500px',
            width: '80%',
            position: 'relative',
            textAlign: 'center',
        },
        closeButton: {
            position: 'absolute',
            top: '10px',
            right: '10px',
            backgroundColor: 'crimson',
            color: 'white',
            border: 'none',
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        shoeImage: {
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: '20px',
        },
    };

    return (
        <div style={styles.modalOverlay} onClick={onClose}>
            <div
                style={styles.modalContent}
                onClick={(e) => e.stopPropagation()} // Empêche le clic sur le contenu de fermer la modale
            >
                <button style={styles.closeButton} onClick={onClose}>x</button>

                <img src={shoe.picture} alt={shoe.name} style={styles.shoeImage}/>
                <h2>{shoe.name}</h2>
                <p><strong>Size:</strong> {shoe.size}</p>
                <p><strong>Color:</strong> {shoe.color}</p>
                <p><strong>Model:</strong> {shoe.model}</p>
                <p><strong>Price:</strong> ${shoe.price}</p>
            </div>
        </div>
    );
}

export default DetailsModal;
