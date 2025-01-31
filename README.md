# Modern React Portfolio Template

A professional portfolio website built with React 18, TypeScript, and Tailwind CSS. Features a beautiful dark mode, smooth animations, and a responsive design.

## ✨ Features

- 🌓 **Smart Dark Mode**: System-aware theme with smooth transitions
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Modern Stack**: React 18 with TypeScript for type safety
- 🎨 **Tailwind CSS**: Utility-first CSS framework for modern styling
- 🔍 **SEO Optimized**: Meta tags and optimized build output

## 🛠️ Tech Stack

- React 18.2.0
- TypeScript 4.9.5
- Tailwind CSS 3.3.3
- React Icons 4.11.0
- React Scripts 5.0.1

## 📦 Installation & Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Start the development server:
   ```bash
   npm run start
   ```

## 🎨 Customization Guide

### 1. Personal Information
Edit `src/components/Header.tsx`:
```typescript
// Update profile information
<div className="profile-info">
  <h1>Your Name</h1>
  <h2>Your Role</h2>
  <p>Your professional summary...</p>
</div>
```

### 2. Projects
Edit `src/components/Projects.tsx`:
```typescript
const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    image: "project-image.jpg",
    technologies: ["React", "TypeScript"],
    link: "https://project-url.com"
  }
]
```

### 3. Achievements
Edit `src/components/Achievements.tsx`:
```typescript
// Add your achievements
<div className="achievement-card">
  <h3>Achievement Title</h3>
  <p>Achievement description</p>
</div>
```

### 4. Education
Edit `src/components/Education.tsx`:
```typescript
// Update education information
<span className="education-item">
  Your Degree, University Name
</span>
```

### 5. Social Links
Edit `src/components/Footer.tsx`:
```typescript
const socialLinks = [
  {
    name: "LinkedIn",
    href: "your-linkedin-url",
    icon: FaLinkedin
  }
]
```

### 6. Theme Customization
Edit `tailwind.config.js`:
```javascript
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Add custom colors
      }
    }
  }
}
```

## 🚀 Development Workflow

1. **Local Development**
   ```bash
   npm start
   ```
   - Access the site at `http://localhost:3000`
   - Changes will hot-reload automatically

2. **Building for Production**
   ```bash
   npm run build
   ```
   - Creates optimized build in `build/` directory
   - Includes minified assets and source maps

## 🔍 Project Structure

```
portfolio-website/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx      # Navigation and profile
│   │   ├── Projects.tsx    # Project showcase
│   │   ├── Achievements.tsx# Professional achievements
│   │   ├── Education.tsx   # Education & certifications
│   │   └── Footer.tsx      # Footer with social links
│   ├── context/
│   │   └── ThemeContext.tsx# Dark mode management
│   ├── App.tsx             # Main application
│   └── index.tsx           # Entry point
├── public/                  # Static assets
└── package.json            # Dependencies and scripts
```

## 🐛 Troubleshooting

- **Build Errors**: Clear cache and node_modules
  ```bash
  rm -rf node_modules
  npm cache clean --force
  npm install
  ```

- **Dark Mode Issues**: Check ThemeContext implementation
- **Style Problems**: Verify Tailwind configuration