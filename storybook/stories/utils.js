import unified from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import html from 'rehype-stringify'
import sanitize from 'rehype-sanitize'
import gh from 'hast-util-sanitize/lib/github'

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

export function htmlStringToElement(htmlString) {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = htmlString.trim()
  const component = wrapper.firstChild
  return component
}
