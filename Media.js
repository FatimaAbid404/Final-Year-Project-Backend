const mongoose = require("mongoose");

const MediaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    categories: {
      type: String,
      required: true,
    },
    keywords: {
      type: String,
      required: true,
    },
    images:[],
    key:[],
    videos: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

module.exports = Media = mongoose.model("Media", MediaSchema);