"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";


export default function addTask() {

  const [title, setTitle] = useState("");
  const[description, setDescription] = useState("");

  const router = useRouter();


const handleSubmit = async (e) =>{
  e.preventDefault();

  if(!title || !description ) {
    alert("Title and description are required");
    return;
  }

  try{
     const  res = await fetch('http://localhost:3001/api/tasks', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({title, description}),
    });

    if(res.ok) {
      router.push('/');
    }else{
      throw new Error("failed to create a task");
    }
    

  }catch(error){

    console.log(error);
  }

};
  return (
    <form  onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input className="border border-slate-500 px-2 py-2"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Note" />

<input className="border border-slate-500 px-2 py-2"
       onChange={(e) => setDescription(e.target.value)}
       value={description}
        type="text"
        placeholder="Note Description" />

        <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Add Note</button>
    </form>
  )
}
