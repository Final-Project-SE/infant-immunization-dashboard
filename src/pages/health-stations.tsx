import React from "react";
import PageHeader from "@/components/header/page-header";
import HealthStationTable from "@/components/table/health-station-table";
import { HealthStation } from "@/utils/types/component";

const healthStations: HealthStation[] = [
  {
    id: 1,
    name: "Jimma Health Station",
    type: "Health Station",
    region: "Oromia",
    zone: "Jimma",
    city: "Jimma city",
    kebele: "Kochi",
    houseNumber: "djfxbjbdjxf",
  },
  {
    id: 2,
    name: "Jimma Health Station",
    type: "Health Station",
    region: "Oromia",
    zone: "Jimma",
    city: "Jimma city",
    kebele: "Kochi",
    houseNumber: "djfxbjbdjxf",
  },
  {
    id: 3,
    name: "Jimma Health Station",
    type: "Health Station",
    region: "Oromia",
    zone: "Jimma",
    city: "Jimma city",
    kebele: "Kochi",
    houseNumber: "djfxbjbdjxf",
  },
];

function HealthStations() {
  return (
    <div className="mx-auto w-full bg-muted rounded  mt-1 pb-4 ">
      <PageHeader pageName="HealthStations" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto  mt-2   py-4 px-4  relative">
        <HealthStationTable healthStations={healthStations} />
      </div>
    </div>
  );
}

export default HealthStations;
