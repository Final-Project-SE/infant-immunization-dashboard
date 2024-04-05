import React from 'react';
import PageHeader from '@/components/header/page-header';
import VaccineTable from '@/components/table/vaccine-table';
import { Vaccine } from '@/utils/types/component';

const vaccines: Vaccine[] = [
  {
    id: 1,
    name: 'Vaccine A',
    description: 'Description for Vaccine A',
    dosage: 'Dosage for Vaccine A',
    ageRange: 'Age Range for Vaccine A',
    dosageType: 'Dosage Type for Vaccine A',
    duration: 'Duration for Vaccine A',
    createdDate: new Date(),
  },
  {
    id: 2,
    name: 'Vaccine B',
    description: 'Description for Vaccine B',
    dosage: 'Dosage for Vaccine B',
    ageRange: 'Age Range for Vaccine B',
    dosageType: 'Dosage Type for Vaccine B',
    duration: 'Duration for Vaccine B',
    createdDate: new Date(),
  },
];

const VaccinesPage: React.FC = () => {
  return (
    <div className="mx-auto w-full bg-muted rounded mt-1 pb-4">
      <PageHeader pageName="Vaccines" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative">
        <VaccineTable vaccines={vaccines} />
      </div>
    </div>
  );
};

export default VaccinesPage;
