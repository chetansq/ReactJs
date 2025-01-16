import React, { useRef, useState } from 'react'
const Play_pause = () => {

    const [play, setPlay] = useState(false)
    const startVideo = useRef(null)


    function handleClick() {
        const nextIsPlaying = !play;
        setPlay(nextIsPlaying);

        if (nextIsPlaying) {
            startVideo.current.play();
        } else {
            startVideo.current.pause();
        }
    }



    return (
        <div className='h-screen gap-10 flex flex-col justify-center items-center bg-gray-300'>

            <div>

                <video ref={startVideo} onPlay={() => setPlay(true)} onPause={() => setPlay(false)}>
                    <source src="https://cdn.pixabay.com/video/2019/04/06/22619-328940133_large.mp4" type="video/mp4" />
                </video>
            </div>

            <div>
                <button onClick={handleClick}> {play ? <p className='bg-green-600 py-1 px-4 text-white'>Play</p> : <p className='bg-red-600 py-1 px-4 text-white'>Pause</p>} </button>
            </div>
        </div>
    )
}

export default Play_pause