import EditTaskForm from "@/components/EditTaskForm";


const getTaskById = async(id) => {

  try{

  const res = await fetch (`http://localhost:3001/api/tasks/${id}`, {
    cache:"no-store",
  });


  if(!res.ok){
    throw new Error("failed to fetch task");

  }
  return res.json();

} catch{
  console.log(error);


}

};

export default  async function EditTask({params}) {

  const {id} = params;
 const {task} =  await getTaskById(id);
  const{title, description} = task;
  return (
    <div>
        <EditTaskForm id={id} title={title}  description ={description}/>
    

    </div>

  )
  
}
