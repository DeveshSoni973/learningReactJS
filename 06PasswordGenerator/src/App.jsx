import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(12)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialAllowed, setSpecialAllowed] = useState(false)
  const [password, setPassword] = useState('YourPasswordABC')
  const [copyMessage, setCopyMessage] = useState('Copy')

  const passwordGenerator = (length, numberAllowed, specialAllowed) => {
    // Define arrays for characters
    const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/'];

    let choices = [...alpha]; // Always include alphabet
    let password = [];

    // Add number and special characters to choices if allowed
    if (numberAllowed) choices = [...choices, ...numeric];
    if (specialAllowed) choices = [...choices, ...special];

    // Ensure at least one character from each allowed category
    if (numberAllowed) password.push(numeric[Math.floor(Math.random() * numeric.length)]);
    if (specialAllowed) password.push(special[Math.floor(Math.random() * special.length)]);
    if (!numberAllowed && !specialAllowed) password.push(alpha[Math.floor(Math.random() * alpha.length)]);

    // Fill the rest of the password
    for (let i = password.length; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * choices.length);
      password.push(choices[randomIndex]);
    }

    // Shuffle the password array to randomize the order
    for (let i = password.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [password[i], password[j]] = [password[j], password[i]]; // Swap elements
    }

    return password.join(''); // Convert the array to a string
  };

  // Memoize password generator function with dependencies
  const passwordCalling = useCallback(passwordGenerator, [length, numberAllowed, specialAllowed]);

  // Update password whenever dependencies change
  useEffect(() => {
    const generatedPassword = passwordCalling(length, numberAllowed, specialAllowed);
    setPassword(generatedPassword);
  }, [length, numberAllowed, specialAllowed, passwordCalling]);

  // Copy to clipboard function
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
      .then(() => {
        setCopyMessage('Copied!'); // Change button text to indicate successful copy
        setTimeout(() => setCopyMessage('Copy'), 2000); // Reset button text after 2 seconds
      })
      .catch(err => {
        console.error('Error copying text: ', err);
        setCopyMessage('Failed to Copy');
        setTimeout(() => setCopyMessage('Copy'), 2000); // Reset button text after failure
      });
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen space-y-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Password Generator</h1>

      {/* Password Display */}
      <div className="flex flex-row items-center space-x-2 w-100">
        <input
          type="text"
          readOnly
          value={password}
          className="border px-4 py-2 rounded w-full shadow-md"
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
          onClick={copyToClipboard}
        >
          {copyMessage}
        </button>
      </div>

      {/* Customization Row */}
      <div className="flex flex-row justify-between items-center w-100 bg-white p-4 rounded shadow-md">
        {/* Length slider */}
        <div className="flex flex-col items-start mr-4">
          <label htmlFor="length" className="text-sm font-medium mb-1 text-gray-700">
            Length: <span className="font-bold">{length}</span>
          </label>
          <input
            type="range"
            id="length"
            min="4"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-52"
          />
        </div>

        {/* Numbers checkbox */}
        <label className="flex items-center space-x-1 text-gray-700">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed(!numberAllowed)}
          />
          <span className="text-sm">Numbers</span>
        </label>

        {/* Special characters checkbox */}
        <label className="flex items-center space-x-1 text-gray-700">
          <input
            type="checkbox"
            checked={specialAllowed}
            onChange={() => setSpecialAllowed(!specialAllowed)}
          />
          <span className="text-sm">Special</span>
        </label>
      </div>
    </div>
  );
}

export default App;
