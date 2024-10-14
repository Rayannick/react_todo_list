
// styling sidebar
// styling button input
// managing state to switch component 
// handling project creation updating ui 
// styling modal 
// making projects selectable 
// handling project deletion 
// managing task 

import NewProject from "./components/newProject";
import ProjectsSidebar from "./components/projectsSidebar";






function App() {
  return (
    <main className="h-screen my-8">
      <ProjectsSidebar />
      <NewProject/>
    </main>
  );
}

export default App;
