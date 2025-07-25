import express from 'express';
import Technician from '../models/Technician.js';

const router = express.Router();

// Get all technicians
router.get('/', async (req, res) => {
  try {
    const technicians = await Technician.find().sort({ rating: -1 });
    res.json({
      success: true,
      count: technicians.length,
      data: technicians
    });
  } catch (error) {
    console.error('Error fetching technicians:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

// Get technician by ID
router.get('/:id', async (req, res) => {
  try {
    const technician = await Technician.findOne({ technicianId: req.params.id });
    
    if (!technician) {
      return res.status(404).json({
        success: false,
        message: 'Technician not found'
      });
    }

    res.json({
      success: true,
      data: technician
    });
  } catch (error) {
    console.error('Error fetching technician:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

// Search technicians
router.get('/search/:query', async (req, res) => {
  try {
    const { query } = req.params;
    const searchRegex = new RegExp(query, 'i');

    const technicians = await Technician.find({
      $or: [
        { name: searchRegex },
        { services: { $in: [searchRegex] } },
        { category: searchRegex },
        { expertise: searchRegex },
        { serviceAreas: searchRegex }
      ]
    }).sort({ rating: -1 });

    res.json({
      success: true,
      count: technicians.length,
      data: technicians
    });
  } catch (error) {
    console.error('Error searching technicians:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

// Filter technicians by criteria
router.post('/filter', async (req, res) => {
  try {
    const { 
      job, 
      city, 
      category, 
      minRating, 
      verified, 
      emergency, 
      sortBy 
    } = req.body;

    let query = {};

    // Build query based on filters
    if (job) {
      const jobRegex = new RegExp(job, 'i');
      query.$or = [
        { name: jobRegex },
        { services: { $in: [jobRegex] } },
        { expertise: jobRegex }
      ];
    }

    if (city) {
      const cityRegex = new RegExp(city, 'i');
      query.serviceAreas = cityRegex;
    }

    if (category && category !== 'Categories') {
      query.category = category;
    }

    if (minRating) {
      const ratingMap = {
        '4.5+ Stars': 4.5,
        '4+ Stars': 4,
        '3+ Stars': 3
      };
      query.rating = { $gte: ratingMap[minRating] || minRating };
    }

    if (verified !== undefined) {
      query.verified = verified;
    }

    if (emergency !== undefined) {
      query.emergency = emergency;
    }

    // Build sort criteria
    let sortCriteria = {};
    switch (sortBy) {
      case 'Rating':
        sortCriteria = { rating: -1 };
        break;
      case 'Reviews':
        sortCriteria = { reviews: -1 };
        break;
      case 'Distance':
        sortCriteria = { distance: 1 };
        break;
      default:
        sortCriteria = { rating: -1 };
    }

    const technicians = await Technician.find(query).sort(sortCriteria);

    res.json({
      success: true,
      count: technicians.length,
      data: technicians
    });
  } catch (error) {
    console.error('Error filtering technicians:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

// Create new technician (for admin use)
router.post('/', async (req, res) => {
  try {
    const technician = new Technician(req.body);
    const savedTechnician = await technician.save();
    
    res.status(201).json({
      success: true,
      data: savedTechnician
    });
  } catch (error) {
    console.error('Error creating technician:', error);
    res.status(400).json({
      success: false,
      message: 'Error creating technician',
      error: error.message
    });
  }
});

export default router; 