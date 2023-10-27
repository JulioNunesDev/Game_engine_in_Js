class Character {

    constructor(nome, x, y) {
        this.nome = nome;
        this.x = x;
        this.y = y;
      }
    
      CreateCharacterMoviment(dx, dy) {
        this.x += dx;
        this.y += dy;
        console.log(`${this.nome} se moveu para (${this.x}, ${this.y}).`);
      }

CreateCharacterSprites() {
}


}

export {Character}