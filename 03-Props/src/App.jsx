import React from 'react'

import Card from './Components/Card'


const App = () => {
  return (
   <div className='parent'>
      
    <Card user='Aman' age={18} />
    <Card user='Rohit' age={20} />
    
    </div>
  )
}

export default App
