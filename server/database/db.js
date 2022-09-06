import mongoose from 'mongoose';

const Connection = async (user, pwd) => {
    const URL = `mongodb+srv://${user}:${pwd}@ecommerce-web.vj3srek.mongodb.net/FLIPKART-CLONE?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("Database Connected Successfully!");
    }
    catch(err) {
        console.log("Error while connecting with the database", err.message);
    }
};

export default Connection;