'use client';

import { FC } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';
// Import necessary modules and components

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalItems: number;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  totalItems,
}) => {
  // ... (unchanged code)
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get('page') ?? '1';
  const per_page = searchParams.get('per_page') ?? '20';
  const totalPages = Math.ceil(totalItems / Number(per_page));

  return (
    <div className="flex gap-2 my-4">
      <button
        className={`flex items-center justify-center gap-2 bg-blue-500 border-[2px] text-white px-2 py-2 rounded-lg text-md font-semibold md:text-base sm:text-xs md:mx-4 transition-all duration-300 dark:text-neutral-400 ${
          hasPrevPage ? ' dark:text-white' : ''
        }`}
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`?page=${Number(page) - 1}&per_page=${per_page}`);
        }}
      >
        <ChevronLeftIcon className="rounded-full w-[20px] h-[20px] bg-white text-blue-800 font-semibold p-1" />
        <p className="md:hidden">Previous</p>
      </button>

      <div className="flex justify-center items-center gap-3">
        {[...Array(totalPages).keys()]
          .filter(
            (pageNumber) =>
              pageNumber + 1 >= Math.max(1, Number(page) - 4) &&
              pageNumber + 1 <= Math.min(totalPages, Number(page) + 5)
          )
          .map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => {
                router.push(`?page=${pageNumber + 1}&per_page=${per_page}`);
              }}
              className={
                Number(page) === pageNumber + 1
                  ? 'relative block rounded bg-green-600 text-white px-2 py-1 text-lg font-medium text-primary-700 transition-all duration-300'
                  : 'relative block rounded bg-transparent px-2 py-1 text-lg md:text-base sm:text-xs text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-black dark:hover:bg-neutral-700 dark:hover:text-white'
              }
            >
              {pageNumber + 1}
            </button>
          ))}
      </div>

      <button
        className={`flex items-center justify-center gap-2 bg-blue-500 border-[2px] text-white px-2 py-2 rounded-lg text-md font-semibold  md:mr-4 transition-all duration-300 dark:text-neutral-400 ${
          hasNextPage ? ' dark:text-white' : ''
        }`}
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`?page=${Number(page) + 1}&per_page=${per_page}`);
        }}
      >
        <p className="md:hidden">Next</p>
        <ChevronRightIcon className="rounded-full w-[20px] h-[20px] bg-white text-blue-800 font-semibold p-1" />
      </button>
    </div>
  );
};

export default PaginationControls;
