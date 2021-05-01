module.exports = {
  dialect  : 'mysql',
  host     : process.env.DB_HOST,
  username : 'root',
  password : process.env.DB_PASS,
  database : 'discord_clone',
  define: {
    timestamps: true,
    underscored: true
  }
}