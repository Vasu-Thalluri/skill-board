import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../card";

const colors = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444", "#0ea5e9"];

export default function SkillGrowthDoNut({ data, overall }) {
  console.log(overall);
  return (
    <Card className="w-[250px] h-[280px]">
      <CardHeader className="items-center pb-0">
        <CardTitle>Skill Growth in %</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="relative w-full max-w-[260px] aspect-square mx-auto">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius="65%"
                outerRadius="85%"
                paddingAngle={4}
              >
                {data.map((_, index) => (
                  <Cell key={index} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-3xl font-bold">{overall}%</span>
            <span className="text-sm text-muted-foreground">
              Overall Growth
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
