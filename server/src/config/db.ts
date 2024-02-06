import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb+srv://suyash:suyash123@cluster0.lcv7fqz.mongodb.net/?retryWrites=true&w=majority');
    console.log("Database Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default dbConnect;
