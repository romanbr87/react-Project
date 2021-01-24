import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AddRoom(props) {
    //  Get's room Info Type/Color/Name
    const [roomType, setRoomType] = useState("Kitchen")
    const [roomColor, setRoomColor] = useState("");
    const [roomName, setRoomName] = useState("");

    return (

        <div>
            <div className='boxShadow' style={{ padding: '0px,15px,0px', backgroundColor: 'rgb(84,166,189,68%)', border: '5px solid rgb(221,212,220)', borderRadius: '25px', padding: '5px', width: '330px', display: 'inline-block', color: 'black' }} >
                <h2>Choose A Room:
            <select value={roomType} style={{ cursor: 'pointer', marginLeft: '10px', height: '22px', width: '110px' }} onChange={(element) => {
                        const selectedRoomType = element.target.value;
                        setRoomType(selectedRoomType)
                    }}>
                        <option value="Kitchen">Kitchen</option>
                        <option value="Bathroom">BathRoom</option>
                        <option value="Toilet">Toilet</option>
                        <option value="BedRoom">BedRoom</option>
                    </select></h2><br />
                <label>
                    <h2>Room-Name:
                <input type="text" id="name" name="name" placeholder="Room Name" required minLength="3" maxLength="5" size="10" style={{ cursor: 'pointer', marginLeft: '10px' }} onChange={(element) => setRoomName(element.target.value)}></input>
                    </h2><br />
                    <h2>Room-color:
                <input type="color" value={roomColor} style={{ cursor: 'pointer', marginLeft: '10px' }} onChange={(element) => setRoomColor(element.target.value)} />
                    </h2></label>
                <br /><br />
                <Link to="/" onClick={() => props.add(roomName, roomColor, roomType)}><h3 className='boxShadow' style={{ backgroundColor: '#8ebdd8', border: '5px solid #ffdedeb3', borderRadius: '10px', padding: '5px', color: 'black', display: 'inline-flex' }}> Create A Room </h3></Link>
            </div>

        </div>
    )
}