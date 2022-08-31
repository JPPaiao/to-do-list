import React from 'react';
import './style.css';

function Botao({ children, onClick }) {
    return (
        <button className='btn' onClick={ onClick }>
            { children }
        </button>
    );
};

export default Botao;