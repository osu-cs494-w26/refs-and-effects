import { useState } from 'react'

import VideoPlayer from './VideoPlayer'

import kittiesVideo from './assets/kitties.mp4'

import './App.css'

export default function PhotosApp() {
    const [ videoIsPlaying, setVideoIsPlaying ] = useState(false)
    return (
        <>
            <nav>
                <button>
                    Go to first photo
                </button>
                <button>
                    Go to second photo
                </button>
                <button>
                    Go to third photo
                </button>
                <button>
                    Go to cat video
                </button>
            </nav>
            <main>
                <div>
                    <img src="https://picsum.photos/id/100/480" />
                </div>
                <div>
                    <img src="https://picsum.photos/id/200/480" />
                </div>
                <div>
                    <img src="https://picsum.photos/id/300/480" />
                </div>
                <div>
                    <VideoPlayer src={kittiesVideo} />
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
