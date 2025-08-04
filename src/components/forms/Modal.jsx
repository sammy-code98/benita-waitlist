import React from 'react'

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-benita-black-100/85 bg-opacity-50 flex items-center justify-center z-50"
      aria-labelledby="success-modal"
    >
      <div className="relative flex  flex-col justify-center items-center bg-benita-white-100 px-6 py-12 rounded-xl max-w-lg w-full space-y-4">
        <div
          className="absolute top-2 right-4 text-black rounded-full p-2 bg-benita-red/5 cursor-pointer"
          onClick={onClose}
        >
          <img src="../src/assets/icons/close.svg" alt="close" />
        </div>
        <div className="rounded-full p-4 bg-benita-primary-300 animate-pulse">
          <img src="../src/assets/icons/success.svg" alt="Success" />
        </div>
        <h2 className="text-4xl font-semibold  text-benita-grey text-center">
          We've added you to our waiting list
        </h2>
        <p className="text-benita-grey text-base font-medium text-center">
          Thank you for joining the waitlist,we'll let you know when benita is
          ready
        </p>
      </div>
    </div>
  );
}
