# vue-devtools-issue-test

Repo for testing an issue in vue-devtools where adding many items to Pinia causes severe delay with the plugin enabled.

Click the buttons in the homepage to test adding 1,000 and 10,000 items to a Map in pinia.

With Pinia tracking disabled in vue devtools, this works fine.

With Pinia enabled, it freezes the browser.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
