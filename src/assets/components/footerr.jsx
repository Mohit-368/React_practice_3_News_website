export default function Footerr() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* About Us */}
        <div>
          <h3 className="font-bold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Press Room</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="font-bold mb-4">Customer Care</h3>
          <ul className="space-y-2 text-sm">
            <li>Our Offices</li>
            <li>Career at News Media</li>
          </ul>
        </div>

        {/* Dailies */}
        <div>
          <h3 className="font-bold mb-4">Dailies</h3>
          <ul className="space-y-2 text-sm">
            <li>Anandabazar Patrika</li>
            <li>The Telegraph</li>
          </ul>
        </div>

        {/* Magazines */}
        <div>
          <h3 className="font-bold mb-4">Magazines</h3>
          <ul className="space-y-2 text-sm">
            <li>Sananda</li>
            <li>Desh</li>
            <li>Anandamela</li>
            <li>Boier Desh</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-bold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li>FAQ</li>
            <li>Help</li>
            <li>Site Map</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
        <p>
          Disclaimer & Privacy Policy | Copyright 2025 | All Rights Reserved |
          News Media Pvt. Ltd.
        </p>
      </div>
    </footer>
  );
}
