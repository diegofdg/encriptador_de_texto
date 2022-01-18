
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

console.log('Aplicación Iniciada');

const boton = document.getElementById('btn-copy');
boton.addEventListener('click', copiarTexto);

function copiarTexto() {
    const mensaje = document.getElementById('mensaje-texto');
    const type = 'text/plain';
    const blob = new Blob([mensaje.value], {type});
    let data = [new ClipboardItem({[type]: blob})];
  
    navigator.clipboard.write(data).then(function() {
      console.log('El texto se copió correctamente!')
    }, function() {
      console.log('Ha ocurrido un error y no se pudo copiar el texto');
    });
}
