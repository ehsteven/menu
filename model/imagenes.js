//esto debe ser extraido de base de datos!!!!

const imagenes_tec = [
  {
    src: "/public/ejemplos/image_12.png",
    alt: "Gatitos, no se puede decir más",
    nombre: "Diseño gráfico",
    id:'1',
  },
  {
    src: "/public/ejemplos/image_13.png",
    alt: "Gatitos, no se puede decir más",
    nombre: "Producción audivisual",
    id:'2',
  },
  {
    src: "/public/ejemplos/image_14.png",
    alt: "Gatitos, no se puede decir más",
    nombre: "Sublimación",
    id:'3',
  },
];

const imagenes_gas = [
  {
    src: "/public/imagenes/image_5.png",
    alt: "Gatitos, no se puede decir más",
    nombre: "Panadería",
    id:'1',
  },
  {
    src: "/public/imagenes/image_6.png",
    alt: "Gatitos, no se puede decir más",
    nombre: "Barismo",
    id:'2',
  },
  {
    src: "/public/imagenes/image_7.png",
    alt: "Gatitos, no se puede decir más",
    nombre: "Pastelería Gourmet",
    id:'3',
  },
  {
    src: "/public/imagenes/image_8.png",
    alt: "Gatitos, no se puede decir más",
    nombre: "Charcutería",
    id:'4',
  },
  {
    src: "/public/imagenes/image_9.png",
    alt: "Gatitos, no se sd más",
    nombre: "Cocina",
    id:'5',
  },
  {
    src: "/public/imagenes/image_10.png",
    alt: "Gatitos, no se sd más",
    nombre: "Home chef",
    id:'6',
  },
  {
    src: "/public/imagenes/image_11.png",
    alt: "Gatitos, no se sd más",
    nombre: "Conservas",
    id:'7',
  },
];

const imagenes_ser = [
  {
    src: "/public/imagenes/image_18.png",
    alt: "Gatitos, no se puede decir más",
    nombre: "Ebanistería",
    id:'1',
  },
  {
    src: "/public/imagenes/image_16.png",
    alt: "Gatitos, no se puede decir más",
    nombre: "Bisutería",
    id:'2',
  },
  {
    src: "/public/imagenes/image_15.png",
    alt: "Gatitos, no se puede decir más",
    nombre: "Arte",
    id:'3',
  },
  {
    src: "/public/imagenes/image_17.png",
    alt: "Gatitos, no se puede decir más",
    nombre: "Belleza y estética",
    id:'4',
  },
];

function img_tec() {
  let HTML = `<div class="row row-cols-3 row-cols-md-3 g-4">`;
  imagenes_tec.forEach(function (imagen) {
    HTML += `
        <div class="col">
          <div class="card border-primary mb-3" style="max-width: 18rem;">
           <div class="card-body text-primary">
              <h3 class="card-title" style="margin="20px"; back>${imagen.nombre}</h3>
                <img src="${imagen.src}" alt="${imagen.alt}" width="250px" height="200px" />
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
          <div class="card border-primary mb-3" style="max-width: 18rem;">
           <div class="card-body text-primary">
              <h3 class="card-title" style="margin="20px"; back>${imagen.nombre}</h3>
                <img src="${imagen.src}" alt="${imagen.alt}" width="250px" height="200px" />
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
          <div class="card border-primary mb-3" style="max-width: 18rem;">
           <div class="card-body text-primary">
            <h3 class="card-title" back>${imagen.nombre}</h3>
                <img src="${imagen.src}" alt="${imagen.alt}" width="250px" height="200px" />
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

