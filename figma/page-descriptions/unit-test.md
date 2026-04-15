Overview
In this exercise, you will write two unit tests that you can use to check that your web app is working correctly.

Step 1: Test for some static text being rendered in the BookingForm component
Using your mockups, pick a part of the BookingForm component that has some static text, such as a heading or label.
code a test for the static text being rendered in the BookingForm component, using code like this:
screen.getByText("BookingForm");

Note: You will need to adjust the code based on what you've decided your Bookings component should render.

Step 2: Test the updateTimes and initializeTimes functions
The next step is to validate the behavior of the updateTimes and initializeTimes reducer functions.

Write a unit test for the initializeTimes function to validate that it returns the correct expected value.

Write a unit test for the updateTimes function to validate that it returns the same value that is provided in the state. This unit test is important as it will be updated later when the logic of changing the available times based on the selected date is implemented.
