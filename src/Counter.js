import React,{useState} from 'react'

function Counter() {
    let [num, setNum] = useState(0)
    let increment = () => {
       setNum(num+1)
    }
    let decrement = () => {
        setNum(num-1)
    }
    return (
    <>
    <div className='main_div'>
        <div className='center_div'>
            <h1>{num}</h1>
            <div className='btn_div'>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Counter
