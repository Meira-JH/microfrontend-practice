# Step by step

To run this microfrontend practice in your localhost, do the following:

1. Enter consent-app and host-app each on different terminals
2. On the consent-app terminal, run

```
npm run build
npm run preview
```

3. On the host-app terminal run

```
npm run dev
```

4. In your browser enter localhost:3000

### Obs:

If the app is not loading, it is probably a port problem. Verify the vite.config.ts files and make sure that the port running on the consent-app built server is referenced correcly on the remote.consent_app reference

```
  remotes: {
    consent_app: "http://localhost:[REFERENCE OF THE CONSENT APP PORT]/assets/remoteConsentContainer.js",
  },
```
