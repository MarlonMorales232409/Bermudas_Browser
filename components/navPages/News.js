import React from 'react'

const News = ({results}) => {
  return (
    <div className="my-3 mx-6 md:ml-28">
    {results?.entries?.map(({ id, links, source, title }) => (
      <div key={id} className="w-full p-3.5  md:w-2/5">
        <a
          href={links?.[0].href}
          target="_blank"
          rel="noreferrer "
          className="hover:underline "
        >
          <p className="text-lg text-blue-700 dark:text-blue-300">
            {title}
          </p>
        </a>
        <div className="flex gap-4">
          <a
            href={source?.href}
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-300 hover:underline"
          >
            {' '}
            {source?.href}
          </a>
        </div>
      </div>
    ))}
  </div>
  )
}

export default News