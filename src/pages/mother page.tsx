// MothersDashboard.tsx
import React, { useEffect, useState } from 'react';

interface Mother {
  motherId: number;
  userId: number;
  birthday: string;
  bloodType: string;
}

const MotherPage: React.FC = () => {
  const [mothers, setMothers] = useState<Mother[]>([]);

  useEffect(() => {
    const fetchMothersData = async () => {
      try {
        const response = await fetch('/api/mothers');
        if (response.ok) {
          const data = await response.json();
          setMothers(data.mothers);
        } else {
          throw new Error('Failed to fetch mothers data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMothersData();
  }, []);

  return (
    <div>
      <h1>Mothers page</h1>
      {mothers.map((mother) => (
        <div key={mother.motherId}>
          <h2>Mother ID: {mother.motherId}</h2>
          <p>User ID: {mother.userId}</p>
          <p>Birthday: {mother.birthday}</p>
          <p>Blood Type: {mother.bloodType}</p>
        </div>
      ))}
    </div>
  );
};

export default MotherPage;
