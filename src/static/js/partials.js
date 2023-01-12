export function card(list) {
    let template = ''
    let flag = 1;
    list.forEach(item => {
        template += `
            <div class="pelicula">
                <div class="card col-sm-6" style="width: 13rem;">
                    <img src="https://5sbstephanochang.000webhostapp.com/img/${flag}.jpg">
                    <div class="card-body">
                        <h5 class="card-title">$ ${item.price}</h5>
                        <p class="card-text">${item.name}</p>
                        <a href="/view_product?data=${item.id}" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            `;
        flag+=1;
    });
    return template


};
export function card_simple(list) {
    let template = ''
    let flag = 1;
    list.forEach(item => {
        template += `
        <div class="card col-sm-6" style="width: 13rem;margin: 7px 7px;">
          <img src="https://5sbstephanochang.000webhostapp.com/img/${flag}.jpg">
            <div class="card-body">
                <h5 class="card-title">$ ${item.price}</h5>
                <p class="card-text">${item.name}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `;
      flag+=1;
    });
    return template


};
export function create_model(img) {
    let template = `
    <div class="d-flex align-items-center justify-content-center">
        <img class="img-fluid" src="${img}" alt="" >
    </div>           
    `;
    return template;
}
export function carrousel(){
	const fila = document.querySelector('.contenedor-carousel');
	const peliculas = document.querySelectorAll('.pelicula');

	const flechaIzquierda = document.getElementById('flecha-izquierda');
	const flechaDerecha = document.getElementById('flecha-derecha');

	// ? ----- ----- Event Listener para la flecha derecha. ----- -----
	flechaDerecha.addEventListener('click', () => {
		fila.scrollLeft += fila.offsetWidth;

		const indicadorActivo = document.querySelector('.indicadores .activo');
		if(indicadorActivo.nextSibling){
			indicadorActivo.nextSibling.classList.add('activo');
			indicadorActivo.classList.remove('activo');
		}
	});

	// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
	flechaIzquierda.addEventListener('click', () => {
		fila.scrollLeft -= fila.offsetWidth;

		const indicadorActivo = document.querySelector('.indicadores .activo');
		if(indicadorActivo.previousSibling){
			indicadorActivo.previousSibling.classList.add('activo');
			indicadorActivo.classList.remove('activo');
		}
	});

	// ? ----- ----- Paginacion ----- -----
	const numeroPaginas = Math.ceil(peliculas.length / 5);
	for(let i = 0; i < numeroPaginas; i++){
		const indicador = document.createElement('button');

		if(i === 0){
			indicador.classList.add('activo');
		}

		document.querySelector('.indicadores').appendChild(indicador);
		indicador.addEventListener('click', (e) => {
			fila.scrollLeft = i * fila.offsetWidth;

			document.querySelector('.indicadores .activo').classList.remove('activo');
			e.target.classList.add('activo');
		});
	}

	// ? ----- ----- Hover ----- -----
	peliculas.forEach((pelicula) => {
		pelicula.addEventListener('mouseenter', (e) => {
			const elemento = e.currentTarget;
			setTimeout(() => {
				peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
				elemento.classList.add('hover');
			}, 300);
		});
	});

	fila.addEventListener('mouseleave', () => {
		peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
	});
}

/*------ -----  fuction validate size of picture input ------------- */

var banderaTamano = false;

export function validar() {
  var o = document.getElementById('inputGroupFile04');
  var foto = o.files[0];
  var c = 0;

  if (o.files.length == 0 || !(/\.(jpg|png|jpeg)$/i).test(foto.name)) {
    alert('Ingrese una imagen con alguno de los siguientes formatos: .jpeg/.jpg/.png.');
    return false;
  }
   
  // Si el tamaño de la imagen fue validado
  if (banderaTamano) {
    return true;
  }

  var img = new Image();
  img.onload = function dimension() {
    if (this.width.toFixed(0) != this.height.toFixed(0)) {
      alert('Las medidas deben ser: 900 x 400');
    } else {
      alert('Imagen correcta :)');
      // El tamaño de la imagen fue validado
      banderaTamano = true;
      
      // Buscamos el formulario
      var form = document.getElementById('formulario');
      // Enviamos de nuevo el formulario con la bandera modificada.
      form.submit();
    }
  };
  img.src = URL.createObjectURL(foto);
  
  // Devolvemos false porque falta validar el tamaño de la imagen
  return false;
}

