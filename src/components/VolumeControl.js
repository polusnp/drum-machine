function VolumeCntrol({ globalVolume, onVolumeChange }) {
  return (
    <div>
      <label htmlFor="volume">VOLUME</label>
      <input
        type="range"
        id="globalVolume"
        name="globalVolume"
        min="0"
        max="1"
        step="0.1"
        value={globalVolume}
        onChange={onVolumeChange}
      />
    </div>
  )
}

export default VolumeCntrol
