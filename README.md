# Dream Vertex - 3D Design & Modeling

A modern, responsive landing page for Dream Vertex, a 3D design and modeling company specializing in creating stunning 3D designs for machines, devices, food, products, buildings, and logos.

## Features

- **Modern Tech Stack**: Built with React, Vite, Tailwind CSS v4, and Material UI
- **Responsive Design**: Mobile-first approach with breakpoints for mobile, tablet, and desktop
- **6 Service Sections**: Each with unique masonry layouts
  - Machines (5 media items - asymmetric 3-column layout)
  - Devices (4 media items - 2-column layout)
  - Food (6 media items - masonry 3-column layout)
  - Products (7 media items - 4-column grid)
  - Buildings (5 media items - asymmetric 2-column layout)
  - Logos (4 media items - creative overlap layout)
- **Accessibility**: ARIA labels, prefers-reduced-motion support, semantic HTML
- **Interactive Elements**: Smooth scrolling navigation, hover effects, lazy loading
- **Performance Optimized**: Built with Vite for fast development and optimized production builds

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/theahmadm3/dream-vertex.git
cd dream-vertex
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
dream-vertex/
├── src/
│   ├── App.jsx          # Main application component with all sections
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles with Tailwind CSS
├── public/              # Static assets
├── index.html           # HTML template
└── package.json         # Project dependencies
```

## Technology Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Material UI 7** - Component library and icons
- **ESLint** - Code linting

## Customization

### Replacing Placeholder Media

The current implementation uses Unsplash images and Pexels videos as placeholders. To replace with your own media:

1. Update the `media` arrays in each `ServiceSection` component in `src/App.jsx`
2. Replace the `src` URLs with your own image/video URLs or local paths
3. Update the `alt` text for accessibility

### Modifying Layouts

Each section uses a different masonry layout controlled by the `layoutType` prop. Available layout types:
- `asymmetric-3col`
- `grid-2col`
- `masonry-3col`
- `grid-4col`
- `asymmetric-2col`
- `creative-overlap`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Contact

For inquiries about Dream Vertex services, visit the contact section on the landing page.
