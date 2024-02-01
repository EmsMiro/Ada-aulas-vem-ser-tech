import React from "react";

const SeachBar = () => {
    return (
        <>
        <label htmlFor="search-bar">
        <input type="text" id="search-bar" placeholder="Pesquise pelo nome do álbum ou nome do artista"></input>            
        <img src="https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png" alt='icone-pesquisa' /> 
        </label> 
        </>
    );
};

export default SeachBar;