import { useRef, useEffect, useState } from 'react'

export default function VideoPlayer(props) {
    const { src, isPlaying } = props
    const ref = useRef(null)
    const [ counter, setCounter ] = useState(0)

    // Don't do this!
    // useEffect(() => {
    //     setCounter(prev => prev + 1)
    // })

    useEffect(() => {
        if (isPlaying) {
            console.log("== The video is playing")
            ref.current.play()
        } else {
            console.log("== The video is paused")
            ref.current.pause()
        }
    }, [ isPlaying ])

    useEffect(() => {
        console.log("== The effect is executing")
    }, [])

    // useEffect(() => {
    //     const connection = connectToShatServer()
    //     connection.connect()
    //     return () => connection.disconnect()
    // })

    useEffect(() => {
        function handleWindowClick(e) {
            console.log("== A click occurred")
        }
        window.addEventListener("click", handleWindowClick)
        return () => window.removeEventListener("click", handleWindowClick)
    }, [])

    return <video ref={ref} src={src} loop playsInline />
}
