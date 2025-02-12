{/* <div className='border-b border-neutral-900 pb-20'> */}
import React from "react";

const Contact = () => {
  return (
    <section className='border-b border-neutral-900 pb-20'>
      <div id="contact" className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl pb-6 mt-4 text-center">Contact</h2>
        <p className="pb-8 text-lg font-medium text-neutral-600 text-center dark:text-neutral-300">
          Feel free to message me and say hi if you got this far.
        </p>
        <div className="bg-#242424 dark:bg-gray-800 rounded-xl shadow-lg p-6">
          {/* <h3 className="text-2xl font-semibold text-white dark:text-white">Let's get in touch</h3> */}
          <p className="text-neutral-600 dark:text-neutral-400 pt-2">
            You can contact me directly at  
            <a href="mailto:unnatisrivastava0603@gmail.com" className="underline text-blue-600 dark:text-blue-400">
                 unnatisrivastava0603@gmail.com
            </a> or by filling up this form.
          </p>
          <form className="mt-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400 dark:text-gray-300">Name</label>
              <input type="text" className="w-full mt-1 p-2 rounded-lg bg-gray-900 text-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400 dark:text-gray-300">Email</label>
              <input type="email" className="w-full mt-1 p-2 rounded-lg bg-gray-900 text-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400 dark:text-gray-300">Message</label>
              <textarea className="w-full mt-1 p-2 rounded-lg bg-gray-900 text-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="w-full bg-purple-950 hover:bg-purple-900 text-white font-semibold py-2 rounded-lg transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
