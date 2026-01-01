import DashboardLayout from "./layouts/dashboardLayOut";
import Dashboard from "./pages/dashboard";
import { Routes, Route } from "react-router-dom";
import MySkills from "./pages/skill/MySkills";
import MyGoals from "./pages/MyGoals";
import MyProjects from "./pages/MyProjects";
import SkillsProvider from "./contexts/SkillsContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <DashboardLayout>
        <SkillsProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/goals" element={<MyGoals />} />
            <Route path="/skills" element={<MySkills />} />
            <Route path="/projects" element={<MyProjects />} />
          </Routes>
        </SkillsProvider>
      </DashboardLayout>
    </>
  );
}

export default App;
