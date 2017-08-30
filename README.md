**This is the react-native implementation of https://github.com/SolidStateGroup/simple-firebase-auth**

# React Native Firebase Auth

[![Gitter](https://img.shields.io/gitter/room/gitterHQ/gitter.svg)](https://gitter.im/SolidStateGroup/react-native-firebase-auth?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Simplified Firebase authentication for React Native projects with support for Facebook & Google login.

Using this module alongside Firebase means there is no need to write and host any backend code to handle users logging in to your app.

Use our project starter repository (https://github.com/SolidStateGroup/firebase-project-starter) to help you get started setting up your own Firebase project.


## Installation

```
$ npm install --save react-native-firebase-auth
```

**Note:** If you use React Native < `v0.39` or you are already using `react-native-google-signin` then stick with `v0.0.11` (`npm install react-native-firebase-auth@0.0.11 --save`)

## Project Setup

```
$ npm install --save firebase react-native-facebook-login react-native-google-sign-in
```

You will need fully setup both of the below social platform dependencies (react-native-google-sign-in and react-native-facebook-login).

https://github.com/joonhocho/react-native-google-sign-in#getting-started
https://github.com/magus/react-native-facebook-login#setup

You will need to initialise Firebase within your app in the usual way. See https://firebase.google.com/docs/web/setup

## Usage

```
import FireAuth from 'react-native-firebase-auth';

constructor(props) {
  super(props);
  FireAuth.init({iosClientId: <IOS_CLIENT_ID>}); // This is the CLIENT_ID found in your Google services plist.
}

componentDidMount() {
  FireAuth.setup(this.onLogin, this.onUserChange, this.onLogout, this.emailVerified, this.onError);
}

register = () => {
  const { email, password, firstName, lastName } = this.state;
  FireAuth.register(email, password, { firstName, lastName });
}

login = () => {
  FireAuth.login(this.state.email, this.state.password);
}

loginAnonymously = () => {
  FireAuth.loginAnonymously();
}

facebookLogin() {
  FireAuth.facebookLogin();
}

googleLogin() {
  FireAuth.googleLogin();
}

logout() {
  FireAuth.logout();
}

update () => {
  FireAuth.update({
    firstName: this.state.firstName,
    lastName: this.state.lastName
  }).then(() => {
    ...
  }).catch(err => {
    ...
  });
}

resetPassword () => {
  FireAuth.resetPassword(this.state.email)
    .then(() => {
      ...
    })
    .catch(err => {
      ...
    });
}

updatePassword () => {
  FireAuth.updatePassword(this.state.password)
    .then(() => {
      ...
    })
    .catch(err => {
      ...
    });
}

```

## Credits

https://github.com/magus/react-native-facebook-login

https://github.com/joonhocho/react-native-google-sign-in

# Getting Help
If you encounter a bug or feature request we would like to hear about it. Before you submit an issue please search existing issues in order to prevent duplicates.

# Contributing
For more information about contributing PRs, please see our <a href="CONTRIBUTING.md">Contribution Guidelines</a>.


# Get in touch
If you have any questions about our projects you can email <a href="mailto:projects@solidstategroup.com">projects@solidstategroup.com</a>.
