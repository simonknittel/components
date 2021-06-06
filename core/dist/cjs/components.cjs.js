'use strict';

const index = require('./index-ab12d4a5.js');

/*
 Stencil Client Patch Browser v2.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('components.cjs.js', document.baseURI).href));
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["sk-slanted-teaser.cjs",[[1,"sk-slanted-teaser",{"heading":[1],"badge":[1],"tags":[16],"href":[1],"target":[1],"rel":[1],"linkText":[1,"link-text"]}]]],["sk-not-found.cjs",[[1,"sk-not-found",{"heading":[1],"subheading":[1],"linkHref":[1,"link-href"],"linkText":[1,"link-text"],"linkIcon":[1,"link-icon"],"linkPreventClick":[4,"link-prevent-click"]}]]],["sk-simple-teaser.cjs",[[1,"sk-simple-teaser",{"heading":[1],"badge":[1],"tags":[16],"href":[1],"target":[1],"rel":[1],"linkText":[1,"link-text"]}]]],["sk-social-link.cjs",[[1,"sk-social-link",{"href":[1],"text":[1],"icon":[1],"compact":[4],"compactOnSmall":[4,"compact-on-small"],"titleAttr":[1,"title-attr"]}]]],["sk-slanted.cjs",[[1,"sk-slanted"]]],["sk-typography.cjs",[[1,"sk-typography",{"as":[1],"size":[1],"color":[1],"lineHeight":[1,"line-height"]}]]],["sk-badge.cjs",[[1,"sk-badge"]]],["sk-link.cjs",[[1,"sk-link",{"href":[1],"target":[1],"rel":[1],"icon":[1],"iconPosition":[1,"icon-position"],"color":[1],"preventClick":[4,"prevent-click"]}]]],["sk-tag.cjs",[[1,"sk-tag",{"description":[1]}]]]], options);
});
