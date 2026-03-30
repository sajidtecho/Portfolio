# 3D Animated AI/ML Engineer Portfolio

A modern, immersive, and fully responsive 3D portfolio website built with cutting-edge web technologies.

## Features
- **3D Animations & Elements:** Built with Three.js via react-three-fiber and react-three-drei.
- **Scroll Animations:** Powered by Framer Motion.
- **Modern UI:** Glassmorphism, tailored dark theme, and futuristic layouts designed with Tailwind CSS v4.
- **Interactive:** Custom cursor, floating elements, parallax-style particle background, and hover-triggered 3D meshes.
- **Sections:** Hero (with 3D object), About, Skills (Interactive 3D text nodes), Experience (Timeline), Projects, Contact.

## Tech Stack
- React 19 (Vite)
- Tailwind CSS v4
- Framer Motion
- Three.js
- React Three Fiber & React Three Drei
- React Icons & Lucide React

## Running the Application Locally
1. Navigate to the project directory:
   ```bash
   cd d:/Portfolio/portfolio
   ```

2. Install dependencies (already installed by Antigravity):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

## Customization
- **Information:** Update your personal details, projects, and skills in `src/constants/index.js`.
- **Theme:** Customize the color palette in `src/index.css`.
- **3D Models:** Replace the abstract models in `src/components/canvas/RobotModel.jsx` with actual `.gltf` / `.glb` files using `@react-three/drei`'s `useGLTF`.
