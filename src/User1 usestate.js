import {useState} from 'react';

function User1() {

    // Use state  basic example
//     const [name,setData] = useState("Ankit")
//     function update(){
//         setData("An kit")
//     }
//     console.warn("render");
//   return (
//     <div>
//       <h1>{name}</h1>
//       <button onClick={update}>Update data</button>
//     </div>
//   );


// Counter

const [num,setnum]=useState(0)
function iupdateCounter(){
    setnum(num+1)
}
function dupdateCounter(){
    setnum(num-1)
}

return( 
    <div>
        <h1>Counter: {num} </h1>
        <button onClick={iupdateCounter}>Increment</button>< br/ >
        <button onClick={dupdateCounter}>Decrement</button>
    </div>
)



}

export default User1; 