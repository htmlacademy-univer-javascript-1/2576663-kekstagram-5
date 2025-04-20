// Генерация случайных данных для фотографий
const generatePhotos = () => {
  const photoDescriptions = [
    'Прекрасный закат на море',
    'Мой пушистый кот',
    'Горный пейзаж',
    'Архитектура старого города',
    'Вкусный ужин в ресторане',
    'Прогулка по лесу',
    'Момент с концерта',
    'Фото из путешествия',
    'Семейный портрет',
    'Уличное граффити'
  ];

  const commentNames = [
    'Алексей', 'Мария', 'Дмитрий', 'Анна', 'Сергей',
    'Елена', 'Артём', 'Ольга', 'Иван', 'Наталья'
  ];

  const commentMessages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  // Функция для генерации случайного комментария
  const generateComment = (commentId) => {
    const messageCount = getRandomInt(1, 2);
    let message = '';

    for (let i = 0; i < messageCount; i++) {
      const randomIndex = getRandomInt(0, commentMessages.length - 1);
      message += commentMessages[randomIndex];
      if (i < messageCount - 1) message += ' ';
    }

    return {
      id: commentId,
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: message,
      name: commentNames[getRandomInt(0, commentNames.length - 1)]
    };
  };

  // Генерация массива фотографий
  const photos = [];
  let commentId = 1;
  for (let i = 1; i <= 25; i++) {
    const commentsCount = getRandomInt(0, 30);
    const photoComments = [];

    for (let j = 0; j < commentsCount; j++) {
      photoComments.push(generateComment(commentId));
      commentId++;
    }

    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: photoDescriptions[getRandomInt(0, photoDescriptions.length - 1)],
      likes: getRandomInt(15, 200),
      comments: photoComments
    });
  }

  return photos;
};

// Генерация и вывод массива фотографий
const photoArray = generatePhotos();
console.log(photoArray);
