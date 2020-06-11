import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [message, setMessage] = useState("");
    useEffect(() => {
        fetch('/main')
            .then(response => response.text())
            .then(message => {
                setMessage(message);
            });
    }, [])
    return (

        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">{message}</h1>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
