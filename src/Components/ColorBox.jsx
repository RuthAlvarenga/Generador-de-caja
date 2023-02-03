import React from 'react'

const ColorBox = (props) => {
    const {data} = props;

    return (
        <div>
            {
                data.map((item, i)=><div key={i} className='cajas' style={{backgroundColor:item,color:'#ffffff'}}>{item}</div>)
            }
        </div>
    )
}

export default ColorBox;