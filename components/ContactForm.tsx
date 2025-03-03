import { useState } from "react";
import 'styles/globals.css';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d86c13f1-05c5-42d9-a561-a7e012986ca2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      setIsSubmitted(true);
      console.log(result);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md">
            <p className="text-green-500">Form submitted successfully!</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-col md:flex-row max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Corporate Office:</h3>
            <p>Little Millennium Education Pvt. Ltd. (LMEPL)</p>
            <p>502-506, M3M Cosmopolitan, Golf Course Extn Road,</p>
            <p>Sector - 66, Gurgaon - 122002</p>
            <p>0124 - 4536350</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Noida Office:</h3>
            <p>Little Millennium Education Pvt. Ltd. (LMEPL)</p>
            <p>Smartworks Corporate Park, Ground Floor,</p>
            <p>Plot No. 1 & 2, Maple Tower B,</p>
            <p>Sector 125, Noida – 201301 (Uttar Pradesh)</p>
            <p>+91 - 9319273930</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Pune Office:</h3>
            <p>Little Millennium Education PVT. LTD. (LMEPL)</p>
            <p>Office Number-412, Fourth Floor,</p>
            <p>Lunkad Skymax, Datta Mandir Chowk, Viman Nagar,</p>
            <p>Pune - 411014</p>
            <p>+91 - 9819212021</p>
          </div>
        </div>
        <div className="md:w-1/2 p-4 mt-8 md:mt-0">
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}