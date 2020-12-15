var emailUserMessage = document.getElementsByClassName('auth');

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
}
