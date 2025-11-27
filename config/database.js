import mongoose from 'mongoose';

class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    this.connection = null;
    Database.instance = this;
  }

  async connect(uri) {
    if (this.connection && this.connection.readyState === 1) {
      console.log('Already connected to MongoDB.');
      return this.connection;
    }

    try {
      this.connection = await mongoose.connect(uri);
      console.log('Connected to MongoDB.');
      return this.connection;
    } catch (error) {
      console.error('MongoDB connection error:', error);
      throw error;
    }
  }

  async disconnect() {
    if (this.connection && this.connection.readyState === 1) {
      await mongoose.disconnect();
      this.connection = null;
      console.log('Disconnected from MongoDB.');
    }
  }

  getConnection() {
    return this.connection;
  }
}

const dbInstance = new Database();
export default dbInstance;
