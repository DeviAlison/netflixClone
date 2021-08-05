import React from 'react';
import './Header.css'

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header-logo">
                <a href="/">
                    <img src="https://fontmeme.com/permalink/210805/52c4ee7365cfafe79a6b32dc24424ac2.png" alt="alaskaFilmes"/>
                </a>
            </div>
            <div className="header-user">
                <a href="/">
                    <img src="https://occ-0-2169-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRmtNzyg7zV6EC3TQGMQqbhKrAGB42lxYLSPWRqTJ_yxIx8W7rL-Abhyr7Goh0TCHU6f2b66nJAZ3sKpsYqw0HIr61mR.png?r=125" alt="Usuário" /> 
                </a>
            </div>
        </header>
    );
}