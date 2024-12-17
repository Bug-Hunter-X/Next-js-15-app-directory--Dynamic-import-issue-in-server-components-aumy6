# Next.js 15 App Directory Dynamic Import Issue

This repository demonstrates an unexpected behavior encountered when using dynamic imports within server components in Next.js 15's app directory.  The issue involves the inability to correctly resolve and utilize dynamically imported modules, leading to runtime errors.

## Bug Description:

When a dynamic import is used within a server component, the module might not resolve correctly. This can result in unexpected behavior and errors during runtime. The exact manifestation can vary, potentially including build failures or errors in the server-side rendering process.

## Reproduction Steps:

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the unexpected behavior or error.

## Solution:

The solution might involve restructuring the application's architecture to avoid dynamic imports in server components or implementing a custom solution to resolve module loading issues within the server-side context. Further investigation and potential workarounds are needed. 