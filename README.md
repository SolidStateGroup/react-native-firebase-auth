# React Native Firebase Auth

Simplified Firebase authentication for React Native projects with support for Facebook & Google login.

Using this module alongside Firebase means there is no need to write and host any backend code to handle users logging in to your app.

Use our project starter repository (https://github.com/SolidStateGroup/firebase-project-starter) to help you get started setting up your own Firebase project.

## Install
```
$ npm install --save react-native-firebase-auth
```

## Project Setup

```
$ npm install --save firebase react-native-facebook-login react-native-google-signin
```

You will need setup both of the social platform dependencies in the usual way.

https://github.com/devfd/react-native-google-signin#project-setup-and-initialization
https://github.com/magus/react-native-facebook-login#setup

You will need to initialise Firebase within your app in the usual way. See https://firebase.google.com/docs/web/setup

## Usage

```
import FireAuth from 'react-native-firebase-auth';

constructor(props) {
  super(props);
  FireAuth.init({iosClientId: <IOS_CLIENT_ID>}); // Google Sign in options. You will need iosClientId for iOS apps.
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

https://github.com/devfd/react-native-google-signin
