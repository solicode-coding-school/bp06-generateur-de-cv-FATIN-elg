class CVApp {
    constructor() {
      this.initEventListeners();
    }

    initEventListeners() {
      document.getElementById('generateBtn').addEventListener('click', () => this.generateCV());
      document.getElementById('savePdfBtn').addEventListener('click', () => this.savePDF());
    }

    addSection(type) {
      const section = document.getElementById(`${type}-section`);
      const group = section.querySelector(`.${type}-group`).cloneNode(true);
      
      // Clear input values
      group.querySelectorAll('input, textarea').forEach(input => input.value = '');
      section.insertBefore(group, section.querySelector('.add-btn'));
    }

    generateCV() {
      const name = document.getElementById('name').value;
      const jobTitle = document.getElementById('jobTitle').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const languages = document.getElementById('languages').value;
      const hobbies = document.getElementById('hobbies').value;

      document.getElementById('cvName').textContent = name;
      document.getElementById('cvJobTitle').textContent = jobTitle;
      document.getElementById('cvEmail').textContent = email;
      document.getElementById('cvPhone').textContent = phone;
      document.getElementById('cvLanguages').textContent = languages;
      document.getElementById('cvHobbies').textContent = hobbies;

      const photo = document.getElementById('photo').files[0];
      if (photo) {
        const reader = new FileReader();
        reader.onload = e => document.getElementById('cvPhoto').src = e.target.result;
        reader.readAsDataURL(photo);
      }

      // Clear existing entries and add new education details
      this.populateSection('education', 'cvEducation', ['school', 'degree', 'edu-date']);

      // Clear existing entries and add new experience details
      this.populateSection('experience', 'cvExperience', ['company', 'tasks']);

      document.getElementById('cvDisplay').classList.remove('hidden');
      document.getElementById('cvForm').classList.add('hidden');
    }

    populateSection(type, containerId, fields) {
      const container = document.getElementById(containerId);
      container.innerHTML = '';
      const groups = document.querySelectorAll(`.${type}-group`);
      
      groups.forEach(group => {
        const div = document.createElement('div');
        div.classList.add('cv-section');

        fields.forEach(field => {
          const value = group.querySelector(`.${field}`).value;
          if (value) {
            const p = document.createElement('p');
            p.textContent = value;
            div.appendChild(p);
          }
        });

        container.appendChild(div);
      });
    }

    savePDF() {
      alert('Fonctionnalité en cours de développement !');
    }
  }

  const cvApp = new CVApp();