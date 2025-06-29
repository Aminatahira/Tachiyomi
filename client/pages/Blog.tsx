const Blog = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Tachiyomi{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest Tachiyomi news, feature announcements,
            and community highlights.
          </p>
          <div className="bg-card p-8 rounded-xl border border-border max-w-md mx-auto">
            <p className="text-muted-foreground">
              Blog page coming soon with articles about app updates, manga
              recommendations, and community stories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
