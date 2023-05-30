//esto debe ser extraido de base de datos!!!!

const imagenes_tec = [
  {
    src:"/public/imagenes_des/dis/img_3.jpeg",
    alt: "Imagen de diseño",
    nombre: "Diseño gráfico", 
    id:'1',
  },
  {
    src:"/public/imagenes_des/info/img_2.jpeg",
    alt: "Imagen de informatica",
    nombre: "Informática",
    id:'2',
  },
  {
    src: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81r-uhwhoaFkoOQFBW1BYzW8Qgq8yoEWA4UyAZAMSDyopVe-ehFMxoYdZhwrv0lNNrS_XY-ZpN0xa9s-9q-hFbwyK9gexw=s1600",
    alt: "Ejemplo de sublimacion",
    nombre: "Sublimación",
    id:'3',
  },
];

const imagenes_gas = [
  {
    src:"/public/imagenes_des/pana/img_2.jpeg",
    alt: "Imagen de panaderia",
    nombre: "Panadería",
    id:'1',
  },
  {
    src:"/public/imagenes_des/bar/img_1.jpeg",
    alt: "Imagen de barismo",
    nombre: "Barismo",
    id:'2',
  },
  {
    src:"/public/imagenes_des/paste/img_5.jpeg",
    alt: "Imagen de pasteleria",
    nombre: "Pastelería Gourmet",
    id:'3',
  },
  {
    src:"/public/imagenes_des/char/img_2.jpeg",
    alt: "Imagen de charculeria",
    nombre: "Charcutería",
    id:'4',
  },
  {
    src:"/public/imagenes_des/hela/img_1.jpeg",
    alt: "Imagen de heladeria",
    nombre: "Heladería",
    id:'5',
  },
  {
    src:"/public/imagenes_des/home/img_1.jpeg",
    alt: "Imagen de home chef",
    nombre: "Home chef",
    id:'6',
  },
  {
    src:"/public/imagenes_des/cons/img_1.jpeg",
    alt: "Imagen de conservas",
    nombre: "Conservas",
    id:'7',
  },
];

const imagenes_ser = [
  {
    src:"/public/imagenes_des/eba/img_1.jpeg",
    alt: "Imagen de ebanisteria",
    nombre: "Ebanistería",
    id:'1',
  },
  {
    src: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81pcmbFJBpslN3-6fafNiIf90tyBnszKlGtVHtAdUXiqzMtSoU7OjGPdhpVfe-TauSCIX7tBDYHWOzB71--HCTFatTmoWQ=s1600",
    alt: "Imagen de bisuteria",
    nombre: "Bisutería",
    id:'2',
  },
  {
    src:"/public/imagenes_des/arte/img_1.jpeg",
    alt: "Imagen de arte",
    nombre: "Arte",
    id:'3',
  },
  {
    src:"/public/imagenes_des/estetica/img_1.jpeg",
    alt: "Imagen de estetica",
    nombre: "Belleza y estética",
    id:'4',
  },
];

function img_tec() {
  let HTML = `<div class="row row-cols-3 row-cols-md-3 g-4">`;
  imagenes_tec.forEach(function (imagen) {
    HTML += `
        <div class="col">
          <div class="card border-primary mb-3" style="max-width: 22rem;">
           <div class="card-body text-primary">
              <h3 class="card-title" style="margin="20px"; back>${imagen.nombre}</h3>
                <img src="${imagen.src}" alt="${imagen.alt}" width="300px" height="300px" />
                <button onclick="changePage('${imagen.id}', 'tecnologia', 'tec_')" class="btn btn-outline-info style="color: black; margin-top: 30px;">Descubre más</button>
            </div>
          </div>
        </div>`;
  });
  HTML += `</div>`;
  document.getElementById("galeria").innerHTML = HTML;

  //$('#galeria').html(html);
}

function img_gas() {
  let HTML = `<div class="row row-cols-3 row-cols-md-3 g-4">`;
  imagenes_gas.forEach(function (imagen) {
    HTML += `
        <div class="col">
          <div class="card border-primary mb-3" style="max-width: 22rem;">
           <div class="card-body text-primary">
              <h3 class="card-title" style="margin="20px"; back>${imagen.nombre}</h3>
                <img src="${imagen.src}" alt="${imagen.alt}" width="300px" height="300px" />
                <button onclick="changePage('${imagen.id}', 'gastronomia', 'gas_')" class="btn btn-outline-info style="color: black; margin-top: 30px;">Descubre más</button>
            </div>
          </div>
        </div>`;
  });
  HTML += `</div>`;
  document.getElementById("galeria").innerHTML = HTML;

  //$('#galeria').html(html);
}

function img_ser() {
  let HTML = `
  <div class="row row-cols-3 row-cols-md-3 g-4">`;
  imagenes_ser.forEach(function (imagen) {
    HTML += `
        <div class="col">
          <div class="card border-primary mb-3" style="max-width: 22rem;">
           <div class="card-body text-primary">
            <h3 class="card-title" back>${imagen.nombre}</h3>
                <img src="${imagen.src}" alt="${imagen.alt}" width="300px" height="300px" />
                <button onclick="changePage('${imagen.id}', 'servicios', 'ser_')" class="btn btn-outline-info style="color: black; margin-top: 30px;">Descubre más</button>
            </div>
          </div>
        </div>`;
  });
  document.getElementById("galeria").innerHTML = HTML;
}

function changePage(id, area, tipo){
  let string = "/View/paginas/" + area + "/" + tipo + id + ".html";
  document.location.href = string;
}

