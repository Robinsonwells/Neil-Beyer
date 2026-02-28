export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-blue-950 text-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-light mb-4">ELEPHAS Property Management</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing property management solutions tailored to your unique needs in Billings, Montana.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-light mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <a href="tel:4062726568" className="block text-gray-400 hover:text-orange-500 transition-colors">
                (406) 272-6568
              </a>
              <a href="mailto:elephaspm@gmail.com" className="block text-gray-400 hover:text-orange-500 transition-colors">
                elephaspm@gmail.com
              </a>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/elephaspropertymanagement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/neilbeyer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-light mb-4">Location</h3>
            <p className="text-gray-400 text-sm">
              Billings, Montana
            </p>
            <p className="text-gray-400 text-sm mt-4">
              Serving property owners and tenants throughout the Billings area
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} ELEPHAS Property Management. All rights reserved.</p>
          <p className="mt-2 text-xs">Managed by Neil Beyer</p>
        </div>
      </div>
    </footer>
  );
}
