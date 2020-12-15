var emailUserMessage = document.getElementsByClassName('login');

var emailList = ['info@prova.it','info@mail.it','info@info.it', 'nome.cognome@email.it','email@email.it'];

var yourEmail = prompt ('inserisci la tua mail per autenticarti!');
console.log('la tua email è: ' + yourEmail);

for (var i = 0; i < emailList.length; i++) {
  if (emailList[i] === yourEmail) {
    var authTrue = 1;
    emailUserMessage[0].innerText = ('Complimenti ti sei autenticato');
    console.log('sei autenticato!')
  }
}

if (authTrue !== 1) {
  emailUserMessage[0].innerText = ('ERROR!!!::::try again by refreshing')
} else {
  var userText = document.getElementsByClassName('user-number');
  var pcText = document.getElementsByClassName('pc-number');
  var min = 1;
  var max = 6;
  var pcNumber = Math.floor(Math.random() * (max + 1 - min) + min);
  pcText[0].innerText = (' Il tuo avversario ha tirato un ' + pcNumber);
  console.log('il numero del pc è ' + pcNumber);
  var userNumber = Math.floor(Math.random() * (max + 1 - min) + min);
  userText[0].innerText = (' Il tuo numero è un ' + userNumber);
  console.log('il numero dell\'utente è ' + userNumber);

  if (pcNumber < userNumber) {
    userText[0].append('\nComplimenti hai Vinto!');
  } else if ( pcNumber === userNumber) {
    userText[0].append('\nHai pareggiato!');
  } else {
    userText[0].append('\nHai perso!');

  }










}
