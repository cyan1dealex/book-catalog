# Book Catalog

**Demo:** [Live Demo](https://book-catalog-nine-kappa.vercel.app/)  
**Task:** [Test Assignment](https://drive.google.com/file/u/1/d/1RBRcuH-_oAvtjem5Xs0c4NXZ8I38aYyH/view)

## How to Run App

1. Clone the repository:

   ```bash
   git clone https://github.com/cyan1dealex/book-catalog
   ```

2. Navigate to the project directory:

   ```bash
   cd book-catalog
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in the terminal.

### Production Build

```bash
npm run build
npm run preview
```

## Features

- Search for books with debounced input.
- Filter books by author.
- Add and remove books from favorites.
- Persist favorites using Local Storage.
- Switch between light and dark themes.
- Persist theme preferences using Local Storage.
- Display loading, error, and empty states.
- Responsive design.

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- Vite
- Open Library API
- Local Storage

## Project Structure

```text
book-catalog/
├── index.html                      # Main HTML entry point
├── assets/                         # Icons and other content
├── src/
│   ├── scripts/
│   │   ├── blocks/                 # UI components and application interface logic
│   │   │   ├── BookCard.js         # Renders an individual book card
│   │   │   ├── BookCardList.js     # Renders the list of book cards
│   │   │   ├── BookSearch.js       # Handles book search and author filtering
│   │   │   └── FavoritesPanel.js   # Manages the favorites panel interface
│   │   ├── models/                 # Data models
│   │   │   └── Book.js             # Defines the book model
│   │   ├── services/               # Data access and application services
│   │   │   ├── BookService.js      # Fetches book data from the API
│   │   │   ├── FavoritesService.js # Manages favorite books and local storage
│   │   │   └── ThemeService.js     # Manages theme switching and persistence
│   │   ├── utils/                  # Reusable utility functions
│   │   │   └── debounce.js         # Delays function execution during rapid input
│   │   └── main.js                 # Initializes and connects application components
│   └── styles/
│       ├── blocks/                 # Component-specific CSS files
│       ├── fonts.css               # Import fonts
│       ├── global.css              # Global styles for the application
│       ├── normalize.css           # Normalizes browser default styles
│       ├── variables.css           # CSS variables for colors and shared values
│       ├── utils.css               # Reusable utility styles
│       └── styles.css              # Main stylesheet importing other styles
├── .gitignore                      # Specifies files excluded from Git
├── package.json                    # Project metadata, scripts, and dependencies
├── package-lock.json               # Locks dependency versions
├── vite.config.mjs                 # Vite configuration
└── README.md                       # Project documentation
```

## API

[Open Library Search API](https://openlibrary.org/developers/api)
