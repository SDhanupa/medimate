# MediMate – Web-Based Platform for Enhanced Access to Medicine Information

MediMate is a comprehensive web-based platform designed to revolutionize healthcare information accessibility in Sri Lanka. It empowers users with accessible and actionable medical information, facilitates informed decision-making regarding medication usage, and bridges the gap between patients, healthcare providers, and pharmaceutical resources.

## 🚀 Features

- **Image-Based Medicine Identification** - Upload medicine images for instant identification using AI
- **Comprehensive Medicine Database** - Detailed information on medicines including usage, dosage, side effects, and alternatives
- **Multilingual Support** - Available in English, Sinhala, and Tamil languages
- **Personalized User Experience** - User accounts with saved searches and tailored recommendations
- **Community Engagement** - User feedback system and community-driven health literacy
- **Responsive Design** - Seamless experience across desktop, tablet, and mobile devices
- **Real-time Search** - Search medicines by name, disease, or symptoms

## 🛠 Tech Stack

**Frontend:** React.js, HTML5, CSS3, JavaScript
**Backend:** Node.js, Express.js
**Database:** MongoDB (NoSQL)
**Machine Learning:** TensorFlow, OpenCV
**Image Processing:** Advanced AI algorithms for medicine identification
**Cloud Services:** Scalable cloud hosting and storage
**Authentication:** JWT-based user authentication

## 📂 Project Structure

```
medimate/
│
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── pages/         # Application pages
│   │   ├── hooks/         # Custom React hooks
│   │   ├── styles/        # CSS and styling files
│   │   └── utils/         # Utility functions
│   └── public/            # Static assets
│
├── server/                # Node.js backend
│   ├── routes/           # API routes
│   ├── models/           # Database models
│   ├── middleware/       # Express middleware
│   ├── controllers/      # Route controllers
│   └── config/           # Configuration files
│
├── ml-models/            # Machine learning models
│   ├── image-processing/ # Medicine identification algorithms
│   └── training-data/    # Model training datasets
│
├── database/             # Database scripts and migrations
└── docs/                 # Project documentation
```

## 🎯 Project Objectives

- **Develop a Robust Medicine Database** - Create comprehensive database with detailed medicine information
- **Implement Image Processing Algorithms** - Enable accurate medicine identification through uploaded images
- **Enhance User Experience** - Design intuitive interface for simplified navigation and engagement
- **Bridge Digital Divide** - Provide multilingual healthcare information access
- **Promote Health Literacy** - Empower informed healthcare decision-making

## 🌍 Target Impact

MediMate addresses the significant barrier to accessing comprehensive and reliable medicine information in Sri Lanka, particularly for Sinhala and Tamil speakers. The platform aims to:

- Improve health outcomes across diverse linguistic communities
- Reduce reliance on outdated consultation methods
- Provide centralized, visual medicine identification
- Enhance medication safety and management
- Promote health equity and accessibility

## 💻 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/SDhanupa/medimate.git

# Navigate to project directory
cd medimate

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install

# Set up environment variables
cp .env.example .env
# Configure your MongoDB connection and other settings

# Start the backend server
cd ../server
npm start

# Start the frontend development server
cd ../client
npm start
```

## 🔧 Environment Variables

Create a `.env` file in the server directory:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
TENSORFLOW_MODEL_PATH=path_to_ml_models
UPLOAD_PATH=uploads/
```

## 📱 Usage

1. **Medicine Search** - Search for medicines by name, ingredient, or condition
2. **Image Upload** - Take or upload a photo of medicine for identification
3. **Detailed Information** - Access comprehensive medicine details including dosage, side effects
4. **Language Selection** - Switch between English, Sinhala, and Tamil
5. **User Account** - Create account to save searches and preferences

## 🎨 Key Features in Detail

### Image Processing Technology
- Advanced TensorFlow and OpenCV integration
- Real-time medicine identification from photos
- Support for various image formats and qualities
- Accurate recognition even with partial medicine views

### Comprehensive Database
- Extensive medicine information covering local and international drugs
- Regular updates with latest pharmaceutical data
- Alternative medicine suggestions
- Pricing information and availability

### Multilingual Support
- Native language support for better accessibility
- Cultural sensitivity in health information presentation
- Localized content for Sri Lankan healthcare context
