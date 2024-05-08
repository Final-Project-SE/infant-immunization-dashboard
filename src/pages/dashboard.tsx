import PageHeader from "@/components/header/page-header";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, } from 'recharts';

function Dashboard() {
  // Sample data
  const healthStationRegistrations = [
    { name: 'Station 1', value: 100 },
    { name: 'Station 2', value: 120 },
    { name: 'Station 3', value: 90 }
  ];
  const vaccinesGiven = [
    { name: 'Vaccine 1', value: 80 },
    { name: 'Vaccine 2', value: 100 },
    { name: 'Vaccine 3', value: 120 }
  ];

  return (
    <div className="mx-auto w-full bg-muted rounded mt-1 pb-4">
      <PageHeader pageName="Dashboard" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mt-4">
            <h2>Health Station Registrations</h2>
            <BarChart width={500} height={300} data={healthStationRegistrations}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </div>
          <div className="mt-4">
            <h2>Vaccines Given</h2>
            <PieChart width={400} height={400}>
              <Pie dataKey="value" isAnimationActive={false} data={vaccinesGiven} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
              <Tooltip />
            </PieChart>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mt-4">
            <h2>Health Station Registrations</h2>
            <BarChart width={500} height={300} data={healthStationRegistrations}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </div>
          <div className="mt-4">
            <h2>Vaccines Given</h2>
            <PieChart width={400} height={400}>
              <Pie dataKey="value" isAnimationActive={false} data={vaccinesGiven} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;