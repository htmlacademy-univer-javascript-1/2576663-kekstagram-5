const generatePhotos = () => {
  const photoDescriptions = [
    'Прекрасный закат на море',
    'Мой пушистый кот',
    'Горный пейзаж',
    'Архитектура старого города'
  ];

  const commentNames = [
    'Алексей', 'Мария', 'Дмитрий', 'Анна'
  ];

  const commentMessages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.'
  ];

  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const generateComment = (id) => {  // Переименовали параметр, чтобы избежать shadowing
    const messageCount = getRandomInt(1, 2);
    let message = '';

    for (let i = 0; i < messageCount; i++) {
      const randomIndex = getRandomInt(0, commentMessages.length - 1);
      message += commentMessages[randomIndex];
      if (i < messageCount - 1) {
        message += ' ';  // Добавили фигурные скобки
      }
    }

    return {
      id,
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message,
      name: commentNames[getRandomInt(0, commentNames.length - 1)]
    };
  };

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

// Убрали console.log - вместо этого просто возвращаем массив
export default generatePhotos;
