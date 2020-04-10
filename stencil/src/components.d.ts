/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface SkSimpleTeaser {
    'badge': string;
    'heading': string;
    'href': string;
    'linkText': string;
    'rel': string;
    'tags': Array<string>;
    'target': string;
  }
  interface SkSlanted {}
  interface SkSlantedTeaser {
    'badge': string;
    'heading': string;
    'href': string;
    'linkText': string;
    'rel': string;
    'tags': Array<string>;
    'target': string;
  }
  interface SkSocialLink {
    'compact': boolean;
    'compactOnSmall': boolean;
    'icon': string;
    'text': string;
    'url': string;
  }
  interface SkTag {
    'text': string;
  }
  interface SkTagList {
    'items': Array<string>;
  }
  interface SkTypography {
    'as': string;
    'size': string;
  }
}

declare global {


  interface HTMLSkSimpleTeaserElement extends Components.SkSimpleTeaser, HTMLStencilElement {}
  var HTMLSkSimpleTeaserElement: {
    prototype: HTMLSkSimpleTeaserElement;
    new (): HTMLSkSimpleTeaserElement;
  };

  interface HTMLSkSlantedElement extends Components.SkSlanted, HTMLStencilElement {}
  var HTMLSkSlantedElement: {
    prototype: HTMLSkSlantedElement;
    new (): HTMLSkSlantedElement;
  };

  interface HTMLSkSlantedTeaserElement extends Components.SkSlantedTeaser, HTMLStencilElement {}
  var HTMLSkSlantedTeaserElement: {
    prototype: HTMLSkSlantedTeaserElement;
    new (): HTMLSkSlantedTeaserElement;
  };

  interface HTMLSkSocialLinkElement extends Components.SkSocialLink, HTMLStencilElement {}
  var HTMLSkSocialLinkElement: {
    prototype: HTMLSkSocialLinkElement;
    new (): HTMLSkSocialLinkElement;
  };

  interface HTMLSkTagElement extends Components.SkTag, HTMLStencilElement {}
  var HTMLSkTagElement: {
    prototype: HTMLSkTagElement;
    new (): HTMLSkTagElement;
  };

  interface HTMLSkTagListElement extends Components.SkTagList, HTMLStencilElement {}
  var HTMLSkTagListElement: {
    prototype: HTMLSkTagListElement;
    new (): HTMLSkTagListElement;
  };

  interface HTMLSkTypographyElement extends Components.SkTypography, HTMLStencilElement {}
  var HTMLSkTypographyElement: {
    prototype: HTMLSkTypographyElement;
    new (): HTMLSkTypographyElement;
  };
  interface HTMLElementTagNameMap {
    'sk-simple-teaser': HTMLSkSimpleTeaserElement;
    'sk-slanted': HTMLSkSlantedElement;
    'sk-slanted-teaser': HTMLSkSlantedTeaserElement;
    'sk-social-link': HTMLSkSocialLinkElement;
    'sk-tag': HTMLSkTagElement;
    'sk-tag-list': HTMLSkTagListElement;
    'sk-typography': HTMLSkTypographyElement;
  }
}

declare namespace LocalJSX {
  interface SkSimpleTeaser {
    'badge'?: string;
    'heading'?: string;
    'href'?: string;
    'linkText'?: string;
    'rel'?: string;
    'tags'?: Array<string>;
    'target'?: string;
  }
  interface SkSlanted {}
  interface SkSlantedTeaser {
    'badge'?: string;
    'heading'?: string;
    'href'?: string;
    'linkText'?: string;
    'rel'?: string;
    'tags'?: Array<string>;
    'target'?: string;
  }
  interface SkSocialLink {
    'compact'?: boolean;
    'compactOnSmall'?: boolean;
    'icon'?: string;
    'text'?: string;
    'url'?: string;
  }
  interface SkTag {
    'text'?: string;
  }
  interface SkTagList {
    'items'?: Array<string>;
  }
  interface SkTypography {
    'as'?: string;
    'size'?: string;
  }

  interface IntrinsicElements {
    'sk-simple-teaser': SkSimpleTeaser;
    'sk-slanted': SkSlanted;
    'sk-slanted-teaser': SkSlantedTeaser;
    'sk-social-link': SkSocialLink;
    'sk-tag': SkTag;
    'sk-tag-list': SkTagList;
    'sk-typography': SkTypography;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'sk-simple-teaser': LocalJSX.SkSimpleTeaser & JSXBase.HTMLAttributes<HTMLSkSimpleTeaserElement>;
      'sk-slanted': LocalJSX.SkSlanted & JSXBase.HTMLAttributes<HTMLSkSlantedElement>;
      'sk-slanted-teaser': LocalJSX.SkSlantedTeaser & JSXBase.HTMLAttributes<HTMLSkSlantedTeaserElement>;
      'sk-social-link': LocalJSX.SkSocialLink & JSXBase.HTMLAttributes<HTMLSkSocialLinkElement>;
      'sk-tag': LocalJSX.SkTag & JSXBase.HTMLAttributes<HTMLSkTagElement>;
      'sk-tag-list': LocalJSX.SkTagList & JSXBase.HTMLAttributes<HTMLSkTagListElement>;
      'sk-typography': LocalJSX.SkTypography & JSXBase.HTMLAttributes<HTMLSkTypographyElement>;
    }
  }
}


