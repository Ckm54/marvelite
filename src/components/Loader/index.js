import React from 'react'

function Loader() {
  return (
    <section className="text-gray-700 body-font">
        <div className="mx-auto md:mx-0 bg-white max-w-sm rounded overflow-hidden shadow-lg">
          <div className="h-full border-2 border-gray-100 rounded-lg overflow-hidden">
            <div className="h-60 bg-gray-400 w-full object-cover object-center"></div>
            <div className="p-6">
              <h2 className="bg-gray-400 animate-pulse h-5 w-1/4 mb-2"></h2>
              <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Loader