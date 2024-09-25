import './App.css';
import { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    let multiplier = 1;

    function updateCount() {
        setCount(count + multiplier);
    }

    return (
        <div className="App">
            <div className="header">
                <h1>Samosa Selector</h1>
                <h2>Count: {count}</h2>
                <img src="/src/assets/samosa.img" className="samosa" onClick={updateCount} alt="Samosa" />
            </div>
            <div className="container">
                <div className="upgrade">
                    <h3>Double Stuffed 👯</h3>
                    <p>2x per click</p>
                    <button>10 samosas</button>
                </div>
                <div className="upgrade">
                    <h3>Party Pack 🎉</h3>
                    <p>5x per click</p>
                    <button>100 samosas</button>
                </div>
                <div className="upgrade">
                    <h3>Full Feast 👩🏽‍🍳 </h3>
                    <p>10x per click</p>
                    <button>1000 samosas</button>
                </div>
            </div>
        </div>
    )
}

export default App
