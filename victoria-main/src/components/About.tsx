export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-center">About</h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
              <p>
                Victoria has enjoyed helping families accomplish their dreams of owning a home and assisting in their real estate needs for 17 years. Working closely with buyers and sellers, she specializes in residential properties in Billings and surrounding areas. A highlight of her business is developing relationships that ultimately lead to lasting friendships. Her depth of experience, integrity, and knowledge in the real estate industry, intertwined with innovative technology, displays her commitment and dedication to her clients.
              </p>
              <p>
                Victoria was raised in Western Montana and appreciates what this beautiful state has to offer to those locally and for those who are planning to make it their home. She attended the University of Montana and Montana State University – Billings, earning her Bachelor of Science in Business Administration degree with an emphasis in marketing. During the summer months, you would likely see her on the golf course contributing to a fun group tournament or competing in state-level championships. She also enjoys hiking and skiing. Above all, Victoria loves spending time with her family.
              </p>

              <div className="pt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-orange-500 text-xl">●</span>
                  <a href="tel:4068552856" className="text-white hover:text-orange-500 transition-colors text-base md:text-lg">
                    (406) 855-2856
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-500 text-xl">●</span>
                  <a href="mailto:vbk125@gmail.com" className="text-white hover:text-orange-500 transition-colors text-base md:text-lg">
                    vbk125@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-500 opacity-20 blur-xl"></div>
              <img
                src="/Victoria-Brauer-Konitz-sq.jpg"
                alt="Victoria Brauer-Konitz"
                className="relative rounded-lg shadow-2xl w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
