import React from 'react'

const Counter = () => {

    console.log('Counter is rendering...')

    const [count, setCount] = React.useState(0)
    console.log(count);


    return (
        <div>
            <h1>Count is {count}</h1>
            <button onClick={() => {
                // setCount(count + 1);
                setCount((prev) => prev + 1);

            }}
            >
                Increment</button>
        </div>
    )
}

export default Counter
