import { markdownToHTML } from './utils'

import githubMarkdownCSS from '!!raw-loader!./github-markdown.css'

import README from '../../README.md'
import CHANGELOG from '../../CHANGELOG.md'
import LICENSE from 'raw-loader!../../LICENSE'

export default {
  title: 'SK Components/Welcome',
}

export function Overview() {
  return `<style>${githubMarkdownCSS}</style><div class="markdown-body">${markdownToHTML(README)}</div>`
}

export function Changelog() {
  return `<style>${githubMarkdownCSS}</style><div class="markdown-body">${markdownToHTML(CHANGELOG)}</div>`
}

export function License() {
  return `<pre>${LICENSE}</pre>`
}
