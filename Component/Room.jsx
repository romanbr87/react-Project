import React, { useState } from 'react';
import Product from './Product';
import "../style.css"


export default function Room(props) {
    //  hooks func that flag's: show or not the product list
    const [show, setShow] = useState(false)
    // swicth the device component true/false (on/off)
    const showProductsForm = (state) => {
        setShow (state)
    } 

    return (
        <div style={{ backgroundColor: props.room.color, border: '5px solid rgb(221,212,220)',borderRadius:'25px', marginLeft: '20%', marginRight: '20%', color: 'black' }}>

            <h2 style={{ margin: '10px', padding: '5px', textAlign: 'left' }}>
                name: {props.room.name}
                <br />
                type: {props.room.roomType}
                <hr />
            </h2>

            <h2 style={{textDecorationLine: 'underline'}}>My device list</h2>
            { 
                props.room.products.map((e, i) => {
                return ( 
                    // ? is Trinary operation- that sets a condition if red or green
                 <h3 className="product" style={{ backgroundColor: e.isTurnedOn ? 'green': 'red'  }}
                 onClick={()=> props.swithchDevice(i) }>
                 { e.name }</h3>
                )
                })
            }
            
            <br /><hr style={{margin:'15px'}}/>
            {/* Button that opens the option of adding a device- show the block or dont show at all */}
            <button style={{borderRadius:'10px', margin:'auto',marginBottom:'8px', display: show ? 'none':'block' }} 
            onClick={()=> showProductsForm (true)}>Add product</button>

            { show? <Product room={props.room} setShow={showProductsForm} setDevices={props.addDevice}>
            </Product> : ''}
        </div>
    )
}