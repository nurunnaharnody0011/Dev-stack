[DevStack](https://devstack0011.netlify.app/)
DevStack helps users explore technologies and build their own development stack.
Technologies I Used:
 - React.js
 - TypeScript
 - Tailwind CSS
 - React Hot Toast
 - JSON
 - React Icon

Features
 - DevStack has a Navbar, Banner, Technology section, and Footer.
 - In the Technology section, you can see some data on technologies, which is exported from a JSON file.
 - Every technology card has an icon, name, description, category, and a button.
 - Anyone can add or remove technologies from the stack.
 - Also can get toast messages for different actions.

?React Questions

1. What is JSX?
= JSX lets us write HTML-like code inside JavaScript. It makes React UI easier to create.

2. Props vs State
= Props pass data between components. State stores data that can change.

3. What does useState do?
= useState stores changing data. I used it to store the selected technologies.

4. What does useEffect do?
= useEffect runs code after a component loads. I used it to load technology data from the JSON file.

5. Why is a unique key needed?
= A unique key helps React identify each item.

6. What is conditional rendering?
= It shows content based on a condition. I used it to show “Your stack is empty” when no technology is selected.

7. How do parent and child components communicate?
= A parent sends data through props. A child calls a function received through props to send an action back.
