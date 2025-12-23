To-Do List Documentation
________________________________________
1. Project Overview
This project is a browser-based To-Do List application that allows users to add, complete, and delete tasks. Tasks are stored locally in the browser, ensuring persistence across page reloads.
________________________________________
2. Technologies Used
•	HTML5 – Structure
•	CSS3 – Styling and layout
•	JavaScript – Application logic and data handling
•	Browser Local Storage – Task persistence
________________________________________
3. HTML Structure (index.html)
Purpose
Defines the structure and layout of the To-Do List interface.
Key Components
•	Document metadata for responsiveness and encoding
•	Main container to hold the application
•	Heading for application title
•	Input field for task entry
•	Button for adding tasks
•	Unordered list to display tasks
•	External links to CSS and JavaScript files
________________________________________
4. CSS Styling (index.css)
Purpose
Controls the appearance and layout of the application.
Global Styling
•	Resets default margins and paddings
•	Applies consistent font and box model
Layout
•	Centers the application using Flexbox
•	Maintains full viewport height
•	Uses a blurred background image for visual depth
Component Styling
•	Container uses a glassmorphism effect with transparency and blur
•	Input fields and buttons have rounded corners
•	Tasks are displayed as styled list items
•	Completed tasks appear visually distinct
•	Delete button styled for clarity and interaction
________________________________________
5. JavaScript Functionality (index.js)
Purpose
Handles user interaction, task management, and data persistence.
________________________________________
Element Selection
•	Retrieves references to input field, add button, and task list
________________________________________
Page Load Behavior
•	Fetches stored tasks from local storage
•	Displays existing tasks on page load
________________________________________
Task Creation
•	Accepts user input
•	Validates input to prevent empty tasks
•	Adds tasks to the user interface
•	Saves tasks to local storage
________________________________________
User Interaction
•	Button click and keyboard input trigger task addition
•	Clicking a task toggles its completion status
•	Clicking delete removes the task
________________________________________
Data Storage
•	Tasks are stored as objects
•	Task list is saved in browser local storage
•	Storage updates after task addition, deletion, or completion changes
________________________________________
6. Application Features
•	Add new tasks
•	Mark tasks as completed
•	Delete tasks
•	Persistent task storage
•	Keyboard and mouse interaction support
________________________________________
7. Limitations
•	No backend or database integration
•	Data is limited to a single browser
•	No user authentication or task categorization
________________________________________
8. Conclusion
This To-Do List application demonstrates effective use of front-end technologies to create an interactive, persistent task manager using only client-side resources.

