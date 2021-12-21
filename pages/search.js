import { useRouter } from 'next/router';
import getConfig from 'next/config';
import Header from '../components/Header';
import SearchResults from '../components/SearchResults';
import Meta from '../components/Meta';

const {
  serverRuntimeConfig: { customSearchApi, googleApiKey, googleContextKey },
} = getConfig();

function Search({ payload }) {
  const router = useRouter();
  const {
    query: { q },
  } = router;
  
  return (
    <div>
      <Meta title={`${q} - Google Search`} />
      <Header />
      <SearchResults payload={payload} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const {
    query: { q, start },
  } = context;

  const startIndex = Number(start) || 0;
  const data = await fetch(
    `${customSearchApi}?key=${googleApiKey}&cx=${googleContextKey}&q=${q}&start=${startIndex}`
  ).then((response) => response.json());

  return {
    props: {
      payload: data,
    },
  };
}
