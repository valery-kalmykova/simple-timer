
const date = new Date('dec 31 2021 00:00:00');


function getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20 || n === 0) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  }

function counts() {
    const now = new Date();    
    const gap = date - now;

    const days = Math.floor(gap / 1000 / 60 / 60 / 24);
    const hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(gap / 1000 / 60 ) % 60;
    const seconds = Math.floor(gap / 1000) % 60;

    if (gap < 0) {
        document.querySelector('.timer__group').innerHTML = 'Акция завершена';        
    } else {
        document.querySelector('.days').innerHTML = days;
        document.querySelector('.days__text').innerHTML = getNoun(days, 'день', 'дня', 'дней');
        document.querySelector('.hours').innerHTML = hours;
        document.querySelector('.hours__text').innerHTML = getNoun(hours, 'час', 'часа', 'часов');
        document.querySelector('.minutes').innerHTML = minutes;
        document.querySelector('.minutes__text').innerHTML = getNoun(minutes, 'минута', 'минуты', 'минут');
        document.querySelector('.seconds').innerHTML = seconds;
        document.querySelector('.seconds__text').innerHTML = getNoun(seconds, 'секунда', 'секунды', 'секунд');
    }    

    // Автообновление каждую неделю
    // if (gap < 0) {
    //     days = days + 7;
    //     hours = hours + 24;
    //     minutes = minutes + 60;
    //     seconds = seconds + 60;
    // } 

}
counts();
setInterval(counts, 1000);



