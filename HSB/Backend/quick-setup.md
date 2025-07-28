# Quick MongoDB Setup Fix

## 🚨 Current Issue
MongoDB connection is failing with "option buffermaxentries is not supported" error.

## ✅ **SOLUTION 1: Use MongoDB Atlas (RECOMMENDED - 2 minutes setup)**

1. **Go to**: https://cloud.mongodb.com
2. **Sign up** for free (no credit card needed)
3. **Create a cluster** (choose FREE tier)
4. **Get connection string**:
   - Click "Connect" → "Connect your application"
   - Copy the connection string
5. **Create `.env` file** in `HSB/Backend/` folder:
   ```
   MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/hsb_database?retryWrites=true&w=majority
   PORT=5000
   NODE_ENV=development
   ```
6. **Whitelist IP**: In Atlas → Network Access → Add IP Address → "Allow access from anywhere"

## ✅ **SOLUTION 2: Quick Local Test (No MongoDB needed)**

The server will continue running without MongoDB and use fallback data for testing.

## 🔧 **After Setup**

1. **Restart the server**:
   ```bash
   cd HSB/Backend
   npm start
   ```

2. **You should see**:
   ```
   ✅ MongoDB Connected: your-cluster.mongodb.net
   📊 Database: hsb_database
   Server is running on port 5000
   ```

## 🆘 **Still Having Issues?**

The backend is designed to work without MongoDB for development. All features will work, but data won't persist between server restarts.

**For production**, you MUST set up MongoDB Atlas or local MongoDB. 