const quizObjects = [
    {
      catagory: 'food drink',
      id: 'qa-1',
      correctAnswer: 'tibet',
      options: ['india', 'tibet', 'china', 'thailand'],
      question: "Sera monastery located on which country ?"
    },
    {
      category: 'geography',
      id: 'qa-2',
      correctAnswer: 'france',
      options: ['italy', 'france', 'spain', 'germany'],
      question: 'The Eiffel Tower is located in which country?'
    },
    {
      category: 'science',
      id: 'qa-3',
      correctAnswer: 'dna',
      options: ['rna', 'protein', 'dna', 'enzyme'],
      question: 'What does DNA stand for?'
    },
    {
      category: 'history',
      id: 'qa-4',
      correctAnswer: 'american revolution',
      options: ['french revolution', 'industrial revolution', 'american revolution', 'russian revolution'],
      question: 'Which revolution took place in the late 18th century in the American colonies?'
    },
    {
      category: 'movies',
      id: 'qa-5',
      correctAnswer: 'shawshank redemption',
      options: ['pulp fiction', 'the godfather', 'shawshank redemption', 'fight club'],
      question: 'Which movie is often considered the greatest of all time?'
    },
    {
      category: 'sports',
      id: 'qa-6',
      correctAnswer: 'football',
      options: ['basketball', 'tennis', 'football', 'golf'],
      question: 'Which sport is known as "The Beautiful Game"?'
    },
    {
      category: 'science',
      id: 'qa-7',
      correctAnswer: 'gravity',
      options: ['magnetism', 'electricity', 'gravity', 'friction'],
      question: 'What force is responsible for the attraction between two objects with mass?'
    },
    {
      category: 'music',
      id: 'qa-8',
      correctAnswer: 'beatles',
      options: ['rolling stones', 'beatles', 'queen', 'led zeppelin'],
      question: 'Which band is often referred to as the "Fab Four"?'
    },
    {
      category: 'technology',
      id: 'qa-9',
      correctAnswer: 'javascript',
      options: ['html', 'css', 'javascript', 'python'],
      question: 'Which programming language is commonly used for web development?'
    },
    {
      category: 'animals',
      id: 'qa-10',
      correctAnswer: 'elephant',
      options: ['lion', 'giraffe', 'elephant', 'zebra'],
      question: 'Which mammal is the largest land animal on Earth?'
    },
    {
      category: 'history',
      id: 'qa-11',
      correctAnswer: 'world war ii',
      options: ['world war i', 'vietnam war', 'world war ii', 'korean war'],
      question: 'In which war did the Battle of Normandy take place?'
    },
    {
      category: 'geography',
      id: 'qa-12',
      correctAnswer: 'amazon',
      options: ['nile', 'amazon', 'yangtze', 'mississippi'],
      question: 'Which river is the second-longest river in the world?'
    },
    {
      category: 'science',
      id: 'qa-13',
      correctAnswer: 'photosynthesis',
      options: ['respiration', 'photosynthesis', 'digestion', 'circulation'],
      question: 'What process do plants use to convert sunlight into energy?'
    },
    {
      category: 'movies',
      id: 'qa-14',
      correctAnswer: 'forrest gump',
      options: ['the shawshank redemption', 'pulp fiction', 'forrest gump', 'the godfather'],
      question: 'Which movie features the famous line, "Life is like a box of chocolates."?'
    },
    {
      category: 'sports',
      id: 'qa-15',
      correctAnswer: 'basketball',
      options: ['soccer', 'basketball', 'baseball', 'hockey'],
      question: 'In which sport did Michael Jordan achieve his greatest success?'
    }
  ];

export default quizObjects;