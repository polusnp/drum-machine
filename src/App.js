import { useState, useEffect } from "react"
import Drum from "./components/Drum"
import VolumeControl from "./components/VolumeControl"
import "./App.css"
import audioClips from "./data/audioClips"

function App() {
  const [globalVolume, setGlobalVolume] = useState(0.7)
  const [displaySound, setDisplaySound] = useState("")
  const [isDrumMachineOn, setIsDrumMachineOn] = useState(false)

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setGlobalVolume(newVolume)
  }

  const playAudio = (key) => {
    if (!isDrumMachineOn) return

    const clip = audioClips.find(
      (clip) => clip.keyTrigger === key.toUpperCase()
    )
    if (!clip) return

    const audio = new Audio(clip.url)
    audio.volume = globalVolume
    audio.play()

    setDisplaySound(clip.description)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      playAudio(e.key)
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  })

  const toggleDrumMachine = () => {
    setIsDrumMachineOn((prev) => !prev)
  }

  return (
    <div className="container" id="drum-machine">
      <h2>Drum Machine</h2>
      <button onClick={toggleDrumMachine}>
        {isDrumMachineOn ? "TURN OFF" : "TURN ON"}
      </button>
      <div className="whole-drum">
        {audioClips.map((clip) => (
          <Drum
            audioClip={clip}
            key={clip.keyTrigger}
            globalVolume={globalVolume}
            setDisplaySound={setDisplaySound}
            isDrumMachineOn={isDrumMachineOn}
          />
        ))}
        <div id="display">{displaySound}</div>
        <div className="volume-control">
          <VolumeControl
            globalVolume={globalVolume}
            onVolumeChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  )
}

export default App
