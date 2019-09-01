module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/favicon.ico");
    eleventyConfig.addPassthroughCopy("src/humans.txt");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/media");


    eleventyConfig.addFilter("to12hourTime", function(timeString) { 
        let date = new Date(timeString);
        let time = date.toLocaleTimeString('en-US', {
            timezone: 'America/New_York',
            hour12: true,
            hour: 'numeric',
            minute: 'numeric',
        })
        return time;
    });

    let md = require('markdown-it')();
    eleventyConfig.addFilter("markdown", function(string) {
        return md.render(string);
    });



    return {
        dir: {
            input: "src",
        },
        passthroughFileCopy: true,
    };
};
