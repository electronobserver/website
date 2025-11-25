import fs from "fs";
import path from "path";

export const asyncShortcodes = {
    /* Handy base64 image conversion shortcode for the 11ty OpenGraph plugin
     * source: https://github.com/KiwiKilian/eleventy-plugin-og-image/issues/36#issuecomment-2151806432 */
    inlineImage: async (arg, inputDir) => {
        let extension = path.extname(arg).slice(1);
        let imgPath = path.join(inputDir, arg);
        let base64Image = fs.readFileSync(imgPath, "base64");
        if (extension === "svg") {
            extension = "svg+xml";
        }
        return `data:image/${extension};base64,${base64Image}`;
    }
};

export const shortcodes = {
    year: () => String(new Date().getFullYear()),
    timestamp: () => String(Date.now())
};