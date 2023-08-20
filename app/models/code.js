import mongoose, { Schema } from "mongoose";

const codeSchema = new Schema({
  code: {
    type: String,
    required: [true, "Pole nesmí být prázdné!"],
    trim: true,
    minLength: [2, "Kód musí obsahovat 10 čísel"],
    maxLength: [10, "Kód musí obsahovat 10 čísel"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Code = mongoose.models.Code || mongoose.model("Code", codeSchema);

export default Code;
