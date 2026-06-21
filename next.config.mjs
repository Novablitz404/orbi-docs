import nextra from 'nextra'

const withNextra = nextra({
  // Nextra 4 reads MDX from the `content/` directory and wires up the
  // sidebar/search itself — theme options live in app/layout.tsx, not here.
  defaultShowCopyCode: true,
})

export default withNextra({
  reactStrictMode: true,
})
