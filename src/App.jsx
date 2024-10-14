
// styling sidebar
// styling button input



// managing state to switch component 
// ===> at begining , there is no project. newProject.jsx will show. but there is project but not selected any project, noProjectSelected.jsx will show.



// handling project creation updating ui 
// styling modal 
// making projects selectable 
// handling project deletion 
// managing task 

import { useState } from "react";
import NewProject from "./components/newProject";
import ProjectsSidebar from "./components/projectsSidebar";
import NoProjectSelected from "./components/noProjectSelected";






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



let content;
 if(projectState.selectProjectId === null){
  content = <NewProject></NewProject>
 }else if (projectState.selectProjectId === undefined){
  content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
 }





  return (
    <main className="h-screen my-8">
      <ProjectsSidebar onStartAddProject = {handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
