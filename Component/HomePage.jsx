import React from 'react'
import { Link } from 'react-router-dom'
import deleteIcon from '../Imges/deleteIcon.png';
import '../style.css';


export default function HomePage(props) {

    return (
        <div className='boxShadow' style={{ backgroundColor: 'rgb(84,166,189,68%)', border: '5px solid rgb(221,212,220)', borderRadius: '25px', paddingTop: '10px', marginLeft: '20%', marginRight: '20%', color: 'black' }}>
            {/* gets the elemets and index from the App and retuns box-room Color\Name\Type */}
            {props.rooms.map((e, i) => {
                return <h2 className='boxShadow' style={{ backgroundColor: e.color, border: '5px solid rgb(255,255,255,57%)', borderRadius: '25px', textAlign: 'center', margin: '10px', padding: '5px', display: "inline-block", width: '160px' }}>
                    <Link to="/Room" onClick={() => props.getRoom(i)} >
                        {e.roomType} <hr style={{ width: '85%' }} />
                        {e.name}
                    </Link> <br />
                    <img src={deleteIcon} className="delButton" onClick={() => props.del(i)} />
                </h2>
            })
            }
            <br /><br />
            <Link to="/AddRoom"><h3 className='boxShadow' style={{ backgroundColor: '#8ebdd8', border: '5px solid rgb(221,212,220)', borderRadius: '10px', padding: '5px', color: 'black', display: 'inline-flex' }}> Create a new Room </h3></Link>
        </div>
    )
}