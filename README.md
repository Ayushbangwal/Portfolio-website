# Portfolio Website

A modern, responsive personal portfolio website built with React and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional, and slightly futuristic design with smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Elements**: Hover effects, animations, and micro-interactions
- **Smooth Scrolling**: Smooth scroll navigation with progress bar
- **Loading Animation**: Beautiful loading screen
- **Contact Form**: Functional contact form with validation
- **Social Links**: Integrated social media links
- **Back to Top**: Floating back to top button

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Achievements.js
│   │   ├── BackToTop.js
│   │   ├── Certificates.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── LoadingScreen.js
│   │   ├── Navbar.js
│   │   ├── Projects.js
│   │   └── ScrollProgressBar.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🛠️ Technologies Used

- **React 18**: Frontend framework
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

- **Hero Section**: Update name, title, tagline in `src/components/Hero.js`
- **About Section**: Update personal description in `src/components/About.js`
- **Contact Section**: Update email, phone, location in `src/components/Contact.js`
- **Footer**: Update contact info in `src/components/Footer.js`

### Projects

Update your projects in `src/components/Projects.js`:
- Add your project details
- Update GitHub and live demo links
- Modify tech stack and descriptions

### Certificates

Update your certificates in `src/components/Certificates.js`:
- Add your certification details
- Update issuer and credential IDs
- Add certificate verification links

### Achievements

Update your achievements in `src/components/Achievements.js`:
- Add hackathon participation
- Include academic achievements
- Add competition results

### Theme Colors

Customize the theme colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: { /* your primary colors */ },
      accent: { /* your accent colors */ }
    }
  }
}
```

## 📱 Sections

1. **Hero Section**: Introduction with profile image and CTA buttons
2. **About Me**: Personal description and skills showcase
3. **Projects**: Grid of project cards with filtering
4. **Certificates**: Display of professional certifications
5. **Achievements**: Academic and competition achievements
6. **Contact**: Contact form and information
7. **Footer**: Social links and quick navigation

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interactions

### Animations
- Smooth scroll animations
- Hover effects on cards
- Loading animations
- Micro-interactions

### Dark Mode
- System preference detection
- Manual toggle option
- Persistent theme selection

### Performance
- Optimized images
- Lazy loading
- Smooth transitions
- Minimal bundle size

## 🚀 Deployment

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy automatically on push

### Vercel
1. Push your code to GitHub
2. Import your project in Vercel
3. Deploy with one click

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `build` folder to GitHub Pages

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

Your Name - [@yourusername](https://github.com/yourusername) - your.email@example.com

---

⭐ If you like this portfolio, please give it a star!
