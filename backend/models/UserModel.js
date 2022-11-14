import mongoose from "mongoose";

const User = mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  NIM: {
    type: String,
    required: true,
  },
  prodi: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Users", User);
