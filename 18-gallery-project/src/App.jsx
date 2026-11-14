
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userdata, setUserData] = useState([])
  const [index, setindex] = useState(1)

  const limit = 15
  const totalPages = 14

  const getData = async () => {
    try {
      const skip = (index - 1) * limit

      const response = await axios.get(
        `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
      )

      setUserData(response.data.users)
      console.log(response.data.users)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [index])

  let printUserdata = (
    <h3 className='text-gray-400 text-xl'>
      No User Available
    </h3>
  )

  if (userdata.length > 0) {
    printUserdata = userdata.map((elem) => {
      return (
        <div key={elem.id}>
          <a
            href={elem.image}
            target='_blank'
           
          >
            <div className='h-40 w-44 bg-white overflow-hidden rounded-xl'>
              <img
                src={elem.image}
                alt={elem.username}
                className='h-full w-full object-cover'
              />
            </div>

            <h2 className='font-bold text-xl'>
              {elem.username.toUpperCase()}
            </h2>
          </a>
        </div>
      )
    })
  }

  return (
    <div className='bg-black min-h-screen p-4 text-white'>

      <div className='flex flex-wrap gap-4 p-2'>
        {printUserdata}
      </div>

      <div className='flex justify-center items-center gap-6 p-4'>

        <button
          onClick={() => {
            setindex(index - 1)
          }}
          disabled={index === 1}
          className='bg-amber-400 text-black text-sm rounded px-4 py-2 font-semibold disabled:opacity-40'
        >
          Prev
        </button>

        <span>
          Page {index} / {totalPages}
        </span>

        <button
          onClick={() => {
            setindex(index + 1)
          }}
          disabled={index === totalPages}
          className='bg-amber-400 text-black text-sm rounded px-4 py-2 font-semibold disabled:opacity-40'
        >
          Next
        </button>

      </div>

    </div>
  )
}

export default App
