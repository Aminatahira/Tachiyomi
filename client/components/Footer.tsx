import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  T
                </span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Tachiyomi
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The ultimate manga reading experience for Android. Discover, read,
              and organize your favorite manga series with powerful features and
              a beautiful interface.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Navigation</h3>
            <nav className="space-y-3">
              <Link
                to="/"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                to="/download"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Download
              </Link>
              <Link
                to="/blog"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Legal</h3>
            <nav className="space-y-3">
              <Link
                to="/privacy"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/disclaimer"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Disclaimer
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-muted-foreground">
                  support@cloudcorex4.com
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-muted-foreground">Tokyo, Japan</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-muted-foreground">+81-3-1234-5678</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Tachiyomi. All rights reserved. Made with ❤️ for
              manga lovers worldwide.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms
              </Link>
              <Link
                to="/disclaimer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
