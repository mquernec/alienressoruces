const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Configuration pour servir les fichiers statiques
app.use(express.static(path.join(__dirname), {
    // Configuration des types MIME pour les images
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
            res.set('Content-Type', 'image/jpeg');
        } else if (filePath.endsWith('.gif')) {
            res.set('Content-Type', 'image/gif');
        } else if (filePath.endsWith('.html')) {
            res.set('Content-Type', 'text/html; charset=utf-8');
        }
    }
}));

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route pour lister tous les fichiers images
app.get('/api/images', (req, res) => {
    const fs = require('fs');
    
    try {
        const files = fs.readdirSync(__dirname);
        const images = files.filter(file => 
            file.endsWith('.jpg') || 
            file.endsWith('.jpeg') || 
            file.endsWith('.gif') || 
            file.endsWith('.png')
        );
        
        res.json({
            success: true,
            images: images,
            count: images.length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Erreur lors de la lecture des fichiers'
        });
    }
});

// Route pour obtenir des informations sur le serveur
app.get('/api/status', (req, res) => {
    res.json({
        status: 'running',
        timestamp: new Date().toISOString(),
        port: PORT,
        message: 'Serveur de ressources alien en fonctionnement'
    });
});

// Gestion des erreurs 404
app.use((req, res) => {
    res.status(404).json({
        error: 'Ressource non trouvée',
        path: req.path
    });
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur le port ${PORT}`);
    console.log(`📂 Serveur de fichiers statiques : http://localhost:${PORT}`);
    console.log(`🖼️  API des images : http://localhost:${PORT}/api/images`);
    console.log(`📊 Statut du serveur : http://localhost:${PORT}/api/status`);
});

module.exports = app;
