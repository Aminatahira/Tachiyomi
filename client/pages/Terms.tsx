const Terms = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Terms &{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understand the terms of service for using Tachiyomi and our
            commitment to fair usage policies.
          </p>
          <div className="bg-card p-8 rounded-xl border border-border max-w-md mx-auto">
            <p className="text-muted-foreground">
              Terms & Conditions page coming soon with comprehensive legal terms
              and usage guidelines (2000+ words).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
