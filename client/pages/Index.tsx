import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMEwyMCAyMEwwIDIwWiIgZmlsbD0iIzMzNDE1NSIgZmlsbC1vcGFjaXR5PSIwLjAyIi8+PC9zdmc+')] opacity-50"></div>
        <div className="container mx-auto px-6 lg:px-8 py-24 lg:py-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  The Ultimate{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Manga Reading
                  </span>{" "}
                  Experience
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Discover, read, and organize your favorite manga series with
                  Tachiyomi - the most powerful and feature-rich manga reader
                  for Android. Join millions of manga enthusiasts worldwide who
                  trust Tachiyomi for their daily reading adventures.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/download"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  Download Free
                </Link>
                <Link
                  to="/about"
                  className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-card text-center"
                >
                  Learn More
                </Link>
              </div>
              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>100% Free</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Open Source</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>No Ads</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative mx-auto w-64 h-96 lg:w-80 lg:h-[480px]">
                <img
                  src="https://images.pexels.com/photos/29051450/pexels-photo-29051450.jpeg"
                  alt="Tachiyomi App Interface"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent to-secondary rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Powerful Features for{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Manga Lovers
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tachiyomi is designed from the ground up to provide the best manga
              reading experience possible. Every feature is crafted with manga
              enthusiasts in mind, ensuring smooth performance and intuitive
              usability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Extensive Source Library",
                description:
                  "Access hundreds of manga sources from around the world. Our extensive library includes both official and community-maintained sources, giving you access to the largest collection of manga titles available. Whether you're looking for the latest shounen hits, classic seinen series, or rare doujinshi, Tachiyomi has you covered with sources in multiple languages and regions.",
                icon: "📚",
              },
              {
                title: "Smart Library Management",
                description:
                  "Organize your manga collection with intelligent categorization, custom tags, and advanced sorting options. Our smart library system automatically tracks your reading progress, suggests similar titles, and helps you discover new series based on your preferences. Never lose track of where you left off with our comprehensive bookmark and history system.",
                icon: "🗂️",
              },
              {
                title: "Offline Reading Support",
                description:
                  "Download chapters for offline reading and never worry about internet connectivity again. Our efficient compression algorithms ensure minimal storage usage while maintaining high image quality. Perfect for commutes, flights, or areas with poor internet connection. Manage your downloads with batch operations and automatic cleanup options.",
                icon: "📱",
              },
              {
                title: "Customizable Reading Experience",
                description:
                  "Tailor your reading experience with extensive customization options. Choose from multiple reading modes, adjust image scaling, configure page transitions, and customize the interface to match your preferences. Support for both left-to-right and right-to-left reading directions, perfect for manga from different regions and publishing styles.",
                icon: "⚙️",
              },
              {
                title: "Cross-Device Synchronization",
                description:
                  "Keep your reading progress synchronized across multiple devices with our cloud backup system. Start reading on your phone and continue on your tablet seamlessly. Your library, bookmarks, and reading history are always up-to-date, no matter which device you're using. Secure encryption ensures your data remains private and protected.",
                icon: "☁️",
              },
              {
                title: "Advanced Search & Discovery",
                description:
                  "Find new manga with our powerful search engine that supports genre filtering, status filtering, and advanced query syntax. Discover trending series, get personalized recommendations based on your reading history, and explore curated collections. Our recommendation algorithm learns from your preferences to suggest titles you'll love.",
                icon: "🔍",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Trusted by Millions of{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Manga Readers
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a global community of manga enthusiasts who have made
              Tachiyomi their go-to reading application. Our growing user base
              is a testament to the quality and reliability of our platform.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "5M+",
                label: "Active Users",
                description:
                  "Manga readers worldwide trust Tachiyomi for their daily reading needs",
              },
              {
                number: "10K+",
                label: "Manga Sources",
                description:
                  "Extensive collection of sources from official publishers and communities",
              },
              {
                number: "99.9%",
                label: "Uptime",
                description:
                  "Reliable service ensuring you can read whenever you want",
              },
              {
                number: "150+",
                label: "Countries",
                description:
                  "Global community spanning across continents and cultures",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Advanced{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Capabilities
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the sophisticated features that make Tachiyomi the most
              advanced manga reading platform available for Android devices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">
                      AI
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      AI-Powered Recommendations
                    </h3>
                    <p className="text-muted-foreground">
                      Advanced machine learning algorithms analyze your reading
                      patterns, genre preferences, and completion rates to
                      suggest manga series you'll love. Our recommendation
                      engine continuously learns and improves, ensuring you
                      discover hidden gems and trending titles perfectly matched
                      to your taste.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">
                      ⚡
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Lightning-Fast Performance
                    </h3>
                    <p className="text-muted-foreground">
                      Optimized for speed and efficiency, Tachiyomi loads pages
                      instantly with intelligent pre-loading and advanced
                      caching mechanisms. Our image compression technology
                      reduces data usage by up to 70% while maintaining crisp,
                      clear visuals that preserve the artistic integrity of your
                      favorite manga.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">
                      🔒
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Enterprise-Grade Security
                    </h3>
                    <p className="text-muted-foreground">
                      Your privacy and security are paramount. We implement
                      AES-256 encryption for all data transmission, secure
                      authentication protocols, and zero-logging policies. Your
                      reading history, bookmarks, and personal preferences
                      remain completely private and are never shared with third
                      parties or advertisers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6281024/pexels-photo-6281024.jpeg"
                alt="Advanced features showcase"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Reading Modes Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Multiple{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Reading Modes
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience manga exactly how you prefer with our comprehensive
              selection of reading modes and customization options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                mode: "Paged Mode",
                description:
                  "Traditional page-by-page reading with smooth transitions and page curl effects.",
                icon: "📖",
              },
              {
                mode: "Continuous Scroll",
                description:
                  "Seamless vertical scrolling for uninterrupted reading flow and immersion.",
                icon: "📜",
              },
              {
                mode: "Webtoon Mode",
                description:
                  "Optimized for long-strip webtoons with intelligent panel detection.",
                icon: "📲",
              },
              {
                mode: "Double Page",
                description:
                  "Side-by-side pages for landscape viewing and traditional manga layout.",
                icon: "📰",
              },
            ].map((mode, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{mode.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{mode.mode}</h3>
                <p className="text-muted-foreground text-sm">
                  {mode.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Support &{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Documentation
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get help with installation, configuration, and troubleshooting.
              Our comprehensive documentation ensures you have the best possible
              experience with Tachiyomi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Installation Guide</h3>
              <p className="text-muted-foreground mb-6">
                Step-by-step installation instructions for all Android devices.
                Learn how to properly install and configure Tachiyomi for
                optimal performance and security.
              </p>
              <Link
                to="/download"
                className="text-primary hover:text-primary/80 font-medium"
              >
                View Guide →
              </Link>
            </div>

            <div className="text-center p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">User Manual</h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive documentation covering all features, settings, and
                advanced usage tips. Master every aspect of Tachiyomi with our
                detailed user manual.
              </p>
              <Link
                to="/blog"
                className="text-primary hover:text-primary/80 font-medium"
              >
                Read Manual →
              </Link>
            </div>

            <div className="text-center p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Technical Support</h3>
              <p className="text-muted-foreground mb-6">
                Get direct technical support for complex issues, bug reports,
                and feature requests. Our support team is here to help you
                resolve any problems quickly.
              </p>
              <Link
                to="/contact"
                className="text-primary hover:text-primary/80 font-medium"
              >
                Contact Support →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about Tachiyomi's features,
              installation, and usage.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "Is Tachiyomi really free to use?",
                answer:
                  "Yes, Tachiyomi is completely free and always will be. We're an open-source project funded by community donations and volunteer contributions. There are no premium subscriptions, hidden fees, or advertisements. Our commitment to free access ensures that everyone can enjoy manga regardless of their financial situation.",
              },
              {
                question: "How many manga sources does Tachiyomi support?",
                answer:
                  "Tachiyomi supports over 10,000 manga sources through our extensive extension system. These include official publisher sources, fan translation groups, and community-maintained libraries. Our extension system allows for easy addition of new sources, and we regularly update our source catalog to ensure maximum content availability.",
              },
              {
                question: "Can I read manga offline with Tachiyomi?",
                answer:
                  "Absolutely! Tachiyomi's offline reading feature allows you to download entire manga series or individual chapters for reading without an internet connection. Our intelligent compression system optimizes file sizes while maintaining image quality, and you can set automatic download schedules for your favorite ongoing series.",
              },
              {
                question: "Is my reading data private and secure?",
                answer:
                  "Your privacy is our top priority. All user data is encrypted using industry-standard AES-256 encryption. We implement a zero-logging policy, meaning we don't track your reading habits for advertising purposes. Your reading history, bookmarks, and preferences are stored locally on your device and optionally synced through our secure cloud service.",
              },
              {
                question:
                  "Does Tachiyomi work on tablets and different Android versions?",
                answer:
                  "Yes, Tachiyomi is optimized for all Android devices including phones, tablets, and Android TV. We support Android 6.0 and later versions, ensuring compatibility with virtually all modern Android devices. The interface automatically adapts to different screen sizes and orientations for the best reading experience.",
              },
              {
                question: "How often does Tachiyomi receive updates?",
                answer:
                  "We release stable updates monthly, with beta updates available weekly for early testers. Critical bug fixes and security patches are deployed immediately as needed. Our development team continuously works on improvements based on community feedback, ensuring Tachiyomi stays current with the latest Android features and user needs.",
              },
              {
                question: "Can I contribute to Tachiyomi's development?",
                answer:
                  "We welcome contributions from developers, translators, and community members! You can contribute code through our GitHub repository, help translate the app into new languages, create documentation, or support fellow users in our community forums. Check our contribution guidelines on GitHub to get started.",
              },
              {
                question: "What reading customization options are available?",
                answer:
                  "Tachiyomi offers extensive customization including multiple reading modes (paged, continuous scroll, webtoon), zoom controls, background colors, page transitions, reading direction settings, and custom themes. You can also set up reader preferences per series, allowing different settings for different types of manga.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left bg-card hover:bg-card/80 transition-colors flex justify-between items-center"
                >
                  <span className="font-semibold text-foreground">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-muted-foreground transform transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-background border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Latest{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Updates
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed about the newest features, improvements, and
              announcements from the Tachiyomi development team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="text-sm text-primary font-medium mb-2">
                Version 0.15.2
              </div>
              <h3 className="text-lg font-semibold mb-3">
                Enhanced Reading Performance
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Major improvements to image loading speeds, reduced memory
                usage, and smoother page transitions for an even better reading
                experience.
              </p>
              <Link
                to="/blog"
                className="text-primary hover:text-primary/80 text-sm font-medium"
              >
                Read More →
              </Link>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="text-sm text-secondary font-medium mb-2">
                Community Update
              </div>
              <h3 className="text-lg font-semibold mb-3">
                New Translation Languages
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Tachiyomi now supports 12 additional languages thanks to our
                amazing community translators, making manga accessible to even
                more readers worldwide.
              </p>
              <Link
                to="/blog"
                className="text-primary hover:text-primary/80 text-sm font-medium"
              >
                Read More →
              </Link>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="text-sm text-accent font-medium mb-2">
                Feature Release
              </div>
              <h3 className="text-lg font-semibold mb-3">
                AI-Powered Recommendations
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Our new machine learning recommendation system helps you
                discover manga series perfectly matched to your reading
                preferences and history.
              </p>
              <Link
                to="/blog"
                className="text-primary hover:text-primary/80 text-sm font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground">
              Ready to Transform Your Manga Reading Experience?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Join millions of manga readers who have discovered the ultimate
              reading experience with Tachiyomi. Download now and start your
              journey into the world of premium manga reading on Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/download"
                className="bg-background text-foreground hover:bg-background/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Download Tachiyomi
              </Link>
              <Link
                to="/about"
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Completely Free</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>No Registration Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Open Source</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
