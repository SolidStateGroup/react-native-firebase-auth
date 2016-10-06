# React Native Firebase Authentication

Simplified Firebase authentication with support for social platform login.

## Install
```
$ npm install react-native-firebase-auth --save
```

## Project setup

```
$ npm install firebase react-native-facebook-login react-native-google-signin --save
```

You will need setup both of the social platform dependencies in the usual way.

https://github.com/devfd/react-native-google-signin#project-setup-and-initialization
https://github.com/magus/react-native-facebook-login#setup

## Usage

```
import FireAuth from 'react-native-firebase-auth';

constructor(props) {
  super(props);
  FireAuth.init(config);
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
