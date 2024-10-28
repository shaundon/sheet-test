# sheet test

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npm run android
    # or
    npm run ios
   ```

## Observe the behaviour

On iOS, the sheet remains at 100% height when you try to pull it down, and when the text field is dismised.

On Android, pulling the sheet makes it drop to a smaller size, and when the text field is dismissed it remains at the shrunken size.