module.exports = {
  dialect  : 'mysql',
  host     : process.env.DB_HOST,
  username : 'root',
  password : 'PauloCesar1252@',
  database : 'discord_clone',
  define: {
    timestamps: true,
    underscored: true
  }
}