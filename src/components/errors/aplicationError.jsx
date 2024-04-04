import React from 'react'
import { Player} from '@lottiefiles/react-lottie-player';


export default function AplicationError() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-500 mb-4">Oops!</h1>
        <p className="text-xl text-gray-700">Something went wrong.</p>
        <Player
        autoplay
        loop
        src="/error404.json"
        style={{ height: '400px', width: '400px' }}
        >
        </Player>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Refresh
        </button>
      </div>
    </div>
  )
}

