import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {
  const [title,settitle] = useState('')
  const [detail,setdetail]=useState('')
  const [task,setTask]= useState([])

const submitHandler = (e) => 
{
  e.preventDefault()
  const copyTask = [...task];
  copyTask.push({title,detail})
  setTask(copyTask)
  settitle('')
  setdetail('')
}

const deleteNote = (idx)=> 
{
  console.log("hello");
  const copyTask=[...task];
  copyTask.splice(idx,1);
  setTask(copyTask);



}

  return (
<div className='h-screen lg:flex bg-black text-white' >

<form  onSubmit={(e)=>
  {
    submitHandler(e)
  } 
}className='flex items-start lg:w-1/2 gap-5  p-10 items-start flex-col'>
    <h1 className="text-3xl font-bold">Add Notes</h1>
     

   {/* first input for heading */}
    <input 
       type="text"
       placeholder='Enter Notes Heading'
       className='px-5 py-2 w-full font-medium  border-2 rounded outline-none'
       value={title}
       onChange={(e)=>{
        settitle(e.target.value)
       }

       }
    />

    {/* input for Details */}
    <textarea
       type="text" 
       className='px-5 py-2 flex items-start flex-row w-full font-medium h-32 border-2 rounded outline-none'
       placeholder='Write Details'
       value={detail}
       onChange={(e)=>
       {
        setdetail(e.target.value)
       }
       }
    />

    <button className='bg-white text-black px-5 py-2 w-full font-medium rounded active:bg-gray-300'>Add Note</button>
  


</form>

<div className='lg:border-l-2 lg:w1/ p-10'>
  <h1 className=" text-3xl font-bold">Recent Notes</h1>
  <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto">
   {task.map(function(elem,idx){
     return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 rounded-xl bg-white bg-cover text-black pt-9 px-4 pb-4 bg-[url('https://i.pinimg.com/474x/a6/84/27/a68427ce2fd435c1b20f1c19fd125664.jpg')]">
      <div>
      <h3 className='leading-tight text-shadow-2xs font-bold'>{elem.title}</h3>
      <p className='mt-2 leading-tight font-medium text-gray-700'>{elem.detail}</p>
      </div>
      <button onClick={()=>
        {
          deleteNote(idx)
        }
      } className='w-full cursor-pointer active:scale-20 bg-red-600 text-white py-1 text-xs rounded-full font-bold text-white '>Delete</button>
    </div>
    
  })}
    
</div>
  

</div>


</div>
  );
};

export default App