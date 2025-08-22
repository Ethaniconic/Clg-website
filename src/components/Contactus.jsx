import React from 'react';

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-10 px-4 md:px-8"> {/* Main container for the whole component */}
      {/* Descriptive text - placed outside the form/map flex container */}
      <div className="w-full text-center mb-8">
        <p className="text-lg text-black"> {/* Changed to text-black */}
          We'd love to hear from you. Please use the form below or contact us through one of the methods listed.
        </p>
      </div>

      {/* Flex container for form and map */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 w-full max-w-5xl"> {/* Added max-w-5xl for overall width control and items-stretch for equal height */}
        {/* Form container */}
        <div className="bg-[#050a30] p-8 rounded-lg shadow-xl w-full max-w-md md:w-2/5 border border-blue-900/60">
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-100">Contact Us</h2> {/* Text color for heading */}
          <form onSubmit={onSubmit} className="space-y-4"> {/* Spacing for form elements */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-1">Name</label> {/* Text color for labels */}
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-blue-800 rounded-md bg-blue-950 text-blue-100 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-blue-800 rounded-md bg-blue-950 text-blue-100 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full px-4 py-2 border border-blue-800 rounded-md bg-blue-950 text-blue-100 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200"
            >
              Submit Form
            </button>

          </form>
          <span className="block text-center mt-4 text-sm text-blue-200">{result}</span> {/* Text color for result */}

        </div>
        {/* Container for map and address */}
        <div className="w-full md:w-2/5 flex flex-col gap-8">
          {/* Map container */}
          <div className="flex-grow-[2] flex-shrink-0 basis-0 bg-[#050a30] rounded-lg shadow-xl flex justify-center items-center text-blue-100 text-xl overflow-hidden">
            {/* Replace with your actual map embed code */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.699716887783!2d79.04515827467907!3d21.00467078063862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bdc6b03bfded%3A0x51964eb66fa3ec5e!2sSt.%20Vincent%20Pallotti%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1755892672871!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* Textual address container */}
          <div className="flex-grow-[1] flex-shrink-0 basis-0 bg-[#050a30] p-8 rounded-lg shadow-xl text-center flex flex-col justify-center items-center border border-blue-900/60">
            <h3 className="text-xl font-bold mb-4 text-blue-100">Our Address</h3>
            <p className="text-lg text-blue-100">
              St. Vincent Pallotti College of Engineering & Technology,
              <br />
              Gavsi Manapur, Wardha Road, Nagpur, Maharashtra India, - Pin : 441108
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}