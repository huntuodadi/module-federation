import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const clickFlight = async () => {
    import('flight/App').then((flightApp) => {
      console.log(flightApp);
    })
    // ReactDOM.render(<Module />, document.getElementById('container'))
  }
  const clickHotel = async () => {
    const module = await import('hotel/App')
    console.log('hotel module:', module);
  }
  return (
    <>
      <button onClick={clickFlight}>Flight</button>
      <button onClick={clickHotel}>Hotel</button>
    </>
  );
}

export default App;