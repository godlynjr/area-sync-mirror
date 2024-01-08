const mongoose = require("mongoose")

const discordSchema = new mongoose.Schema({
    discordId: String,
    username: String,
    accessToken: String,
    refreshToken: String,
})

const DiscordUser = mongoose.model("DiscordUser", discordSchema)

module.exports = DiscordUser
