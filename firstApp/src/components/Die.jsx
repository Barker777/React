import { useState } from 'react'
import './Die.css'

function Die() {
    const [count, setCount] = useState(0)
    const roll = Math.floor(Math.random() * 6) + 1

    return (
        <div>
            <h3>Roll the Die!</h3>
            <button onClick={() => setCount(count + 1)}>
                <div className="dice" key={count}>
                    {roll}
                </div>
            </button>
        </div>
    )
}

export default Die