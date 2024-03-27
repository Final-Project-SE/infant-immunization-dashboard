import React, { useEffect, useState } from 'react';
import PageHeader from '@/components/header/page-header';

interface Mother {
  motherId: number;
  userId: number;
  birthday: string;
  bloodType: string;
}

const MothersPage: React.FC = () => {
  const [mothers, setMothers] = useState<Mother[]>([]);

  useEffect(() => {
    const dummyData:Mother [] = [
      {
        motherId: 1,
        userId: 101,
        birthday: "1990-05-15",
        bloodType: "A+",
      },
      {
        motherId: 2,
        userId: 102,
        birthday: "1985-12-28",
        bloodType: "B-",
      },
    ];

    
    setMothers(dummyData);
  }, []);

  return (
    <div className="mx-auto w-full bg-muted rounded mt-1 pb-4">
      <PageHeader pageName="Mothers" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Mother ID</th>
              <th className="px-4 py-2">User ID</th>
              <th className="px-4 py-2">Birthday</th>
              <th className="px-4 py-2">Blood Type</th>
            </tr>
          </thead>
          <tbody>
            {mothers.map((mother) => (
              <tr key={mother.motherId}>
                <td className="border px-4 py-2">{mother.motherId}</td>
                <td className="border px-4 py-2">{mother.userId}</td>
                <td className="border px-4 py-2">{mother.birthday}</td>
                <td className="border px-4 py-2">{mother.bloodType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MothersPage;
