import React, { useEffect, useState } from 'react';
import PageHeader from '@/components/header/page-header';

interface Vaccine {
  vaccineId: number;
  
  name: string;
  category: string;
  dose: string;
  duration: string;
  description: string;
  ageRange: string;
  createdDateTime: string;
}

const VaccinesPage: React.FC = () => {
  const [vaccines, setVaccines] = useState<Vaccine[]>([]);

  useEffect(() => {
    
    const dummyData: Vaccine[] = [
      {
        vaccineId: 1,
        name: "Vaccine A",
        category: "Category A",
        dose: "1",
        duration: "2 weeks",
        description: "Description of Vaccine A",
        ageRange: "18-60",
        createdDateTime: "2024-03-27T12:00:00",
      },
      {
        vaccineId: 2,
        name: "Vaccine B",
        category: "Category B",
        dose: "2",
        duration: "4 weeks",
        description: "Description of Vaccine B",
        ageRange: "20-65",
        createdDateTime: "2024-03-28T10:00:00",
      },
      
    ];

    
    setVaccines(dummyData);
  }, []);

  return (
    <div className="mx-auto w-full bg-muted rounded mt-1 pb-4">
      <PageHeader pageName="Vaccines" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Vaccine ID</th>
              
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Dose</th>
              <th className="px-4 py-2">Duration</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Age Range</th>
              <th className="px-4 py-2">Created Date Time</th>
            </tr>
          </thead>
          <tbody>
            {vaccines.map((vaccine) => (
              <tr key={vaccine.vaccineId}>
                <td className="border px-4 py-2">{vaccine.vaccineId}</td>
                <td className="border px-4 py-2">{vaccine.name}</td>
                <td className="border px-4 py-2">{vaccine.category}</td>
                <td className="border px-4 py-2">{vaccine.dose}</td>
                <td className="border px-4 py-2">{vaccine.duration}</td>
                <td className="border px-4 py-2">{vaccine.description}</td>
                <td className="border px-4 py-2">{vaccine.ageRange}</td>
                <td className="border px-4 py-2">{vaccine.createdDateTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VaccinesPage;
