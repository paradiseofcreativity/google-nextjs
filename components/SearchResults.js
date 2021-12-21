import { useRouter } from 'next/router';
import Pagination from './Pagination';
import NotFound from './NotFound';

function SearchResults({ payload }) {
  const router = useRouter();
  const {
    query: { q, start },
  } = router;
  const count = payload.searchInformation?.formattedTotalResults || 0;
  const duration = payload.searchInformation?.formattedSearchTime || 0;
  const startIndex = Number(start) || 0;

  if (count === 0 && startIndex === 0) {
    return <NotFound query={q} />;
  }

  return (
    <div className="mx-auto w-full pl-3 pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {count} results ({duration}) seconds
      </p>

      {payload.items?.map((i) => (
        <div key={i.link} className="max-w-xl mb-8">
          <div className="group">
            <a href={i.link} className="text-sm line-clamp-1">
              {i.formattedUrl}
            </a>
            <a href={i.link}>
              <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                {i.title}
              </h2>
            </a>
          </div>
          <p className="line-clamp-2">{i.snippet}</p>
        </div>
      ))}

      <Pagination count={count} />
    </div>
  );
}

export default SearchResults;
