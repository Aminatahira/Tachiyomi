const Contact = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Contact{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with the Tachiyomi team. We're here to help with
            support, partnerships, and community inquiries.
          </p>
          <div className="bg-card p-8 rounded-xl border border-border max-w-md mx-auto">
            <p className="text-muted-foreground">
              Detailed contact page coming soon with comprehensive contact
              forms, support options, and community links.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
