# MiniProject (Serving Static Files)

## Overview
A modern web application demonstrating static file serving capabilities using Express.js. The project features a responsive landing page with multiple sections and demonstrates proper implementation of static asset management.

## Features
- Responsive navigation bar
- Hero section with background image
- About section
- Services showcase with cards
- Contact form
- Mobile-responsive design
- Static file serving
- ES Modules support

## Tech Stack
- Node.js
- Express.js
- HTML5
- CSS3
- JavaScript

## Project Structure
```
📦 project-root
 ┣ 📜 index.js
 ┣ 📜 package.json
 ┣ 📂 views
 ┃ ┣ 📜 index.html
 ┃ ┣ 📜 style.css
 ┃ ┣ 📜 app.js
 ┃ ┗ 📂 images
 ┃   ┗ 🖼️ express.webp
 ┗ 📜 .gitignore
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/hertheyhermee/Group_four_project
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

4. Visit `http://localhost:3000` in your browser

## Implementation Details

### Server Setup
The server is implemented using Express.js with ES Modules support. Key features include:
- Static file serving middleware
- Root route handler
- Cross-platform compatibility using path module

### Frontend Structure
The frontend is built with a modern, responsive design featuring:
- Navigation menu with smooth scrolling
- Hero section with call-to-action
- Services section with card layout
- Contact form
- Mobile-first approach

### Styling
The project uses modern CSS features including:
- Flexbox for layouts
- CSS Variables
- Media queries for responsiveness
- Smooth transitions
- Mobile-first approach

## Development Notes
- ES Modules are enabled via `"type": "module"` in package.json
- Static files are served from the `views` directory
- The project uses Express.js version 4.21.1

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the ISC License.

## Acknowledgments
- Express.js team for the excellent framework
- Contributors and reviewers