const express = require('express');
const multer = require('multer');
const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');
const cors = require('cors');
const mongoose = require('mongoose');
const Medicine = require('./models/medicine');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB using 127.0.0.1
mongoose.connect('mongodb://127.0.0.1:27017/medicine_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});



// Set up Multer for file uploads
const upload = multer({ dest: 'uploads/' });

let model; // Declare the model variable

// Load the TensorFlow model
const loadModel = async () => {
  try {
    model = await tf.loadLayersModel('file://./model/model.json');
    console.log('Model loaded successfully.');
    startServer(); // Start the server after the model is loaded
  } catch (error) {
    console.error('Error loading the model:', error);
    process.exit(1); // Exit the process if the model fails to load
  }
};

// Define class names for mapping model predictions to human-readable labels
const classNames = ['Background', 'Metformin', 'class3']; // Adjust according to your model

// Define route for image upload and prediction
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    // Read and process the uploaded image
    const imageBuffer = fs.readFileSync(req.file.path);
    const tfimage = tf.node.decodeImage(imageBuffer, 3);
    const resized = tf.image.resizeBilinear(tfimage, [224, 224]).div(tf.scalar(255)).expandDims(0);

    // Make predictions using the model
    const predictions = await model.predict(resized).data();
    const predictedClassIndex = predictions.indexOf(Math.max(...predictions));
    const predictedClassName = classNames[predictedClassIndex];

    // Find medicine information from MongoDB based on predicted class name
    const medicineInfo = await Medicine.findOne({ medical_name: predictedClassName });

    if (!medicineInfo) {
      return res.status(404).send('Medicine information not found.');
    }

    res.json({
      message: 'Prediction and medicine info retrieval successful',
      predictedClassName,
      medicineInfo
    });
  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).send('Error processing image.');
  } finally {
    // Clean up: Delete the uploaded file
    fs.unlinkSync(req.file.path);
  }
});

// Function to start the server
function startServer() {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

}

// Load the TensorFlow model when the application starts
loadModel();