const noti = document.querySelectorAll('article');
const contador = document.querySelector('header span');


// Cuenta las notificaciones no leídas y actualiza el contador
let unreadNotifications = 0;
for (const article of noti) {
  const bElement = article.querySelector('b');
  if (bElement && bElement.style.display === 'inline-block') {
    unreadNotifications++;
  } else if (bElement) {
    unreadNotifications++;
  }
}
//Verifica si existe parrafo con una frase 
//Verifica si existe a con clase chess-club
// si hay entonces color del a cambia
for (const article of noti) {
    // Recupera el párrafo del artículo
    const parrafo = article.querySelector('p');
  
    // Verifica si el párrafo contiene la frase " group "
    if (parrafo.textContent.includes(' group ') ||  parrafo.textContent.includes('post')){
      // Selecciona todos los enlaces del párrafo
      const enlaces = parrafo.querySelectorAll('a');
  
      // Recorre los enlaces y cambia su color a azul si tiene la clase "chess-club" o "post"
      for (const enlace of enlaces) {
        if (enlace.classList.contains('chess-club')) {
          enlace.style.color = 'hsl(217, 82%, 26%)';
        } else if (enlace.classList.contains('post')) {
          enlace.style.color = 'hsl(219, 12%, 42%)';
        }
      }
    }
  }
contador.textContent = unreadNotifications;


function visto(event) {
    // Selecciona el b dentro del article clickeado unicamente
    const noVisto = event.currentTarget.querySelector('b');

    // Obtiene los estilos aplicados al elemento b del article clickeado
    const stylesB = window.getComputedStyle(noVisto);

    // Verifica si b está visible (en línea)
    if (stylesB.display === 'inline-block') {
        noVisto.style.display = 'none';
        event.currentTarget.style.backgroundColor = 'white';
        contador.textContent --;
    }
}

// Añade un event listener a cada artículo con la funcion creada visto
noti.forEach(article => {
    article.addEventListener('click', visto);
});

const allRead = document.querySelector('.allRead');
    
function markAllAsRead() {
    for (const article of noti) {
      const bElement = article.querySelector('b');
  
      if (bElement) {
        article.style.backgroundColor = 'white';
        bElement.style.display = 'none';
      }
  
      contador.textContent = 0;
    }
  }

// Añade evento click a la funcion markAllAsRead
allRead.addEventListener('click', markAllAsRead);