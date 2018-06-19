import React, { Component } from 'react';
import './App.css';
import './Phone.css';

import Chatroom from './Chatroom.js';

class App extends Component {
  render() {
    return (
			<div className="App">
				{/* Zone "Smartphone" */}
				<div id="iPhonecontainer">
					<div id="a_volume_1"></div>
					<div id="a_volume_2"></div>
					<div id="a_volume_3"></div>

					<div id="a_iphone">
						<div id="a_camera"></div>
						<div id="a_sensor"></div>
						<div id="a_speaker"></div>
						<div id="a_screen" className="start">

							<Chatroom />
						</div>
						<div id="a_home"></div>
					</div>

					<div id="a_sleep"></div>
				</div>
				<div className="Explainations">
				    <p>Salut salut, c'est moi, Botty!</p>
					<p>Essaye de me parler :) Quelques phrases à essayer : </p>
				    <ul>
				        <li>Dis moi bonjour</li>
				        <li>Demande-moi comment je vais</li>
						<li>Tu veux savoir pourquoi je suis vert?</li>
						<li>Où j'habite?</li>
						<li>Etc..!</li>
				    </ul>
				</div>
			</div>
    );
  }
}

export default App;
