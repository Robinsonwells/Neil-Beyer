export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-light mb-4">Victoria Brauer-Konitz</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Real Estate Professional specializing in residential properties in Billings and surrounding areas.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-light mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <a href="tel:4068552856" className="block text-gray-400 hover:text-orange-500 transition-colors">
                (406) 855-2856
              </a>
              <a href="mailto:vbk125@gmail.com" className="block text-gray-400 hover:text-orange-500 transition-colors">
                vbk125@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-light mb-4">Brokerage</h3>
            <p className="text-gray-400 text-sm">
              Real Estate Hub Billings
              <br />
              Billings, Montana
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Victoria Brauer-Konitz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
