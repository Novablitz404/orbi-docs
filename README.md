# Orbi Docs

Developer documentation for [`@orbi-wallet/sdk`](https://npmjs.com/package/@orbi-wallet/sdk) —
integrate Orbi, the passkey-secured Stellar wallet, into your dApp.

Built with [Nextra 4](https://nextra.site) (Next.js App Router). Content lives in
[`content/`](content/) as MDX.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Structure

| Path                       | What                                          |
| -------------------------- | --------------------------------------------- |
| `content/index.mdx`        | Introduction / landing                        |
| `content/getting-started.mdx` | Install + quickstart                        |
| `content/concepts.mdx`     | Passkeys, accounts, sign-only model           |
| `content/api-reference/`   | `OrbiClient` and every method                 |
| `content/guides/`          | End-to-end walkthroughs                       |
| `content/_meta.js`         | Sidebar order/labels (one per directory)      |
| `app/`                     | Nextra layout + MDX catch-all route           |

> **Note:** `zod` is pinned to `4.1.12` via `overrides` — newer 4.x releases
> reject Nextra's theme `children` prop. Remove the pin only after confirming a
> newer `nextra-theme-docs` no longer needs it.
