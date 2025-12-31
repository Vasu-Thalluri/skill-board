import { DashboardCards } from "@/components/ui/dashboard-cards";
import { Card } from "@/components/ui/card";
import { SkillsContext } from "@/contexts/SkillsContext";
import { useContext, useEffect } from "react";
import SkillGrowthDoNut from "@/components/ui/charts/SkillGrowthDoNutChart";

export default function Dashboard() {
  const { skillData, fetchAllSkills } = useContext(SkillsContext);
  useEffect(() => {
    fetchAllSkills();
  }, []);

  const chartData = skillData.map((skill) => ({
    name: skill.skillName,
    value: (skill.completedContent / skill.totalContent) * 100,
  }));
  console.log(chartData);

  const totalCompleted = skillData.reduce(
    (sum, s) => sum + s.completedContent,
    0
  );
  console.log(totalCompleted);

  const totalPossible = skillData.reduce((sum, s) => sum + s.totalContent, 0);
  console.log(totalPossible);

  const overAllSkillPercent = Math.round(
    (totalCompleted / totalPossible) * 100
  );
  console.log(overAllSkillPercent);
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">"My Skills"</h1>
      <section className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
          <DashboardCards />
          <SkillGrowthDoNut
            data={chartData}
            overall={overAllSkillPercent}
            className="flex justify-center"
          />
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Card className="p-5">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <ul className="space-y-3">
            <li className="text-sm">🎯 Added new goal: Learn TypeScript</li>
            <li className="text-sm">⏳ Updated progress on React course</li>
            <li className="text-sm">📅 Scheduled 3 tasks for this week</li>
          </ul>
        </Card>

        <Card className="p-5">
          <h2 className="text-xl font-semibold mb-4">Upcoming Deadlines</h2>
          <ul className="space-y-3">
            <li className="text-sm">📌 Finish API integration — Dec 5</li>
            <li className="text-sm">📌 Complete UI polishing — Dec 8</li>
            <li className="text-sm">📌 Deploy app — Dec 10</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
