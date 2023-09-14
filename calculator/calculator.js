let string = "";
const buttonSound = new Audio('one.mp3');
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    
    if (e.target.innerHTML == '=') {
      string = eval(string);
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(`equals ${string}`);
      synth.speak(utterance);

      // const buttonSound = new Audio('equals.mp3');
      // buttonSound.play();
    }
    else if (e.target.innerHTML == 'C') {
      string = " ";
      document.querySelector('input').value = string;
    }
    else {
      console.log(e.target)
      string = string + e.target.innerHTML;
      var t=e.target.innerHTML;
      if(t=='1')
      {
        const buttonSound = new Audio('one.mp3');
        buttonSound.play();
      }
      
      else if(t=='2')
      {
        const buttonSound = new Audio('two.mp3');
        buttonSound.play();
      }
      else if(t=='3')
      {
        const buttonSound = new Audio('three.mp3');
        buttonSound.play();
      }
      else if(t=='4')
      {
        const buttonSound = new Audio('four.mp3');
        buttonSound.play();
      }
      else if(t=='5')
      {
        const buttonSound = new Audio('five.mp3');
        buttonSound.play();
      }
      else if(t=='6')
      {
        const buttonSound = new Audio('six.mp3');
        buttonSound.play();
      }
      else if(t=='7')
      {
        const buttonSound = new Audio('seven.mp3');
        buttonSound.play();
      }
      else if(t=='8')
      {
        const buttonSound = new Audio('eight.mp3');
        buttonSound.play();
      }
      else if(t=='9')
      {
        const buttonSound = new Audio('nine.mp3');
        buttonSound.play();
      }
      else if(t=='+')
      {
        const buttonSound = new Audio('plus.mp3');
        buttonSound.play();
      }

      else if(t=='-'){
        const buttonSound = new Audio('minus.mp3');
        buttonSound.play();
      }
      else if(t=='X'){
        const buttonSound = new Audio('into.mp3');
        buttonSound.play();
      }
      else if(t=='-'){
        const buttonSound = new Audio('minus.mp3');
        buttonSound.play();
      }
      else if(t=='/'){
        const buttonSound = new Audio('divided_by.mp3');
        buttonSound.play();
      }
      }
      
      document.querySelector('input').value = string;
    })

   
  });
  const showMessageButton = document.getElementById('showMessageButton');
const messageBox = document.getElementById('message');

showMessageButton.addEventListener('click', function() {
    messageBox.style.display = 'block';
    setTimeout(function() {
        messageBox.style.display = 'none';
    }, 3000000);r
});
