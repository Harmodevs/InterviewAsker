export default function playAudio(audioBuffer: ArrayBuffer) {
  const audioContext = new (window.AudioContext ||
    (window as any).webkitAudioContext)(); // typescript cant infer this type in older browsers
  audioContext.decodeAudioData(audioBuffer, (buffer) => {
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.start();
  });
}
