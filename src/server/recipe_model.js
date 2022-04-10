const mongoose = require("mongoose")

const RecipeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    amazonRef: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    ingredients: {
      type: String,
      required: true
    },
    instructions: {
      type: String,
      required: true
    },
    main_display: {
      type: Boolean,
      required: true
    },
    saved: {
      type: Boolean,
      required: true
    }
})

const Recipe = mongoose.model("Recipe", RecipeSchema)
module.exports = Recipe