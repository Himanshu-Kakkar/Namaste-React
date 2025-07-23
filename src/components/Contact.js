const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff7ec] via-[#ffe5dc] to-[#fce4ec] py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl p-10 border border-orange-100">
        <h1 className="text-4xl font-extrabold text-center text-orange-500 mb-4 drop-shadow">
          📞 Get in Touch with Us
        </h1>
        <p className="text-center text-gray-700 text-lg mb-10 max-w-2xl mx-auto">
          We'd love to hear from you — whether you want to give feedback, have a
          query, or just want to say hi! Our kitchen is always open for
          conversation. 🍴✨
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-5">
            <div className="bg-orange-50 rounded-xl p-5 shadow">
              <h2 className="text-xl font-semibold text-orange-600">
                📧 Email
              </h2>
              <p className="text-gray-700">himanshukakkar917@gmail.com</p>
            </div>

            <div className="bg-orange-50 rounded-xl p-5 shadow">
              <h2 className="text-xl font-semibold text-orange-600">
                📱 Phone
              </h2>
              <p className="text-gray-700">+91 8218287307</p>
            </div>

            <div className="bg-orange-50 rounded-xl p-5 shadow">
              <h2 className="text-xl font-semibold text-orange-600">
                🏫 College
              </h2>
              <p className="text-gray-700">NIT Kurukshetra, Haryana</p>
            </div>

            <div className="bg-orange-50 rounded-xl p-5 shadow">
              <h2 className="text-xl font-semibold text-orange-600">
                🌐 LinkedIn
              </h2>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/himanshu-kakkar-8154981b4/
              </a>
            </div>

            <div className="bg-orange-50 rounded-xl p-5 shadow">
              <h2 className="text-xl font-semibold text-orange-600">
                📸 Instagram
              </h2>
              <a
                href="https://instagram.com/mr_kakkar_22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline"
              >
                @yummyfy
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#fff3ed] p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold text-[#e85a00] mb-4">
              ✍️ Send Us a Message
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="bg-[#ff6b00] text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition w-full"
              >
                📤 Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-14">
          <p className="text-sm text-gray-500">
            Made with ❤️ by Himanshu Kakkar | restaurant_name © 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
