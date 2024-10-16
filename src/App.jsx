
// styling sidebar
// styling button input



// managing state to switch component 
// ===> at begining , there is no project. newProject.jsx will show. but there is project but not selected any project, noProjectSelected.jsx will show.



// handling project creation updating ui 
// creating the database, taking value from input, storing it , showing it to the sidebar.

// styling modal 
// making projects selectable 
// handling project deletion 
// managing task 

import { useState } from "react";
import NewProject from "./components/newProject";
import ProjectsSidebar from "./components/projectsSidebar";
import NoProjectSelected from "./components/noProjectSelected";
import SelectedProject from "./components/selectedProject";






function App() {

const [projectState, setProjectState] = useState({
  selectProjectId : undefined,
  projects : []


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

let content = <SelectedProject project={selectproject}></SelectedProject>;
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


  return (
    <main className="h-screen my-8">
      <ProjectsSidebar projects={projectState.projects} onStartAddProject = {handleStartAddProject} onSelectedProject={handleSelectedProject}/>
      {content}
    </main>
  );
}

export default App;
