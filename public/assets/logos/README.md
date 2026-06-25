# Provider logos

Drop official brand SVGs here, named by provider **slug**, to replace the initials
fallback for UK-centric brands that aren't on a public vector CDN:

- `dojo.svg`
- `worldpay.svg`
- `barclaycard.svg`
- `tyl-by-natwest.svg`
- `lightspeed.svg`
- `epos-now.svg`
- `touchbistro.svg`

These paths are already wired in `data/providers.ts` → `PROVIDER_LOGOS`. Until a file
exists, the provider shows a tidy navy initials tile instead of a broken image.

**Tips**
- Prefer a square-ish icon or compact horizontal lockup — they're shown small (32–48px tall).
- Transparent-background SVGs work best; `<ProviderLogo>` sits them on a white tile with
  `mix-blend-multiply`, so dark marks read cleanly without a harsh white box.
- To switch a remote logo (e.g. SumUp) to a self-hosted one, just change its URL in
  `PROVIDER_LOGOS` to `/assets/logos/<slug>.svg`.
