import { BumpChart } from "@/components/charts/bump-chart";
import { Calendar } from "@/components/charts/calendar";
import { Choropleth } from "@/components/charts/choropleth";
import { CirclePacking } from "@/components/charts/circle-packing";
import {} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="w-full flex flex-wrap gap-4">
      <Card className="w-full overflow-x-scroll">
        <CardHeader>
          <CardTitle>Time line progress</CardTitle>
          <CardDescription>
            This is initial dummy data of the progress of the museum conversion
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[300px] min-w-[600px] ">
          <BumpChart />
        </CardContent>
      </Card>
      <div className="w-full gap-4 flex flex-col md:flex-row">
        <Card className="md:w-1/2 w-full overflow-x-scroll">
          <CardHeader>
            <CardTitle>Object mapping</CardTitle>
            <CardDescription>
              This is initial dummy data of the progress of the museum
              conversion
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <CirclePacking />
          </CardContent>
        </Card>
        <Card className="md:w-1/2 w-full overflow-x-scroll">
          <CardHeader>
            <CardTitle>Conversion activity</CardTitle>
            <CardDescription>
              This is initial dummy data of the progress of the museum
              conversion
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] min-w-[600px]">
            <Calendar />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
