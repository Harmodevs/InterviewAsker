import React from "react";
import axios from "axios";
import playAudio from "../utils/playAudio";

function Landing() {
  async function playQuestion() {
    const response = await axios.get("/api/audio/1", {
      responseType: "arraybuffer",
    });

    playAudio(response.data);
  }
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Practice Your Interview Questions</h1>
        <h2>Record Your Interview Answers!</h2>
        <p>
          Create an account, and choose some of the interview questions (or have
          one chosen for you at random). An interviewer bot will then ask you
          the question and you may record your answer so that you can hear back
          how well you handled them. You may also export your interview session
          or share them with friends so that you can receive feedback on your
          interview answers.
        </p>
        <button onClick={playQuestion}>Demo Interview Question</button>
      </div>
    </div>
  );
}

export default Landing;
