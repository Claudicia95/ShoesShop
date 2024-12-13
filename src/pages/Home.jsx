// Page principale avec les chaussures affichées

import React, { useState } from "react";
import Card from "../components/Card";
import { ShoesData } from "../datas/shoesData";

const styles = {
  Container: {
    textAlign: "center",
    padding: "20px",
  },
  HomeContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  select: {
    padding: "12px 15px",
    fontSize: "16px",
    margin: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    outline: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  input: {
    padding: "12px 15px",
    fontSize: "16px",
    margin: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    outline: "none",
    transition: "all 0.3s ease",
  },

};

function Home() {

const [filterBy, setFilterBy] = useState("");
const [searchValue, setSearchValue] = useState("");

const filteredShoes = ShoesData.filter((shoe)=>{
  if (!filterBy || !searchValue ) return true;
  return shoe[filterBy]?.toLowerCase().includes(searchValue.toLowerCase());
});
const handlefilterBy = (e) =>{
  setFilterBy(e.target.value)
  setSearchValue("")
}
  return (
    <div style={styles.Container}>

      <select  
      style={styles.select}
        value={filterBy} onChange={(e) => handlefilterBy(e)}
      >
      <option value="">--Filtrer par--</option>
      <option value="name">Nom</option>
      <option value="model">Modèle</option>
      <option value="size">Taille</option>
      <option value="color">Couleur</option>
      </select>

      <input  type="text" 
      placeholder="Entrez une valeur..."
      style={styles.input}
      value={searchValue}
      onChange={(e)=> setSearchValue(e.target.value)}
      />
      
    <div className="HomeContainer" style={styles.HomeContainer}>
      {filteredShoes.map((shoe, index) => (
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
    </div>

  );
}

export default Home;
