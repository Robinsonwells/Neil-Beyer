import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    text: "We chose Neil as we were looking for someone to help us buy an investment property and then manage the rental. We feel this helps ensure the realtor helps choose a place that is going to be the easiest to manage long term. We were very impressed both with the advice we received as well as his patience. Our transaction was a reasonably complicated cross-state 1031 exchange. Not only did Neil never bat an eye at the the dozens of walkthroughs, he was exceptionally responsive to questions, very attentive and also great at helping us navigate contract delays and negotiations. We finally closed in September and had renters identified within two weeks at rent higher than our estimates. We are now a few months into our management agreement and Neil continues to provide great service and top notch communication.",
    author: "Property Investor"
  },
  {
    text: "Neil is very hard-working and trustworthy. If you have properties that need to be managed, Neil is definitely your guy, specially if you live in a different state. I cannot thank Neil enough. He goes above and beyond for his clients and make sure things are done right for his clients. Highly highly recommend Neil.",
    author: "Remote Property Owner"
  },
  {
    text: "Neil reached out to my wife and I via Realtor.com. He was our agent went we bought our rental property in Billings Montana. His work ethic was through the roof and answered all our questions in a timely manner. Neil is extremely reliable and trustworthy and I recommend him to anyone who is looking for an agent. Due to Neil's work ethic and his character, we hired him to be our property manager. Neil has been on top of things and has been a blessing to have him as the manager.",
    author: "Rental Property Owner"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [hasStartedTyping, setHasStartedTyping] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setHasStartedTyping(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStartedTyping) return;

    const currentTestimonial = testimonials[currentIndex].text;
    let currentChar = 0;

    setDisplayedText('');
    setIsTyping(true);

    const typingInterval = setInterval(() => {
      if (currentChar < currentTestimonial.length) {
        setDisplayedText(currentTestimonial.slice(0, currentChar + 1));
        currentChar++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);

        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
      }
    }, 20);

    return () => clearInterval(typingInterval);
  }, [currentIndex, hasStartedTyping]);

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 bg-gradient-to-br from-black via-gray-900 to-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.15),transparent_50%)]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white text-center mb-16 tracking-wide">
          Client <span className="text-orange-500">Testimonials</span>
        </h2>

        <div className="relative">
          {currentIndex > 0 && (
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 md:-translate-x-16 z-20 p-2 sm:p-3 rounded-full bg-orange-500/20 hover:bg-orange-500/40 border border-orange-500/40 transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 group-hover:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {currentIndex < testimonials.length - 1 && (
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 md:translate-x-16 z-20 p-2 sm:p-3 rounded-full bg-orange-500/20 hover:bg-orange-500/40 border border-orange-500/40 transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 group-hover:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

        <div className="bg-gradient-to-br from-gray-900/50 to-blue-950/30 backdrop-blur-sm border border-orange-500/20 rounded-lg p-8 sm:p-12 shadow-2xl min-h-[400px] flex flex-col justify-between">
          <div className="mb-8">
            <svg className="w-12 h-12 text-orange-500 mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>

            <p className="text-gray-100 text-lg sm:text-xl leading-relaxed font-light">
              {displayedText}
              {isTyping && <span className="animate-pulse text-orange-500">|</span>}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-500 font-medium text-lg">
                {testimonials[currentIndex].author}
              </p>
            </div>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-orange-500 w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
