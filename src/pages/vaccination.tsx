// VaccinesDashboard.tsx
import React, { useEffect, useState } from 'react';

interface Vaccine {
  vaccineId: number;
  name: string;
  description: string;
  dosage: string;
  ageRange: string;
  dosageType: string;
  duration: string;
  createdDate: string;
}

const Vaccination: React.FC = () => {
  const [vaccines, setVaccines] = useState<Vaccine[]>([]);

  useEffect(() => {
    const fetchVaccinesData = async () => {
      try {
        const response = await fetch('/api/vaccines');
        if (response.ok) {
          const data = await response.json();
          setVaccines(data.vaccines);
        } else {
          throw new Error('Failed to fetch vaccines data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchVaccinesData();
  }, []);

  return (
    <div>
      <h1>Vaccines</h1>
      {vaccines.map((vaccine) => (
        <div key={vaccine.vaccineId}>
          <h2>Vaccine Name: {vaccine.name}</h2>
          <p>Description: {vaccine.description}</p>
          <p>Dosage: {vaccine.dosage}</p>
          <p>Age Range: {vaccine.ageRange}</p>
          <p>Dosage Type: {vaccine.dosageType}</p>
          <p>Duration: {vaccine.duration}</p>
          <p>Created Date: {vaccine.createdDate}</p>
        </div>
      ))}
    </div>
  );
};

export default Vaccination;
