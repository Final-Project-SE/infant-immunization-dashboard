import { useGetHealthStations } from "@/hooks/api/health-station";
import { useGetVaccines } from "@/hooks/api/vaccine";
import PageHeader from "@/components/header/page-header";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Spinner } from "@/components/ui";
import ErrorMessage from "@/components/error-display/error-message";
import Empty from "@/components/error-display/empty";
import { HealthStation } from "@/utils/types/component";

function Dashboard() {
  const { hs: healthStations, isPending: hsPending, error: hsError } = useGetHealthStations();
  const { vaccines, isPending: vPending, error: vError } = useGetVaccines();

  if (hsPending || vPending) return <Spinner />;

  if (hsError) return <ErrorMessage error={hsError} />;
  if (vError) return <ErrorMessage error={vError} />;

  if (!healthStations || !vaccines) return <Empty resourceName="data" />;

  const transformedHealthStations = healthStations.map((hs: HealthStation) => ({ name: hs.name, count:  healthStations.length }));
  const transformedVaccines = vaccines.map(vaccine => ({ name: vaccine.name, count: vaccine.dose }));

  
  return (
    <div className="mx-auto w-full bg-muted rounded mt-1 pb-4">
      <PageHeader pageName="Dashboard" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mt-4">
            <h2>Health Stations</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={transformedHealthStations}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4">
            <h2>Vaccines</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={transformedVaccines}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;