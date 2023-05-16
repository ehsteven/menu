//esto debe ser extraido de base de datos!!!!

const imagenes_tec = [
  {
    src: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81pBcGC3_a7V0vtt6zUBmtv39W32s6I00Zyf_qMkXKv_r3vyJMBXhAwKUi4faZMgDE1bvXd5rPVN40q_Tbqe8i9NhLxX=s1600",
    alt: "Gatitos, no se puede decir más",
    nombre: "Diseño gráfico", 
    id:'1',
  },
  {
    src: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81paB3GWF58rvUVrIf_GbulGcpwkyA4PqHmOmM4CG7iHaPNGImrHIZ5Xp7BfJIrdA4O2zLWShvkIJb4Ikf8wQLVtJmfTTg=s1600",
    alt: "Gatitos, no se puede decir más",
    nombre: "Producción audivisual",
    id:'2',
  },
  {
    src: "/public/ejemplos/image_14.png",
    alt: "Ejemplo de sublimacion",
    nombre: "Sublimación",
    id:'3',
  },
];

const imagenes_gas = [
  {
    src: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81pKmuje72qYJhYO5AyXp1CM8enhb7152-O-vOkazAI3EJ3NZRBzxHGklFIBvsrVd04KDh-Ds0L52ZPplR6fsIwRgCj6=s1600",
    alt: "Gatitos, no se puede decir más",
    nombre: "Panadería",
    id:'1',
  },
  {
    src: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81qKJZaBDAtlxNRdgl2t-QrpUpOED3g_up6TWjLtImnwqiwYGEogCE7HpLSIt2-Yn-ftUxJJrQDp-BQz1YBzjSqRxnF9=s1600",
    alt: "Gatitos, no se puede decir más",
    nombre: "Barismo",
    id:'2',
  },
  {
    src: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81qB3b-1oWoXIJHe85wOjRoSJte7lf3ZLK6abLFskyLdyRtLUkqJgoy6XsA8sRy4jpcNvgVwfxQGGqWqyMEyI9euG4CnmA=s1600",
    alt: "Gatitos, no se puede decir más",
    nombre: "Pastelería Gourmet",
    id:'3',
  },
  {
    src: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81qU4e8t3Nq7J76e4Bp6G9X2kEfppF4zonEcBZUQPVaX7NcLs7nosOyFrI7EcjPSWxEYMmB_TcFtggq79Hm7sX8sf7iT=s1600",
    alt: "Gatitos, no se puede decir más",
    nombre: "Charcutería",
    id:'4',
  },
  {
    src: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81r0xYqQzD6INmaZkuAI1Q6Uic6p7fpvJZtwVYg7CE4dWizTH9VcUT24gdQCC9hI0SG-meduD-HjckeBUdw9BZC4P9YGKw=s1600",
    alt: "Gatitos, no se sd más",
    nombre: "Cocina",
    id:'5',
  },
  {
    src: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81pSGxJAzW9ERef2Cxk61NMm4DqbW2j3QB9IUuesjeB7Eq94t7mhhtQZcswa6T-4-f_Kr_3zC6HUkQWqc-APzhG9cypj=s1600",
    alt: "Gatitos, no se sd más",
    nombre: "Home chef",
    id:'6',
  },
  {
    src: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81qD4QbcvxqTOR3G4DPTokbKSQJEN3E61HMcbKAC3lwFs8EaWOiKSJrQOEWKOiiah9wh43f3bggAi5JJwgbPsJnaQq9_=s1600",
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

