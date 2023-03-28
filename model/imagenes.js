//esto debe ser extraido de base de datos!!!!

const imagenes_tec = [
    {
        src: "/public/ejemplos/image_12.png",
        alt: 'Gatitos, no se puede decir más',
        nombre: 'Diseño gráfico',
    },
    {
        src: "/public/ejemplos/image_13.png",
        alt: 'Gatitos, no se puede decir más',
        nombre: 'Producción audivisual',
    },
    {
        src: "/public/ejemplos/image_14.png",
      alt: 'Gatitos, no se puede decir más',
      nombre: 'Sublimación',
    },
  ];

  const imagenes_gas = [
    {
        src: "/public/imagenes/image_5.png",
        alt: 'Gatitos, no se puede decir más',
        nombre: 'Panadería',
    },
    {
        src: "/public/imagenes/image_6.png",
        alt: 'Gatitos, no se puede decir más',
        nombre: 'Barismo',
    },
    {
        src: "/public/imagenes/image_7.png",
      alt: 'Gatitos, no se puede decir más',
      nombre: 'Pastelería Gourmet',
    },
    {
        src: "/public/imagenes/image_8.png",
      alt: 'Gatitos, no se puede decir más',
      nombre: 'Charcutería',
    },
    {
        src: "/public/imagenes/image_9.png",
      alt: 'Gatitos, no se sd más',
      nombre: 'Cocina',
    },
    {
        src: "/public/imagenes/image_10.png",
      alt: 'Gatitos, no se sd más',
      nombre: 'Home chef',
    },
    {
        src: "/public/imagenes/image_11.png",
      alt: 'Gatitos, no se sd más',
      nombre: 'Conservas',
    },
  ];

  const imagenes_ser = [
    {
        src: "/public/imagenes/image_18.png",
        alt: 'Gatitos, no se puede decir más',
        nombre: 'Ebanistería',
    },
    {
        src: "/public/imagenes/image_16.png",
        alt: 'Gatitos, no se puede decir más',
        nombre: 'Bisutería',
    },
    {
        src: "/public/imagenes/image_15.png",
      alt: 'Gatitos, no se puede decir más',
      nombre: 'Arte',
    },
    {
        src: "/public/imagenes/image_17.png",
      alt: 'Gatitos, no se puede decir más',
      nombre: 'Belleza y estética',
    },
]

  function img_tec(){
    imagenes_tec.forEach(function(imagen){
            document.getElementById("galeria").innerHTML += `
            <div class="galeria-item">
            <img src="${imagen.src}" alt="${imagen.alt}" width="250px" height="200px" />
            <h3>${imagen.nombre}</h3>
            </div>`;
    });
    
    //$('#galeria').html(html);
  }
 
  function img_gas(){
    imagenes_gas.forEach(function(imagen){
        document.getElementById("galeria").innerHTML += `
        <div class="galeria-item">
        <img src="${imagen.src}" alt="${imagen.alt}" width="250px" height="200px" />
        <h3>${imagen.nombre}</h3>
        </div>`;
    });
    
    //$('#galeria').html(html);
  }


  function img_ser() {
        imagenes_ser.forEach(function(imagen){
            document.getElementById("galeria").innerHTML += `
            <div class="galeria-item">
            <img src="${imagen.src}" alt="${imagen.alt}" width="250px" height="200px" />
            <h3>${imagen.nombre}</h3>
            </div>`;
        });
        
    //$('#galeria').html(html);
}