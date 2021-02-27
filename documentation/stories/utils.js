import unified from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import html from 'rehype-stringify'
import sanitize from 'rehype-sanitize'
import gh from 'hast-util-sanitize/lib/github'

import githubMarkdownCSS from '!!raw-loader!./github-markdown.css'

/**
 * Converts a Markdown string to a HTML string
 * @param {string} rawMarkdown
 */
export function markdownToHTML(rawMarkdown) {
  const sanitizeOptions = gh

  const htmlString = unified()
    .use(markdown)
    .use(remark2rehype)
    .use(html)
    .use(sanitize, sanitizeOptions)
    .processSync(rawMarkdown).contents

  return htmlString
}

/**
 * Wraps a HTML string with GitHub's CSS styling for Markdown files
 * @param {string} html
 */
export function styleMarkdown(html) {
  return `<style>${githubMarkdownCSS}</style><div class="markdown-body">${html}</div>`
}

/**
 * Creates an JavaScript HTMLElement
 * @param {string} html
 */
export function tagToElement(tag, args = null) {
  const component = document.createElement(tag)
  if (args) Object.assign(component, args)
  return component
}

/**
 * Converts a HTML string to a JavaScript HTMLElement
 * @param {string} html
 */
export function htmlToElement(html, args = null) {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = html.trim()
  const component = wrapper.firstChild
  if (args) Object.assign(component, args)
  return component
}
