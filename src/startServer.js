import sequelize from './database/config/connection.js';

async function startServer(app) {
    try {
      // Cek koneksi ke database
      await sequelize.authenticate();
      console.log('✅ Koneksi database berhasil.');
  
      // Sinkronkan database
      await sequelize.sync();
      console.log('✅ Database synchronized successfully.');
  
      // Jalankan server setelah sinkronisasi selesai
      app.listen(process.env.PORT, () => {
        console.log(`Server is up on port ${process.env.PORT}`)
    });
    } catch (err) {
      console.error('❌ Gagal konek ke database atau sync database:', err);
    }
  }

export default startServer;