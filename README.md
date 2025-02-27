# Password Generator

This project is a simple password generator web application built using Node.js and Python. It allows users to generate secure passwords of a specified length.

## Features

- Generate secure passwords
- Refresh password functionality
- User-friendly interface
- Disclaimer for educational purposes

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/node-python-password-generator.git
    ```
2. Navigate to the project directory:
    ```sh
    cd node-python-password-generator
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    node index.js
    ```
2. Open your web browser and navigate to:
    ```
    http://localhost:3000
    ```

## File Structure

```
node-python-password-generator/
├── public/
│   └── index.html
├── index.js
├── password_generator.py
└── README.md
```

## API Endpoints

- `GET /generate-password`: Generates a password with the specified length (default is 12).

## Disclaimer

This password generator is for educational purposes only. Always use a trusted password manager for storing your passwords.

## License

This project is licensed under the MIT License.
