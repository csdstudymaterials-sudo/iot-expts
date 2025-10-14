# Kongu IoT Laboratory Web App

![Kongu Engineering College](src/assets/kecbanner.png)

A comprehensive, modern web application showcasing IoT laboratory experiments for Kongu Engineering College's Department of Computer Science and Design. Built with React, Vite, and Tailwind CSS, featuring stunning animations and a responsive design.

## 🌟 Features

- **🎨 Modern UI/UX**: Glassmorphism design with smooth animations powered by Framer Motion
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🔬 Comprehensive Experiments**: 9 detailed IoT experiments with step-by-step guides
- **🖼️ Visual Learning**: Reference images and code examples for better understanding
- **🌐 Cloud Deployment**: Automatically deployed to GitHub Pages
- **🎯 Interactive Elements**: Hover effects, smooth transitions, and engaging user experience

## 🧪 Experiments Included

### 1. ESP32 Arduino IDE Setup
- Arduino IDE installation for Windows
- ESP32 board configuration
- Basic LED blinking and analog read programs

### 2. Traffic Light Control System
- ESP32-based traffic signal controller
- Multi-LED traffic light simulation
- Sequential signal management

### 3. IoT Cloud Data Logging (ThingSpeak)
- ESP32 WiFi connectivity
- Real-time sensor data upload
- ThingSpeak cloud platform integration

### 4. Cooja IoT Network Simulation
- Contiki OS setup
- Wireless sensor network simulation
- Client-server communication modeling

### 5. Raspberry Pi Web Interaction
- GPIO programming with Python
- Flask web server implementation
- Remote LED control via web interface

### 6. Motion Detection with Email Alerts
- PIR sensor integration
- OpenCV camera capture
- Gmail SMTP notifications

### 7. AWS EC2 Instance Management
- Cloud infrastructure setup
- EFS file system mounting
- Virtual machine configuration

### 8. AWS S3 Static Website Hosting
- Object storage management
- Static website deployment
- Bucket policy configuration

### 9. AWS Lambda Serverless Functions
- Serverless computing introduction
- Function deployment and testing
- CloudWatch monitoring integration

## 🚀 Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router
- **Icons**: React Icons
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/roohithbala/iot-expts.git
   cd kongu-iot-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🌐 Live Demo

The application is live at: [https://roohithbala.github.io/iot-expts/](https://roohithbala.github.io/iot-expts/)

## 📁 Project Structure

```
kongu-iot-web/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── kecbanner.png
│   │   ├── esp32 pin config.jpg
│   │   └── raspberry-pi-4.png
│   ├── components/
│   │   ├── ExperimentList.jsx
│   │   └── ExperimentDetails.jsx
│   ├── data.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🔧 Configuration

### Vite Configuration
The project uses Vite for fast development and optimized production builds. The configuration includes:
- React plugin for JSX support
- Base path configuration for GitHub Pages deployment

### Tailwind CSS
Custom Tailwind configuration with:
- Content paths for purging unused CSS
- Custom animations and effects
- Responsive design utilities

## 🚀 Deployment

The project is automatically deployed to GitHub Pages using GitHub Actions:

1. **Automatic Deployment**: Every push to the `main` branch triggers a new build
2. **Build Process**: Optimized production build with Vite
3. **CDN Hosting**: Fast, reliable hosting through GitHub's CDN

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to GitHub Pages (if using gh-pages package)
npm run deploy
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow React best practices
- Use meaningful commit messages
- Test on multiple devices/browsers
- Maintain code quality with ESLint

## 📝 Adding New Experiments

To add a new experiment:

1. Update `src/data.js` with experiment details
2. Include: `id`, `name`, `aim`, `components`, `procedure`, `program`, `output`
3. Add reference images to `src/assets/` if needed
4. Test the new experiment thoroughly

## 🐛 Troubleshooting

### Common Issues

**Build fails with Tailwind CSS errors**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Images not loading**
- Ensure images are in `src/assets/` directory
- Check file paths in components
- Verify image formats are supported

**Routing issues**
- Ensure all routes are properly configured in `App.jsx`
- Check experiment IDs match between data and routes

## 📄 License

This project is developed for educational purposes by the 2023-27 batch of Kongu Engineering College.

## 🙏 Acknowledgments

- **Kongu Engineering College** - For providing the platform and resources
- **Department of Computer Science and Design** - For guidance and support
- **2023-27 Batch** - For development and implementation
- **Open Source Community** - For the amazing tools and libraries

## 📞 Contact

**Kongu Engineering College**
- Department: Computer Science and Design
- Location: Perundurai, Tamil Nadu, India

**Developers**: 2023-27 Batch Students

---

**⭐ Star this repository if you find it helpful!**

*Built with ❤️ for IoT education and innovation*
