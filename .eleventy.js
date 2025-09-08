const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);

    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/posts");
    eleventyConfig.addPassthroughCopy("src/scripts");
    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "public"
        },
    };
};