const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// MongoDB connection (commented out for now)
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error('MongoDB connection error:', err));

console.log('Server running without MongoDB connection');

// Schema definitions (commented out for now)
// const projectSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   technologies: [String],
//   githubUrl: String,
//   liveUrl: String,
//   imageUrl: String,
//   featured: { type: Boolean, default: false },
//   createdAt: { type: Date, default: Date.now }
// });

// const skillSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   category: { type: String, required: true },
//   level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'], required: true }
// });

// const contactSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   message: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now }
// });

// const Project = mongoose.model('Project', projectSchema);
// const Skill = mongoose.model('Skill', skillSchema);
// const Contact = mongoose.model('Contact', contactSchema);

// Routes with mock data (no MongoDB required)
app.get('/api/projects', (req, res) => {
  const projects = [
    {
      _id: '1',
      title: 'Campus Intelligence System',
      description: 'An innovative campus management system with real-time tracking and analytics for educational institutions.',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
      githubUrl: 'https://github.com/vidyasreepatil67-sys/Campus-Intelligence-System',
      liveUrl: 'https://campus-demo.example.com',
      imageUrl: '/project1.jpg',
      featured: true,
      createdAt: new Date()
    }
  ];
  res.json(projects);
});

app.get('/api/projects/featured', (req, res) => {
  const projects = [
    {
      _id: '1',
      title: 'Campus Intelligence System',
      description: 'An innovative campus management system with real-time tracking and analytics for educational institutions.',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
      githubUrl: 'https://github.com/vidyasreepatil67-sys/Campus-Intelligence-System',
      liveUrl: 'https://campus-demo.example.com',
      imageUrl: '/project1.jpg',
      featured: true,
      createdAt: new Date()
    }
  ];
  res.json(projects);
});

app.post('/api/projects', (req, res) => {
  res.status(201).json({ message: 'Project created (mock response)' });
});

app.get('/api/skills', (req, res) => {
  const skills = [
    { _id: '1', name: 'Java', category: 'Java Development', level: 'Expert' },
    { _id: '2', name: 'Spring Boot', category: 'Java Development', level: 'Advanced' },
    { _id: '3', name: 'MySQL', category: 'Java Development', level: 'Advanced' },
    { _id: '4', name: 'PostgreSQL', category: 'Database Skills', level: 'Advanced' },
    { _id: '5', name: 'MongoDB', category: 'Database Skills', level: 'Intermediate' },
    { _id: '6', name: 'Problem Solving', category: 'Programming Skills', level: 'Expert' },
    { _id: '7', name: 'Data Structures', category: 'Programming Skills', level: 'Advanced' },
    { _id: '8', name: 'Algorithms', category: 'Programming Skills', level: 'Advanced' }
  ];
  res.json(skills);
});

app.post('/api/skills', (req, res) => {
  res.status(201).json({ message: 'Skill created (mock response)' });
});

app.post('/api/contact', (req, res) => {
  console.log('Contact form submission:', req.body);
  res.status(201).json({ message: 'Message sent successfully!' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
