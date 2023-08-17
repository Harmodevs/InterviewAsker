export default function playAudio(audioBuffer) {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  audioContext.decodeAudioData(audioBuffer, (buffer) => {
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.start();
  });
}
