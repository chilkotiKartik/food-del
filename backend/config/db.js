import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://greatstack:151515@cluster0.kh1juqh.mongodb.net/food"
    )
    .then(() => console.log("DB Connected"));
};
