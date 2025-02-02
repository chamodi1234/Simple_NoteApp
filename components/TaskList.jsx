import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
 import {HiPencilAlt} from "react-icons/hi";


 const getTask = async() => {
  try{
     const res = await fetch('http://localhost:3001/api/tasks', {
        cache: "no-store",
    });
      

    if(!res.ok){
      throw new Error("Failed to fetch tasks");

    }
    return res.json();

    }catch(error){
      console.log("error loading tasks:", error);

    }
 };

  

export default async function TaskList() {

  const {tasks} = await getTask();
  return (
  <>
  {tasks.map((t) => (
    
  <div key={t._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
    <div>
        <h2 className="font-bold text-2xl"> {t.title}</h2>
        <div>{t.description}</div>
    </div>
    <div className="flex gap-2">
        <RemoveBtn _id={t._id} />
        <Link href={`/editTask/${t._id}`}>
        <HiPencilAlt size={24} />
            </Link>
    </div>
    </div>
    ))}
    </>
    
  );
  
};


