import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#1d1d1d',
  scene: {
    preload,
    create,
    update
  }
};

function preload() {
  // Aqui você vai carregar imagens futuramente
}

function create() {
  // Aqui nasce o jogo
  this.add.text(200, 250, 'Guerreira do Futuro', { font: '32px Arial', fill: '#ffffff' });
}

function update() {
  // Aqui vai rodar o loop do jogo
}

new Phaser.Game(config);
