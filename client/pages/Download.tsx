const Download = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Download{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Tachiyomi
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get the latest version of Tachiyomi for Android and start your
            ultimate manga reading experience.
          </p>
          <div className="bg-card p-8 rounded-xl border border-border max-w-md mx-auto">
            <p className="text-muted-foreground">
              Download page coming soon with official APK downloads,
              installation guides, and version history.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
