import markdownIt from "markdown-it"
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { DateTime } from "luxon"

export default async function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src")

  eleventyConfig.addPassthroughCopy("src/css/reset.css")
  eleventyConfig.addPassthroughCopy("src/css/styles.css")

  eleventyConfig.addPlugin(syntaxHighlight);
  const md = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });
  
  // Add custom renderer for inline code
  md.renderer.rules.code_inline = function (tokens, idx, options, env, slf) {
    const token = tokens[idx];
    const attrs = slf.renderAttrs(token);
    return `<code class="inline-code"${attrs}>${md.utils.escapeHtml(token.content)}</code>`;
  };
  
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addFilter("readableDate", date => {
    return DateTime.fromJSDate(date, { zone: 'UTC' }).toFormat("dd LLL yyyy")
  })

  eleventyConfig.addFilter("dateToString", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'UTC' }).toFormat("yyyy-LL-dd")
  })
}

