// si le document est chargé , execution de cette fction
document.addEventListener('DOMContentLoaded', function() { 
    const cvForm = document.getElementById('cvForm');
    const cvPreview = document.getElementById('cvPreview');
    const genererButton = document.getElementById('genererCV');
    const telechargerButton = document.getElementById('telecharger');

    // partit de formation avec un tableau pour stocké
    let formations = [];

    document.getElementById('ajouterFormation').addEventListener('click', function() {
        const ecole = document.getElementById('ecole');
        const diplome = document.getElementById('diplome');
        const dateFirst = document.getElementById('dateFirst');
        const dateEnd = document.getElementById('dateEnd');

        if (!ecole.value && !diplome.value && !dateFirst.value && !dateEnd.value) {
            alert('Veuillez remplir au moins un champ de formation');
            return;
        }

        formations.push({
            ecole: ecole.value || 'Non spécifié',
            diplome: diplome.value || 'Non spécifié',
            dateFirst: dateFirst.value || 'Non spécifié',
            dateEnd: dateEnd.value || 'Non spécifié'
        });

        ecole.value = '';
        diplome.value = '';
        dateFirst.value = '';
        dateEnd.value = '';

        if (cvPreview.style.display === 'block') {
            updateFormationPreview();
        }
    });

    function updateFormationPreview() {
        const formationContainer = document.getElementById('previewFormation');
        
        if (formations.length === 0) {
            formationContainer.innerHTML = '<p>Aucune formation ajoutée</p>';
            return;
        }

        formations.sort((a, b) => {
            if (a.date === 'Non spécifié' && b.date === 'Non spécifié') return 0;
            if (a.date === 'Non spécifié') return 1;
            if (b.date === 'Non spécifié') return -1;
            return new Date(b.date) - new Date(a.date);
        });

        const formationsHTML = formations.map(formation => {
            let dateStr = formation.date === 'Non spécifié' ? 
                'Date non spécifiée' : 
                new Date(formation.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' });

            return `
                <div class="formation-item">
                    <div class="date">${dateStr}</div>
                    <div class="etablissement">${formation.ecole}</div>
                    <div class="diplome">${formation.diplome}</div>
                </div>
            `;
        }).join('');

        formationContainer.innerHTML = formationsHTML;
    }

    document.getElementById('photo').addEventListener('change', function(e) {
        const reader = new FileReader();
        const photoPreview = document.getElementById('photoPreview');
        
        if (!e.target.files || !e.target.files[0]) {
            photoPreview.style.display = 'none';
            return;
        }

        reader.onload = function(event) {
            photoPreview.style.display = 'block';
            photoPreview.src = event.target.result;
        }
        
        reader.readAsDataURL(e.target.files[0]);
    });
    // partit d'experiences

    let experiences = [];

    document.getElementById('ajouterExperience').addEventListener('click', function() {
        const entreprise = document.getElementById('entreprise');
        const poste = document.getElementById('posteExperience');
        const dateDebut = document.getElementById('dateDebut');
        const dateFin = document.getElementById('dateFin');
        const taches = document.getElementById('taches');

        if (!entreprise.value && !poste.value && !dateDebut.value && !dateFin.value && !taches.value) {
            alert('Veuillez remplir au moins un champ d\'expérience');
            return;
        }

        experiences.push({
            entreprise: entreprise.value || 'Non spécifié',
            poste: poste.value || 'Non spécifié',
            dateDebut: dateDebut.value || 'Non spécifié',
            dateFin: dateFin.value || 'Non spécifié',
            taches: taches.value || 'Non spécifié'
        });

        entreprise.value = '';
        poste.value = '';
        dateDebut.value = '';
        dateFin.value = '';
        taches.value = '';

        if (cvPreview.style.display === 'block') {
            updateExperiencePreview();
        }
    });

    function updateExperiencePreview() {
        const experienceContainer = document.getElementById('previewExperience');
        
        if (experiences.length === 0) {
            experienceContainer.innerHTML = '<p>Aucune expérience ajoutée</p>';
            return;
        }

        experiences.sort((a, b) => {
            if (a.dateFin === 'Non spécifié' && b.dateFin === 'Non spécifié') return 0;
            if (a.dateFin === 'Non spécifié') return 1;
            if (b.dateFin === 'Non spécifié') return -1;
            return new Date(b.dateFin) - new Date(a.dateFin);
        });

        const experiencesHTML = experiences.map(experience => {
            let dateStr;
            if (experience.dateDebut === 'Non spécifié' && experience.dateFin === 'Non spécifié') {
                dateStr = 'Date non spécifiée';
            } else {
                const dateDebut = experience.dateDebut === 'Non spécifié' ? 
                    'Date non spécifiée' : 
                    new Date(experience.dateDebut).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' });
                const dateFin = experience.dateFin === 'Non spécifié' ? 
                    'Date non spécifiée' : 
                    new Date(experience.dateFin).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' });
                dateStr = `${dateDebut} - ${dateFin}`;
            }

            return `
                <div class="experience-item">
                    <div class="date">${dateStr}</div>
                    <div class="entreprise">${experience.entreprise}</div>
                    <div class="poste">${experience.poste}</div>
                    <div class="taches">${experience.taches}</div>
                </div>
            `;
        }).join('');

        experienceContainer.innerHTML = experiencesHTML;
    }
    // partit des langues

    let langues = [];

    document.getElementById('ajouterLangue').addEventListener('click', function() {
        const langue = document.getElementById('langue');
        const niveau = document.getElementById('niveau');

        if (!langue.value) {
            alert('Veuillez saisir une langue');
            return;
        }

        langues.push({
            langue: langue.value,
            niveau: niveau.value || 'Niveau non spécifié'
        });

        langue.value = '';
        niveau.value = '';

        if (cvPreview.style.display === 'block') {
            updateLanguesPreview();
        }
    });

    function updateLanguesPreview() {
        const languesContainer = document.getElementById('previewLangues');
        
        if (langues.length === 0) {
            languesContainer.innerHTML = '<p>Aucune langue ajoutée</p>';
            return;
        }

        const languesHTML = `
            <div class="langues-list">
                <strong>Langues:</strong>
                ${langues.map(lang => `
                    <div class="langue-item">
                        <span class="langue-nom">${lang.langue}</span>
                        <span class="langue-niveau">${lang.niveau}</span>
                    </div>
                `).join('')}
            </div>
        `;

        languesContainer.innerHTML = languesHTML;
    }
    // partit de genration de cv

    genererButton.addEventListener('click', function() {
        const requiredFields = [
            'photo',
            'nomComplet',
            'titre',
            'email',
            'telephone',
            'interets'
        ];

        const missingFields = requiredFields.filter(field => {
            const element = document.getElementById(field);
            return !element.value;
        });

        if (missingFields.length > 0) {
            alert('Veuillez remplir tous les champs obligatoires des informations personnelles');
            return;
        }

        document.getElementById('previewNom').textContent = document.getElementById('nomComplet').value;
        document.getElementById('previewTitre').textContent = document.getElementById('titre').value;
        document.getElementById('previewEmail').textContent = `Email: ${document.getElementById('email').value}`;
        document.getElementById('previewTelephone').textContent = `Tél: ${document.getElementById('telephone').value}`;
        
        updateFormationPreview();
        
        updateExperiencePreview();
        
        updateLanguesPreview();
        
        document.getElementById('previewInterets').innerHTML = `
            <div class="interets-list">
                <strong>Centres d'intérêt:</strong><br>${document.getElementById('interets').value}
            </div>
        `;

        cvPreview.style.display = 'block';

        cvPreview.scrollIntoView({ behavior: 'smooth' });
    });

    telechargerButton.addEventListener('click', async function() {
        const cvPreview = document.getElementById('cvPreview');
        
 
        window.print();

    });
}); 
