# Number and Year Facts

A simple web app that returns random facts for after the user inputs either a number or year or both. The application pulls data from <a href="http://numbersapi.com/#42">NumbersAPI.com</a> and uses both AJAX and Fetch calls. All styling was done using Bootstrap4.

Both AJAX and Fetch were used for both and committed uncommented, so in order to properly run the app, you'll need to go to  `scripts/main.js` and comment out the one of the functions (either AJAX or Fetch).

You'll also need to change the function the the event listeners call depending on which method you want to use.

If using Fetch, the event listeners should be:
```
let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input', getFactFetch);

let yearInput = document.querySelector('#yearInput');
yearInput.addEventListener('input', getYearFactFetch);
```

If using AJAX, they should be:

```
let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input', getFactAjax);

let yearInput = document.querySelector('#yearInput');
yearInput.addEventListener('input', getYearFactAjax);
```
 No API key is required to access the NumbersAPI.com API and a server is not needed to run the app.
