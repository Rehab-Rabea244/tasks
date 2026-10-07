import { useState } from 'react'
import Child from '../Child/Child';
export default function Perent() {
    const [user]=useState({
        name:`Rehab`,
        University:`HNU`,
         dep:`ISE`,
        city:`Giza`,
    });

    return (
        <>
        <div className="container-faulid bg-success p-3">
            <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla eaque deserunt dignissimos perspiciatis officiis suscipit neque adipisci aut veritatis nemo!</p>
            <Child data={user}/>
        </div>
        </>
    );
}
