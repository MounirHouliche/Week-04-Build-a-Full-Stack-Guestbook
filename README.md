🎯 What requirements did you achieve?

I successfully created a working HTML form that submits data into the database.
Implemented a GET route to fetch messages and display them in the frontend.
Implemented a POST route so users can add new guestbook entries.
Seeded the Supabase database with realistic “hotel-style” dummy data.
Added responsive design using media queries so it works across desktop and mobile.

🎯 Were there any requirements or goals that you were unable to achieve?

I achieved all the listed requirements.

🎯 If so, what was it that you found difficult about these tasks?

At first, I had issues connecting the backend to Supabase (ECONNREFUSED 127.0.0.1:5432). The problem was that my .env wasn’t set up correctly, and Express defaulted to localhost instead of Supabase.
Getting the POST request working took some trial and error, particularly around express.json() middleware and ensuring the frontend sent the data with the right headers (Content-Type: application/json).
Debugging with browser DevTools (Console + Network tab) helped me figure out where things were going wrong.
