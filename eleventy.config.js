import { DateTime } from "luxon"

export default async function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src")

  eleventyConfig.addPassthroughCopy("src/css/styles.css")

  eleventyConfig.addFilter("readableDate", date => {
    return DateTime.fromJSDate(date, { zone: 'UTC' }).toFormat("dd LLL yyyy")
  })
}

