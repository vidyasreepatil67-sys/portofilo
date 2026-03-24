# Personal Portfolio Website

A full-stack personal portfolio website built with React, Node.js, and MongoDB to showcase projects and skills.

## 🚀 Features

- **Modern UI**: Beautiful, responsive design using Tailwind CSS and Framer Motion
- **Project Showcase**: Display featured projects with descriptions, technologies, and links
- **Skills Section**: Categorized skills with proficiency levels
- **Contact Form**: Functional contact form with validation
- **Smooth Animations**: Engaging animations and transitions
- **Mobile Responsive**: Fully responsive design for all devices

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **React Router** - Navigation

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
personal-portfolio/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.tsx       # Main App component
│   │   └── index.tsx     # Entry point
│   ├── package.json      # Frontend dependencies
│   └── tailwind.config.js # Tailwind configuration
├── server/                # Node.js backend
│   ├── index.js          # Server entry point
│   ├── package.json      # Backend dependencies
│   └── .env.example      # Environment variables example
├── package.json          # Root package.json
├── vercel.json          # Vercel deployment config
├── netlify.toml         # Netlify deployment config
├── Procfile             # Heroku deployment config
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install frontend dependencies
   cd client
   npm install
   cd ..
   
   # Install backend dependencies
   cd server
   npm install
   cd ..
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cd server
   cp .env.example .env
   
   # Edit .env with your configuration
   # MONGODB_URI=mongodb://localhost:27017/portfolio
   # PORT=5000
   # NODE_ENV=development
   ```

4. **Start the development servers**
   ```bash
   # From the root directory, run both frontend and backend
   npm run dev
   
   # Or start them separately
   # Backend: cd server && npm run dev
   # Frontend: cd client && npm start
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📡 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `POST /api/projects` - Create a new project

### Skills
- `GET /api/skills` - Get all skills
- `POST /api/skills` - Add a new skill

### Contact
- `POST /api/contact` - Submit contact form

### Health Check
- `GET /api/health` - API health check

## 🎨 Customization

### Personal Information
Update the following files to personalize your portfolio:

1. **Hero Section** (`client/src/components/Hero.tsx`):
   - Change name, title, and description
   - Update social media links

2. **Contact Information** (`client/src/components/Contact.tsx`):
   - Update email, phone, and location
   - Add social media links

3. **Projects and Skills**:
   - Currently using mock data
   - Connect to MongoDB for dynamic content
   - Add your actual projects and skills

### Styling
- Modify `tailwind.config.js` for custom colors and themes
- Update styles in component files
- Add custom CSS in `client/src/index.css`

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `client/build`
4. Add environment variables

### Heroku
1. Create a new Heroku app
2. Set buildpacks for Node.js
3. Add MongoDB addon (e.g., MongoDB Atlas)
4. Set environment variables
5. Deploy using Git

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide React for beautiful icons

## 📞 Support

If you have any questions or need help with the project, feel free to:
- Open an issue on GitHub
- Contact me at contact@example.com

---

**Built with ❤️ using modern web technologies**
