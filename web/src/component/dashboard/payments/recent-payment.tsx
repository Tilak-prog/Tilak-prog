import React from 'react';
import Payments from './payments';

const RecentPayment = () => {
  return (
    <div className="relative right-8">
      <div className="flex absolute top-8 pt-3  ">
        <div className="w-64 h-auto bg-blue-160  mx-3 py-2 border-2 border-gray-300  rounded-2xl tracking-wide ">
          <div className="flex">
            <small className="px-2 text-black-150 tracking-tight">Paid (lakhs INR)</small>
            <small className="absolute left-40 text-black-150 tracking-tight">Institution name</small>
          </div>
          <Payments day="tu" amount="10 k" name="Institution Name" />

          <Payments day="tu" amount="10 k" name="Institution Name" />

          <Payments day="tu" amount="10 k" name="Institution Name" />

          <Payments day="tu" amount="10 k" name="Institution Name" />

          <Payments day="tu" amount="10 k" name="Institution Name" />

          <Payments day="tu" amount="10 k" name="Institution Name" />

          <Payments day="tu" amount="10 k" name="Institution Name" />
        </div>
      </div>
    </div>
  );
};

export default RecentPayment;