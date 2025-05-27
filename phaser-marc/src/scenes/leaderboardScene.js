import Phaser from 'phaser';

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super({ key: 'LeaderboardScene' });
  }

  preload() {
    // Carrega recursos si cal, com imatges o fonts
    // Exemple: this.load.image('background', 'assets/background.jpg');
  }

  create() {
    // Afegeix un text senzill al centre de la pantalla
    this.add.text(400, 300, 'Leaderboard', {
      fontSize: '32px',
      color: '#ffffff',
      align: 'center'
    }).setOrigin(0.5); // Centra el text (assumint una resolució de 800x600)

    // Aquí pots afegir més elements, com una llista de puntuacions
    // Exemple: mostrar dades d'una API o puntuacions locals
  }

  update() {
    // Lògica d'actualització, si cal
  }
}
