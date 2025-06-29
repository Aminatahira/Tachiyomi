import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Tachiyomi
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover the story behind the world's most beloved manga reading
            application, built by passionate developers for the global manga
            community. Learn about our mission, values, and commitment to
            providing the ultimate reading experience for manga enthusiasts
            worldwide.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Tachiyomi, our mission is to democratize access to manga
                literature and provide readers worldwide with a powerful, free,
                and open-source platform that respects both creators and
                consumers. We believe that everyone should have access to the
                stories they love, regardless of their location, financial
                situation, or technical expertise.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2015, Tachiyomi emerged from a simple observation:
                existing manga reading applications were either too limited, too
                expensive, or filled with intrusive advertisements that
                detracted from the reading experience. Our founders, passionate
                manga readers themselves, recognized the need for a solution
                that prioritized user experience, privacy, and community
                engagement above all else.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, Tachiyomi serves millions of users across 150+ countries,
                offering access to thousands of manga sources while maintaining
                our core principles of being completely free, open-source, and
                advertisement-free. We continue to innovate and expand our
                platform based on community feedback and technological
                advancements.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6474329/pexels-photo-6474329.jpeg"
                alt="Our mission"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20 py-16 bg-card/50 rounded-3xl">
          <div className="px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything we do is guided by these fundamental principles that
                shape our decisions and define our commitment to the manga
                community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Accessibility First
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe manga should be accessible to everyone, everywhere.
                  Our platform supports multiple languages, operates on a wide
                  range of devices, and remains completely free to ensure no
                  barriers exist between readers and the stories they love.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🔓</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Open Source</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transparency is fundamental to our approach. Our entire
                  codebase is open source, allowing developers worldwide to
                  contribute, audit, and improve the platform. This ensures
                  continuous innovation and community-driven development.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Privacy Protection
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your privacy is non-negotiable. We implement end-to-end
                  encryption, never track personal reading habits for
                  advertising purposes, and maintain minimal data collection
                  policies to protect user information and reading preferences.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Performance Excellence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fast, efficient, and reliable performance is essential for an
                  enjoyable reading experience. We continuously optimize our
                  algorithms, reduce loading times, and ensure smooth operation
                  across all supported devices and network conditions.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Community Driven</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our community is our greatest asset. We actively listen to
                  user feedback, collaborate with developers worldwide, and make
                  decisions based on the collective needs and desires of our
                  global user base.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Design Innovation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Beautiful, intuitive design enhances the reading experience.
                  We constantly refine our user interface, implement user
                  experience best practices, and maintain aesthetic standards
                  that honor the artistry of manga itself.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/15326117/pexels-photo-15326117.jpeg"
                alt="Technology"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Technology & Innovation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tachiyomi is built using cutting-edge Android development
                technologies and modern software engineering practices. Our
                technical architecture emphasizes performance, scalability, and
                maintainability while ensuring compatibility across a wide range
                of Android devices and versions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We utilize Kotlin as our primary programming language,
                leveraging its modern features and seamless Android integration.
                Our image processing pipeline employs advanced compression
                algorithms and intelligent caching mechanisms to deliver fast
                loading times while minimizing bandwidth usage and storage
                requirements.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Security is paramount in our technical implementation. We employ
                industry-standard encryption protocols, secure communication
                channels, and rigorous code review processes to ensure user data
                remains protected and application integrity is maintained across
                all platforms and deployments.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our development process follows agile methodologies with
                continuous integration and deployment pipelines. This allows us
                to rapidly iterate based on user feedback, implement new
                features efficiently, and maintain high code quality standards
                while delivering regular updates to our global user base.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Global Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tachiyomi is developed by a diverse team of passionate developers,
              designers, and manga enthusiasts from around the world, united by
              our shared love for manga and commitment to open-source
              development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-card border border-border">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">
                Core Development Team
              </h3>
              <p className="text-muted-foreground mb-4">
                Lead Developers & Architects
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our core team consists of experienced Android developers who
                have been with the project since its inception. They oversee
                technical architecture, feature development, and ensure code
                quality across all contributions.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-card border border-border">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">
                Community Contributors
              </h3>
              <p className="text-muted-foreground mb-4">
                Open Source Volunteers
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hundreds of developers worldwide contribute code, translations,
                documentation, and bug reports. This global collaboration
                ensures Tachiyomi remains cutting-edge and responsive to user
                needs.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-card border border-border">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">
                Support & Moderation
              </h3>
              <p className="text-muted-foreground mb-4">Community Managers</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dedicated volunteers help manage our community platforms,
                provide user support, moderate discussions, and facilitate
                communication between users and developers across multiple
                languages.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-20 py-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl">
          <div className="px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Impact</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Since our launch, Tachiyomi has transformed how millions of
                people discover, read, and enjoy manga worldwide, creating
                lasting positive change in the manga community.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Global Reach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With over 5 million active users across 150+ countries,
                  Tachiyomi has become the world's most widely used manga
                  reading application. Our platform has facilitated billions of
                  chapter reads, connecting readers with stories from diverse
                  cultures and genres while fostering a global appreciation for
                  manga art and storytelling.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our impact extends beyond individual reading experiences.
                  We've helped preserve and archive manga content, supported
                  emerging artists and publishers by providing accessible
                  distribution channels, and created educational resources that
                  introduce newcomers to manga culture and history.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Community Building</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tachiyomi has fostered one of the most active and supportive
                  manga communities online. Our Discord server, forums, and
                  social media channels facilitate meaningful discussions about
                  manga series, art techniques, cultural contexts, and industry
                  trends, creating lasting friendships and collaborative
                  relationships.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through community events, recommendation systems, and
                  user-generated content features, we've helped readers discover
                  new series, support independent creators, and participate in
                  the broader manga ecosystem as informed and engaged consumers
                  and advocates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision Section */}
        <section className="mb-20">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Future Vision</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              As we look toward the future, our commitment to innovation,
              accessibility, and community remains unwavering. We continue to
              explore new technologies, expand our feature set, and strengthen
              our position as the premier manga reading platform for Android
              users worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">
                Technological Advancement
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We're exploring artificial intelligence integration for enhanced
                recommendation systems, machine learning algorithms for improved
                image optimization, and augmented reality features that could
                revolutionize how readers interact with manga content. Our
                research and development efforts focus on maintaining
                performance while adding innovative features.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">Global Expansion</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our roadmap includes expanded language support, regional
                customization features, and partnerships with local manga
                communities worldwide. We aim to make Tachiyomi truly universal
                while respecting cultural nuances and regional preferences in
                manga consumption and sharing.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">Creator Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're developing features that directly support manga creators
                and publishers, including integration with official distribution
                channels, creator spotlight programs, and tools that help
                readers discover and support independent artists while
                maintaining our commitment to free access.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-muted-foreground leading-relaxed">
                Long-term sustainability is crucial for our mission. We're
                implementing energy-efficient technologies, optimizing server
                infrastructure for minimal environmental impact, and exploring
                sustainable funding models that support continued development
                without compromising our free and open-source nature.
              </p>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="text-center py-16 bg-gradient-to-r from-primary to-secondary rounded-3xl">
          <div className="px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Whether you're a developer, designer, translator, or passionate
              manga reader, there are countless ways to contribute to
              Tachiyomi's continued growth and success. Join our community and
              help shape the future of manga reading.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-background text-foreground hover:bg-background/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                Get Involved
              </Link>
              <a
                href="#"
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
