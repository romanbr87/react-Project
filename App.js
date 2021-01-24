import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./Component/HomePage.jsx";
import AddRoom from "./Component/AddRoom.jsx";
import Room from "./Component/Room.jsx";
import "./style.css";
import "./App.css";

function App() {
  const [rooms, setRooms] = useState([
    {
      color: "rgb(0,255,20)",
      name: "Soute",
      roomType: "Bathroom",
      products: [
        { isTurnedOn: false, name: "Air conditioning" },
        { isTurnedOn: false, name: "Air conditioning" },
      ],
    },
    { color: "yellow", name: "Roni", roomType: "BedRoom", products: [] },
    { color: "#b027a5", name: "Lior", roomType: "BedRoom", products: [] },
    { color: "blue", name: "Floor-1", roomType: "Toilet", products: [] },
  ]);

  //  Get's room and update Info
  const [room, setRoom] = useState({});

  // Create's a new room
  const addRoom = (name, color, roomType) => {
    // If one of them is empty return an error
    if (name == "" || color == "" || roomType == "") {
      //alert ("Can't add room")
      alert("Please insert a room color or name");
      return;
    }
    // Func that add's the room and existing rooms before
    setRooms([
      { name: name, color: color, roomType: roomType, products: [] },
      ...rooms,
    ]);
  };
  const removeRoom = (indexToRemove) => {
    setRooms(rooms.filter((e, currIndex) => currIndex != indexToRemove));
  };

  // access to a specific room: an index of the chosen room
  const getRoom = (i) => {
    let myRoom = rooms[i];
    myRoom.index = i;
    setRoom(myRoom);
  };

  // A func that let's us add a device ()
  const addDevice = (deviceName) => {
    //  filter: Only 1 stereo in a room
    let streo = room.products.filter(
      (product) => product.name == "Stereophonic sound"
    );
    if (streo.length == 1 && deviceName == "Stereophonic sound") {
      alert("Add only 1 stereophonic sound device");
      return;
    }
    //  the user can only add up to 5 devices
    if (room.products.length >= 5) {
      alert("Can't add more then 5 devices");
      return;
    }
    // push adds the product to th chosen room
    room.products.push({ name: deviceName, isTurnedOn: false });
    setRoom(room);
  };

  // Turn the device on and off
  const swithchDevice = (deviceIndex) => {
    // copy the variable and gives a new one instead
    let myRooms = Object.create(rooms);
    myRooms[room.index].products[deviceIndex].isTurnedOn = !myRooms[room.index]
      .products[deviceIndex].isTurnedOn;
    setRooms(myRooms);
    getRoom(room.index);
  };

  return (
    <div className="App">
      <Router>
        <Link to="/">
          <h1
            className="boxShadow"
            style={{
              backgroundColor: "rgb(84, 166, 189, 0.68)",
              padding: "5px",
              border: "5px solid #ffdedeb3",
              borderRadius: "10px",
              display: "inline-flex",
            }}
          >
            My Smart Home
          </h1>
        </Link>
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return (
                <HomePage rooms={rooms} getRoom={getRoom} del={removeRoom} />
              );
            }}
          />
          <Route
            exact
            path="/AddRoom"
            component={() => {
              return <AddRoom add={addRoom} />;
            }}
          />
          <Route
            exact
            path="/Room"
            component={() => {
              return (
                <Room
                  room={room}
                  addDevice={addDevice}
                  swithchDevice={swithchDevice}
                />
              );
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
