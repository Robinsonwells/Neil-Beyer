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
