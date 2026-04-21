# Submit Booking to API

Now that the reservation times are updated based on the date selected, the next step is to submit the booking form to the API.

## Scenario

In your web app for Little Lemon, users will want to create new bookings. In previous exercises, you set up the form and connected the state. The next step is to submit the booking form to the API and notify the user when the booking is successful.

## Instructions

### Step 1: Set up a booking confirmation page

Create a component named `ConfirmedBooking` that will represent the booking confirmation page.

Add JSX to display a message that the booking has been confirmed.

Add a route that will allow navigation to the booking confirmation page.

### Step 2: Set up the function for submitting the form

In the Main component, set up a function named `submitForm` that accepts the form data as a parameter and will submit it to the `submitAPI(formData)` API set up in the previous exercise.

If the `submitAPI(formData)` call returns `true`, navigate to the booking confirmation page.

> **Tip:** You can use the `useNavigate()` hook to navigate via code.

### Step 3: Update the submit event handler

Pass the `submitForm` function to the `BookingForm` component via props.

Update the button submit event handler to call the `submitForm` function, passing the form data as a parameter.
