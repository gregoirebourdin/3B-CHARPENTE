import { Link } from '@tiptap/extension-link'

/**
 * Tiptap's link, plus `ref` (« services:3 ») when it points to a page of the
 * site: the site then always uses the page's current address.
 */
export const SiteLink = Link.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      ref: {
        default: null,
        parseHTML: (element: HTMLElement) => element.getAttribute('data-ref'),
        renderHTML: (attributes: { ref?: string | null }) => (attributes.ref ? { 'data-ref': attributes.ref } : {}),
      },
    }
  },
})
