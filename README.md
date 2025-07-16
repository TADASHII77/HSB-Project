# HVAC Technician Directory

A modern, responsive web application for finding and connecting with HVAC technicians in your area. Built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Smart Search**: Find technicians by service type and location
- **Advanced Filtering**: Filter by rating, distance, services, and verification status
- **Interactive Map**: Visual location-based search
- **Quote Management**: Request and manage quotes from multiple technicians
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Dynamic filtering and search results

## 🛠️ Technologies

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript ES6+** - Modern JavaScript features

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/HSB-Frontend.git
cd HSB-Frontend/HSB/Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. **Push to GitHub**:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy your site

3. **Update Repository Name**:
   - If your repository name is different from "HSB-Frontend", update:
     - `vite.config.js` - change the `base` path
     - `package.json` - update the `homepage` URL

### Manual Deployment

You can also deploy manually using gh-pages:

1. **Install gh-pages** (if not already installed):
```bash
npm install --save-dev gh-pages
```

2. **Build and Deploy**:
```bash
npm run deploy
```

### Configuration Files

The following files are configured for GitHub Pages deployment:

- **`.github/workflows/deploy.yml`** - GitHub Actions workflow
- **`vite.config.js`** - Vite configuration with proper base path
- **`package.json`** - Deployment scripts and homepage URL
- **`public/.nojekyll`** - Prevents Jekyll processing

## 🔧 Build Configuration

The application is configured to:
- Build to the `dist` directory
- Handle assets properly for GitHub Pages
- Support both development and production environments
- Optimize for static hosting

## 📁 Project Structure

```
HSB/Frontend/
├── public/
│   ├── images/
│   └── .nojekyll
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── MapSection.jsx
│   │   ├── TechniciansList.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Usage

1. **Search for Technicians**: Use the search bar to find technicians by service type and location
2. **Apply Filters**: Use the filtering options to narrow down results
3. **View Details**: Click on technician cards to see detailed information
4. **Request Quotes**: Click "Get a free Quote" to request quotes from technicians
5. **Manage Quotes**: Track your quote requests in the floating summary

## 🔄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## 🌟 Key Components

### Header
- Interactive menu with service categories
- Location selector with major Canadian cities
- Responsive navigation

### MapSection
- Smart search with auto-suggestions
- Popular service quick-search buttons
- Real-time search result summary

### TechniciansList
- Advanced filtering and sorting options
- Quote request management
- Pagination with load more functionality
- Recommended vs. other technicians separation

## 🚀 Live Demo

Visit the live application: [https://yourusername.github.io/HSB-Frontend](https://yourusername.github.io/HSB-Frontend)

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email [your-email@example.com] or create an issue in the repository. 