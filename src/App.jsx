import { useState, useRef } from 'react'

import VideoPlayer from './VideoPlayer'

import kittiesVideo from './assets/kitties.mp4'

import './App.css'

export default function PhotosApp() {
    const counter = useRef(0)
    console.log("== counter:", counter)
    const [ videoIsPlaying, setVideoIsPlaying ] = useState(false)

    const firstPhotoRef = useRef(null)
    const secondPhotoRef = useRef(null)
    const thirdPhotoRef = useRef(null)
    const videoRef = useRef(null)

    return (
        <>
            <nav>
                <button onClick={() => {
                    counter.current++
                    console.log("== counter.current:", counter.current)
                }}>
                    Counter: {counter.current}
                </button>
                <button onClick={() => firstPhotoRef.current.scrollIntoView({
                    block: "center",
                    inline: "center"
                })}>
                    Go to first photo
                </button>
                <button onClick={() => secondPhotoRef.current.scrollIntoView({
                    block: "center",
                    inline: "center"
                })}>
                    Go to second photo
                </button>
                <button onClick={() => thirdPhotoRef.current.scrollIntoView({
                    block: "center",
                    inline: "center"
                })}>
                    Go to third photo
                </button>
                <button onClick={() => videoRef.current.scrollIntoView({
                    block: "center",
                    inline: "center"
                })}>
                    Go to cat video
                </button>
            </nav>
            <main>
                <div ref={firstPhotoRef}>
                    <img src="https://picsum.photos/id/100/480" />
                </div>
                <div ref={secondPhotoRef}>
                    <img src="https://picsum.photos/id/200/480" />
                </div>
                <div ref={thirdPhotoRef}>
                    <img src="https://picsum.photos/id/300/480" />
                </div>
                <div ref={videoRef}>
                    <VideoPlayer src={kittiesVideo} isPlaying={videoIsPlaying} />
                    <div>
                        <button onClick={() => setVideoIsPlaying(prev => !prev)}>
                            {videoIsPlaying ? "⏸️" : "▶️"}
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}
