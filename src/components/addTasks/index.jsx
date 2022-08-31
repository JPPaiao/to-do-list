import React, { useState } from 'react';
import { connect } from 'react-redux';

import { ADD_TASK } from '../../store/actions'
import Botao from '../botao';
import './style.css';

function AddTasks({ dispatch }) {
    const [inptData, setInput] = useState("");

    const handInput = (e) => {
        const valueInput = e.target.value
        setInput(valueInput)
    };

    const clickAdd = () => {
        dispatch(ADD_TASK(inptData))
        setInput("")
    }

    return (
        <form className='cont' onSubmit={e => e.preventDefault()} >
            <div className='cont-inp'>
                <input
                    onChange={handInput}
                    value={inptData}
                    type="text"
                    className='inp'
                />
            </div>
            <div className="cont-butt">
                <Botao onClick={clickAdd}>Aplicar</Botao>
            </div>
        </form>
    )
}

export default connect()(AddTasks);
