import axios from 'axios'
import { useState } from 'react'


// There are 2 methods for calling api in react:
// 1) Fetch Method
// 2) Axios Method


const App = () => {
  const [data, setdata] = useState([])

  // Fetch Method
  // async function getData(){
  //  const response= await fetch('https://jsonplaceholder.typicode.com/posts/1')
  //  console.log(response);  
  // }


  // Axios Method
  // firstly run this in terminal --->   npm i axios
  // const getData= async()=>{
  //  const response=await axios.get('https://jsonplaceholder.typicode.com/posts/1') 
  // }


  const getData=async()=>{
    const response= await axios.get('https://picsum.photos/v2/list')
    setdata(response.data)
    
  }

  return (
    <div>
      <button onClick={getData}>Get data</button>
      <div>
      {data.map((elem)=>{
      return  <h3>{elem.author}</h3>
       })}
      </div>
    </div>
  )
}

export default App
