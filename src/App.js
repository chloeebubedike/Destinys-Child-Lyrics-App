import React, { useState } from 'react';

function App() {
  // saving currently selected lyric in the background 
  // use lyric variable and setLyric function which will change the lyric variable behind the scenes 
  const [lyric, setLyric] = useState("")



  function canYouPayMyBills(){
    setLyric("I don't think you do, so you and me are through")
  }

  function sayMyName(){
    setLyric("If no one is a around you, say baby I love you, if you ain't running game")
  }

  function imASurvivor(){
    setLyric("I'm not gon' stop, I'm gon' work harder")
  }

  function randomLyric() {
    const lyricFunctions= [canYouPayMyBills, sayMyName, imASurvivor]
    const randomIndex = Math.floor(4 * Math.random())
    const lyricFunction = lyricFunctions[randomIndex]
    lyricFunction()
  }



  return (
    <div className="container py-5">
      <h1 className="display-4">Destinys Child Lyrics App</h1>
      <p>Please click one of the buttons below</p>
      <table className="table table-striped">
        <tbody>
          <tr>
            <td><button className="btn btn-primary" onClick={sayMyName}>Say my name, say my name</button></td>
          </tr>
          <tr>
            <td><button className="btn btn-secondary" onClick={imASurvivor}> I'm a survivor, I'm not gon' give up</button></td>
          </tr>
          <tr>
            <td><button className="btn btn-success" onClick={canYouPayMyBills}> Can you pay my bills, can you pay my telephones bills</button></td>
          </tr>
          <tr>
            <td>
              <button className="btn btn-dark" onClick={randomLyric}>Get a random lyric</button>
            </td>
          </tr>
        </tbody>
      </table>
      <p>Here is your random lyric:</p>
      <textarea className="form-control my-3" value = {lyric} rows="3" readOnly/>
     {/* onclick and text content are props */}
      <iframe width="560" height="315" src="https://www.youtube.com/embed/sQgd6MccwZc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}

export default App;
