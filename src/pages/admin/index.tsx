import {
  CustomerSvg,
  DueSvg,
  OrderSvg,
  ProductSvg,
} from "@/common/constants/svgs";
import DashCard from "@/components/dashboard/DashCard";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis } from "recharts";

function Dashboard() {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  return (
    <section className="p-4 sm:p-6 flex flex-col gap-6 overflow-auto overflow-x-hidden">
      <h2 className="text-xl sm:text-2xl md:3xl text-black-900 font-semibold">
        Dashboard
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <DashCard
          title="Total Product"
          amount={32739}
          icon={<CustomerSvg />}
          profitAmount="+2.13%"
          profitText="Since last month"
        />
        <DashCard
          title="Total Customer"
          amount={32739}
          icon={<ProductSvg />}
          profitAmount="+2.13%"
          profitText="Since last month"
        />
        <DashCard
          title="Total Sales"
          amount={32739}
          icon={<OrderSvg />}
          profitAmount="+2.13%"
          profitText="Since last month"
        />
        <DashCard
          title="Total Due"
          amount={32739}
          icon={<DueSvg />}
          profitAmount="+2.13%"
          profitText="Since last month"
        />
        <DashCard
          title="Total Revenue"
          amount={32739}
          icon={<OrderSvg />}
          profitAmount="+2.13%"
          profitText="Since last month"
        />
        <DashCard
          title="Total Profit"
          amount={32739}
          icon={<OrderSvg />}
          profitAmount="+2.13%"
          profitText="Since last month"
        />
      </div>
      <div className="sm:columns-2 gap-6">
        <div className="w-full relative bg-white p-4 rounded-2xl">
          <div className="mb-6">
            <p className="text-lg font-semibold text-black-900">
              Product Chart
            </p>
          </div>
          <ChartContainer config={chartConfig} className="w-full h-[320px]">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>

        <div className="w-full relative bg-white p-4 rounded-2xl mt-6 sm:mt-0">
          <div className="mb-6">
            <p className="text-lg font-semibold text-black-900">Sale chart</p>
          </div>
          <ChartContainer className="w-full h-[320px]" config={chartConfig}>
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Area
                dataKey="mobile"
                type="natural"
                fill="var(--color-mobile)"
                fillOpacity={0.4}
                stroke="var(--color-mobile)"
                stackId="a"
              />
              <Area
                dataKey="desktop"
                type="natural"
                fill="var(--color-desktop)"
                fillOpacity={0.4}
                stroke="var(--color-desktop)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
