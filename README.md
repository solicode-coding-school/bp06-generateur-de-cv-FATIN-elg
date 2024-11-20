# 📝 CV Generator

## 📖 Description

Ce projet est une application web qui permet à l'utilisateur de générer un CV à partir d'un formulaire interactif. L'utilisateur peut remplir ses informations personnelles et professionnelles, visualiser son CV dans un template prédéfini, et le télécharger en format PDF. L'application utilise la programmation orientée objet (POO) pour gérer les données du CV et **localStorage** pour conserver un historique des saisies.

---

## ✨ Fonctionnalités

### 1. **Formulaire** 🖊️  
- **Section Informations personnelles** :  
  - ✍️ Nom  
  - 📧 Email  
  - 📱 Téléphone  
  - 🏠 Adresse  
  - 🖼️ Photo (upload d'image)  
- **Section Informations professionnelles** :  
  - 🎓 Éducation (ajout dynamique de plusieurs entrées)  
  - 💼 Expériences professionnelles (ajout dynamique de plusieurs entrées)

### 2. **Génération du CV** 🚀  
- Un bouton **"Générer"** permet de :  
  - 🖼️ Créer un CV formaté selon un template prédéfini.  
  - 👀 Afficher un aperçu du CV dans une balise `<iframe>`.

### 3. **Téléchargement en PDF** 📄  
- L'utilisateur peut télécharger le CV généré sous format PDF en utilisant une bibliothèque externe comme [jsPDF](https://github.com/parallax/jsPDF) ou [html2pdf.js](https://github.com/eKoopmans/html2pdf.js).

### 4. **Historique avec localStorage** 🗂️  
- Les données saisies dans le formulaire sont sauvegardées dans **localStorage**.  
- L'utilisateur peut reprendre son travail sans tout ressaisir en cas de rafraîchissement de la page.

### 5. **Programmation Orientée Objet** 💡  
- Une classe `Resume` gère toutes les données du CV et leur traitement.

---

## 💻 Technologies utilisées

- **🌐 HTML5 / CSS3** : Interface utilisateur  
- **⚡ JavaScript (ES6)** : Fonctionnalités dynamiques, manipulation de DOM  
- **🏗️ POO (Programmation Orientée Objet)** : Gestion des données du CV  
- **📂 localStorage** : Sauvegarde locale des saisies  
- **📥 Bibliothèque PDF** : Conversion et téléchargement du CV en PDF (ex. jsPDF, html2pdf.js)

---

## 📂 Structure du projet

```plaintext
.
├── index.html          # Page principale avec le formulaire
├── style.css           # Styles pour le formulaire et l'aperçu du CV
├── script.js           # Logique principale de l'application
├── resume.js           # Classe Resume (POO)
├── README.md           # Documentation du projet
