export default function (eleventyConfig) {
  // Copy the css folder to the output
  eleventyConfig.addPassthroughCopy('css');

  // Add a filter for nice date formatting
  eleventyConfig.addFilter('postDate', (dateObj) => {
    // Ensure we're working with a Date object
    const date = new Date(dateObj);

    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'UTC',
    });
  });

  // Add the pathPrefix so the links work on GitHub Pages
  return {
    pathPrefix: '/dusty-rose-circuits/',
    dir: {
      input: '.',
      output: '_site',
    },
  };
}
