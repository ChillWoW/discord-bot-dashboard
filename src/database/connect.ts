import { connect } from "mongoose";
import { getConfig } from "../index";

const connectToDatabase = async () => {
  const config = await getConfig("client");

  try {
    connect(config.mongodb);
    console.log("Database connected!");
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

export default connectToDatabase;
