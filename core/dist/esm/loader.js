import { p as promiseResolve, b as bootstrapLazy } from './index-4992cb78.js';

/*
 Stencil Client Patch Esm v2.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["sk-slanted-teaser",[[1,"sk-slanted-teaser",{"heading":[1],"badge":[1],"tags":[16],"href":[1],"target":[1],"rel":[1],"linkText":[1,"link-text"]}]]],["sk-not-found",[[1,"sk-not-found",{"heading":[1],"subheading":[1],"linkHref":[1,"link-href"],"linkText":[1,"link-text"],"linkIcon":[1,"link-icon"],"linkPreventClick":[4,"link-prevent-click"]}]]],["sk-simple-teaser",[[1,"sk-simple-teaser",{"heading":[1],"badge":[1],"tags":[16],"href":[1],"target":[1],"rel":[1],"linkText":[1,"link-text"]}]]],["sk-social-link",[[1,"sk-social-link",{"href":[1],"text":[1],"icon":[1],"compact":[4],"compactOnSmall":[4,"compact-on-small"],"titleAttr":[1,"title-attr"]}]]],["sk-slanted",[[1,"sk-slanted"]]],["sk-typography",[[1,"sk-typography",{"as":[1],"size":[1],"color":[1],"lineHeight":[1,"line-height"]}]]],["sk-badge",[[1,"sk-badge"]]],["sk-link",[[1,"sk-link",{"href":[1],"target":[1],"rel":[1],"icon":[1],"iconPosition":[1,"icon-position"],"color":[1],"preventClick":[4,"prevent-click"]}]]],["sk-tag",[[1,"sk-tag",{"description":[1]}]]]], options);
  });
};

export { defineCustomElements };
