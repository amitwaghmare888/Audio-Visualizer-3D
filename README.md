# 🎵 Sonic Circle | 3D Audio Visualizer

**Sonic Circle** is a high-performance, browser-based audio visualizer that renders sound frequencies in a 3D circular display. 

Unlike standard bar visualizers, this project uses the **Web Audio API** and **Fast Fourier Transform (FFT)** algorithms to extract precise frequency data from any audio file. It maps bass, mid, and treble tones to a dynamic circular coordinate system, creating a "breathing" visual effect that reacts instantly to the music.

## ✨ Features

* **Real-Time Physics:** Uses `requestAnimationFrame` for buttery smooth 60FPS rendering.
* **Dynamic Color Engine:** utilizes HSL color mapping where specific frequencies trigger specific color spectrums.
* **Circular Projection:** Mathematically maps linear frequency data onto a polar coordinate system (`x = r * cos(θ)`, `y = r * sin(θ)`).
* **Glassmorphism UI:** A modern, frosted-glass interface that fades away during playback.
* **Local Processing:** All audio processing happens in your browser—no data is sent to any server.

## 🚀 How to Run

Because this project uses vanilla HTML, CSS, and JS, you do not need to install Node.js or any dependencies.

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/yourusername/sonic-circle.git](https://github.com/yourusername/sonic-circle.git)
    ```

2.  **Open the project**
    Navigate to the folder and simply double-click `index.html` to open it in your default browser.

3.  **Play Music**
    * Click the **Upload MP3** button.
    * Select any audio file from your computer.
    * The visualizer will immediately start reacting to the audio.

## 🛠️ Technologies Used

* **HTML5 Canvas:** For high-performance 2D raster graphics rendering.
* **Web Audio API:** To create the `AnalyserNode` and extract byte frequency data.
* **CSS3:** For the absolute positioning and backdrop filters.
* **JavaScript (ES6):** For the logic, loop handling, and math.

## 📂 Project Structure

```text
/
├── index.html   # The structural skeleton and UI
├── style.css    # Styling, gradients, and UI effects
└── script.js    # The physics engine and audio analysis logic