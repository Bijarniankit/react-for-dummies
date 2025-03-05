import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParams, setSearchParams]=useSearchParams();
  const age=searchParams.get('age') /// manully enter in the search bar  
  console.warn(age)
  const city = searchParams.get('city')  /// manully enter in the search bar
  console.warn(city)  
  const [input,setinput]=useState('')  // from the input field
  function takedata(){
    setSearchParams({gender:input})
  }
  const gender=searchParams.get('gender')
  function printdata(){
    console.warn(gender)
  }

  return (
    <div>
      <h1>Yo Yo Yo my Filter</h1>
      <h2> Age:{age}</h2>
      <h2> City:{city}</h2>
      <h2> Gender:{gender}</h2>
      <input name="gender" type="text" onChange={(e)=>setinput(e.target.value)} placeholder="enter some text"/>
      <button onClick={takedata}>Submit</button>  
      <button onClick={printdata}>print</button>  
    </div>
  );
}

export default Filter;