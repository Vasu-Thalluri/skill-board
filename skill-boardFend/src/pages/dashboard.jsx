import { DashboardCards } from "@/components/ui/dashboard-cards";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">"My Skills"</h1>
      <DashboardCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Card>
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <ul className="space-y-3">
            <li className="text-sm">🎯 Added new goal: Learn TypeScript</li>
            <li className="text-sm">⏳ Updated progress on React course</li>
            <li className="text-sm">📅 Scheduled 3 tasks for this week</li>
          </ul>
        </Card>

        <Card>
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
