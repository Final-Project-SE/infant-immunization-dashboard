import { LineChart, Line,  CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell,BarChart,
  Bar, } from 'recharts';
import { useGetVaccines } from '@/hooks/api/vaccine';
import { useGetHealthStations } from '@/hooks/api/health-station';
import { useGetChildren } from '@/hooks/api/children';
import { Spinner } from "@/components/ui";
import ErrorMessage from "@/components/error-display/error-message";
import Empty from "@/components/error-display/empty";
import PageHeader from "@/components/header/page-header";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
  const { vaccines, isPending: isFetchingVaccines, error: vaccinesError } = useGetVaccines();
  const { hs, isPending: isFetchingHealthStations, error: healthStationsError } = useGetHealthStations();
  const { children, isPending: isFetchingChildren, error: childrenError } = useGetChildren();
  
  

  if (isFetchingVaccines || isFetchingHealthStations || isFetchingChildren) { 
    return <Spinner />;
  }

  if (vaccinesError || childrenError) { 
    return <ErrorMessage message={vaccinesError ? vaccinesError.message : childrenError.message} />; 
  }

  if (healthStationsError) {
    return <ErrorMessage message={healthStationsError.message} />;
  }

  if (vaccines?.length === 0 || hs?.length === 0) {
    return <Empty resourceName="Data" />;
  }

  const healthStationsData = hs?.map((station) => ({
    name: station.name,
    mothers: station.mothers != null ? station.mothers : 0,
    children: station.children != null ? station.children : 0,
  })) || [];
  
  const transformedHealthStations = healthStationsData;

  const vaccinesPerCategory = vaccines?.reduce((acc: {[key: string]: number}, vaccine) => {
    acc[vaccine.category] = (acc[vaccine.category] || 0) + 1;
    return acc;
  }, {}) || {};

  const transformedVaccines = Object.entries(vaccinesPerCategory).map(([category, count]) => ({ name: category, count: count || 0 }));
  const immunizationByStation = [
    { name: "Station 1", infants: 10, toddlers: 12, preschoolers: 22 },
    { name: "Station 2", infants: 8, toddlers: 10, preschoolers: 18 },
    { name: "Station 3", infants: 9, toddlers: 11, preschoolers: 20 },
  ];

  const immunizationStatus = children?.reduce((acc: {[key: string]: number}, child) => {
    const key = child.isVaccineCompleted ? 'Completed' : 'Not Completed';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {}) || {};

  const transformedImmunizationStatus = Object.entries(immunizationStatus).map(([status, count]) => ({ name: status, count: count || 0 }));



  

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
  <Line type="monotone" dataKey="mothers" stroke="#8884d8" />
  <Line type="monotone" dataKey="children" stroke="#82ca9d" />
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
          <div className="mt-4">
            <h2>Immunization Status</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={transformedImmunizationStatus}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {transformedImmunizationStatus.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
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
         
        </div>
      </div>
    </div>
  );
};

export default Dashboard;




