import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    const connection = mongoose.connection;
    connection.on("connected", (conn) => {
      console.log("Mongoose && Database Are Connect");
    });
    connection.on("error", (err) => {
      console.log("Mongoose && Database Are Not Connect");
      process.exit();
    });
  } catch (error) {
    console.log(error + "mongoose");
  }
}
