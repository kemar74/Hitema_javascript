import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Message from './Message.js';

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function recurFindWord(word, tree){
	let foundWords = [];
	if(tree instanceof Object)
	{
		let keys = Object.keys(tree);
		keys.forEach(function(key){
			if(key.indexOf(word) >= 0 || word.indexOf(key) >= 0){
				foundWords.push(key);
			} else {

			}
			foundWords = foundWords.concat(recurFindWord(word, tree[key]));
		});
	}
	else {

	}
	return foundWords;
}

function correspondingResponseToKey(keyword, tree){
	let response = '';
	if(tree instanceof Object)
	{
		let keys = Object.keys(tree);
		keys.forEach(function(key){
			if(response == ''){
				if(key.indexOf(keyword) >= 0 || keyword.indexOf(key) >= 0){
					response = takeArandomResponse(tree[key]);
				}
				var aResponse = correspondingResponseToKey(keyword, tree[key])
				if(aResponse)
					response = aResponse;
			}
		});
	}
	else {
	}
	return response;
}

function takeArandomResponse(tree) {
	if(tree instanceof Object)
	{
		var returnValue = null;
		let keys = Object.keys(tree);
		return takeArandomResponse(tree[keys[randomInt(keys.length)]]);
	} else {
		return tree;
	}
	return returnValue;
}

class Chatroom extends React.Component {

    constructor(props) {
        super(props);

        this.responses = {
			ordre: {
				rigole: 'MOUHAHAHAH!!',
				meur: 'NOOOoooon! Argh! *decès*',
				'le beau': 'Wouaf! *donne la patte*',
				silence: 'J\'aime le silence, j\'ai toujours aimé le silence! Mais je parle trop',
				bug: '○◘☻,8Tý☻03-A↕ Ì)u4v1○◘☻,8Tý♀◘øäå↔☼e◘☻,8Tý☻0v1○◘4Ìøäå↔☼eë65o65☻,8Tý☻03-A↕ Ìøäå↔☼eë65o65)u4v1○◘☻,8Tý♀◘16C)u4v1○◘☻,8Tý☻03-A↕ Ìøäå↔☼eë65o6516C)u4v1○◘☻,8Tý☻03-A↕ Ìøäå↔☼eë65o6516C)u4vv1○◘☻,8Tý☻03-A↕ Ìøäå↔☼eë65o6)u4v1○◘☻,8Tý♀◘516C)u4vvA↕ Ìøäå↔☼e)u4v1○◘☻,8Tý♀◘ë65o6516C)u4v1○◘☻,8Tý☻03-A↕ Ìøäå↔☼eë6)u4v1○◘☻,8Tý♀◘5o6516C)u4↕ ☼eë65o6516C))u4v1○◘☻,8Tý♀◘u16C)u4v1○◘☻,8Tý☻0)u4v1○◘☻,8Tý♀◘3-A↕ Ìøäå)u4v1○◘☻,8Tý)u4v1○◘☻,8Tý♀◘4Ìøäå↔☼eë6)u4v1○◘☻,8Tý5o65↔☼eë6)u4v1○◘☻,8Tý♀◘5o6516C☻03-A↕ Ìøäå↔☼eë65o6516C)u4v1○◘☻,8Tý☻03-A↕ Ìøäå↔☼eë65o6516C)u4v1'
			},
            questions: {
				habite: 'J\'habite un serveur sur une île abandonnée',

				quand: {
					ne: 'Je suis né un 15 juin 2018',
				},
				qui: {
					divin: 'Je suis un dieu ici',
				},
                comment: {
                    va: 'Mais ça va bien! Et toi?',
                },
				pourquoi: {
					vert: 'J\'aime le vert, pas toi?',
					existe: 'Je ne sais pas, mais me voilà!',
					utile: 'De manière générale, je ne sers à rien :\'( Avec un peu de chance mon créateur aura une bonne note!'
				},
            },
			mot_unique: {
				bonjour: 'Bien le bonjour!',
				salut: 'Salut, l\'ami!',
				coucou: 'Coucou bichon!',
				non: 'Ne sois pas si négatif!',
				oui: 'Fort bien!',
				bien: 'Fort bien',
				hello: 'Hello World',
			},
			autre: {
				gentil: 'Oui oui, je suis plutôt gentil',
				google: 'J\'aimerai vraiment rencontrer un collègue bot de chez Google, ils ont l\'air sympas!'
			},
			none: [
				'J\'ai pas bien compris...',
				'Pardon?',
				'Articule un peu, s\'il te plait',

			],
        };

        this.state = {
            chats: [{
				username: "App",
				content: <p>Salut, toi :) </p>,
			}],
        };

        this.submitMessage = this.submitMessage.bind(this);
    }

    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
    	let node = ReactDOM.findDOMNode(this.refs.chats);
        window.scrollTo(this.responseForm);
    }

    submitMessage(e) {
        e.preventDefault();

		const userResponse = ReactDOM.findDOMNode(this.refs.msg).value;
        this.setState({
            chats: this.state.chats.concat([{
                username: "User",
                content: <p>{userResponse}</p>,
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
			this.botMessage(this.findResponse(userResponse));
			this.scrollToBot();
        });

    }

    botMessage(msg) {
        this.setState({
            chats: this.state.chats.concat([{
                username: "App",
                content: <p>{msg}</p>,
            }])
        });
    }

    render() {
        const username = "User";
        const { chats } = this.state;

        return (
            <div className="chatroom">
                <h3>Botty</h3>
                <ul className="chats" ref="chats">
                    {
                        chats.map((chat, i) =>
                            <Message chat={chat} user={username} key={"message-" + i}/>
                        )
                    }
                </ul>
                <form className="input" onSubmit={(e) => this.submitMessage(e)} ref={node => this.responseForm = node} >
                    <input type="text" ref="msg" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

	findResponse(question){
		let $this = this;

		var lookingScope = this.responses;

		question = this.simplifyString(question);


		var myResponse = $this.findWordsRecursive(question, lookingScope);
		if(myResponse == "")
			myResponse = $this.responses.none[ randomInt($this.responses.none.length) ];

		return myResponse;
	}

	findWordsRecursive(phrase, searchBase){
		let $this = this;
		let words = phrase.split(" ");
		let searchBaseScore = searchBase;

		let responses = [];
		words.forEach(function(word) {
			let foundWords = recurFindWord(word, searchBase);
			if(foundWords.length > 0){
				var aResponse = correspondingResponseToKey(word, searchBase);
				responses.push(aResponse);
			}
		});
		if(responses.length == 0) return "";
		return (responses[randomInt(responses.length)]);
	}

	simplifyString(str) {
		return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\?]/g,"").replace(/\s{2,}/g," ").toLowerCase().trim();
	}


}

export default Chatroom;
