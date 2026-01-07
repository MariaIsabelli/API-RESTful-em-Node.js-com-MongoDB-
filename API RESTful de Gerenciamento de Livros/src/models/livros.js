const mongoose = require("mongoose");

const LivroSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  autor: {
    type: String,
    required: true,
    trim: true
  },
  anoPublicacao: {
    type: Number,
    required: true
  },
  genero: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Livro", LivroSchema);
