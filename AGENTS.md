<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
- Fonts are self-hosted via @fontsource imports in src/styles.css; never load Google Fonts or other third-party CDNs (GDPR: no data to third parties without consent).
- Any analytics/marketing script must load only via hasTrackingConsent() in src/components/CookieConsent.tsx and set OPTIONAL_TRACKING_ENABLED; the cookie banner shows only then.
- Legal company data (name, NIF, privacy email) lives in LEGAL in src/components/LegalPage.tsx so all legal pages stay consistent.
