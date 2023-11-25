export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    connectionString: `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_CLUSTER}/Develop`
  }
});