import  { useState } from 'react';

export default function EmailInput({title}: {title: string}) {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);

  // Regular expression for validating an email address
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // simple
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/; // more sophisticated

  const validateEmail = (inputEmail: string): void => {
    if (emailRegex.test(inputEmail)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    validateEmail(inputEmail);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 border-slate-200 border-2 w-96 mt-16 mx-auto">
      <h1 className="text-2xl  mb-4">{title}</h1>
      <input
        type="text"
        value={email}
        onChange={handleInputChange}
        className="border-2 p-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
        placeholder="Enter your email"
      />
      {isValid !== null && (
        <p
          className={`mt-2 text-sm font-semibold ${
            isValid ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {isValid ? 'Email is valid' : 'Email is not valid'}
        </p>
      )}
    </div>
  );

}
 
/*
Breaking down the emailPattern regular expression:

const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
Here's a detailed explanation of each part:

/: Regular expression delimiter.
^: Start of the string.
[\w-]+: One or more word characters (letters, digits, underscores) or hyphens. This matches the local part of the email address before the @ symbol.
(: Start of a group.
\.: A literal dot (escaped with a backslash).
[\w-]+: One or more word characters or hyphens. This matches the local part after the dot.
): End of the group.
*: Zero or more occurrences of the previous group. This allows for multiple parts separated by dots in the local part of the email address.
@: A literal at symbol (@).
(: Start of a group.
[\w-]+: One or more word characters or hyphens. This matches the domain part of the email address.
\.: A literal dot (escaped with a backslash).
+: One or more occurrences of the previous group. This allows for multiple levels of subdomains.
): End of the group.
[a-zA-Z]{2,7}: Two to seven letters. This matches the top-level domain of the email address.
$: End of the string.
This regular expression matches a simple email address pattern, but it may not cover all possible email address formats.
*/