// Page principale avec les chaussures affichées

import React from "react";
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
  return (
    <div className="HomeContainer" style={styles.HomeContainer}>
      {ShoesData.map((shoe, index) => (
        <Card
          key={index} // Clé unique pour chaque élément
          name={shoe.name}
          picture={shoe.namePicture}
          model={shoe.model}
          size={shoe.size}
          price={shoe.price}
          color={shoe.color}
        />
      ))}
    </div>
  );
}

export default Home;
