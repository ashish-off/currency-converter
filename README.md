# Currency Converter

A simple currency converter application built with React and TypeScript that allows users to convert amounts between different currencies using real-time exchange rates from the ExchangeRate API.

## Features
- Convert currency amounts between different currencies.
- Fetch real-time exchange rates from ExchangeRate API.
- Swap between "From" and "To" currencies easily.
- Displays country flags for selected currencies.
- User-friendly interface with smooth interactions.

## Technologies Used
- React
- TypeScript
- ExchangeRate API
- Tailwind CSS

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/ashish-off/currency-converter.git
   ```

2. Navigate to the project folder:
   ```sh
   cd currency-converter
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Create a `.env` file in the root directory and add your API key:
   ```sh
   VITE_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```sh
   npm run dev
   ```

## Usage
- Enter the amount you want to convert.
- Select the "From" and "To" currencies from the dropdown menus.
- Click on the "Get Exchange Rate" button to fetch the conversion rate.
- Click the swap button to interchange the selected currencies.

## Folder Structure
```
📂 currency-converter
├── 📁 src
│   ├── 📁 components
│   │   ├── ConvertForm.tsx
│   │   ├── CurrencySelect.tsx
│   ├── 📁 data
│   │   ├── data.ts
│   ├── App.tsx
│   ├── main.tsx
├── .env
├── package.json
├── README.md
```

## API Information
This project uses the [ExchangeRate API](https://www.exchangerate-api.com/) to fetch real-time exchange rates. Make sure to obtain an API key and set it in the `.env` file as `VITE_API_KEY`.

## License
This project is open-source and available under the [MIT License](LICENSE).

## Author
[Ashish Saud](https://github.com/ashish-off)

## Demo

![Image](https://github.com/user-attachments/assets/10026c60-e063-4409-af50-83ac924e01b8)