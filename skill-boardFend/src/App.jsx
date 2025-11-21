import DashboardLayout from "./layouts/dashboardLayOut";
import Dashboard from "./pages/dashboard";
import { Routes, Route } from "react-router-dom";
import MySkills from "./pages/MySkills";
import MyGoals from "./pages/MyGoals";
import MyProjects from "./pages/MyProjects";

function App() {
  return (
    <>
      {/* <h1>Hi Shad-CN</h1> */}
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/goals" element={<MyGoals />} />
          <Route path="/skills" element={<MySkills />} />
          <Route path="/projects" element={<MyProjects />} />
        </Routes>
      </DashboardLayout>
    </>
  );
}

export default App;
