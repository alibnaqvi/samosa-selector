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
        </div>
    )
}

export default App
