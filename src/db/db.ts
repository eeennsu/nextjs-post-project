import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    // 이미 연결되어 있으면 종료
    if (isConnected) {
        console.log('MongoDB is already connected.');
        
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_DB_URL as string, {
            dbName: 'NextJs-post',
        });

        isConnected = true;
        console.log('Mongo db connected successfully!');
    } catch (error) {
        console.log(error);
    }
}