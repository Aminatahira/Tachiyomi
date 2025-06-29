const Privacy = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Privacy{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn how Tachiyomi protects your privacy and handles your data with
            complete transparency and security.
          </p>
          <div className="bg-card p-8 rounded-xl border border-border max-w-md mx-auto">
            <p className="text-muted-foreground">
              Comprehensive privacy policy coming soon with detailed information
              about data collection, usage, and protection measures (2000+
              words).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
