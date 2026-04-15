Scenario
Currently, a visitor to the Little Lemon web app cannot reserve a table.  Your task is to improve the app by allowing the user to enter data into the form so that they can complete their registration. YOu would need a new page calle bookings, tha navigation will happen from the homepage when clicking on the Reserve a table button.  Thus, in the page you need to build a Booking Form component that has the following entries (form items):

Date
Time
Number of guests
Occasion (Birthday, Anniversary)
Submit reservation button (to submit the form)
To do this, you need to implement a form in a controlled component named BookingForm.

Instructions
Step 1: Check the component and routes
If you haven’t done so already, create the BookingForm and BookingPage components. The BookingPage will contain the BookingForm component, in addition to any additional content before and after the form. 

Note: Before proceeding to the next step, check that your routes and navigation bar are set up to allow navigation to the booking page.

Step 2: Code the form structure
Next, you’ll need to build the form structure in the BookingForm component. You can use the following plain HTML5 implementation as a starting point, however, you should convert it to JSX so that you can later connect the input to the React state.

```html
<form style="display: grid; max-width: 200px; gap: 20px">
   <label for="res-date">Choose date</label>
   <input type="date" id="res-date">
   <label for="res-time">Choose time</label>
   <select id="res-time ">
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label for="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests">
   <label for="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation">
</form>

```

Note: Keep in mind the difference between the for attribute in HTML and htmlFor in JSX. Also, remember to self-close all tags in JSX.

Step 3: Code the form behavior
Using what you already know about events, effects and state in React, update your form's code to keep track of its own state.

Define a state variable for field in the form.

Connect each state variable to the form fields using the value and onChange form element attributes.

The options in the booking time field should be displayed from a list of available times. For now, create a stateful array in the component named availableTimes and use this state variable to populate the time select field options.

Tip: Use the useState function to declare the variable.

Now that the state is connected to the input elements, the form is ready to communicate with an API, a task you may complete in future (prepare a service for it).

