import React from 'react'

const App = () => {

  // .setItem() sets data to local storage in the form of key value pair
  localStorage.setItem('name','ABC')
  localStorage.setItem('age','10')
  localStorage.setItem('Highscore','10')

// .getItem used to get item from local storage

//localStorage.clear() used to clear whole localStorage
  

//  localStorage.removeItem used to remove specific item from localStorage
  localStorage.removeItem('Highscore')
  localStorage.removeItem('age')


  // to save object into local storage
  const user={
    username: "ABC",
    age:10,
  }
  
  
 localStorage.setItem('user',JSON.stringify(user))

 const user2=JSON.parse(localStorage.getItem('user'));
 console.log(user2)


  return (
    <div>
      App
    </div>
  )
}

export default App
