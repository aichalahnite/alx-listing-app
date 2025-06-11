import React from 'react';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';

export default function Home() {
  return (
    <div className="p-8">
      <Card
        title="Beautiful Apartment"
        image="/assets/house-placeholder.jpg"
        description="A lovely place to stay in the city center."
      />
      <div className="mt-4">
        <Button label="Book Now" onClick={() => alert('Booking...')} />
      </div>
    </div>
  );
}
