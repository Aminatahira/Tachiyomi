const Disclaimer = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h1 className="text-4xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Disclaimer
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Important disclaimers regarding the use of Tachiyomi and our
            relationship with content sources.
          </p>
          <div className="bg-card p-8 rounded-xl border border-border max-w-md mx-auto">
            <p className="text-muted-foreground">
              Disclaimer page coming soon with detailed information about
              content sourcing, liability, and usage responsibilities (2000+
              words).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
