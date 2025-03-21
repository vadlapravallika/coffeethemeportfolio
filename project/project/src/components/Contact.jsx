import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-coffee-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-coffee-800">
            Let's Connect
          </h2>
          <p className="text-coffee-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            Whether you're looking to collaborate on something new or just want to say hello, feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              id="contactForm"
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="access_key" value="740d0853-a496-4035-893c-7bf21a51b3d0" />

              <div>
                <label htmlFor="name" className="block text-coffee-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white border border-coffee-200 focus:outline-none focus:border-coffee-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-coffee-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white border border-coffee-200 focus:outline-none focus:border-coffee-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-coffee-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white border border-coffee-200 focus:outline-none focus:border-coffee-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-coffee-600 text-white py-2 px-6 rounded-lg hover:bg-coffee-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <FiMail className="text-coffee-600 text-xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-coffee-800">Email</h3>
                <p className="text-coffee-600">pravalli541@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FiPhone className="text-coffee-600 text-xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-coffee-800">Phone</h3>
                <p className="text-coffee-600">(312)-684-1005</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FiMapPin className="text-coffee-600 text-xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-coffee-800">Location</h3>
                <p className="text-coffee-600">Chicago, IL</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
        </motion.div>
        
      </div>
    </section>
  );
};

export default Contact;
