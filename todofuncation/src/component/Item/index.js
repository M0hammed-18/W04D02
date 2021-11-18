import React, { useState } from 'react'

 const Item =()=>{
const [name, setName] = useState("Mohammed")
const [age, setAge] = useState(18)
const [brothers, setBrothers] = useState(["Mohammed","Ahmed","saleh"])

const Incruse=()=>{
    setAge(age+1)
}

        return (
            <div>
                <h1>{name}</h1>
                <h2>{age}</h2>
                <button onClick ={Incruse}>Incruse</button>
                <ul>
                    {brothers.map((i)=>(
                        <li>{i}</li>
                    ))}
                </ul>
            </div>
        )
        }
    export default Item
