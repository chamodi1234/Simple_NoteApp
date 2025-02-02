"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

export default  function EditTaskForm({id, title, description}) {

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit =async (e) =>{
    e.preventDefault();


    try{
      const res = await fetch(`http://localhost:3001/api/tasks/${id}`, {
        method: "PUT",
        headers: {

          "Content-type" : "application/json",

        },
          body: JSON.stringify({newTitle, newDescription}),
        
      });
      if(!res.ok){
        throw new Error("failed to update task");
      }

      router.push("/");

    }catch(error){

      console.log(error);

    }

  }


  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
    <input className="border border-slate-500 px-2 py-2"
    onChange={e => setNewTitle(e.target.value)}
    value={newTitle}
    type="text"
    placeholder="Task" />

<input className="border border-slate-500 px-2 py-2"
onChange={e => setNewDescription(e.target.value)}
value={newDescription}
    type="text"
    placeholder="Task Description" />

    <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Update Note</button>
</form>
  );
}

