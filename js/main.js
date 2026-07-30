// Inicializar EmailJS
emailjs.init("eVDPeRCr9O-56t9_c");

// Formulario de contacto
document
  .getElementById("form-contacto")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let btn = this.querySelector("button");
    btn.textContent = "Enviando...";
    btn.disabled = true;

    emailjs
      .sendForm("service_i8atp35", "template_fod5prj", this)
      .then(function () {
        btn.textContent = "¡Mensaje enviado! ✅";
        document.getElementById("form-contacto").reset();
      })
      .catch(function (error) {
        btn.textContent = "Error al enviar ❌";
        console.log(error);
      });
  });
// Efecto de particulas
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: { enable: true, value_area: 800 },
    },
    color: { value: ["#4fc3f7", "#1565c0", "#7c4dff", "#ffffff"] },
    shape: { type: "circle" },
    opacity: {
      value: 0.5,
      random: true,
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#1a6fa8",
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
    },
  },
});

// Animaciones al hacer scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
);
// Animaciones al hacer scroll
document
  .querySelectorAll(".animate, .animate-izquierda, .animate-derecha")
  .forEach((el) => observer.observe(el));
