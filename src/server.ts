import app from './app';
import config from './app/config';

// server er shb connectivity(ex:mongoose) ekhne thakbe
import mongoose from 'mongoose';
async function main() {
  try {
    //   await mongoose.connect(process.env.MongoDB_URL);
    //   but configure it in separate file name congig inside src
    await mongoose.connect(config.database_url as string);

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
