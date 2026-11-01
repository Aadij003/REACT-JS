import React, { useState } from 'react'

const App = () => {


let [num, setNum] = useState(10)

    const btnClicked=()=>{


      // Batch Update 
    setNum(prev=>(prev+1));
       setNum(prev=>(prev+1));
         setNum(prev=>(prev+1));
    }
  return (


    <div className='divContainer'>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )








  // let [num, setNum] = useState({user:'ABC',age:10})

  //   const btnClicked=()=>{
  //  setNum(prev=>({...prev,age:15}))
  //   }
  // return (


  //   <div className='divContainer'>
  //     <h1>{num.user},{num.age}</h1>
  //     <button onClick={btnClicked}>click</button>
  //   </div>
  // )

// let [num, setNum] = useState([10,20,30])

//     const btnClicked=()=>{
//    const newNum=[...num];
//   newNum.push(100);
  
//    setNum(newNum);
//     }
//   return (


//     <div className='divContainer'>
//       <h1>{num}</h1>
//       <button onClick={btnClicked}>click</button>
//     </div>









  

  //   let [num, setNum] = useState({username:'ABC',id:1234})

//     const btnClicked=()=>{
// const newNum={...num};
// newNum.username='XYZ';
// newNum.id=5678;
// setNum(newNum);
//     }
//   return (


//     <div className='divContainer'>
//       <h1>Name:{num.username} , Id:{num.id}</h1>
//       <button onClick={btnClicked}>click</button>
//     </div>
//   )






}


export default App















