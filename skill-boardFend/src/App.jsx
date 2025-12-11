import DashboardLayout from "./layouts/dashboardLayOut";
import Dashboard from "./pages/dashboard";
import { Routes, Route } from "react-router-dom";
import MySkills from "./pages/skill/MySkills";
import MyGoals from "./pages/MyGoals";
import MyProjects from "./pages/MyProjects";

function App() {
  return (
    <>
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
