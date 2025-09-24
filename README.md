CineMate

CineMate is a full-stack web application for movie show management, bookings, and administration. It features a modern React frontend and a Node.js/Express backend, providing a seamless experience for both users and administrators.

Features

Browse movies and showtimes

Book seats for shows

View and manage your bookings

Admin dashboard for managing movies, shows, and bookings

Responsive UI with engaging visuals

Email notifications (via NodeMailer)

Stripe integration for payments

Tech Stack

Frontend: React, Vite, CSS

Backend: Node.js, Express

Database: MongoDB

Other: Stripe, NodeMailer, Clerk (for user authentication)

Folder Structure
CineMate/
  client/      # React frontend
  server/      # Node.js backend

Client Structure

src/components/ – Reusable UI components

src/pages/ – Page-level components (Home, Movies, Admin, etc.)

src/context/ – React context for state management

src/lib/ – Utility functions

Server Structure

controllers/ – Route handler logic

models/ – Mongoose models

routes/ – Express route definitions

configs/ – Database and mailer configs

middleware/ – Express middleware (e.g., auth)

Setup Instructions
Prerequisites

Node.js (v16+ recommended)

npm or yarn

MongoDB instance (local or cloud)

1. Clone the Repository
git clone <repo-url>
cd CineMate

2. Setup the Server
cd server
npm install
npm start


# Create a .env file with your environment variables (see below)
Example .env for Server
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password

3. Setup the Client
cd ../client
npm install
npm run dev

4. Access the App

Client: [(https://cinemate-main.vercel.app/
)]

Server: http://localhost:5000
 (or as configured)

Usage

Register or log in as a user via Clerk to book movie tickets.

Admins can log in to access the dashboard for managing movies, shows, and bookings.

License

This project is licensed under the MIT License.