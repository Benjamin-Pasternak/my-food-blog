import Link from 'next/link';

interface FooterLink {
  title: string;
  href: string;
}

export default function Footer() {
  const footerLinks: FooterLink[] = [
    { title: 'Contact', href: '/contact' },
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* Left: Brand and Copy */}
        <div className="flex items-center space-x-2">
          <img src="/images/logo.svg" alt="Site Logo" className="h-6 w-auto" />
          <span className="text-red-600 font-semibold text-lg">
            Jack&apos;s Kitchen
          </span>
        </div>

        {/* Center: Footer Links */}
        <nav className="flex space-x-6">
          {footerLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-red-600 hover:text-red-800 font-medium transition-colors duration-200 text-sm"
            >
              {link.title}
            </Link>
          ))}
        </nav>
        
        {/* Right: Copyright */}
        <div className="text-gray-500 text-sm text-center md:text-right">
          © {new Date().getFullYear()} Jack&apos;s Kitchen. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
