import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterEffect = () => {
  return (
    <div className="text-center text-accent">
      <h1 className="text-4xl font-bold">
        <Typewriter
          words={['Welcome to Horizon 2k25', 'The Future of Technology', 'Dr. B. C. Roy Engineering College']}
          loop={0} // Set to 0 to stop after the words finish typing
          cursor
          cursorStyle="_"
          typeSpeed={100}  // Adjust typing speed
          deleteSpeed={80} // Adjust deleting speed if you want the words to delete
          delaySpeed={1000} // Time before typing starts again (if loop is greater than 0)
          onInit={(typewriter) => {
            typewriter
              .changeDelay(75)
              .changeCursorStyle("_")
              .changeColors(["#FF5733", "#33FF57", "#5733FF"])  // Add an array of colors for each word typed
          }}
        />
      </h1>
    </div>
  );
};

export default TypewriterEffect;
