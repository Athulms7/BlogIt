export function SignupVisualPanel() {
  return (
    <div
      className="hidden lg:flex h-full w-150 bg-cover bg-center justify-center items-center p-10 rounded-bl-[4rem] relative"
      style={{
        backgroundImage: `url('https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg?w=992')`,
      }}
    >
      {/* Optional: Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40 rounded-bl-[4rem]"></div>

      {/* Content */}
      <div className="relative z-10 text-center  space-y-8 max-w-sm text-gray-300">
        <h2 className="text-3xl font-bold">
          ✍️ Welcome to BlogIt!
        </h2>
        <p className="text-lg">
          Create, write, and share your thoughts with the world.  
          Whether you're a developer or a creative, BlogIt is your publishing playground.
        </p>
      </div>
    </div>
  );
}
