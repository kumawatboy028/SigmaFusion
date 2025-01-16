import React from "react";

const ContactUsSection = () => {
  return (
    <div id="ContactUs" className="pt-[30px]">
      <>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Ready to Collaborate?
            </h2>
            <div className="max-w-xl mx-auto">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default ContactUsSection;
