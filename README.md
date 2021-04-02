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

Before you begin, you’ll need a free Okta developer account. Install the [Okta CLI](https://cli.okta.com) and run `okta register` to sign up for a new account. If you already have an account, run `okta login`.

Then, run `okta apps create`. Select the default app name, or change it as you see fit. Choose **Single-Page App** and press **Enter**.

Change the Redirect URI to `http://localhost:4200/callback` and accept the default Logout Redirect URI of `http://localhost:4200`.

The Okta CLI will create an OIDC Single-Page App in your Okta Org. It will add the redirect URIs you specified and grant access to the Everyone group. It will also add a trusted origin for `http://localhost:4200`. You will see output like the following when it’s finished:

```
Okta application configuration:
Issuer:    https://dev-133337.okta.com/oauth2/default
Client ID: 0oab8eb55Kb9jdMIr5d6
```

NOTE: You can also use the Okta Admin Console to create your app. See [Create an Angular App](https://developer.okta.com/docs/guides/sign-into-spa/angular/create-okta-application/) for more information.

Copy your `issuer` and `clientId` in to `src/app/app.module.ts`.

**NOTE:** The value of `{yourOktaDomain}` should be something like `dev-123456.okta.com`. Make sure you don't include `-admin` in the value!

```ts
const oktaConfig = {
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  clientId: '{clientId}',
  redirectUri: window.location.origin + '/callback'
};
```

## Links

This example uses the following open source libraries from Okta:

* [Okta Angular SDK](https://github.com/okta/okta-oidc-js/tree/master/packages/okta-angular)

## Help

Please post any questions as comments on the [blog post](https://developer.okta.com/blog/2019/12/09/angular-webpack), or visit our [Okta Developer Forums](https://devforum.okta.com/).

## License

Apache 2.0, see [LICENSE](LICENSE).
