class ImageSlider extends HTMLElement {
    constructor() {
        super();

        this.images = [
            'imagen1.jpg',
            'imagen2.jpg',
            'imagen3.jpg',
            'imagen4.jpg',
            'imagen5.jpg',
            'imagen6.jpg',
        ];
        this.currentIndex = 0;

        this.render();
    }

    connectedCallback() {
        this.querySelector('#prevBtn').addEventListener('click', () => this.showImage(-1));
        this.querySelector('#nextBtn').addEventListener('click', () => this.showImage(1));
    }

    showImage(direction) {
        this.currentIndex += direction;

        if (this.currentIndex < 0) {
            this.currentIndex = this.images.length - 1;
        } else if (this.currentIndex >= this.images.length) {
            this.currentIndex = 0;
        }

        this.update();
    }

    update() {
        const imgElement = this.querySelector('img');
        imgElement.src = this.images[this.currentIndex];
    }

    render() {
        this.innerHTML = `
        <div>
          <button id="prevBtn">Anterior</button>
          <img src="${this.images[this.currentIndex]}" alt="Imagen ${this.currentIndex + 1}">
          <button id="nextBtn">Siguiente</button>
        </div>
      `;
    }
}

customElements.define('image-slider', ImageSlider);