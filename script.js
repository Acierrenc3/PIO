// Inicializar EmailJS
(function () {
    emailjs.init("service_wgj1jhn"); // Reemplaza con tu User ID de EmailJS
  })();
  
 // Datos de experiencia
const experiences = [
    {
      role: 'Administrativo PIO',
      company: 'FEMETE',
      years: '2019 - 2021 / 2022 - 2024',
      description: 'Me dediqué sobretodo a la elaboración de los Excels, formularios y documentación necesarios para la continuidad del proyecto junto con varios compañeros. También me dediqué a la gestión de la web orientafemete.org, De resto realicé labores administrativas tales como las que menciono en la lista de habilidades',
      skills: ['Elaboración excels del proyecto','Gestión web orientafemete.org', 'Atención al cliente', 'Proactividad', 'Organización', 'Trabajo en equipo', 'Gestión del estrés','Atención y gestión de llamadas']
    },
    {
      role: 'Administrativo OPEA',
      company: 'Fundación Laboral de la Construcción',
      years: '2021 - 2022',
      description: 'Desarrollé diversas tareas administrativas, además de gestionar y mantener actualizados los archivos Excel y formularios del proyecto. También me encargué de asegurar el correcto funcionamiento de los equipos informáticos, garantizando que tanto yo como mis compañeros/as pudiéramos trabajar de manera eficiente y sin interrupciones.',
      skills: ['Registro y análisis de datos de usuarios', 'Confidencialidad', 'Colaboración', 'Microsoft Office', 'Gestión de usuarios', 'Elaboración excels del proyecto']
    }
  ];
  
  // Datos de proyectos
  const projects = [
    {
      title: 'Base de datos para la gestión de Usuarios',
      description: 'Pequeña base de datos funcional para que los orientadores guarden y gestionen datos de los usuarios, dicha BBDD es complementaria con ambos excels y con las aplicaciones del Servicio Canario de Empleo',
      link: 'https://bbdd-users-pio.netlify.app/'
    },
    {
      title: 'Excel funcional Gestión Usuarios (Orientadores/as)',
      description: 'Excel aplicado a la gestión de usuarios y datos sensibles, siendo este cómodo en su funcionamiento, lo que ayuda a obtener cálculos y resultados matemáticos de las acciones realizadas con los usuarios/as.',
      link: 'https://docs.google.com/spreadsheets/d/15qodf82_qb79fP0E1ZxNMIGf0FkOJR9I/edit?usp=sharing&ouid=114246957101443550716&rtpof=true&sd=true'
    },
    {
      title: 'Excel funcional Agenda de proyectos (Administrativos/as)',
      description: 'Excel que hace de agenda laboral para orientadores/as y administrativos/as.',
      link: 'https://docs.google.com/spreadsheets/d/1wFHuyfkwS_S96NkZBfhqpcF-ANfpySD8gsxHt6LItfc/edit?usp=sharing'
    }
    
  ];
  
  // Renderizar experiencia
  const experienceList = document.getElementById('experience-list');
  experiences.forEach(exp => {
    const div = document.createElement('div');
    div.classList.add('experience-card', 'fade-in');
    div.innerHTML = `
      <strong>${exp.role}</strong> en <em>${exp.company}</em> <br/>
      <span class="experience-years">${exp.years}</span>
      <p>${exp.description}</p>
      <ul>
        ${exp.skills.map(skill => `<li>✔️ ${skill}</li>`).join('')}
      </ul>
    `;
    experienceList.appendChild(div);
  });
  
  // Renderizar proyectos
  const projectList = document.getElementById('project-list');
  projects.forEach(proj => {
    const div = document.createElement('div');
    div.classList.add('fade-in');
    div.innerHTML = `
      <strong>${proj.title}</strong>
      <p>${proj.description}</p>
      <a href="${proj.link}" target="_blank">Ver proyecto</a>
    `;
    projectList.appendChild(div);
  });
  
  // Manejo del formulario con EmailJS
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Si usas EmailJS
    emailjs.sendForm('service_wgj1jhn', 'template_default', this)
      .then(() => {
        alert('Gracias por tu mensaje. Te responderé pronto.');
        this.reset();
      })
      .catch((error) => {
        console.error('Error al enviar:', error);
        alert('Ocurrió un error al enviar el mensaje. Intenta nuevamente.');
      });
  });
  
  // Animación al hacer scroll con IntersectionObserver
  const fadeInElements = document.querySelectorAll('.fade-in');
  
  const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target); // Solo una vez
      }
    });
  }, {
    threshold: 0.1
  });
  
  fadeInElements.forEach(el => appearOnScroll.observe(el));
