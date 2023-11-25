export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    connectionString: process.env.DATABASE_URL
  }
});