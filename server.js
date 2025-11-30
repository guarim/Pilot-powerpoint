const express = require('express');
const cors = require('cors');
// RobotJS permet de simuler le clavier
const robot = require('robotjs');

const app = express();
const PORT = 3000;

app.use(cors()); // Autoriser le navigateur à parler au serveur
app.use(express.json());

console.log("--- Serveur de Contrôle PowerPoint Démarré ---");
console.log("En attente des gestes...");

app.post('/command', (req, res) => {
    const action = req.body.action;
    
    switch(action) {
        case 'next':
            console.log("➡️  Diapo Suivante");
            // Flèche Droite
            robot.keyTap("right");
            break;
            
        case 'previous':
            console.log("⬅️  Diapo Précédente");
            // Flèche Gauche
            robot.keyTap("left");
            break;
            
        case 'stop':
            console.log("🛑 Arrêt du diaporama");
            // Touche Echap
            robot.keyTap("escape");
            break;
            
        // Le dessin et l'effacement se font uniquement côté navigateur (Canvas),
        // donc pas besoin d'action clavier ici.
    }

    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Serveur actif sur http://localhost:${PORT}`);
});
```

### 3. Installation et Lancement

Pour que cela fonctionne, vous devez installer Node.js sur votre ordinateur, puis suivre ces étapes dans votre terminal :

1.  **Initialiser le projet :**
    ```bash
    npm init -y
    ```
2.  **Installer les bibliothèques :**
    * `express` : Pour créer le serveur web.
    * `cors` : Pour autoriser la page web à contacter le serveur.
    * `robotjs` : Pour simuler l'appui sur les touches du clavier.
    ```bash
    npm install express cors robotjs
    ```
    *(Note : L'installation de robotjs nécessite parfois des outils de compilation C++ installés sur Windows. Si cela échoue, une alternative pure JS comme `ks-uinput` ou des scripts Python avec `pyautogui` peuvent être utilisés).*

3.  **Lancer le serveur :**
    ```bash
    node server.js
