# Word Analytics

Word Analytics is a React application designed to analyze text input and provide real-time statistics. This project demonstrates the application of React concepts such as state management, component-based architecture, and text validation.

## Features

- **Text Validation:** Filters out not allowed text patterns such as <script> tags and @ symbols, ensuring that only valid input is processed.
- **Real-Time Word and Character Count:** Provides instant feedback on the number of words and characters in the text input.
- **Social Media Limits:** Displays remaining character counts for popular social media platforms like Instagram and Facebook, helping users tailor their content.
- **Dynamic Warnings:** Shows warnings when not allowed text patterns are detected, enhancing user experience and input quality.
- **Component-Based Architecture:** The project is built with reusable components, promoting clean and manageable code.

## Screenshots

![Initial State](public/assets/InitialState.png)
_The initial state of the project._

![Example Input](public/assets/ExampleInput.png)
_An example sentence is typed, displaying updated and accurate statistics._

![Filtered Input](public/assets/FilteredInputs.png)
_A fake script `<script> Hackermans 8) </script>` is pasted in the textarea, displaying how the validation catches banned inputs and displays a warning at the bottom of the component._

## Learning Outcomes

This project facilitated learning in:

- Managing state efficiently through onChange event handling.
- Implementing real-time text input validation and manipulation.
- Developing modular, reusable components within a React application.
- Utilizing conditional rendering and dynamic class names based on component state.

This project was developed using the **Professional React & Next.js** tutorials on _bytegrad.com_.
