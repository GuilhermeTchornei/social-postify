export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    secret: process.env.JWT_SECRET,
  });