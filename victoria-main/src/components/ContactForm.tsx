export default function ContactForm() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-black via-gray-900 to-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.15),transparent_50%)]"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-center text-white">Get in Touch</h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
        <p className="text-center text-gray-300 mb-12 text-lg">
          Ready to elevate your property management experience? Contact us today.
        </p>

        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="space-y-6">
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-orange-500/30 bg-gray-900/50 text-white rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none placeholder-gray-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-orange-500/30 bg-gray-900/50 text-white rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none placeholder-gray-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 border border-orange-500/30 bg-gray-900/50 text-white rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none placeholder-gray-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-3 border border-orange-500/30 bg-gray-900/50 text-white rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none resize-none placeholder-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-4 px-8 rounded-md hover:bg-orange-600 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
