export default function (eleventyConfig) {
  // Add a filter for nice date formatting
  eleventyConfig.addFilter('postDate', (dateObj) => {
    // Ensure we're working with a Date object
    const date = new Date(dateObj);

    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC', // Fixes the "day before" timezone issue
    });
  });

  // Add the pathPrefix so the links work on GitHub Pages
  return {
    pathPrefix: '/blog/',
    dir: {
      input: '.',
      output: '_site',
    },
  };
}
