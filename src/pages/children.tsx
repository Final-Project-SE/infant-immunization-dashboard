
import React, { useEffect, useState } from 'react';

interface Child {
  childId: number;
  firstname: string;
  lastname: string;
  middlename: string;
  birthday: string;
}

const Children: React.FC = () => {
  const [children, setChildren] = useState<Child[]>([]);

  useEffect(() => {
    const fetchChildrenData = async () => {
      try {
        const response = await fetch('/api/children');
        if (response.ok) {
          const data = await response.json();
          setChildren(data.children);
        } else {
          throw new Error('Failed to fetch children data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchChildrenData();
  }, []);

  return (
    <div>
      <h1>Children's</h1>
      {children.map((child) => (
        <div key={child.childId}>
          <h2>{`${child.firstname} ${child.lastname}`}</h2>
          <p>Middle Name: {child.middlename}</p>
          <p>Birthday: {child.birthday}</p>
        </div>
      ))}
    </div>
  );
};

export default Children;
