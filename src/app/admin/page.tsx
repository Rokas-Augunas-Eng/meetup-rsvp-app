'use client';
import { CustomBarChart } from '@/components/CustomBarChart/CustomBarChart';
import { ageCounts } from '@/components/CustomBarChart/utitls/ageGroup';
import { guestCount } from '@/components/CustomBarChart/utitls/guestGroup';
import { professionCounts } from '@/components/CustomBarChart/utitls/professionGroup';
import { LinkButton } from '@/components/LinkButton/LinkButton';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full h-14 flex items-center bg-white shadow">
        <LinkButton name="Back" />
      </div>
      <div className="flex flex-col items-center py-8">
        <CustomBarChart
          data={ageCounts}
          title="Age Distribution"
          dataKey="ageRange"
        />
        <CustomBarChart
          data={guestCount}
          title="Average Group Size"
          dataKey="guestRange"
        />
        <CustomBarChart
          data={professionCounts}
          title="Professionals & Students Count"
          dataKey="professionRange"
        />
      </div>
    </div>
  );
}
