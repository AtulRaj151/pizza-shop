# Pizza Shop Frontend 


## Overview
This project simulates the behavior of a pizza restaurant, from taking orders to making them ready for pickup. Users can place pizza orders through a form with various customization options. The application tracks the progress of each order through different stages and provides real-time updates on the time spent in each stage. Additionally, there is a main display section showing all pizzas in progress and the total number of pizzas delivered today.

## Features
1. **Placing Pizza Orders**: Users can place pizza orders through a form with options for type (Veg, Non-Veg), size (Large, Medium, Small), and base (Thin, Thick).
2. **Order Limit**: The restaurant can handle a maximum of 10 orders at a time. If the limit is exceeded, a message indicating that orders are not being taken is displayed.
3. **Pizza Stages**: Each pizza progresses through stages including Order Placed, Order in Making, Order Ready, and Order Picked.
4. **Status Highlighting**: Pizzas that remain in the same stage for more than 3 minutes are highlighted in red.
5. **Time Tracking**: The application displays the time spent in each stage for every pizza.
6. **Main Display**: Shows all pizzas in progress with their remaining time and order ID, along with the total number of pizzas delivered today.
7. **Order Cancellation**: Orders can be canceled at any stage before they are marked as ready.
8. **Manual Progression**: Pizzas can be manually moved from one stage to another by clicking on next/picked/cancel buttons.

## Bonus Features
1. **Sorting by Delay**: Orders can be sorted based on the delay in each stage.
2. **Different Making Times**: Different sizes of pizzas have different making times, affecting the highlighting color according to the elapsed time.
3. **State Management with Redux**: The application utilizes Redux for state management.

## Instructions for Running the Application
1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies using `npm install`.
4. Start the development server using `npm run dev`.
5. Open your web browser and go to `http://localhost:5173` to view the application.

## Technologies Used
- React.js
- Redux
- CSS (with animations and transitions)

## Contributors
- [Atul Raj](https://github.com/AtulRaj151)

