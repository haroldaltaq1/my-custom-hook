import { useState } from "react";

export const useCounter = ( initState = 10) => {

    const [counter, setCounter] = useState(initState);

    const reset = () => {
        setCounter( initState );
    }

    const increment = ( factor = 1 ) => {
        setCounter( counter + factor );
    }

    const decrement = ( factor = 1 ) => {
        setCounter( counter + factor );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}