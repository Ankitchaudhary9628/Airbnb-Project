
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const { object } = require("joi");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
      await Listing.deleteMany({});
    initData.data=  initData.data.map((obj)=>({...obj,owner: "67c463e3bd9f5ca5b8a61edb"}));
      await Listing.insertMany(initData.data);

      console.log("Data was initialized");
  } catch (err) {
      console.error("Error initializing data:", err);
  }
};


initDB();
