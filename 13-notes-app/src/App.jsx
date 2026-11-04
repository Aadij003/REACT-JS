import { useState } from 'react'


const App = () => {
  
  const [Title, SetTitle] = useState('')

  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler=(e)=>{
  e.preventDefault();

  const copyTask=[...task]

  copyTask.push({Title,details})

  setTask(copyTask)


  SetTitle('')
  setDetails('')
  }


 const deleteNote=(index)=>{
 const copyTask=[...task]

 copyTask.splice(index,1)
 setTask(copyTask)
 }

  return (
    <div className='h-screen  lg:flex bg-black text-white '>
      <form className='flex gap-4 lg:w-1/2 items-start p-10  flex-col' onSubmit={(e)=>{
        submitHandler(e);
      }}>
      
      <h1 className='text-4xl font-bold'>Add Notes</h1>


          <input 
        type="text" 
        placeholder='Enter Notes Heading' 
        className='px-5 py-2 font-medium  w-full border-2 rounded outline-none '
        value={Title}
        onChange={(e)=>{
          SetTitle(e.target.value)
        }}
        />
        
        < textarea
        type="text" 
        placeholder='Write Details here' 
          className='px-5 py-2 font-medium flex items-start flex-row w-full h-32 border-2 rounded outline-none '
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />
        
      <button className='text-black bg-white font-medium w-full px-5 py-2 rounded outline-none '  >
        Add Note
        </button>
   
     
      </form>

        <div className=' lg:w-1/2 p-10 lg:border-l-2'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        
      <div className='flex  flex-wrap items-start justify-start mt-5 h-[90%] gap-5 overflow-auto'>   
     
            {task.map((elem,index)=>{

       
              return    <div key={index} className="flex flex-col justify-between items-start relative h-52 bg-cover w-40 rounded-2xl pt-9 pb-5 px-4 text-black bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
                
                <div>
                   <h1 className='leading-tight text-lg font-bold' >{elem.Title}</h1>
            <p className='mt-2 leading-tight font-semibold text-xs text-gray-600' >{elem.details}</p>
                </div>
                 
                 <button  onClick={()=>{
                  deleteNote(index);
                 }}
                 className='w-full cursor-pointer bg-red-500 text-white py-1 text-xs rounded font-bold'>Delete</button>
              </div>
            })}

      </div>

        </div>



    </div>
  )
}

export default App
