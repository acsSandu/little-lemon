# Overview

In this exercise, you will connect the Bookings page of the Little Lemon restaurant to the API.

## Scenario

Now that the Booking page is set up, you need to make sure that customers do not reserve a table that has already been reserved. Double booking a table would lead to a poor customer experience. By updating the web app to retrieve the available booking times for an API, you can help ensure that Little Lemon's customers can reserve a table without issue. The goal of this exercise is for you to work with data in your Little Lemon restaurant app by connecting the Bookings page to the booking API.

## Instructions

### Step 1: Set up the API library

To prepare for the completion of this exercise, you need to include the API JavaScript file in your code.

Add the following code to your `index.html`:

```html
<script src="https://raw.githubusercontent.com/courseraap/capstone/main/api.js"></script>
```

The API has two functions that you can use in your code:

- `fetchAPI(date)` — Accepts a date as a parameter and returns an array of available reservation times for the provided date.
- `submitAPI(formData)` — Accepts the booking form data as a parameter and will return `true` if the data was successfully submitted.

### Step 2: Update the booking form to display the available times from the API

Update the `initializeTimes` function that you previously created to use the `fetchAPI` function to return the available times for today's date.

> **Tip:** You can create a `Date` object to represent today's date.

Update the `updateTimes` function that you previously created to use the `fetchAPI` function. Remember, you dispatched the selected date to the `updateTimes` function. This should be passed to the `fetchAPI` function as a parameter.
