import { useRouter } from 'next/router';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

function Pagination({ count }) {
  const router = useRouter();
  const {
    query: { q, start },
  } = router;
  const startIndex = Number(start) || 0;

  if (count !== 10) {
    return <span />;
  }

  return (
    <div className="flex max-w-lg justify-between text-blue-700 mb-10">
      {startIndex >= 10 && (
        <Link
          href={{
            pathname: '/search',
            query: {
              q,
              start: startIndex - 10,
            },
          }}
          passHref
        >
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      <Link
        href={{
          pathname: '/search',
          query: {
            q,
            start: startIndex + 10,
          },
        }}
        passHref
      >
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default Pagination;
