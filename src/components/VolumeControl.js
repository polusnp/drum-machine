function VolumeCntrol({ globalVolume, onVolumeChange }) {
  return (
    <div>
      <h4>VOLUME</h4>
      <input
        type="range"
        id="globalVolume"
        name="globalVolume"
        min="0"
        max="1"
        step="0.05"
        value={globalVolume}
        onChange={onVolumeChange}
      />
    </div>
  )
}

export default VolumeCntrol
