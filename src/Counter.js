import React,{useState} from 'react'

function Counter() {
    let [num, setNum] = useState(0)
    return (
    <>
    <div className='main_div'>
        <div className='center_div'>
            <h1>{num}</h1>
            <div className='btn_div'>
                <button onClick={()=>{
                    setNum(num+1)
                }}>Increment</button>
                <button onClick={()=>{
                    setNum(num-1)
                }}>Decrement</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Counter
