#  Random Dog Breeds Info Viewer

This is a simple JavaScript practice project that displays information and images about random dog breeds using the Dog CEO API and Wikipedia API.

## Features

- Shows  random dog breeds on page load.
- For each breed, it fetches:
  - A random image using the [Dog CEO API](https://dog.ceo/dog-api/).
  - A summary from Wikipedia using the [Wikipedia REST API](https://en.wikipedia.org/api/rest_v1/).
- Clean layout with breed name, description, and image.

## 🛠️ Technologies Used

- Vanilla JavaScript (ES6+)
- Fetch API (for async HTTP requests)
- HTML + CSS

## APIs Used

- **Dog CEO API**  
  `https://dog.ceo/api/breed/{breed-name}/images/random`

- **Wikipedia REST API**  
  `https://en.wikipedia.org/api/rest_v1/page/summary/{title}`


## Project Structure

dogs/
│
├── index.html          # Main HTML file
├── css/
│   └── style.css       # CSS styles
└── dogs.js             #JS logic   
