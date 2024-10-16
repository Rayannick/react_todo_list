
// styling sidebar
// styling button input



// managing state to switch component 
// ===> at begining , there is no project. newProject.jsx will show. but there is project but not selected any project, noProjectSelected.jsx will show.



// handling project creation updating ui 
// ===>creating the database, taking value from input, storing it , showing it to the sidebar.

// styling modal 
//====> show a modal when input is invalid


// making projects selectable 
// ====> updating the project array  , show the project when it's id is selected


// handling project deletion 
// ====>filter out the selected project for delete


// managing task 
// ===>field inside field , storing with main array


import { useState } from "react";
import NewProject from "./components/newProject";
import ProjectsSidebar from "./components/projectsSidebar";
import NoProjectSelected from "./components/noProjectSelected";
import SelectedProject from "./components/selectedProject";






function App() {

const [projectState, setProjectState] = useState({
  selectProjectId : undefined,
  projects : [],
  tasks : []


})




// when it is called, it unselect the project
function handleStartAddProject(){
  setProjectState((prev)=>{
    return{...prev,selectProjectId:null }
  })
}


function handleAddProject(projectData){
  setProjectState((prev)=> {

    const projectId = Math.random()
    const newProject = {
      ...projectData,
      id : projectId
    }





    return {
      ...prev,selectProjectId : undefined,projects : [...prev.projects,newProject]

    }


  })
}




const selectproject = projectState.projects.find((project)=>project.id === projectState.selectProjectId)

let content = <SelectedProject project={selectproject} onDeleteTask={handleDeleteTask} onDelete={handleDeleteProject} onAddTask={handleAddTask} tasks={projectState.tasks}></SelectedProject>;
 if(projectState.selectProjectId === null){
  content = <NewProject onAdd= {handleAddProject} onCancel={handleCancelAddProject}></NewProject>
 }else if (projectState.selectProjectId === undefined){
  content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
 }




 function handleCancelAddProject (){
  setProjectState((prev)=>{
    return{
      ...prev,selectProjectId : undefined
    }

  })
}
 function handleSelectedProject(id){
  setProjectState((prev)=>{
    return{...prev,
      selectProjectId : id
    }
  })

 }

 function handleDeleteProject(){
  setProjectState((prev)=>{

    // as id is already selected when clicked on the project we dont need pass the id.
    return{
      ...prev,selectProjectId: undefined , projects : prev.projects.filter((project)=> project.id !== prev.selectProjectId)
    }
  })
 }



 function handleAddTask(text){
  setProjectState((prev)=>{ 
    const taskId  = Math.random();
     const newTask = {
      text: text,
      projectId : prev.selectProjectId,
      id : taskId
     }
     return{ ...prev,tasks : [newTask,...prev.tasks]}
  })

 }
 function handleDeleteTask(id){
  setProjectState((prev)=>{
    return{...prev , tasks: prev.tasks.filter((task)=> task.id !== id)}
  })
}
  return (
    <main className="h-screen my-8">
      <ProjectsSidebar projects={projectState.projects} selectedProjectId={projectState.selectProjectId} onStartAddProject = {handleStartAddProject} onSelectedProject={handleSelectedProject}/>
      {content}
    </main>
  );
}

export default App;
