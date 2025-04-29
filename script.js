// Inicializar EmailJS
(function () {
    emailjs.init("YOUR_USER_ID"); // Reemplaza con tu User ID de EmailJS
  })();
  
  // Datos de experiencia
  const experiences = [
    { role: 'Administrativo PIO', company: 'FEMETE', years: '2019 - 2021 / 2022 - 2024' },
    { role: 'Administrativo OPEA', company: 'Fundación Laboral de la Construcción', years: '2021 - 2022' }
  ];
  
  // Datos de proyectos
  const projects = [
    {
      title: 'Excel funcional Agenda de proyectos (Administrativos/as)',
      description: 'Excel que hace de agenda laboral para orientadores/as y administrativos/as.',
      link: 'https://docs.google.com/spreadsheets/d/1wFHuyfkwS_S96NkZBfhqpcF-ANfpySD8gsxHt6LItfc/edit?usp=sharing'
    },
    {
      title: 'Excel funcional Gestión Usuarios (Orientadores/as)',
      description: 'Excel aplicado a la gestión de usuarios y datos sensibles.',
      link: 'https://docs.google.com/spreadsheets/d/15qodf82_qb79fP0E1ZxNMIGf0FkOJR9I/edit?usp=sharing&ouid=114246957101443550716&rtpof=true&sd=true'
    }
  ];
  
  // Renderizar experiencia
  const experienceList = document.getElementById('experience-list');
  experiences.forEach(exp => {
    const li = document.createElement('li');
    li.textContent = `${exp.role} en ${exp.company} (${exp.years})`;
    experienceList.appendChild(li);
  });
  
  // Renderizar proyectos
  const projectList = document.getElementById('project-list');
  projects.forEach(proj => {
    const div = document.createElement('div');
    div.innerHTML = `
      <strong>${proj.title}</strong>
      <p>${proj.description}</p>
      <a href="${proj.link}" target="_blank">Ver proyecto</a>
    `;
    projectList.appendChild(div);
  });
  
  // Manejo del formulario
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const form = e.target;
  
    // Usar EmailJS para enviar el correo
    emailjs.sendForm("service_wgj1jhn", "YOUR_TEMPLATE_ID", form)
      .then(function (response) {
        alert('Gracias por tu mensaje. Te responderé pronto.');
        form.reset(); // Opcional: limpiar el formulario
      }, function (error) {
        alert('Hubo un error, por favor intenta nuevamente.');
      });
  });
  
  // Animación al hacer scroll con IntersectionObserver
  const fadeInElements = document.querySelectorAll('.fade-in');
  
  const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target); // Opcional: solo una vez
      }
    });
  }, {
    threshold: 0.1
  });
  
  fadeInElements.forEach(el => appearOnScroll.observe(el));
  