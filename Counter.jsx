import react, {useEffect, useState} from 'react';

function Counter(){

    const [count,setCount] = useState(0);

    useEffect(()=>{
        document.title = `Count : ${count}`;
    },[count]);
    const Increment = ()=> {
        setCount(count +1)
    }
    const Decrement = ()=> {
        setCount(count -1);
    }
    const reset=()=>{
        setCount(0);
    }
    return(
        <div className="counter-container">
            <h1>Counter</h1>
            <p className='count-display'>{count}</p>
            <button className='counter-button' onClick={Increment}>Increment</button>
            <button className='counter-button' onClick={Decrement}>Decrement</button>
            <button className='counter-button' onClick={reset}>Reset</button>
        </div>
    )
    }

export default Counter;