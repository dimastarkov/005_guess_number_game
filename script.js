'use strict';
//функция отображения инфо сообщения в .message
let displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
};
//END функция отображения инфо сообщения в .message



////// гнератор случайного числа ////////
let secretNum = function () {
  //задаем случайное секретное число
  let secret = Math.random() * 20 + 1; //случайное значение от 1,... до 20,...
  //округляем до целого числа от 1 до 20
  secret = Math.trunc(secret); //trunc убирает все что после запятой
  return secret;
}
////// END гнератор случайного числа ////////

let secretNumber = secretNum(); //впервые определяем секретное число


//// вводные счета
let score = 20      //начальный счет
let highScore = 0;    //начальный highscore
//// END вводные счета



///// поведение кнопки чек

  //добавляем eventListener на кнопку .check
  document.querySelector('.check').addEventListener('click', function() {

      //читаем значение поля input .guess 
      let guessNumber = Number(document.querySelector('.guess').value);





      // поведение строк сообщения и счета
      if (score > 1) {

        //не ввели значение
        if (!guessNumber) { 
          displayMessage('Нет числа (!)');

          //выиграли
        } else if (guessNumber === secretNumber) {
          displayMessage('Correct Number!'); //сообщение
          document.querySelector('body').style.backgroundColor = '#60b347';   //фон
          document.querySelector('.number').textContent = secretNumber;       //вставляем наше секреное число 'number' в поле .number
          //считаем новый highscore
          if(score > highScore) {
            highScore = score;
          };
          document.querySelector('.highscore').textContent = highScore;       //выводим highscore
        
          //проиграли
        } else {
          score--;
          document.querySelector('.score').textContent = score;
          displayMessage(guessNumber > secretNumber ? 'Много' : 'Мало');
        };
      
      
    } else { //когда счет становится равен 0
      displayMessage('GAME OVER (!)');                                         //сообщение
      score = 0;                                                               //устанавливаем счет = 0
      document.querySelector('.score').textContent = score;                    //записываем новый счет
    };

  });
  ///// END поведение конпки чек




////// again кнопка (начать заново)
//обновляем все поля и секретное число
let againBtn = document.querySelector('.again').addEventListener('click', function(){
  document.querySelector('body').style.backgroundColor = '';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  secretNumber = secretNum();
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');

  });
////// END again кнопка