import React from 'react'

const Images = ({results}) => {

  return (
    <div className="flex flex-wrap items-center justify-center">
          {results?.image_results?.map(
            ({ image, link: { href, title } }, index) => (
              <a
                href={href}
                target="_blank"
                key={index}
                rel="noreferrer"
                className="p-5 sm:p-3"
              >
                <img src={image?.src} alt={title} loading="lazy" />
                <p className="mt-2 w-36 break-words text-sm sm:w-36">{title}</p>
              </a>
            )
          )}
        </div>
  )
}

export default Images