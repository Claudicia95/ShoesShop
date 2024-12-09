// Page principale avec les chaussures affichées

import React, { useState } from "react";
import Card from "../components/Card";
import { ShoesData } from "../datas/shoesData";

const styles = {
  HomeContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
};

function Home() {
  // Définir l'état pour les chaussures
  const [shoes, setShoes] = useState(ShoesData);

  // Fonction pour supprimer une chaussure
  const deleteShoe = (name) => {
    setShoes(shoes.filter((shoe) => shoe.name !== name)); // Filtrer la chaussure par son nom
  };

  return (
    <div className="HomeContainer" style={styles.HomeContainer}>
      {shoes.map((shoe, index) => (
        <Card
          key={index} // Clé unique pour chaque élément
          name={shoe.name}
          picture={shoe.namePicture}
          model={shoe.model}
          size={shoe.size}
          price={shoe.price}
          color={shoe.color}
          onDelete={() => deleteShoe(shoe.name)} // Passage de la fonction de suppression
        />
      ))}
    </div>
  );
}

export default Home;
