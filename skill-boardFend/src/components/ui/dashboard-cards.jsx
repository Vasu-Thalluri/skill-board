import { Card } from "./card";
//import { cn } from "@/lib/utils";
import { TrendingUp, Target, Clock, CheckCircle } from "lucide-react";

export function DashboardCards() {
  const data = [
    {
      title: "Projects",
      value: "12",
      icon: <Target />,
      color: "text-green-500",
    },
    {
      title: "Completed",
      value: "7",
      icon: <CheckCircle />,
      color: "text-blue-500",
    },
    {
      title: "In Progress",
      value: "4",
      icon: <Clock />,
      color: "text-yellow-500",
    },
    // {
    //   title: "Skill Progress",
    //   value: "+18%",
    //   icon: <TrendingUp />,
    //   color: "text-orange-500",
    // },
  ];

  return (
    <div className="w-full flex justify-center mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
        {data.map((item) => (
          <Card key={item.title} className="p-4 w-40">
            <div className="w-full flex flex-col items-center text-center space-x-4">
              <div className="flex items-center gap-2">
                <div className={item.color}>{item.icon}</div>
                <p className="text-sm font-medium">{item.title}</p>
              </div>
              <h2 className="text-3xl font-bold">{item.value}</h2>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
