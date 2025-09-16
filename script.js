// Toggle Menú Mobile
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Animación suave al hacer scroll a secciones
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Ajuste para header fijo
        behavior: "smooth",
      });

      // Cerrar menú móvil si está abierto
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
      }
    }
  });
});

// Formulario de contacto
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validación básica
  if (!name || !email || !message) {
    formMessage.textContent = "Por favor completa todos los campos.";
    formMessage.className = "form-message error";
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    formMessage.textContent = "Ingresa un email válido.";
    formMessage.className = "form-message error";
    return;
  }

  // Simular envío (en producción usar fetch o un servicio como Formspree)
  formMessage.textContent = "¡Gracias por tu mensaje! Te responderé pronto.";
  formMessage.className = "form-message success";

  // Limpiar formulario
  contactForm.reset();

  // Ocultar mensaje después de 5 segundos
  setTimeout(() => {
    formMessage.textContent = "";
    formMessage.className = "form-message";
  }, 5000);
});

// Añadir efecto de entrada suave a las secciones
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".about, .skills, .projects, .contact");

  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transition = "opacity 0.8s ease";
    observer.observe(section);
  });

  // Agregar clase cuando se ve
  observer.onEnter = (entry) => {
    entry.target.style.opacity = "1";
  };
});