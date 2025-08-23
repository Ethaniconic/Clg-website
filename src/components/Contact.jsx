import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = "your_service_id";
const TEMPLATE_ID = "your_template_id";
const USER_ID = "your_user_id"; // or PUBLIC_KEY

const Contact = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      .then(
        (result) => {
          setSent(true);
          formRef.current.reset();
        },
        (error) => {
          setError("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center py-12 px-2">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full max-w-2xl mx-auto bg-[#10194a] bg-opacity-90 p-8 rounded-3xl shadow-2xl ring-1 ring-primary/20 flex flex-col gap-6"
      >
        <h2 className="text-3xl font-bold text-blue-100 mb-2 text-center">
          Contact Us
        </h2>
        {sent && (
          <div className="text-green-400 text-center font-semibold">
            Message sent successfully!
          </div>
        )}
        {error && (
          <div className="text-red-400 text-center font-semibold">{error}</div>
        )}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-blue-200 font-semibold">Name</span>
          </label>
          <input
            type="text"
            name="name"
            required
            className="input input-bordered bg-[#050a30] text-blue-100 border-blue-700 focus:outline-none"
            placeholder="Your Name"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-blue-200 font-semibold">Email</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className="input input-bordered bg-[#050a30] text-blue-100 border-blue-700 focus:outline-none"
            placeholder="you@example.com"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-blue-200 font-semibold">Message</span>
          </label>
          <textarea
            name="message"
            required
            rows={5}
            className="textarea textarea-bordered bg-[#050a30] text-blue-100 border-blue-700 focus:outline-none"
            placeholder="Type your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-accent text-white font-semibold mt-2"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;