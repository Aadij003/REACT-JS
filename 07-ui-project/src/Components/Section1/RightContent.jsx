import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
     <div id='right' className='h-full w-2/3 p-6 flex flex-nowrap gap-10 overflow-x-auto'>
 {  props.users.map(function(elems,idx){
       return <RightCard color={elems.color} img={elems.img} tag={elems.tag} idx={idx+1}/>
   })}
    </div>
  )
}

export default RightContent
