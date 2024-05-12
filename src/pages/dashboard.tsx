import { LineChart, Line,  CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useGetVaccines } from '@/hooks/api/vaccine';
import { useGetHealthStations } from '@/hooks/api/health-station';
import { Spinner } from "@/components/ui";
import ErrorMessage from "@/components/error-display/error-message";
import Empty from "@/components/error-display/empty";
import PageHeader from "@/components/header/page-header";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
  const { vaccines, isPending: isFetchingVaccines, error: vaccinesError } = useGetVaccines();
  const { hs, isPending: isFetchingHealthStations, error: healthStationsError } = useGetHealthStations();

  if (isFetchingVaccines || isFetchingHealthStations) {
    return <Spinner />;
  }

  if (vaccinesError) {
    return <ErrorMessage message={vaccinesError.message} />;
  }
 
  if (healthStationsError) {
    return <ErrorMessage message={healthStationsError.message} />;
  }

  if (vaccines?.length === 0 || hs?.length === 0) {
    return <Empty resourceName="Data" />;
  }

  const healthStationsPerRegion = hs?.reduce((acc: {[key: string]: number}, hs: {region: string}) => {
    acc[hs.region] = (acc[hs.region] || 0) + 1;   
    return acc;   
  }, {}) || {};

  const transformedHealthStations = Object.entries(healthStationsPerRegion).map(([region, count]) => ({ name: region, count: count || 0 }));

  const vaccinesPerCategory = vaccines?.reduce((acc: {[key: string]: number}, vaccine) => {
    acc[vaccine.category] = (acc[vaccine.category] || 0) + 1;
    return acc;
  }, {}) || {};

  const transformedVaccines = Object.entries(vaccinesPerCategory).map(([category, count]) => ({ name: category, count: count || 0 }));

  return (
    <div className="mx-auto w-full bg-muted rounded mt-1 pb-4">
      <PageHeader pageName="Dashboard" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mt-4">
            <h2>Health Stations</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={transformedHealthStations}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4">
            <h2>Vaccines</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={transformedVaccines}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {transformedVaccines.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;