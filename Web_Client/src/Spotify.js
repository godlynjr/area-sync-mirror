import React from 'react'

function Spotify() {

    const connect = () => {
        console.log('Connecting to Spotify');
    }
  return (
    <div>
        <button onClick={connect}>
            go
        </button>
    </div>
  )
}

export default Spotify