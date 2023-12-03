'use client';
import React from 'react';
import PaginationControls from '@/app/components/PaginationControls';
import Navbar from '@/app/components/Navbar';
import DashboardTable from '../components/DashboardTable';
const data = [
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-spotify.svg',
    applicant: 'Spotify',
    amount: '$2,500',
    date: 'Wed 3:00pm',
    status: 'paid',
    account: 'visa',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-amazon.svg',
    applicant: 'Amazon',
    amount: '$5,000',
    date: 'Wed 1:00pm',
    status: 'paid',
    account: 'master-card',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-pinterest.svg',
    applicant: 'Pinterest',
    amount: '$3,400',
    date: 'Mon 7:40pm',
    status: 'pending',
    account: 'master-card',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-google.svg',
    applicant: 'Google',
    amount: '$1,000',
    date: 'Wed 5:00pm',
    status: 'paid',
    account: 'visa',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-netflix.svg',
    applicant: 'netflix',
    amount: '$14,000',
    date: 'Wed 3:30am',
    status: 'cancelled',
    account: 'visa',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-spotify.svg',
    applicant: 'Spotify',
    amount: '$2,500',
    date: 'Wed 3:00pm',
    status: 'paid',
    account: 'visa',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-amazon.svg',
    applicant: 'Amazon',
    amount: '$5,000',
    date: 'Wed 1:00pm',
    status: 'paid',
    account: 'master-card',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-pinterest.svg',
    applicant: 'Pinterest',
    amount: '$3,400',
    date: 'Mon 7:40pm',
    status: 'pending',
    account: 'master-card',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-google.svg',
    applicant: 'Google',
    amount: '$1,000',
    date: 'Wed 5:00pm',
    status: 'paid',
    account: 'visa',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-netflix.svg',
    applicant: 'netflix',
    amount: '$14,000',
    date: 'Wed 3:30am',
    status: 'cancelled',
    account: 'visa',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-spotify.svg',
    applicant: 'Spotify',
    amount: '$2,500',
    date: 'Wed 3:00pm',
    status: 'paid',
    account: 'visa',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-amazon.svg',
    applicant: 'Amazon',
    amount: '$5,000',
    date: 'Wed 1:00pm',
    status: 'paid',
    account: 'master-card',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-pinterest.svg',
    applicant: 'Pinterest',
    amount: '$3,400',
    date: 'Mon 7:40pm',
    status: 'pending',
    account: 'master-card',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-google.svg',
    applicant: 'Google',
    amount: '$1,000',
    date: 'Wed 5:00pm',
    status: 'paid',
    account: 'visa',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-netflix.svg',
    applicant: 'netflix',
    amount: '$14,000',
    date: 'Wed 3:30am',
    status: 'cancelled',
    account: 'visa',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-spotify.svg',
    applicant: 'Spotify',
    amount: '$2,500',
    date: 'Wed 3:00pm',
    status: 'paid',
    account: 'visa',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-amazon.svg',
    applicant: 'Amazon',
    amount: '$5,000',
    date: 'Wed 1:00pm',
    status: 'paid',
    account: 'master-card',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-pinterest.svg',
    applicant: 'Pinterest',
    amount: '$3,400',
    date: 'Mon 7:40pm',
    status: 'pending',
    account: 'master-card',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-google.svg',
    applicant: 'Google',
    amount: '$1,000',
    date: 'Wed 5:00pm',
    status: 'paid',
    account: 'visa',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-netflix.svg',
    applicant: 'netflix',
    amount: '$14,000',
    date: 'Wed 3:30am',
    status: 'cancelled',
    account: 'visa',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-spotify.svg',
    applicant: 'Spotify',
    amount: '$2,500',
    date: 'Wed 3:00pm',
    status: 'paid',
    account: 'visa',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-amazon.svg',
    applicant: 'Amazon',
    amount: '$5,000',
    date: 'Wed 1:00pm',
    status: 'paid',
    account: 'master-card',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-pinterest.svg',
    applicant: 'Pinterest',
    amount: '$3,400',
    date: 'Mon 7:40pm',
    status: 'pending',
    account: 'master-card',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-google.svg',
    applicant: 'Google',
    amount: '$1,000',
    date: 'Wed 5:00pm',
    status: 'paid',
    account: 'visa',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-netflix.svg',
    applicant: 'netflix',
    amount: '$14,000',
    date: 'Wed 3:30am',
    status: 'cancelled',
    account: 'visa',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-spotify.svg',
    applicant: 'Spotify',
    amount: '$2,500',
    date: 'Wed 3:00pm',
    status: 'paid',
    account: 'visa',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-amazon.svg',
    applicant: 'Amazon',
    amount: '$5,000',
    date: 'Wed 1:00pm',
    status: 'paid',
    account: 'master-card',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-pinterest.svg',
    applicant: 'Pinterest',
    amount: '$3,400',
    date: 'Mon 7:40pm',
    status: 'pending',
    account: 'master-card',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-google.svg',
    applicant: 'Google',
    amount: '$1,000',
    date: 'Wed 5:00pm',
    status: 'paid',
    account: 'visa',
    formnumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-netflix.svg',
    applicant: 'netflix',
    amount: '$14,000',
    date: 'Wed 3:30am',
    status: 'cancelled',
    account: 'visa',
    formnumber: '1234',
    expiry: '06/2026',
  },
];
export default function Dashboard({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams['page'] ?? '1';
  const per_page = searchParams['per_page'] ?? '20';

  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...

  const entries = data.slice(start, end);
  console.log(entries);
  // const getUserDetails = async () => {
  //   const res = await axios.get('/api/users/me');
  //   console.log(res.data);
  //   // setData(res.data.data._id);
  // };
  return (
    <div className="bg-white flex flex-col items-center justify-center h-full w-full text-black">
      <Navbar />
      <DashboardTable transactions={entries} />
      <div className="flex flex-col gap-2 items-center">
        <PaginationControls
          hasNextPage={end < data.length}
          hasPrevPage={start > 0}
          totalItems={data.length}
        />
      </div>
    </div>
  );
}
