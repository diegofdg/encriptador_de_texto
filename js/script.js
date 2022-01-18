const inputTexto = document.getElementById('input-texto');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const inputResultado = document.getElementById('mensaje-texto');
const btnCopiar = document.getElementById('btn-copy');

document.addEventListener('DOMContentLoaded', () => {
  console.log('Aplicación Iniciada');
  btnEncriptar.addEventListener('click', encriptarTexto);
  btnDesencriptar.addEventListener('click', desencriptarTexto);
  btnCopiar.addEventListener('click', copiarTexto);
});

function encriptarTexto(e) {
  e.preventDefault();  
  let texto = inputTexto.value;    
  let palabras = texto.split(" ");
  let nuevasPalabras = [];

  for (let palabra of palabras) {
    nuevasPalabras.push(palabra.replace('e','enter').replace('i','imes').replace('a','ai').replace('o','ober').replace('u','ufat'));    
  }

  const resultado = nuevasPalabras.join(' ');
  
  inputResultado.value = resultado;
}

function desencriptarTexto(e) {
  e.preventDefault();  
  let texto = inputTexto.value;    
  let palabras = texto.split(" ");
  let nuevasPalabras = [];

  for (let palabra of palabras) {
    nuevasPalabras.push(palabra.replace('enter','e').replace('imes','i').replace('ai','a').replace('ober','o').replace('ufat','u'));
  }

  const resultado = nuevasPalabras.join(' ');
  
  inputResultado.value = resultado;
}

function copiarTexto(e) {
    e.preventDefault(); 
    const mensaje = inputResultado.value;
    const type = 'text/plain';
    const blob = new Blob([mensaje], {type});
    let data = [new ClipboardItem({[type]: blob})];
  
    navigator.clipboard.write(data);
}