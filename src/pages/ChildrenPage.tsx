import React, { useEffect, useState } from 'react';
import PageHeader from '@/components/header/page-header';

interface Child {
  childId: number;
  motherId: number;
  firstname: string;
  lastname: string;
  middlename: string;
  birthday: string;
}

const ChildrenPage: React.FC = () => {
  const [children, setChildren] = useState<Child[]>([]);

  useEffect(() => {
    const dummyData: Child[] = [
      {
        childId: 1,
        motherId: 1,
        firstname: "John",
        lastname: "Doe",
        middlename: "Michael",
        birthday: "2010-03-15",
      },
      {
        childId: 2,
        motherId: 1,
        firstname: "Jane",
        lastname: "Doe",
        middlename: "Elizabeth",
        birthday: "2015-07-28",
      },
      // Add more dummy data as needed
    ];

    setChildren(dummyData);
  }, []);

  return (
    <div className="mx-auto w-full bg-muted rounded mt-1 pb-4">
      <PageHeader pageName="Children" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Child ID</th>
              <th className="px-4 py-2">Mother ID</th>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Middle Name</th>
              <th className="px-4 py-2">Birthday</th>
            </tr>
          </thead>
          <tbody>
            {children.map((child) => (
              <tr key={child.childId}>
                <td className="border px-4 py-2">{child.childId}</td>
                <td className="border px-4 py-2">{child.motherId}</td>
                <td className="border px-4 py-2">{child.firstname}</td>
                <td className="border px-4 py-2">{child.lastname}</td>
                <td className="border px-4 py-2">{child.middlename}</td>
                <td className="border px-4 py-2">{child.birthday}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChildrenPage;
