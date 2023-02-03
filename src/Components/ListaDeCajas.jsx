import React, { useState } from 'react'

const ListaDeCajas = (props) => {

    const {caja, setCaja} = props;

    const [colores, setColores] = useState("");

    const handleInputs = (e) => {
        setColores (e.target.value)
    }

    const addColorBox = (e) => {
        e.preventDefault();
        setCaja([...caja, colores]);
        setColores("");
    }


    return (
        <div>
            <form onSubmit={addColorBox} className="form">
                <div className="labelinput">
                    <label className='label'>Color</label>
                    <input className='input' type="text" name="color" value={colores} onChange={handleInputs} />
                    <button className='btnAdd' type='submit'>Agregar Color</button>
                </div>
                
            </form>
        
        </div>
        
    )
}

export default ListaDeCajas