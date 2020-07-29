import { b as bootstrapLazy } from './index-8c43d675.js';
import { p as patchBrowser, g as globalScripts } from './app-globals-30a3d242.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["sk-typography",[[1,"sk-typography",{"as":[1],"size":[1],"color":[1],"lineHeight":[1,"line-height"]}]]],["sk-simple-teaser",[[1,"sk-simple-teaser",{"heading":[1],"badge":[1],"tags":[16],"href":[1],"target":[1],"rel":[1],"linkText":[1,"link-text"]}]]],["sk-slanted-teaser",[[1,"sk-slanted-teaser",{"heading":[1],"badge":[1],"tags":[16],"href":[1],"target":[1],"rel":[1],"linkText":[1,"link-text"]}]]],["sk-link",[[1,"sk-link",{"href":[1],"target":[1],"noopener":[1],"text":[1],"icon":[1],"iconPosition":[1,"icon-position"],"color":[1],"preventClick":[4,"prevent-click"]}]]],["sk-not-found",[[1,"sk-not-found",{"heading":[1],"subheading":[1],"linkHref":[1,"link-href"],"linkText":[1,"link-text"],"linkIcon":[1,"link-icon"],"linkPreventClick":[4,"link-prevent-click"]}]]],["sk-social-link",[[1,"sk-social-link",{"url":[1],"text":[1],"icon":[1],"compact":[4],"compactOnSmall":[4,"compact-on-small"]}]]],["sk-slanted",[[1,"sk-slanted"]]],["sk-tag",[[1,"sk-tag",{"text":[1]}]]],["sk-tag-list",[[1,"sk-tag-list",{"items":[16]}]]]], options);
});
