# MongoDB Setup Guide for HSB Project

## 🚨 Current Issue
Your backend server can't connect to MongoDB because no MongoDB instance is running. Here are your options:

## ✅ Solution 1: Use MongoDB Atlas (Cloud) - **RECOMMENDED**

This is the easiest and fastest solution:

1. **Go to MongoDB Atlas**: https://cloud.mongodb.com
2. **Create a free account** (no credit card required)
3. **Create a new cluster** (choose free tier)
4. **Get your connection string**:
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
5. **Update your .env file** in `HSB/Backend/.env`:
   ```
   MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/hsb_database?retryWrites=true&w=majority
   ```
6. **Whitelist your IP**:
   - In Atlas, go to "Network Access"
   - Click "Add IP Address" 
   - Choose "Allow access from anywhere" (0.0.0.0/0) for development

## ✅ Solution 2: Install MongoDB Locally

### For Windows:
1. **Download MongoDB Community Edition**: https://www.mongodb.com/try/download/community
2. **Run the installer** (choose "Complete" installation)
3. **Start MongoDB**:
   - Open Command Prompt as Administrator
   - Run: `mongod`
   - Keep this window open
4. **Your .env file should have**:
   ```
   MONGODB_URI=mongodb://localhost:27017/hsb_database
   ```

### For macOS:
```bash
# Install using Homebrew
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

### For Linux (Ubuntu/Debian):
```bash
# Install MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

## ✅ Solution 3: Use Docker (if you have Docker)

```bash
# Pull and run MongoDB container
docker run -d -p 27017:27017 --name mongodb mongo:latest

# Your .env file should have:
# MONGODB_URI=mongodb://localhost:27017/hsb_database
```

## 🔧 After Setting Up MongoDB

1. **Restart your backend server**:
   ```bash
   cd HSB/Backend
   npm start
   ```

2. **You should see**:
   ```
   ✅ MongoDB Connected: localhost:27017
   📊 Database: hsb_database
   Server is running on port 5000
   ```

## 🆘 Quick Test

To test if your setup is working:

1. **Start the backend server**: `npm start`
2. **Open browser**: http://localhost:5000
3. **You should see**: Welcome message without connection errors

## 💡 Recommended for Development

**Use MongoDB Atlas** - it's free, fast to set up, and you don't need to install anything locally. Perfect for development and testing!

## 🐛 Troubleshooting

- **Connection timeout**: Check your internet connection and Atlas IP whitelist
- **Authentication failed**: Double-check your username/password in the connection string
- **Local MongoDB not starting**: Make sure no other process is using port 27017
- **Still having issues**: The backend will continue running without database connection in development mode, but features won't work properly

## 📞 Need Help?

If you're still having issues, let me know which solution you'd prefer and I can provide more specific guidance! 