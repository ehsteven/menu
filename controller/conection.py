from flask import Flask, jsonify, Response, render_template
import mysql.connector
import sys
import base64
import shutil
import os


app = Flask(__name__)

mysql_db = ''
try:
    mysql_db = mysql.connector.connect(
    host= 'containers-us-west-19.railway.app',
    database= 'railway',
    port = '7469',
    user= 'root',
    password= 'TuPTbMiddn7nuAMgjjF8'
  )

except mysql.connector.Error as e:
  print ("Error %d: %s" % (e.args[0],e.args[1]))
  sys.exit()


# @app.route('/', methods=['GET'])
#@app.context_processor
# @app.route('/api/images')
def mostrar_imagenes():
  mysql_cursor = mysql_db.cursor()
  mysql_cursor.execute("SELECT foto FROM Producto where FK_categoriaID = 1")

  # for row in mysql_cursor:
  imagenes_binarias   = mysql_cursor.fetchall()

  imagenes_base64  = []
  for imagen_binaria in imagenes_binarias:
    imagen_base64 = base64.b64encode(imagen_binaria[0]).decode('utf-8')
    imagenes_base64.append( imagen_base64)    #   {'image': imagen_base64})
  #print(imagenes_base64)
  mysql_cursor.close()
  mysql_db.close()
  #return jsonify(imagenes_base64)
  return {'imagenes_base64': imagenes_base64}
  # return render_template('paginas/gas_1.html', imagenes_base64=imagenes_base64)

@app.route('/mostrar_imagenes/gas_1')
def mostrar_imagenes_pagina1():
    return render_template('paginas/gas_1.html')

# @app.route('/view/paginas/gastronomia/gas_2')
# def mostrar_imagenes_pagina2():
#     return render_template('/View/paginas/gastronomia/gas_2.html')
  

# def guardarImg():
#   try:
#     with open (".\pba\i1.jpeg", "rb") as archivo:
#       imagen_bin = archivo.read()

#     nombre = 'Nino trabajando en panaderia'
#     descripcion = 'Amazando la masa en la panaderia'
#     idCategoria = 8
#     mysql_cursor = mysql_db.cursor()
#     mysql_cursor.execute("INSERT INTO Productos (nombre, descripcion, imagen, idCategoria) VALUES (%s,%s,%s,%s)", 
#                         (nombre, descripcion, imagen_bin, idCategoria))

#     mysql_db.commit()
#     mysql_cursor.close()
#     mysql_db.close()

#   except mysql.connector.Error as e:
#     print ("Error %d: %s" % (e.args[0],e.args[1]))
#     sys.exit()


def retornarImg(id, nombreCarpeta):
  mysql_cursor = mysql_db.cursor()
  consulta = "SELECT foto FROM Producto where FK_categoriaID = " + str(id)
  mysql_cursor.execute(consulta)

  i = 1
  for row in mysql_cursor:
    nombre = 'public/imagenes_des/' + nombreCarpeta + '/img_' + str(i) + '.jpeg'
    fout = open(nombre, 'wb')
    fout.write(row[0])
    fout.close()
    i+= 1
  mysql_db.close()


def crearCarpeta(nombre):
  carpeta = './public/imagenes_des/' + nombre
  if not os.path.exists(carpeta):
    # Crear la carpeta
    os.makedirs(carpeta)
  else:
    print("La carpeta ya existe.")
  
  

def eliminar_datos():
  carpeta = './public/imagenes_des'

  elementos = os.listdir(carpeta)

  for elemento in elementos:
    ruta_elemento = os.path.join(carpeta, elemento)
    
    if os.path.isfile(ruta_elemento):
        os.remove(ruta_elemento)
    else:
        shutil.rmtree(ruta_elemento)


# eliminar_datos()                              #hela por cocina
lista = ["", "", "", "", "paste", "arte"]
nombre = "info"
id = 7

# for x in lista:
#    crearCarpeta(x)
#    retornarImg(id, x)
#    id += 1

crearCarpeta(nombre)
retornarImg(id, nombre)



# if __name__ == '__main__':
#     app.run(host='localhost', port ='5000')