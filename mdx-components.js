import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'

// Merge Nextra's docs-theme MDX components (callouts, code blocks, headings
// with anchors, etc.) with any per-page overrides.
const themeComponents = getThemeComponents()

export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...components,
  }
}
