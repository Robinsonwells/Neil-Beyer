export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-black to-blue-950 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-center">Meet Neil Beyer</h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6 text-gray-300 leading-relaxed text-base md:text-lg">
              <p>
                Neil Beyer brings extensive expertise to property management in Billings, Montana. As the founder of ELEPHAS Property Management, Neil is dedicated to providing property management solutions that are truly tailored to each client's unique needs and objectives.
              </p>
              <p>
                With a commitment to excellence and a results-driven approach, Neil specializes in maximizing investment returns while minimizing vacancies. His professional methodology combines industry experience with personalized service, ensuring that every property owner receives the attention and expertise their investment deserves.
              </p>
              <p>
                Neil's approach is built on four core principles: expertise in navigating property management complexities, personalized service aligned with your goals, unwavering professionalism with integrity and transparency, and a results-driven focus on your success.
              </p>

              <div className="pt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-orange-500 text-xl">●</span>
                  <a href="tel:4062726568" className="text-white hover:text-orange-500 transition-colors text-base md:text-lg">
                    (406) 272-6568
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-500 text-xl">●</span>
                  <a href="mailto:elephaspm@gmail.com" className="text-white hover:text-orange-500 transition-colors text-base md:text-lg">
                    elephaspm@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-500 opacity-20 blur-xl"></div>
              <div className="absolute -inset-2 bg-blue-900 opacity-10 blur-2xl"></div>
              <img
                src="/289836173_417851877023504_8935604472155507465_n.webp"
                alt="Neil Beyer"
                className="relative rounded-lg shadow-2xl w-full max-w-md object-cover ring-2 ring-orange-500/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
