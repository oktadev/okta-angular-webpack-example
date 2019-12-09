# Angular Webpack Example
 
This example shows how to extend webpack in an Angular build.

Please read [How to Customize Your Angular Build With Webpack](https://developer.okta.com/blog/2019/12/09/angular-webpack) to see how this app was created.

**Prerequisites:** [Node.js](https://nodejs.org/) v12+. 

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

* [Getting Started](#getting-started)
* [Links](#links)
* [Help](#help)
* [License](#license)

## Getting Started

To install this example application, run the following commands:

```bash
git clone https://github.com/oktadeveloper/okta-angular-webpack-example.git
cd okta-angular-webpack-example
```

This will get a copy of the project installed locally. To install all of its dependencies and start each app, follow the instructions below.

Run the app using:
 
```bash
npm install
npm start
```

### Create a New OIDC App in Okta

To create a new OIDC app on Okta:

1. Log in to your developer account (or [create a free one](https://developer.okta.com/signup).
2. Navigate to **Applications**, and click on **Add Application**.
3. Select **Single-Page App** and click **Next**. 
4. Give the application a name, change all instances of `localhost:8080` to `localhost:4200` and click **Done**.

Set your `issuer` and copy the `clientId` in to `src/app/app.module.ts`. 

**NOTE:** The value of `{yourOktaDomain}` should be something like `dev-123456.okta.com`. Make sure you don't include `-admin` in the value!

```ts
OktaAuthModule.initAuth({
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '{yourClientId}',
  pkce: true
})
```

## Links

This example uses the following open source libraries from Okta:

* [Okta Angular SDK](https://github.com/okta/okta-oidc-js/tree/master/packages/okta-angular)

## Help

Please post any questions as comments on the [blog post](https://developer.okta.com/blog/2019/12/09/angular-webpack), or visit our [Okta Developer Forums](https://devforum.okta.com/). 

## License

Apache 2.0, see [LICENSE](LICENSE).
