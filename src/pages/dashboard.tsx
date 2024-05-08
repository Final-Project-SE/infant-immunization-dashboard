import PageHeader from "@/components/header/page-header";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line,CartesianGrid,ResponsiveContainer  } from 'recharts';

function Dashboard() {
  // Sample data
  const immunizationByStation = [
    { name: 'Station 1', infants: 100, toddlers: 120, preschoolers: 90 },
    { name: 'Station 2', infants: 80, toddlers: 100, preschoolers: 120 },
    { name: 'Station 3', infants: 90, toddlers: 110, preschoolers: 80 }
  ];
  const vaccinesGiven = [
    { name: 'Vaccine 1', infants: 80, toddlers: 100, preschoolers: 120 },
    { name: 'Vaccine 2', infants: 90, toddlers: 110, preschoolers: 80 },
    { name: 'Vaccine 3', infants: 100, toddlers: 120, preschoolers: 90 }
  ];
  const appointments = [
    { name: 'Week 1', infants: 200, toddlers: 228, preschoolers: 189 },
    { name: 'Week 2', infants: 210, toddlers: 238, preschoolers: 199 },
    { name: 'Week 3', infants: 220, toddlers: 248, preschoolers: 209 }
  ];

  return (

    <div className="mx-auto w-full bg-muted rounded mt-1 pb-4">
      <PageHeader pageName="Infant Immunization Dashboard" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mt-4">
            <h2>Immunization by Health Station</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={immunizationByStation}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="infants" fill="#8884d8" />
                <Bar dataKey="toddlers" fill="#82ca9d" />
                <Bar dataKey="preschoolers" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4">
  <h2>Vaccines Given</h2>
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={vaccinesGiven}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="infants" stackId="a" fill="#8884d8" />
      <Bar dataKey="toddlers" stackId="a" fill="#82ca9d" />
      <Bar dataKey="preschoolers" stackId="a" fill="#ffc658" />
    </BarChart>
  </ResponsiveContainer>
</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mt-4">
            <h2>Appointments</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={appointments}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="infants" stroke="#8884d8" />
                <Line type="monotone" dataKey="toddlers" stroke="#82ca9d" />
                <Line type="monotone" dataKey="preschoolers" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Dashboard;