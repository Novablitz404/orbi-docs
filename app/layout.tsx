import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { Metadata } from 'next'
import 'nextra-theme-docs/style.css'

export const metadata: Metadata = {
  title: {
    default: 'Orbi Docs',
    template: '%s — Orbi Docs',
  },
  description:
    'Integrate Orbi — the passkey-secured Stellar wallet — into your dApp with @orbi-wallet/sdk.',
}

const navbar = (
  <Navbar
    logo={<span style={{ fontWeight: 700 }}>Orbi Docs</span>}
    projectLink="https://npmjs.com/package/@orbi-wallet/sdk"
  />
)

const footer = (
  <Footer>
    <span>© {new Date().getFullYear()} Orbi Smart Wallet.</span>
  </Footer>
)

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Novablitz404/orbi-docs/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
