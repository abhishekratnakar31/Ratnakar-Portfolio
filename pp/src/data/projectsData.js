export const projects = [
  {
    id: "google-calendar-sync",
    title: "Google Calendar Sync",
    src: "/gcs.png",
    color: "#095019ff",
    link: "https://google-calendar-sync-jet.vercel.app",
    date: "April 2024",
    background:
      "Google Calendar Synchronization in Performly is designed to streamline scheduling and eliminate booking conflicts for both performers and clients. The feature integrates performer availability directly with Google Calendar, ensuring that all confirmed bookings are automatically reflected in real time. This synchronization allows performers to manage their professional commitments alongside personal schedules without manual updates or double-booking risks.When a booking is confirmed on Performly, the system creates a corresponding event in the performer’s Google Calendar, including details such as performance date, time, client information, and booking status. Any updates to the booking, such as rescheduling or cancellation, are also synced to maintain consistency across platforms. This bi-directional awareness helps performers stay organized and informed, even outside the Performly platform.The integration is implemented using secure OAuth-based authorization to access Google Calendar APIs, ensuring user data privacy and controlled permissions. Real-time availability checks reference synced calendar events to prevent overlapping bookings during the booking process. This enhances platform reliability and improves user trust by reducing scheduling errors.By integrating Google Calendar synchronization, Performly delivers a professional-grade scheduling experience that mirrors real-world workflows. The feature demonstrates practical experience with third-party API integration, authentication flows, and real-time data consistency, making the platform more robust, scalable, and production-ready.",
  },
  {
    id: "mini-game-dashboard",
    title: "Mini Game Dashboard",
    src: "/minihub.png",
    color: "#8C8C8C",
    link: "https://minigamedashboard.onrender.com",
    date: "March 2024",
    background:
      "The Esports & Gaming Stats Dashboard is a dynamic web application designed to fetch, analyze, and visualize real-time video game and esports data through third-party APIs. The primary objective of the project is to provide users with an interactive dashboard that showcases trending games, key statistics, and industry insights in a clean and engaging format.The platform leverages the RAWG Video Game Database API to retrieve up-to-date information on popular games, including titles, release dates, ratings, supported platforms, and genres. This data is processed and displayed through a responsive React-based frontend, allowing users to explore trends and compare games with ease. To enhance data comprehension, the dashboard integrates Chart.js for visualizing ratings, genre distribution, and platform popularity.On the backend, Node.js and Express.js handle API communication, data aggregation, and request optimization, ensuring efficient and scalable data flow between services. The application architecture is designed to support optional expansion, such as integrating the Twitch API to display live streams, viewer counts, and top streamers for trending games, further bridging the gap between gaming statistics and live esports engagement.Overall, the Esports & Gaming Stats Dashboard demonstrates strong full-stack development skills, API integration, and data visualization practices. The project highlights practical experience in building real-time dashboards, managing external APIs, and presenting complex datasets in a user-friendly and visually intuitive manner.",
  },
  {
    id: "performly",
    title: "Performly",
    src: "/performly.png",
    color: "#EFE8D3",
    link: "https://performly-beige.vercel.app",
    date: "January 2024",
    background:
      "Performly is a comprehensive full-stack performance booking platform designed to bridge the gap between performers and clients through a structured, secure, and intuitive digital experience. The platform centralizes the entire performance booking lifecycle, starting from performer discovery and profile evaluation to booking confirmation, payment processing, and post-event reviews. Performers can create detailed profiles showcasing their skills, portfolios, and past work, manage their availability through an integrated calendar, and track incoming booking requests in real time. On the client side, users can search and discover performers based on relevant criteria, view profiles and portfolios, initiate bookings, and complete payments securely. The booking system ensures real-time availability checks, prevents scheduling conflicts, and provides clear booking status updates to both parties.Performers can create detailed profiles showcasing their skills, portfolios, and past work, manage their availability through an integrated calendar, and track incoming booking requests in real time. On the client side, users can search and discover performers based on relevant criteria, view profiles and portfolios, initiate bookings, and complete payments securely. The booking system ensures real-time availability checks, prevents scheduling conflicts, and provides clear booking status updates to both parties.Performly is built using a modern web technology stack, with a Node.js and Express.js backend powering RESTful APIs and business logic, MongoDB for scalable data storage, and JWT-based authentication for secure user access and role-based authorization. Razorpay is integrated to handle secure payment transactions, while bcrypt and validation middleware enhance platform security and data integrity. The frontend is developed using React.js with TailwindCSS for a responsive and user-friendly interface.By combining robust backend architecture with a clean and interactive frontend, Performly delivers a reliable solution for managing performance bookings efficiently. The project demonstrates strong fundamentals in full-stack development, authentication, payment integration, and real-world system design.",
    story: "",
  },
];
