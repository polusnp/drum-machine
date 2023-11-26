function Drum({ audioClip, globalVolume, setDisplaySound, isDrumMachineOn }) {
  const playSoundHandler = (audioClip) => {
    if (!isDrumMachineOn) return

    const audio = new Audio(audioClip.url)
    audio.volume = globalVolume
    audio.play()

    setDisplaySound(audioClip.description)
  }

  return (
    <div>
      <button
        className="drum-pad"
        id={`drum-${audioClip.keyTrigger}`}
        onClick={() => playSoundHandler(audioClip)}
      >
        <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip" />
        {audioClip.keyTrigger}
      </button>
    </div>
  )
}

export default Drum
