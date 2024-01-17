import React, { useState, useEffect } from 'react';
import './App.css';
import quizObjects from './Data';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rank, setRank] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const displayQuestion = (index) => {
    const questionContainer = document.getElementById('qun');
    const optionsContainers = [
      document.getElementById('q1'),
      document.getElementById('q2'),
      document.getElementById('q3'),
      document.getElementById('q4'),
    ];

    if (index >= 0 && index < quizObjects.length) {
      questionContainer.textContent = quizObjects[index].question;

      optionsContainers.forEach((container, i) => {
        if (quizObjects[index].options[i]) {
          container.textContent = quizObjects[index].options[i];
        }
      });
    } else {
      for (let index = 0; index < 3; index++) {
        console.log('Game complited');
      }
    }
  };


  const checkAnswer = (index) => {
    if (quizObjects[currentIndex].options[index] === quizObjects[currentIndex].correctAnswer) {
      setRank((prevRank) => [...prevRank, 1]);
    } else {
      console.log("Wrong Answer");
    }
  };

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    checkAnswer(index);
    setCurrentIndex((prevIndex) => prevIndex + 1);
    if (currentIndex < quizObjects.length - 1) {
      displayQuestion(currentIndex + 1);
    } else {
      showRank();
    }
  };

  const showRank = () => {
    const questionContainer = document.getElementById('qun');
    const optionsContainers = [
      document.getElementById('q1'),
      document.getElementById('q2'),
      document.getElementById('q3'),
      document.getElementById('q4'),
    ];
    const resultImageContainer = document.getElementById('resultImage');
    const resultImage = document.getElementById('resultImg');
    const resetBtn = document.querySelector('.refresh');

    questionContainer.textContent = `Your Rank: ${rank.length} out of ${quizObjects.length}`;
    optionsContainers.forEach((container) => container.remove());

    if (rank.length <= 9 && rank.length > 5) {
      resultImage.src = 'https://cdn0.iconfinder.com/data/icons/social-media-gamification/1000/Second_Rank-512.png';
    } else if (rank.length > 9) {
      resultImage.src = 'https://cdn0.iconfinder.com/data/icons/social-media-gamification/1000/First_Rank-512.png';
    } else if (rank.length <= 5) {
      resultImage.src = 'https://cdn0.iconfinder.com/data/icons/social-media-gamification/1000/Third_Rank-512.png';
    }

    resultImageContainer.style.display = 'block';
    resultImageContainer.style.width = '80%';
    resultImageContainer.style.height = '60vh';
    resultImageContainer.style.margin = 'auto';
    resetBtn.style.display = 'block';
  };

  const handleReset = () => {
    window.location.reload();
  };

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      displayQuestion(currentIndex - 1);
    }
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    if (currentIndex < quizObjects.length) {
      displayQuestion(currentIndex + 1);
    } else {
      showRank();
    }
  };

  useEffect(() => {
    displayQuestion(currentIndex);
  }, [currentIndex]);

  return (
    <div>
      <div className="header">
        <h1>Quiz Game By SK</h1>
      </div>
      <div className="bolder">
        <div id="qun"></div>
        <h2>Point 1</h2>
      </div>
      <div className="option" id="q1" onClick={() => handleOptionClick(0)}></div>
      <div className="option" id="q2" onClick={() => handleOptionClick(1)}></div>
      <div className="option" id="q3" onClick={() => handleOptionClick(2)}></div>
      <div className="option" id="q4" onClick={() => handleOptionClick(3)}></div>
      <div className="moveMent" id="m1" onClick={handleLeftClick}>
        <h2>Previous</h2>
      </div>
      <div className="moveMent" id="m2" onClick={handleRightClick}>
        <h2>Next</h2>
      </div>
      <div id="resultImage" style={{ display: 'none', textAlign: 'center' }}>
        <img id="resultImg" src="" alt="Result Image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>
      <div className="refresh" style={{ display: 'none', textAlign: 'center' }}>
        <button className="btn" onClick={handleReset}>Replay</button>
      </div>
    </div>
  );
};

export default App;
