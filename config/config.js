const config = {
  env: process.env.NODE_ENV || "dev",
  port: process.env.PORT || 8080,
  dbUser: process.env.DB_USER || "postgres",
  dbPassword: process.env.DB_PASSWORD || "battousaiseba",
  dbHost: process.env.DB_HOST || "localhost",
  dbName: process.env.DB_NAME || "eCommerce",
  dbPort: process.env.DB_PORT || "5432",
  mongoDbUrl:
    process.env.MONGODB_URL ||
    "mongodb+srv://seba:admin123@cluster0.24eknoz.mongodb.net/?retryWrites=true&w=majority",
};

module.exports = { config };
