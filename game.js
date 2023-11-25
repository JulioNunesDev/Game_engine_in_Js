class Character {
  constructor() {
    this.element = document.getElementById("person");

    if (!this.element) {
      console.error("Element with id 'person' not found in the DOM.");
      return;
    }

    this.posY = 0;
    this.posX = 0;
    this.velocity = 50;
  }

  updatePosition() {
    this.element.style.transform = `translate(${this.posX}px, ${this.posY}px)`;
  }

  move(direction) {
    switch (direction) {
      case "ArrowUp":
        this.posY -= this.velocity;
        break;

      case "ArrowDown":
        this.posY += this.velocity;
        break;

      case "ArrowLeft":
        this.posX -= this.velocity;
        break;

      case "ArrowRight":
        this.posX += this.velocity;
        break;
    }

    this.updatePosition();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const character = new Character();

  if (character.element) {
    document.addEventListener("keydown", (event) => {
      character.move(event.key);
    });
  }
});

export default Character;
