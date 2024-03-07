# Calculator

Created a calculator as part of the odin project with the help of stack implementation. It performs the basic operations such as addition, subtraction, multiplication and division. The inputs are given by both button and key events. The style of the calculator is inspired from the ios.

# Stack Implementation

It's a normal stack implementation which does the function of push, pop, clear, displays the top element, returns the size of the stack.

# Pseudo Code

1. Stack is empty
2. Get input from user 
3. If Number check if count is 0
    - 3.1. If yes replace the display value with input and increment count
    - 3.2. If no append the display value with input
4. If '.' check if display value % 1 == 0 
    - 4.1. If yes append the '.' with the display value and increment count
5. If '+/-' check if display value is 0
    - 5.1. If yes log ERROR in console
    - 5.2. If no check again if value is less than 0 
        - 5.2.1. If yes do 5.1 again
        - 5.2.2. If no add '-' before display value
6. If operator check stack
    - 6.1. If stack is empty push display value and selected operator
    - 6.2. If stack is not empty
        - 6.2.1. Check if Stack top is operator and count is 0, if yes pop the top and push the selected operator and set count to 0.
        - 6.2.1. If Stack top is operator and count is not 0, perform calculation based on stack top, clear stack and push result and current selection and set count to 0.
7. If '%' check is stack size is empty or 1 or stack top is '='
    - 7.1. If yes set display value to 0 and count to 0.
    - 7.2. If no perform calculation based on operator selection
8. If 'AC' clear stack, set count to 0 and display value to 0.

# Functions

- Gets input from the user by both button and ket events
- Can do multiple operation on the result until clear is selected
- Displays 'Cannot Divide by Zero' message when divide by zero
- Changes operator background color on selection from user
- Can only add up to one decimal point
- Negate the value if it's not already a negative number or 0
- Displays ERROR message for invalid input or result
