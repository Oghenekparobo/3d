export const W = "w";
export const A = "a";
export const S = "s";
export const D = "d";
export const SHIFT = "shift";
export const DIRECTIONS = [W, A, S, D];

export class KeyDisplay {
  map: Map<string, HTMLButtonElement> = new Map();

  constructor() {
    const container: HTMLDivElement = document.createElement("div");
    container.style.display = "flex";
    container.style.gap = "2rem";
    document.body.append(container);

    this.map.set(W, this.createButton(W));
    this.map.set(A, this.createButton(A));
    this.map.set(S, this.createButton(S));
    this.map.set(D, this.createButton(D));
    this.map.set(SHIFT, this.createButton(SHIFT));

    this.map.forEach((v, _) => {
      container.appendChild(v);
    });

    this.updatePosition();
  }

  private createButton(text: string): HTMLButtonElement {
    const button: HTMLButtonElement = document.createElement("button");
    button.textContent = text;
    button.style.backgroundColor = "blue";
    button.style.color = "white";
    button.style.fontSize = "16px";
    button.style.fontWeight = "800";
    button.style.padding = "10px";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.position = "absolute";
    button.style.top = "10rem";

    button.style.paddingTop = "20px";

    button.addEventListener("click", () => this.buttonClick(text));
    return button;
  }

  public updatePosition() {
    this.map.get(W)!.style.left = "300px";
    this.map.get(A)!.style.left = "200px";
    this.map.get(S)!.style.left = "300px";
    this.map.get(D)!.style.left = "400px";
    this.map.get(SHIFT)!.style.left = "50px";

    const topPosition = `${window.innerHeight - 100}px`;
    this.map.get(W)!.style.top = topPosition;
    this.map.get(A)!.style.top = topPosition;
    this.map.get(S)!.style.top = topPosition;
    this.map.get(D)!.style.top = topPosition;
    this.map.get(SHIFT)!.style.top = topPosition;
  }

  public buttonClick(key: string) {
    // Handle button click events here
    console.log(`Button clicked: ${key}`);
  }

  public down(key: string) {
    if (this.map.get(key.toLowerCase())) {
      this.map.get(key.toLowerCase())!.style.backgroundColor = "red";
    }
  }

  public up(key: string) {
    if (this.map.get(key.toLowerCase())) {
      this.map.get(key.toLowerCase())!.style.backgroundColor = "blue";
    }
  }
}

// Initialize and use the KeyDisplay class
const keyDisplay = new KeyDisplay();
