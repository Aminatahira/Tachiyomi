import { Link } from "react-router-dom";

const Download = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Download{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Tachiyomi
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Get the latest version of Tachiyomi for Android and transform your
            manga reading experience. Our free, open-source application is
            trusted by millions of manga enthusiasts worldwide and delivers
            unparalleled performance, features, and reliability.
          </p>
        </div>

        {/* Download Cards */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Stable Release */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Stable Release</h3>
                    <p className="text-muted-foreground">
                      Version 0.15.2 • Recommended for all users
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  The latest stable version of Tachiyomi with all features
                  thoroughly tested and optimized for reliability. This version
                  includes the newest improvements to reading performance,
                  enhanced source compatibility, and improved user interface
                  elements that have been verified by our extensive beta testing
                  community.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">
                      Fully tested and stable for daily use
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">
                      Automatic updates and security patches
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">
                      Full community support and documentation
                    </span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Download Stable (28.5 MB)
                </button>
              </div>
            </div>

            {/* Preview Release */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Preview Release</h3>
                    <p className="text-muted-foreground">
                      Version 0.16.0-r5234 • For advanced users
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Get early access to the latest features and improvements
                  before they reach the stable release. Preview builds contain
                  cutting-edge functionality and experimental features that may
                  not be fully polished but offer a glimpse into Tachiyomi's
                  future development direction.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">
                      Latest features and experimental functionality
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">
                      May contain bugs or incomplete features
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">
                      Recommended for beta testers and contributors
                    </span>
                  </div>
                </div>

                <button className="w-full bg-card border border-border hover:border-primary text-foreground py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-card/80">
                  Download Preview (29.1 MB)
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              System Requirements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ensure your device meets the minimum requirements for optimal
              Tachiyomi performance and compatibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Minimum Requirements</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Android 6.0 (API 23) or higher</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>2GB RAM minimum</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>100MB available storage space</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Internet connection for manga sources</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Recommended</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Android 10.0 (API 29) or higher</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>4GB RAM for optimal performance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>1GB available storage for downloads</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Wi-Fi or stable mobile data connection</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Supported Devices</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Android smartphones and tablets</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Android TV and TV boxes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Chromebooks with Android app support</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Foldable devices with adaptive UI</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Installation Guide */}
        <section className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Installation Guide
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Follow these simple steps to install Tachiyomi on your Android
              device and start your manga reading journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Enable Unknown Sources
                    </h3>
                    <p className="text-muted-foreground">
                      Go to Settings, then Security, then Unknown Sources and
                      enable installation from unknown sources. This allows you
                      to install APK files directly downloaded from our website.
                      Note that this setting location may vary depending on your
                      Android version and device manufacturer.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Download the APK
                    </h3>
                    <p className="text-muted-foreground">
                      Click the download button above to download the latest
                      Tachiyomi APK file to your device. The download will begin
                      automatically and the file will be saved to your device's
                      Downloads folder. Ensure you have sufficient storage space
                      available.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Install the Application
                    </h3>
                    <p className="text-muted-foreground">
                      Navigate to your Downloads folder and tap on the Tachiyomi
                      APK file. Follow the installation prompts that appear on
                      your screen. Android may show security warnings - these
                      are normal for APK installations outside the Play Store.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Launch and Configure
                    </h3>
                    <p className="text-muted-foreground">
                      Open Tachiyomi from your app drawer and follow the initial
                      setup wizard. You'll be guided through installing
                      extensions, setting up your reading preferences, and
                      configuring the app to match your manga reading habits.
                      The setup process takes just a few minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7534804/pexels-photo-7534804.jpeg"
                alt="Installation process"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16 bg-gradient-to-r from-primary to-secondary rounded-3xl">
          <div className="px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Start Your Manga Journey Today
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Join millions of manga readers who have made Tachiyomi their
              preferred reading platform. Download now and discover why
              Tachiyomi is the ultimate manga reading experience for Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-background text-foreground hover:bg-background/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg">
                Download Now
              </button>
              <Link
                to="/about"
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Download;
