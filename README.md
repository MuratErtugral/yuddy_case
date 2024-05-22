# Yuddy E-Commerce Platform

## Project Overview
Yuddy is a full-featured e-commerce platform built with modern web technologies. This project demonstrates the implementation of an e-commerce website with functionalities such as product listing, filtering, searching, shopping cart, and user authentication.

## Getting Started

### Prerequisites
Ensure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)
- [json-server](https://github.com/typicode/json-server)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/MuratErtugral/yuddy_case.git
   cd yuddy_case
   
2. Install the dependencies:
   ```bash
   npm install

3. Start the JSON server:
   ```bash
   json-server --watch db.json --port 3000
   
4. Start the React development server:
   ```bash
   npm start

## Running the Application
The application should automatically open in your default web browser. If not, navigate to [http://localhost:3001](http://localhost:3001) to view it.

## Features
- **Home Page**: Displays featured products and categories.
- **Product Listing**: Browse products by category with filtering options for brand and price range.
- **Product Search**: Search for products by keyword.
- **Product Details**: View detailed information about a product, including price, description, and reviews.
- **Shopping Cart**: Add products to the cart and manage quantities.
- **Checkout Process**: Placeholder for future implementation of the checkout process.
- **Contact Us Page**: Contact form for user inquiries.

## Technologies Used
- **React**: Front-end JavaScript library for building user interfaces.
- **Redux Toolkit**: State management for handling global state.
- **React Router**: Routing library for navigating between different pages.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: Promise-based HTTP client for API calls.
- **JSON Server**: Mock REST API server for simulating backend endpoints.

## Project Structure
- `src/components`: Reusable React components.
- `src/pages`: Different pages of the application.
- `src/features`: Redux slices for state management.
- `public`: Public assets like images and the main HTML file.
- `db.json`: JSON file for the mock backend data.

## Screenshots
![Home Page](https://github.com/MuratErtugral/yuddy_case/assets/93777203/d53feb5d-6405-4bc7-aae0-644aa04eb9d0)
![Product Listing](https://github.com/MuratErtugral/yuddy_case/assets/93777203/5070e984-93c1-47ba-a63f-7dff2929e57c)
![Product Details](https://github.com/MuratErtugral/yuddy_case/assets/93777203/2a0446d3-15a7-4759-aa0f-b549d7be1198)
![Shopping Cart](https://github.com/MuratErtugral/yuddy_case/assets/93777203/cc6940c4-e195-4448-8ae0-e2f45be25aa6)


## Contributions
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/MuratErtugral/yuddy_case/issues).

## License
This project is licensed under the MIT License.

## Contact
For further inquiries, please contact Murat Ertuğral at [your-email@example.com](mailto:your-email@example.com).

   
