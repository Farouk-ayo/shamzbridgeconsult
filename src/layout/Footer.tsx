import React from "react";
import { FaLinkedinIn, FaInstagram, FaYoutube, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // XTwitter Icon

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkSlate text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1724055539467/36a4b661-bd4f-488c-88d9-7109189330e5.png"
              alt="BFN Logo"
              className="mb-4 w-40 scale-[2]"
            />
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-2">
              Have questions or need more info? Reach out to us:
            </p>
            <a
              href="mailto:bfn@utoronto.ca"
              className="text-white hover:text-secondary hover:underline text-lg"
            >
              @ ShamzBridge
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <p className="text-gray-400 mb-4">Stay connected with us online.</p>
            <div className="flex space-x-6">
              <a
                href="https://x.com/shamzbridge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary"
              >
                <FaXTwitter size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/102454275/admin/feed/posts/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCCT69YW8WVJeEbjPEtomkQg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://www.instagram.com/shamzbridge/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="tel:+2348135153620"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary"
              >
                <FaPhone size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-16 text-gray-500">
        <p className="mt-2">
          Website crafted by{" "}
          <a
            href="https://devfarouk.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong className="text-white hover:text-secondary">
              Devfarouk
            </strong>
          </a>
          .
        </p>
        <p className=" text-white ">&copy; 2024 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
