import Cors from 'cors';

// Initialize the cors middleware
const cors = Cors({
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  origin: ['http://localhost:3000','https://asur-ams.vercel.app', 'https://asur-ams.twilightparadox.com'], // Allow requests from localhost and your prod domain
  credentials: true, // If you need to send cookies or other credentials
});


export default function middleware(req,res) {
  return new Promise((resolve,reject) => {
    cors(req,res,(result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}