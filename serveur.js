// Importation des modules nécessaires
const express = require('express');
const app = express();

// Données de la to-do list
const tasks = [
    { id: 1, description: 'Faire les courses' },
    { id: 2, description: 'Nettoyer la maison' },
    { id: 3, description: 'Rendre visite à un ami' }
];

// Route pour récupérer toutes les tâches
app.get('/tasks', (req, res) => {
    res.send(tasks);
});

// Démarrage du serveur sur le port 3000
app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000...');
});
