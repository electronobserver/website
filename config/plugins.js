import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import EleventyPluginOgImage from 'eleventy-plugin-og-image';
import fs from "fs";

export default [
    {
        name: feedPlugin,
        options: {
            type: "rss",
            outputPath: "/feed.xml",
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
                },
            },
        }
    },
    {
      name: eleventyImageTransformPlugin,
    },
    {
        name: EleventyPluginOgImage,
        options: {
            satoriOptions: {
                fonts: [
                    {
                        name: "FontBold",
                        data: fs.readFileSync("./src/assets/fonts/IBMPlexSans-Bold.woff"),
                        weight: 700,
                        style: "bold",
                    },
                ],
            },
            shortcodeOutput: async (ogImage) => {
                const siteDomain = "https://electron.observer";
                const url = await ogImage.outputUrl();
                return `<meta property="og:image" content="${siteDomain}${url}" />`;
            },
        }
    }
];