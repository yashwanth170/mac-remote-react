
# Mac Media Controller Frontend

This React application serves as a remote control interface for managing media settings on a Mac. The frontend interacts with a Spring Boot backend to perform actions such as adjusting volume, playing/pausing media, skipping forward/backward, and remotely shutting down or putting the system to sleep.

## Features

- **Volume Control**: Increase, decrease, or set a specific volume level on your Mac.
- **Media Control**: Play/pause media, skip forward/backward, and skip ads on YouTube.
- **Power Management**: Remotely shut down or put the Mac to sleep.

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yashwanth170/mac-remote-react.git
   cd mac-media-controller-frontend
Install dependencies:

bash
Copy code
npm install
### or if using yarn
yarn install
Start the development server:

bash
Copy code
npm start
### or if using yarn
yarn start
The application will start on the default port 3000. You can access it at http://localhost:3000 in your browser.

### Configuration
You can configure the backend API URL by updating the axios calls in the RemoteControl component to point to your Mac's correct IP address. Additionally, you can run both the frontend and backend locally. To streamline this process, you can create a shell script that allows you to start both the application with a single command.

```bash
#!/bin/bash

echo "Starting Spring Boot application..."
(cd /path/to/spring-boot-app && ./mvnw spring-boot:run) &

echo "Starting React application..."
(cd /path/to/react-app && npm start) &

wait
```

## Usage
### Volume Control:

Adjust the volume using the + and - buttons or set a specific level using the input field.
Press the "Set Volume" button to apply the desired volume.
Media Control:

Use the arrow buttons to skip forward or backward.
Press the "Space" button to play/pause media.
Toggle Spotify play/pause with the corresponding button.
Skip YouTube ads using the "Skip Ad" button.

### Power Management:

Press the "Sleep" button to put your Mac to sleep.
Press the "Shutdown" button to shut down your Mac remotely.
Styling
The application is styled using inline styles in the RemoteControl component. The layout is optimized for simplicity and ease of use, with a focus on accessibility and mobile-friendly design.

### Troubleshooting
Backend Not Reachable: Ensure the backend is running and that the API URL in the axios requests is correct.
CORS Issues: If you encounter CORS issues, ensure that your backend is configured to allow requests from the frontend's origin.
Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

# License
This project is licensed under the MIT License. See the LICENSE file for details.

# Acknowledgements
React
Axios
