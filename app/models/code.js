import mongoose, { Schema } from "mongoose";

const codeSchema = new Schema({
  code: {
    type: Number,
    unique: true,
    required: [true, "Pole nesmí být prázdné!"],
    validate: {
      validator: function (v) {
        return /^[0-9]{10}$/.test(v);
      },
      message: () => `KÓD MUSÍ OBSAHOVAT 10 ČÍSEL`,
    },
  },
  userId: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Code = mongoose.models.Code || mongoose.model("Code", codeSchema);

export default Code;
