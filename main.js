let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#9d1d36 ;">Desarrollo sitios web y estudio la ingeniería en sistemas computacionales ')
  .pauseFor(200)
  .deleteChars(10)
  .start();
