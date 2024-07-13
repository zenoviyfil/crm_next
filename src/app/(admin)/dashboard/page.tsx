import MagicButton from '@/app/components/magic-button';
import React from 'react';

export interface PageProps {}

const Page = ({}: PageProps) => {
  return (
    <main>
      <h1 className="text-xl">DashBoard Page</h1>
      <MagicButton />
    </main>
  );
};

export default Page;
