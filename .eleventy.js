const { feedPlugin } = require("@11ty/eleventy-plugin-rss");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItAttrs = require("markdown-it-attrs");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPlugin(feedPlugin, {
		type: "rss", 
		outputPath: "/feed.xml",
    eleventyExcludeFromCollections: true,
		collection: {
			name: "posts", 
			limit: 10,  
		},
		metadata: {
			language: "en",
			title: "Electron Observer Official Blog",
			subtitle: "Observe the observations of the observer.",
			base: "https://electron.observer/",
			author: {
				name: "Hugo Takizala",
				email: "hi@electron.observer", 
			}
		}
	});

  const svgIcon = `
    <svg class="anchor__icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622
            l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            stroke-linecap="round" stroke-linejoin="round" />
    </svg>`.trim();

  const markdownItOptions = markdownIt({ html: true })
    .use(markdownItAnchor, {
      level: 2,
      permalink: markdownItAnchor.permalink.linkInsideHeader({
        symbol: svgIcon, 
        placement: "after", 
        ariaHidden: false,  
        class: "anchor",
      }),
    })
    .use(markdownItAttrs);

  eleventyConfig.setLibrary("md", markdownItOptions);

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/gallery");
  eleventyConfig.addPassthroughCopy("src/sitemap.xsl");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "public",
    },
  };
};