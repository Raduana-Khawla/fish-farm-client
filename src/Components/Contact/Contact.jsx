// src/components/ContactPage.js
import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container px-3 mx-auto md:my-8 md:pb-5 ">
      <h1 className=" text-lg mt-2 md:text-3xl text-center font-bold md:mb-4 text-gray-800  ps-2">
        Contact with Us
      </h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-800"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md text-gray-800"
            placeholder="Your Name"
          />
        </div>
        <div className="md:mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-800"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md text-gray-800"
            placeholder="Your Email"
          />
        </div>
        <div className="my-2 md:mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-800"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 p-2 w-full border rounded-md text-gray-800"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
