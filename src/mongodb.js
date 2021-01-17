import mongoose from "mongoose";

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

export default async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, mongoOptions);
    console.log(`connected to db`);
  } catch (error) {
    console.log(error);
  }
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }
};
