import { Link } from "react-router-dom";

const Index = () => {
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
                  src="https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg"
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

      {/* Technology Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-5xl font-bold">
                  Built with{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Cutting-Edge Technology
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Tachiyomi leverages the latest Android technologies to provide
                  a smooth, responsive, and efficient reading experience. Our
                  commitment to technical excellence ensures optimal performance
                  across all device types and Android versions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">K</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Kotlin Native Development
                    </h3>
                    <p className="text-muted-foreground">
                      Built entirely in Kotlin for optimal Android performance,
                      ensuring fast startup times, efficient memory usage, and
                      seamless integration with Android's native features. Our
                      modern architecture provides stability and smooth
                      operation across all supported devices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">A</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Advanced Image Processing
                    </h3>
                    <p className="text-muted-foreground">
                      Sophisticated image optimization and caching algorithms
                      ensure fast loading times while maintaining exceptional
                      image quality. Our smart compression reduces bandwidth
                      usage without compromising the visual experience of your
                      favorite manga.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">S</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Secure & Private
                    </h3>
                    <p className="text-muted-foreground">
                      End-to-end encryption for all user data, ensuring your
                      reading habits and personal information remain completely
                      private. We follow strict privacy guidelines and never
                      share user data with third parties or advertisers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/15326117/pexels-photo-15326117.jpeg"
                alt="Technology showcase"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Join Our Thriving{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Community
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with fellow manga enthusiasts, share recommendations, get
              help with technical issues, and contribute to the ongoing
              development of Tachiyomi. Our community is the heart of what makes
              Tachiyomi special.
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
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Discord Community</h3>
              <p className="text-muted-foreground mb-6">
                Join our active Discord server with over 100,000 members. Get
                real-time help, share manga recommendations, participate in
                events, and connect with developers and fellow users from around
                the world.
              </p>
              <a
                href="#"
                className="text-primary hover:text-primary/80 font-medium"
              >
                Join Discord →
              </a>
            </div>

            <div className="text-center p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Open Source</h3>
              <p className="text-muted-foreground mb-6">
                Tachiyomi is completely open source and welcomes contributions
                from developers worldwide. View our source code, report issues,
                submit feature requests, and help make Tachiyomi even better for
                everyone.
              </p>
              <a
                href="#"
                className="text-primary hover:text-primary/80 font-medium"
              >
                View on GitHub →
              </a>
            </div>

            <div className="text-center p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Tutorials & Guides</h3>
              <p className="text-muted-foreground mb-6">
                Access comprehensive video tutorials, setup guides, and
                troubleshooting resources. Our extensive documentation and
                community-created content help you get the most out of
                Tachiyomi's powerful features.
              </p>
              <a
                href="#"
                className="text-primary hover:text-primary/80 font-medium"
              >
                Watch Tutorials →
              </a>
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
