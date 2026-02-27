# [Naren.dev](https://naren1729.github.io/portfolio/) — Interactive Developer Portfolio

A modern, highly animated, interactive portfolio website tailored for highlighting full-stack engineering work—specifically Java, Spring Boot, React, and Event-Driven Architectures (Kafka). 

Built to impress with dynamic 3D elements, glassmorphism UI/UX, and complex DOM mount-animations using Framer Motion.

## 🌟 Key Features

*   **Interactive 3D WebGL Globe:** Features a simulation of a live WebSocket data stream mapping connections globally using `three.js` and `react-globe.gl`, representing backend event-streaming expertise.
*   **Dynamic Data Configuration:** Powered entirely by a single `src/config/data.js` configuration file. Experience, Projects, and Skills dynamically map and generate UI elements without touching any React component logic.
*   **Mouse-Tracking Gradient Backgrounds:** Uses absolute coordinates and Framer Motion layout animations to cast dynamic light glows behind the interface based on the user's active cursor position.
*   **Scroll-Triggered Micro-Animations:** Section headers, timelines, and skill cards fade and slide in beautifully when scrolling into the viewport.
*   **Fully Responsive Layout:** Optimized cleanly through `CSS Grid` and modern media queries to adapt flawlessly across desktop, tablet, and mobile devices natively.
*   **Premium Glassmorphism Aesthetic:** Leverages heavy backdrop-blur filters mixed with translucent UI panels.

## 🚀 Tech Stack

- **Framework:** [React 18](https://reactjs.org/) mapped via [Vite](https://vitejs.dev/)
- **Animation Engine:** [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics:** [React-Globe.GL](https://globe.gl/) (Three.js wrapper)
- **Styling:** Vanilla CSS with extensive CSS Variables (`index.css`)
- **Iconography:** [Lucide-React](https://lucide.dev/)

## 🛠️ Local Development

### Prerequisites
Make sure you have Node.js (v18+ recommended) and `npm` installed.

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Naren1729/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```
   Navigate to `http://localhost:5173/` to view the website.

## 📂 Project Structure

```text
src/
├── components/          # React UI pieces (Hero, Navbar, Experience...)
│   ├── Background.jsx   # Mouse-tracking glowing particle system
│   └── EarthGlobe.jsx   # 3D interactive spinning Globe simulation
├── config/
│   └── data.js          # ⚠️ SINGLE SOURCE OF TRUTH (Edit your data here)
├── App.jsx              # Main assembly layout
├── index.css            # Global unified branding + styling variables
└── main.jsx             # React entry wrapper
```

## 📝 How to Update Your Information

You do **not** need to touch `.jsx` or `.css` files to modify your resume details. 

1. Open `src/config/data.js`.
2. Find the relevant array (`PROJECTS`, `EXPERIENCE`, `SKILLS`) or object (`PERSONAL_INFO`).
3. Add a new object to an array, and the UI will dynamically render the new card, apply the layout grids, and automatically bind the entrance animations.
4. If you want a new icon, import it from `lucide-react` at the top of the file and attach it to your new object.

## 🌐 Deployment (Vercel)

This application is ready to be hosted entirely for free via [Vercel](https://vercel.com/):

1. Go to Vercel and log in with your GitHub account.
2. Click **"Add New Project"**.
3. Import your `portfolio` repository from GitHub.
4. Leave all default settings (Vite configuration is automatically detected).
5. Deploy! Every future commit to your `main` branch will seamlessly auto-deploy.
