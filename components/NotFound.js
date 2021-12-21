function NotFound({ query }) {
  return (
    <div className="mx-auto w-full pl-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 mt-16">
      <p>
        Your search - <span className="font-bold">{query}</span> - did not match
        any documents.
      </p>
      <div className="mt-3">
          <span className="">Suggestions:</span>
          <ul className="mt-2 list-disc list-inside">
              <li className="pl-3">Make sure that all words are spelled correctly.</li>
              <li className="pl-3">Try different keywords.</li>
              <li className="pl-3">Try more general keywords.</li>
          </ul>
      </div>
    </div>
  );
}

export default NotFound;
