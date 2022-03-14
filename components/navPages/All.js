import React from 'react'

const All = ({results}) => {
    return (
        <div className="my-3 mx-6 md:ml-28">
          {results?.results?.map(({ link, title }, index) => (
            <div key={index} className="w-full p-3.5 md:w-2/5">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg text-blue-700 hover:underline dark:text-blue-300  ">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      )
}

export default All