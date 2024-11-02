
# Calculator Project

This is a calculator application built as part of The Odin Project curriculum. The project is designed to demonstrate skills in JavaScript, HTML, and CSS, as well as understanding of user interface design and function-based programming.
The calculator performs basic arithmetic operations such as addition, subtraction, multiplication, and division. It also has a clear and responsive layout that allows users to perform calculations directly in the browser.
Features

 Basic Arithmetic Operations: Supports addition, subtraction, multiplication, and division.

 Responsive Design: Adapts to different screen sizes for both desktop and mobile viewing.

 Error Handling: Prevents division by zero and handles unexpected inputs gracefully.
 Memory Functions: Simple memory storage and recall options for enhanced usability (optional).

 No eval() Usage: The calculator logic does not use JavaScript's eval() function to avoid potential security risks.
 
# Why Avoid eval()?
The eval() function in JavaScript can execute any string as code, which introduces a security risk, especially when handling user input. Using eval() can open up vulnerabilities in cases where a malicious input could be executed as code.
Instead, this project uses an expression parser and operator functions to ensure safe and reliable calculations. By manually handling operators and operands, this approach avoids unintended behavior and keeps user input under control.

# How to Use the Calculator
 Enter Numbers: Click on number buttons to input values.
 Choose Operators: Select an operation (addition, subtraction, multiplication, or division).
 Get Results: Click the equals button (=) to display the result.
 Clear the Screen: Use the clear button (C) to reset the calculation.

# Built With
 JavaScript: Handles the calculation logic and DOM manipulation.
 HTML: Provides the structure for the calculator interface.
 CSS: Styles the calculator and ensures responsive design.

# Future Improvements
 Add support for parentheses and more complex calculations.
 Include more scientific functions like square root and exponentiation.
 Improve error handling and user feedback.