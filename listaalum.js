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
//visualizar tabla
var tabla=document.getElementById('tabla');
db.collection("Alumno").onSnapshot((querySnapshot) => {
    tabla.innerHTML='';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().Matricula}`);

        tabla.innerHTML+=`<tr><th scope="row">${doc.data().Matricula}</th><td>${doc.data().Nombre}</td><td>${doc.data().Apellido}</td><td>${doc.data().Grado}</td><td>${doc.data().Grupo}</td><td>${doc.data().Promedio}</td><td>${doc.data().FechaNacimiento}</td></tr>`
    });
});

//actualizar datos 


