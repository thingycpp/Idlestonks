import React, { useState } from 'react'

let renderWithp5 = true;

function changeMenu() {
  renderWithp5 = true;
}

function changeMenu2() {
  renderWithp5 = false;
}

function Game() {

  const [text, setText] = useState(0);
  const [money, addMoney] = useState(0);
  let moneyGain = 0;

  function setTextAndMoney(t, m) {
    setText(t);
    addMoney(money + m);
    //Items.giveRandomItemFromLevel(t);
  }

  if (renderWithp5) {
    return (
    <div className="react-body">
			<link rel="stylesheet" href="/public/styles.css"/>
      <div className="container">
        <div>
          <button onClick={() => changeMenu2()}>Bank and the Buttons</button>
          <button onClick={() => changeMenu2()}>Shop and Merchent</button>
        </div>

			 	<div className="GUI">
					<div>
						<div>
							<div className="levels"></div>
							<div className="GUIbutton">
								<p>test</p>
							</div>
							<div className="levels2"></div>
						</div>
						
            <p className="GUItext">test</p>
          </div>
        </div>
        <div>
          <button onClick={() => setTextAndMoney(4, 0)}>Switch</button>
        </div>
      </div>

      <div className="container">
        <p>Insert All Items for level Here</p>
      </div>
    </div>
    )
  } else {
    return (
      <div className="react-body">
        <div className="container">
          <div>
            <button onClick={() => changeMenu()}>Bank and the Buttons</button>
            <button onClick={() => changeMenu()}>Shop and Merchent</button>
          </div>
          <p>Bank: {money}</p>
          <p>Last Picked: {text}</p>

          <div>
            <button onClick={() => setTextAndMoney(1, moneyGain)}>1</button>
            <button onClick={() => setTextAndMoney(2, moneyGain)}>2</button>
            <button onClick={() => setTextAndMoney(3, moneyGain)}>3</button>
            <button onClick={() => setTextAndMoney(0, 0)}>Switch</button>
          </div>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
	render() {
		return <>
			<Game />
		</>
	}
}

export default App;