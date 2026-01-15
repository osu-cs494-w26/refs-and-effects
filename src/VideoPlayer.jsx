import { useRef, useEffect } from 'react'

export default function VideoPlayer(props) {
    const { src, isPlaying } = props
    const ref = useRef(null)

    useEffect(() => {
        if (isPlaying) {
            ref.current.play()
        } else {
            ref.current.pause()
        }
    })

    return <video ref={ref} src={src} loop playsInline />
}
