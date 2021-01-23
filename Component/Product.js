import React, { useState } from 'react';

export default function Products(props) {
    //  Get's device and update Info 
    const [device, setDevice] = useState()

    return (        
          <div>
            <div className="BTN" >
                
                <h4 style={{ backgroundColor: '#8ebdd8', border: '5px solid #ffdedeb3',borderRadius:'10px',padding:'5px', color: 'black', display: 'inline-flex', marginRight: '1%' }}> Choose Your Device: </h4>
                <select id="selection" onClick={(element)=> {
                    setDevice(element.target.value) }}
                    style={{ padding: '0px,15px,0px',borderRadius:'25px' , border: '5px solid rgb(221,212,220)', display: 'inline-block', color: 'black' }}>
                        <option value="">Choose:</option>
                        { (props.room.roomType =="Bathroom") ? <option value="Boiler">Boiler</option> : '' }
                        <option value="Air conditioning">Air conditioning</option>
                        <option value="Lamp">Lamp</option>
                        <option value="Stereophonic sound">Stereophonic sound</option>
                </select>
                <br />

                  {/* btn that onclick return the chosen device turned off as a default */}
                <button style={{borderRadius:'10px'}} onClick={() =>{ 
                        if (device == undefined || device == '') {
                            alert ("Choose a Device")
                            return
                        }
                        props.setDevices (device)
                        props.setShow(false)
                    }}> Add My Device </button><br />
                <hr style={{margin:'5px'}}/>
            </div>

          </div>
    )
}
