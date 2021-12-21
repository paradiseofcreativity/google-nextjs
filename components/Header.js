import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {
  const router = useRouter();
  const {
    query: { q },
  } = router;
  const [query, setQuery] = useState(q || '');

  const onHome = () => {
    router.push('/');
  };

  const onQuery = (e) => {
    setQuery(e.target.value);
  };

  const onClear = () => {
    setQuery('');
  };

  const onSearch = (e) => {
    e.preventDefault();

    if (!query) return;

    router.push({
      pathname: '/search',
      query: {
        q: query,
      },
    });
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={onHome}
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            type="text"
            className="flex-grow w-full focus:outline-none"
            value={query}
            onChange={onQuery}
          />
          {query && (
            <XIcon
              onClick={onClear}
              className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            />
          )}
          <MicrophoneIcon
            className={classNames(
              'h-6 mr-3 hidden sm:inline-flex text-blue-500',
              {
                'border-l-2 pl-4 border-gray-300': query,
              }
            )}
          />
          <SearchIcon
            onClick={onSearch}
            className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer transition duration-100 transform hover:scale-125"
          />
          <button hidden type="submit" onClick={onSearch}>
            Search
          </button>
        </form>

        <Avatar className="ml-auto" url="/avatar.jpg" />
      </div>

      <HeaderOptions />
    </header>
  );
}

export default Header;
