## Trending Animes using Kitsu API

This HTML and JavaScript project retrieves the trending anime data from the Kitsu API and displays it in the browser. It uses the `fetch` method to make an HTTP request to the API and retrieves the data in JSON format.

### Steps to run the project

1. Clone or download the repository.
2. Open `index.html` in your web browser.
3. The webpage should display a list of currently trending anime shows.

### Files in the project

- `index.html` - Contains the HTML code to display the trending anime data in a list format.
- `script.js` - Contains the JavaScript code to fetch the data from the Kitsu API and display it in the HTML.
- `style.css` - Contains the CSS code that styles the webpage.

### Displaying the data

Once we have the data, we need to display it on the page. We do this using the map() function, which allows us to loop through the data and generate HTML for each item.


### Dependencies

This project requires an internet connection to fetch the data from the Kitsu API. It also requires a modern web browser that supports `fetch` and ES6 JavaScript syntax.

### How to modify the project

If you want to modify the project, you can do so by editing the `script.js` file. You can change the API endpoint, modify the data being retrieved, or customize the HTML display.

### Resources

- [Kitsu API Documentation](https://kitsu.docs.apiary.io/#reference/trending/trending-collection/get-trending-anime) - Documentation for the Kitsu API, including information on the trending anime endpoint.
- [Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - Documentation for the `fetch` method used to retrieve data from the Kitsu API.
- [JavaScript DOM Manipulation](https://www.w3schools.com/js/js_dom_manipulation.asp) - Tutorial on manipulating HTML elements using JavaScript.

### Conclusion
That's all there is to it! This project demonstrates how to fetch data from an API and display it on a web page using JavaScript and the Fetch API.