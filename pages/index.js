import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import classNames from 'classnames';
import { MicrophoneIcon, ViewGridIcon, XIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import Avatar from '../components/Avatar';
import Footer from '../components/Footer';
import Meta from '../components/Meta';

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState('');

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

  const onQuery = (e) => {
    setQuery(e.target.value);
  };

  const onClear = () => {
    setQuery('');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Meta title="Google 2.0 | Parimal Nakrani" />

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="/avatar.jpg" />
        </div>
      </header>

      <form className="flex flex-col items-center mt-20 flex-grow w-4/5">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          width={300}
          height={100}
          alt="google logo"
        />

        <div className="flex w-full mt-5 hover:shadow-lg max-w-md focus-within:shadow-lg rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            value={query}
            onChange={onQuery}
            type="text"
            className="focus:outline-none flex-grow"
          />
          {query && (
            <XIcon
              onClick={onClear}
              className="h-5 ml-3 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            />
          )}
          <MicrophoneIcon
            className={classNames('text-gray-500 h-5 hidden sm:inline-flex', {
              'border-l pl-4 border-gray-300': query,
            })}
          />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button type="submit" className="btn" onClick={onSearch}>
            Google Search
          </button>
          <button type="button" className="btn">
            I&apos;m Feeling Lucky
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
