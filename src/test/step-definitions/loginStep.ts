import { Given } from "@cucumber/cucumber";

Given('user can visit the page {string}', async function (email: string) {
    console.log('user can navigate', email);
    await console.log('heloooo', email)
})