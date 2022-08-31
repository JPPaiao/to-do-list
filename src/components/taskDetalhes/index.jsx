import React from 'react';

import { useParams, Link } from 'react-router-dom';
import Botao from '../botao/index';
import Header from '../header/index';
import './style.css';

function TaskDetalhes() {
    let param = useParams();

    return (
        <div className='container'>
            <Header />
            <div className="btn-back">
                <Link to={'/'}>
                    <Botao>Voltar</Botao>
                </Link>
            </div>
            <div className="detalhes-box">
                <h2>{param.taskTitle}</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos animi, reprehenderit eveniet adipisci exercitationem voluptates facere, vero nisi saepe, ad omnis reiciendis laborum obcaecati error quas. Unde ex qui consequatur?</p>
            </div>
        </div>
    );
};

export default TaskDetalhes;