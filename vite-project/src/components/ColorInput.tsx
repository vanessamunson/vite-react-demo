import { useState } from 'react'
import ColorSamples from './ColorSamples';

const isValidTailwindColor = (color: string): boolean => {
  const regexp = /^(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|magenta|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)$/;
  // console.log(color);
  return regexp.test(color);
};


export default function ColorInput() {
  const [inputValue, setInputValue] = useState('');
  const [isValidColor, setIsValidColor] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;    
    setInputValue(value);
    console.log(value);
    setIsValidColor(isValidTailwindColor(value));
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="mt-8 p-2 border-2 border-gray-300 rounded-md"
        placeholder="Enter a Tailwind color name"
      />
      <div>
        {isValidColor ? (
          <span className="text-green-500">Valid Tailwind color</span>
        ) : (
          <span className="text-red-500">Invalid Tailwind color</span>
        )}
      </div>
      <div className="flex">
        <div className="pt-12 mr-8">Guess the right color and it will reveal itself: </div>
        <div
          className={`w-64 h-32 ${  
            isValidColor ? `bg-${inputValue}` : 'bg-gray-300'
          }`}
        ></div>
      </div>
      <ColorSamples shade={'bg-red-500'} />
      
    </div>
  )
}
 