import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InputError = ({ messages = [], className = '' }) => {
  useEffect(() => {
    // Display toast notifications for each error message
    messages.forEach((message, index) => {
      toast.error(message, {
        position: "top-right",
        autoClose: 5000, // Set the duration for which the toast will be displayed
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    });
  }, [messages]);

  return (
    <>
      {messages.length > 0 && (
        <>
          {messages.map((message, index) => (
            <div className={`${className} badge badge-error text-white font-bold font-1 text-xs w-full`} key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              {message}
            </div>
          ))}
          {/* Toast container to manage the placement and appearance of toast notifications */}
          <ToastContainer />
        </>
      )}
    </>
  );
};

export default InputError;
