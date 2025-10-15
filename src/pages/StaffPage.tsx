import React, { useEffect, useState } from 'react';
import { getStaffMembers } from '../services/staffService';
import type { StaffMember } from '../types/staff';
import StaffCard from '../components/StaffCard';

const StaffPage: React.FC = () => {
  const [staffMembers, setStaffMembers] = useState<StaffMember[]>([]);

  useEffect(() => {
    getStaffMembers().then(setStaffMembers);
  }, []);

  return (
    <div>
      <h2>Our Staff</h2>
      <div className="staff-grid">
        {staffMembers.map((staff) => (
          <StaffCard key={staff.id} staff={staff} />
        ))}
      </div>
    </div>
  );
};

export default StaffPage;
