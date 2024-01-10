import React from 'react'

export default function Weather() {
  return (
    <>
        <div className="flex items-center justify-center h-screen relative">
        <div className="w-full h-full absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://cdn.pixabay.com/vimeo/284467863/clouds-17723.mp4?width=1280&hash=630d4b8671ccfbab803d700b604836277871f82a" />
          </video>
        </div>
        
        </div>
    </>
  )
}
