import React, { useState } from 'react'; // Import React and useState hook
import './index.css'; // Ensure this is the correct path to your CSS file

function App() {
 // Declare a state variable 'a' with an initial value of 0
 const [a, setA] = useState(0);

 // Define a function to handle button clicks
 const handleClick = () => {
   // Use the setA function to update the state
   // The new state is the previous state plus 1
   setA((prev) => prev + 1);
 };

 return (
    <div className='Main'>
      App
      <div className="w-full h-screen bg-zinc">hello</div> {/* Using the custom "zinc" color */}
      <h1>{a}</h1> {/* Display the current state value */}
      <button onClick={handleClick} className='px-3 py-1 bg-green-500 rounded-md text-x'>Click Me</button> {/* Button to increment the counter */}
    </div>
 );
}

export default App; // Export the App component
