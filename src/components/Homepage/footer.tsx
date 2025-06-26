import {
  LinkedinFilled,
  InstagramOutlined,
} from '@ant-design/icons';

const Footer = () => {
  // get current year
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#435268] text-white">
      <div className="max-w-screen-xl mx-auto py-8 px-4 text-center space-y-4">
        {/* Title */}
        <h2 className="text-2xl font-semibold">Engineers At AKTU</h2>

        {/* Social + Email */}
        <div className="flex items-center justify-center space-x-2">
          <a
            href="https://www.linkedin.com/in/engineers-at-aktu-aa861a2b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-500 transition-colors"
          >
            <LinkedinFilled style={{ fontSize: 24 }} />
          </a>
          <a
            href="https://www.instagram.com/engineers_at_aktu?igsh=MWNwb2Q5eG94eGw5MQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-red-500 transition-colors"
          >
            <InstagramOutlined style={{ fontSize: 24 }} />
          </a>
          <a
            href="mailto:engineersataktu@gmail.com"
            className="flex items-center space-x-2 hover:text-blue-500 transition-colors"
          >
            <span className='pl-1 border-l border-white'>engineersataktu@gmail.com</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-300 pt-6">
          Copyright © {year} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
