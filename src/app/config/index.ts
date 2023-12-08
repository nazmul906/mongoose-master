import dotenv from 'dotenv';
import path from 'path';
// now we has to join env file with our current directory (this config file),to do that we use path(given by nodejs)
// cwd() gives us current folder path

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: process.env.MongoDB_URL,
};
