
//agregar registros con firebase
//Inicializa una instancia de Cloud Firestore
firebase.initializeApp({
  apiKey: "AIzaSyDmkfG4PzYNnFSYp7zZxNtGSZhp9yrRWro",
    authDomain: "controlescolar1-6778e.firebaseapp.com",
    projectId: "controlescolar1-6778e"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

function agregar(){
  var matricula= document.getElementById('matricula').value;
  var nombre= document.getElementById('nombre').value;
 var apellido= document.getElementById('apellido').value;
 var grado= document.getElementById('grado').value;
 var grupo= document.getElementById('grupo').value;
 var promedio= document.getElementById('promedio').value;
 var fechanac= document.getElementById('fechanac').value;

 db.collection("Alumno").add({
 Matricula: matricula,
  Nombre: nombre,
  Apellido: apellido,
  Grado: grado,
  Grupo: grupo,
  Promedio: promedio,
  FechaNacimiento: fechanac
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
  alert('Alumno Inscrito\nSu matricula es: '+ docRef.id);
  matricula= document.getElementById('matricula').value='';
  nombre= document.getElementById('nombre').value='';
 apellido= document.getElementById('apellido').value='';
 grado= document.getElementById('grado').value='';
 grupo= document.getElementById('grupo').value='';
 promedio= document.getElementById('promedio').value='';
 fechanac= document.getElementById('fechanac').value='';
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});

}
/*function buscar(){
  var docRef = db.collection("Alumno").doc("Uhq9ZZ4aVexYfRXBlOA5");


  docRef.get().then(function(doc) {
    if (doc.exists) {
        
        console.log("El registro es:", doc.data());
        document.getElementById('nombre').value=doc.data().Nombre;
        document.getElementById('apellido').value=doc.data().Apellido;
        document.getElementById('grado').value=doc.data().Grado;
        document.getElementById('grupo').value=doc.data().Grupo;
        document.getElementById('promedio').value=doc.data().Promedio;
        document.getElementById('fechanac').value=doc.data().FechaNacimiento;
        

    } else {
        //doc.data() will be undefined in this case
        console.log("Registro no encontrado");
        alert("Matricula no encontrada");
    }
}).catch(function(error) {
    console.log("Error al obtener el documento:", error);
    alert("Consulta fallida:", error);
});
  
}*/
function buscar(){
db.collection("Alumno").where("Matricula", "==", "09292115")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().Matricula);
            document.getElementById('nombre').value=doc.data().Nombre;
        document.getElementById('apellido').value=doc.data().Apellido;
        document.getElementById('grado').value=doc.data().Grado;
        document.getElementById('grupo').value=doc.data().Grupo;
        document.getElementById('promedio').value=doc.data().Promedio;
        document.getElementById('fechanac').value=doc.data().FechaNacimiento;
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }
//agregar registros con arrays
/*var datos=[]; 

function agregar(arrayAdd){
    var matricula= document.getElementById('matricula').value;
   var nombre= document.getElementById('nombre').value;
   var apellido= document.getElementById('apellido').value;
   var grado= document.getElementById('grado').value;
   var grupo= document.getElementById('grupo').value;
   var promedio= document.getElementById('promedio').value;
   var fechanac= document.getElementById('fechanac').value;

   var bandera;
   var i=0;
   do{
     if(matricula == "" || nombre == "" || apellido == "" || grado == "" || grupo == "" || promedio == "" || fechanac == ""){
       alert('Campos Vacios');
     }else if(matricula == arrayAdd[i]){
      bandera = false;
       
              }else{
                bandera = true;
               
              }
      i++;
   }while(i<arrayAdd.length && bandera == true)
     
     if(bandera == true){
       var obj = {
         'Matricula': matricula,
   'Nombre': nombre,
   'Apellido': apellido,
   'Grado': grado,
    'Grupo': grupo,
   'Promedio': promedio,
   'Fecha de Nacimiento': fechanac
       }
       arrayAdd.push(obj);
       alert('Alumno Inscrito Correctamente')
       console.log(arrayAdd);
     }else if(bandera == false){
              alert('El Alumno ya esta registrado');
              }
   
 }
  var btnAgregar  = document.getElementById('agregar');
 btnAgregar.onclick =function(){
   agregar(datos);
 }*/


    
