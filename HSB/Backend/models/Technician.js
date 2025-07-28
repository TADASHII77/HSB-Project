import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  date: {
    type: Date,
    default: Date.now
  },
  service: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  reviewCount: {
    type: Number,
    default: 0
  }
});

const technicianSchema = new mongoose.Schema({
  technicianId: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  reviews: {
    type: Number,
    default: 0
  },
  services: [{
    type: String,
    required: true
  }],
  verified: {
    type: Boolean,
    default: false
  },
  emergency: {
    type: Boolean,
    default: false
  },
  distance: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  website: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  serviceAreas: {
    type: String,
    required: true
  },
  expertise: {
    type: String,
    required: true
  },
  logo: {
    type: String, // Base64 encoded image or URL
    default: null
  },
  workPhotos: [{
    type: String // Array of Base64 encoded images or URLs
  }],
  reviewsData: [reviewSchema]
}, {
  timestamps: true
});

const Technician = mongoose.model('Technician', technicianSchema);

export default Technician; 