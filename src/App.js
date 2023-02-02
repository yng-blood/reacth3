import "./App.css";
import React, { useState } from "react";

function App() {
  const [Toggle, setToggle] = useState(true);
  const [formData, setFormData] = useState({
    Person: "",
    Game: "",
    Rating: "",
    Players: [],
  });

  const changeshow = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    // console.log({ [e.target.name]: [e.target.value] });
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
      const arr = {
      Person: formData.Person,
      Game: formData.Game,
      Rating: formData.Rating,
    };

    let temp = formData.Players;
    temp.push(arr);
    setFormData({ ...formData, Players: temp });
    console.log(formData.Players);
    setToggle(false);
  };

  const displayshow = () => {
    setToggle(true);
  };

  return (
    <div className="App">
      <h1 className="title">Anual Sports Rating data</h1>
      {Toggle ? (
        <form>
          <label className="name">Person : </label>
          <input type="text" placeholder="Name of candidate" name="Person" value={formData.Person} onChange={changeshow} ></input>
          <br />
          <label className="Game">Game : </label>
          <input type="text" placeholder="Game of candidate" name="Game" value={formData.Game} onChange={changeshow} ></input>
          <br />
          <label className="Rate">Rating : </label>
          <input type="number" placeholder="Ratings" name="Rating" value={formData.Rating} onChange={changeshow}></input>
          <br />
          <br />
          <button className="button_submit" onClick={submitHandler}>
            Submit
          </button>
         
        </form>
      ) : (
        <>
          <div className="mainbox container">
            {formData.Players.map((value, index) => {
              return (
                <span className="container box1" key={index}>
                  <span>
                    Name : {value.Person} | Game : {value.Game} |
                    Rating : {value.Rating}
                  </span>
                </span>
              );
            })}
          </div>
          <br />
          <button className="button_submit  buttonshow" onClick={displayshow}>
            GO BACK
          </button>
        </>
      )}
    </div>
  );
}

export default App;
