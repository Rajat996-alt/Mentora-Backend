🔐 Authentication:-
Signup & Login with validation
JWT-based authentication
HTTP-only cookies for secure storage
Logout functionality
Protected routes with middleware

👤 User Module:-
Get current user (protected)
Update user profile (name, description, image)
Profile image upload via Multer + Cloudinary
Fetch creator by ID

🎓 Course Module:-
Create course (title, category, creator)
Get all published courses
Get creator-specific courses
Edit course (update thumbnail, details)
Get course by ID
Delete course

🎥 Lecture Module:-
Create lecture (title, preview, video)
Upload lecture video via Cloudinary
Get all lectures of a course
Edit lecture (title, preview, video)
Remove lecture

🗄️ Tech Stack:-
Node.js, Express.js
MongoDB (Mongoose)
JWT + Cookies
Multer + Cloudinary
CORS, bcrypt, dotenv
