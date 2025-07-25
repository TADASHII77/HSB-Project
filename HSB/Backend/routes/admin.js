import express from 'express';
import Technician from '../models/Technician.js';

const router = express.Router();

// Middleware for admin authentication (placeholder)
const authenticateAdmin = (req, res, next) => {
  // TODO: Implement proper admin authentication
  // For now, we'll just pass through
  next();
};

// Apply admin authentication to all routes
router.use(authenticateAdmin);

// Dashboard Statistics
router.get('/stats', async (req, res) => {
  try {
    const totalTechnicians = await Technician.countDocuments();
    const verifiedTechnicians = await Technician.countDocuments({ verified: true });
    const emergencyTechnicians = await Technician.countDocuments({ emergency: true });
    
    // Calculate average rating
    const avgRatingResult = await Technician.aggregate([
      { $group: { _id: null, avgRating: { $avg: '$rating' } } }
    ]);
    const averageRating = avgRatingResult[0]?.avgRating || 0;

    // Get total reviews
    const totalReviewsResult = await Technician.aggregate([
      { $group: { _id: null, totalReviews: { $sum: '$reviews' } } }
    ]);
    const totalReviews = totalReviewsResult[0]?.totalReviews || 0;

    // Category distribution
    const categoryDistribution = await Technician.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    // Top rated technicians
    const topTechnicians = await Technician.find()
      .sort({ rating: -1, reviews: -1 })
      .limit(10)
      .select('name rating reviews category verified');

    res.json({
      success: true,
      data: {
        overview: {
          totalTechnicians,
          verifiedTechnicians,
          emergencyTechnicians,
          averageRating: Math.round(averageRating * 10) / 10,
          totalReviews
        },
        categoryDistribution,
        topTechnicians
      }
    });
  } catch (error) {
    console.error('Error fetching admin stats:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching statistics',
      error: error.message
    });
  }
});

// Get all technicians with admin details
router.get('/technicians', async (req, res) => {
  try {
    const { page = 1, limit = 20, search, category, verified, emergency } = req.query;
    
    let query = {};
    
    // Build search query
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { address: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } }
      ];
    }
    
    if (category) query.category = category;
    if (verified !== undefined) query.verified = verified === 'true';
    if (emergency !== undefined) query.emergency = emergency === 'true';

    const technicians = await Technician.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Technician.countDocuments(query);

    res.json({
      success: true,
      data: technicians,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching technicians:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching technicians',
      error: error.message
    });
  }
});

// Create new technician
router.post('/technicians', async (req, res) => {
  try {
    // Get the next technician ID
    const lastTechnician = await Technician.findOne().sort({ technicianId: -1 });
    const nextId = lastTechnician ? lastTechnician.technicianId + 1 : 1;

    const technicianData = {
      ...req.body,
      technicianId: nextId
    };

    const technician = new Technician(technicianData);
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

// Update technician
router.put('/technicians/:id', async (req, res) => {
  try {
    const technician = await Technician.findOneAndUpdate(
      { technicianId: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );

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
    console.error('Error updating technician:', error);
    res.status(400).json({
      success: false,
      message: 'Error updating technician',
      error: error.message
    });
  }
});

// Delete technician
router.delete('/technicians/:id', async (req, res) => {
  try {
    const technician = await Technician.findOneAndDelete({ technicianId: req.params.id });

    if (!technician) {
      return res.status(404).json({
        success: false,
        message: 'Technician not found'
      });
    }

    res.json({
      success: true,
      message: 'Technician deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting technician:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting technician',
      error: error.message
    });
  }
});

// Toggle technician verification
router.patch('/technicians/:id/verify', async (req, res) => {
  try {
    const technician = await Technician.findOne({ technicianId: req.params.id });

    if (!technician) {
      return res.status(404).json({
        success: false,
        message: 'Technician not found'
      });
    }

    technician.verified = !technician.verified;
    await technician.save();

    res.json({
      success: true,
      data: technician,
      message: `Technician ${technician.verified ? 'verified' : 'unverified'} successfully`
    });
  } catch (error) {
    console.error('Error toggling verification:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating verification status',
      error: error.message
    });
  }
});

// Analytics endpoints
router.get('/analytics/overview', async (req, res) => {
  try {
    const { timeRange = '30d' } = req.query;
    
    // Mock analytics data - in a real app, this would come from actual user activity tracking
    const analyticsData = {
      totalViews: 12543,
      totalQuotes: 892,
      conversionRate: 7.1,
      averageResponseTime: 2.4,
      performanceData: [
        { period: 'Jan', technicians: 8, quotes: 145, views: 2340 },
        { period: 'Feb', technicians: 9, quotes: 178, views: 2890 },
        { period: 'Mar', technicians: 10, quotes: 203, views: 3120 },
        { period: 'Apr', technicians: 10, quotes: 189, views: 2980 },
        { period: 'May', technicians: 11, quotes: 234, views: 3560 },
        { period: 'Jun', technicians: 10, quotes: 198, views: 3240 }
      ]
    };

    res.json({
      success: true,
      data: analyticsData
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching analytics',
      error: error.message
    });
  }
});

// User management (placeholder - would integrate with actual user system)
router.get('/users', async (req, res) => {
  try {
    // Mock user data - in a real app, this would come from a User model
    const users = [
      { id: 1, name: 'John Smith', email: 'john@example.com', role: 'Customer', joinDate: '2024-01-15', status: 'Active', lastActive: '2 hours ago' },
      { id: 2, name: 'Sarah Johnson', email: 'sarah@hvac.com', role: 'Technician', joinDate: '2024-01-10', status: 'Active', lastActive: '1 day ago' },
      { id: 3, name: 'Mike Wilson', email: 'mike@example.com', role: 'Customer', joinDate: '2024-01-08', status: 'Inactive', lastActive: '1 week ago' },
      { id: 4, name: 'Admin User', email: 'admin@hsb.com', role: 'Admin', joinDate: '2023-12-01', status: 'Active', lastActive: 'Online now' },
      { id: 5, name: 'Lisa Brown', email: 'lisa@example.com', role: 'Customer', joinDate: '2024-01-20', status: 'Active', lastActive: '3 hours ago' }
    ];

    res.json({
      success: true,
      data: users
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching users',
      error: error.message
    });
  }
});

// Bulk operations
router.post('/technicians/bulk-verify', async (req, res) => {
  try {
    const { technicianIds, verified } = req.body;

    const result = await Technician.updateMany(
      { technicianId: { $in: technicianIds } },
      { verified }
    );

    res.json({
      success: true,
      message: `${result.modifiedCount} technicians updated`,
      data: result
    });
  } catch (error) {
    console.error('Error in bulk verification:', error);
    res.status(500).json({
      success: false,
      message: 'Error in bulk operation',
      error: error.message
    });
  }
});

// Export data
router.get('/export/technicians', async (req, res) => {
  try {
    const technicians = await Technician.find().lean();
    
    // Convert to CSV format
    const csvHeaders = ['ID', 'Name', 'Category', 'Rating', 'Reviews', 'Verified', 'Emergency', 'Phone', 'Address'];
    const csvRows = technicians.map(tech => [
      tech.technicianId,
      tech.name,
      tech.category,
      tech.rating,
      tech.reviews,
      tech.verified,
      tech.emergency,
      tech.phone,
      tech.address
    ]);

    const csvContent = [csvHeaders, ...csvRows]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=technicians.csv');
    res.send(csvContent);
  } catch (error) {
    console.error('Error exporting technicians:', error);
    res.status(500).json({
      success: false,
      message: 'Error exporting data',
      error: error.message
    });
  }
});

export default router; 