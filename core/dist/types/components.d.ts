/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface SkBadge {
    }
    interface SkLink {
        "color": string;
        "href": string;
        "icon": string;
        "iconPosition": string;
        "preventClick": boolean;
        "rel": string;
        "target": string;
    }
    interface SkNotFound {
        "heading": string;
        "linkHref": string;
        "linkIcon": string;
        "linkPreventClick": boolean;
        "linkText": string;
        "subheading": string;
    }
    interface SkSimpleTeaser {
        "badge": string;
        "heading": string;
        "href": string;
        "linkText": string;
        "rel": string;
        "tags": Array<string>;
        "target": string;
    }
    interface SkSlanted {
    }
    interface SkSlantedTeaser {
        "badge": string;
        "heading": string;
        "href": string;
        "linkText": string;
        "rel": string;
        "tags": Array<string>;
        "target": string;
    }
    interface SkSocialLink {
        "compact": boolean;
        "compactOnSmall": boolean;
        "href": string;
        "icon": string;
        "text": string;
        "titleAttr": string;
    }
    interface SkTag {
        "description": string;
    }
    interface SkTypography {
        "as": string;
        "color": string;
        "lineHeight": string;
        "size": string;
    }
}
declare global {
    interface HTMLSkBadgeElement extends Components.SkBadge, HTMLStencilElement {
    }
    var HTMLSkBadgeElement: {
        prototype: HTMLSkBadgeElement;
        new (): HTMLSkBadgeElement;
    };
    interface HTMLSkLinkElement extends Components.SkLink, HTMLStencilElement {
    }
    var HTMLSkLinkElement: {
        prototype: HTMLSkLinkElement;
        new (): HTMLSkLinkElement;
    };
    interface HTMLSkNotFoundElement extends Components.SkNotFound, HTMLStencilElement {
    }
    var HTMLSkNotFoundElement: {
        prototype: HTMLSkNotFoundElement;
        new (): HTMLSkNotFoundElement;
    };
    interface HTMLSkSimpleTeaserElement extends Components.SkSimpleTeaser, HTMLStencilElement {
    }
    var HTMLSkSimpleTeaserElement: {
        prototype: HTMLSkSimpleTeaserElement;
        new (): HTMLSkSimpleTeaserElement;
    };
    interface HTMLSkSlantedElement extends Components.SkSlanted, HTMLStencilElement {
    }
    var HTMLSkSlantedElement: {
        prototype: HTMLSkSlantedElement;
        new (): HTMLSkSlantedElement;
    };
    interface HTMLSkSlantedTeaserElement extends Components.SkSlantedTeaser, HTMLStencilElement {
    }
    var HTMLSkSlantedTeaserElement: {
        prototype: HTMLSkSlantedTeaserElement;
        new (): HTMLSkSlantedTeaserElement;
    };
    interface HTMLSkSocialLinkElement extends Components.SkSocialLink, HTMLStencilElement {
    }
    var HTMLSkSocialLinkElement: {
        prototype: HTMLSkSocialLinkElement;
        new (): HTMLSkSocialLinkElement;
    };
    interface HTMLSkTagElement extends Components.SkTag, HTMLStencilElement {
    }
    var HTMLSkTagElement: {
        prototype: HTMLSkTagElement;
        new (): HTMLSkTagElement;
    };
    interface HTMLSkTypographyElement extends Components.SkTypography, HTMLStencilElement {
    }
    var HTMLSkTypographyElement: {
        prototype: HTMLSkTypographyElement;
        new (): HTMLSkTypographyElement;
    };
    interface HTMLElementTagNameMap {
        "sk-badge": HTMLSkBadgeElement;
        "sk-link": HTMLSkLinkElement;
        "sk-not-found": HTMLSkNotFoundElement;
        "sk-simple-teaser": HTMLSkSimpleTeaserElement;
        "sk-slanted": HTMLSkSlantedElement;
        "sk-slanted-teaser": HTMLSkSlantedTeaserElement;
        "sk-social-link": HTMLSkSocialLinkElement;
        "sk-tag": HTMLSkTagElement;
        "sk-typography": HTMLSkTypographyElement;
    }
}
declare namespace LocalJSX {
    interface SkBadge {
    }
    interface SkLink {
        "color"?: string;
        "href"?: string;
        "icon"?: string;
        "iconPosition"?: string;
        "onClicked"?: (event: CustomEvent<MouseEvent>) => void;
        "preventClick"?: boolean;
        "rel"?: string;
        "target"?: string;
    }
    interface SkNotFound {
        "heading"?: string;
        "linkHref"?: string;
        "linkIcon"?: string;
        "linkPreventClick"?: boolean;
        "linkText"?: string;
        "subheading"?: string;
    }
    interface SkSimpleTeaser {
        "badge"?: string;
        "heading"?: string;
        "href"?: string;
        "linkText"?: string;
        "rel"?: string;
        "tags"?: Array<string>;
        "target"?: string;
    }
    interface SkSlanted {
    }
    interface SkSlantedTeaser {
        "badge"?: string;
        "heading"?: string;
        "href"?: string;
        "linkText"?: string;
        "rel"?: string;
        "tags"?: Array<string>;
        "target"?: string;
    }
    interface SkSocialLink {
        "compact"?: boolean;
        "compactOnSmall"?: boolean;
        "href"?: string;
        "icon"?: string;
        "text"?: string;
        "titleAttr"?: string;
    }
    interface SkTag {
        "description"?: string;
    }
    interface SkTypography {
        "as"?: string;
        "color"?: string;
        "lineHeight"?: string;
        "size"?: string;
    }
    interface IntrinsicElements {
        "sk-badge": SkBadge;
        "sk-link": SkLink;
        "sk-not-found": SkNotFound;
        "sk-simple-teaser": SkSimpleTeaser;
        "sk-slanted": SkSlanted;
        "sk-slanted-teaser": SkSlantedTeaser;
        "sk-social-link": SkSocialLink;
        "sk-tag": SkTag;
        "sk-typography": SkTypography;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sk-badge": LocalJSX.SkBadge & JSXBase.HTMLAttributes<HTMLSkBadgeElement>;
            "sk-link": LocalJSX.SkLink & JSXBase.HTMLAttributes<HTMLSkLinkElement>;
            "sk-not-found": LocalJSX.SkNotFound & JSXBase.HTMLAttributes<HTMLSkNotFoundElement>;
            "sk-simple-teaser": LocalJSX.SkSimpleTeaser & JSXBase.HTMLAttributes<HTMLSkSimpleTeaserElement>;
            "sk-slanted": LocalJSX.SkSlanted & JSXBase.HTMLAttributes<HTMLSkSlantedElement>;
            "sk-slanted-teaser": LocalJSX.SkSlantedTeaser & JSXBase.HTMLAttributes<HTMLSkSlantedTeaserElement>;
            "sk-social-link": LocalJSX.SkSocialLink & JSXBase.HTMLAttributes<HTMLSkSocialLinkElement>;
            "sk-tag": LocalJSX.SkTag & JSXBase.HTMLAttributes<HTMLSkTagElement>;
            "sk-typography": LocalJSX.SkTypography & JSXBase.HTMLAttributes<HTMLSkTypographyElement>;
        }
    }
}
