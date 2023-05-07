import { useRef, useState } from 'react'

const UseRefExample = () => {
    const counter = useRef(0);
    const [stateCounter, setStateCounter] = useState(0);

    const handleCounter = () => {
        counter.current = counter.current + 1;
        console.log('Counter: ', counter.current);
    }

    const handleStateCounter = () => {
        setStateCounter(stateCounter + 1);
        console.log('State Counter: ', stateCounter);
    }

    console.log('Counter Clicked...')


    return (
        <div>
            <h1>useRef</h1>
            <button onClick={handleCounter}>
                Increment
            </button>

            <button onClick={handleStateCounter}>
                Increment using State
            </button>
            
        </div>
    )
}

export default UseRefExample;