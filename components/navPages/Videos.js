import React from 'react'
import ReactPlayer from 'react-player'

const Videos = ({results}) => {
  return (
    <div className="my-3 mx-6 flex flex-wrap justify-center md:ml-28">
    {results?.results?.map((video, index) => (
      <div
        key={index}
        className="group relative flex flex-col p-2"
      >
        <ReactPlayer
          url={video.additional_links?.[0].href}
          controls
          width="355px"
          height="235px"
        />
        <p className="mt-2 w-36 break-words text-sm text-gray-500 group-hover:text-black sm:w-36">
          {video.additional_links?.[0].text}
        </p>
      </div>
    ))}
  </div>
  )
}

export default Videos