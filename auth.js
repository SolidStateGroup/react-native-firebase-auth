import { FBLoginManager } from 'react-native-facebook-login';
import { GoogleSignin } from 'react-native-google-signin';

const Facebook = {
  login: (permissions) => {
    return new Promise((resolve, reject) => {
      FBLoginManager.loginWithPermissions(permissions || ['email'], (error, data) => {
        if (!error) {
          resolve(data.credentials.token);
        } else {
          reject(error);
        }
      });
    });
  },
  logout: () => {
    return new Promise((resolve, reject) => {
      FBLoginManager.logout((error, data) => {
        if (!error) {
          resolve(true);
        } else {
          reject(error);
        }
      });
    });
  }
}

const Google = {
  configure: (options) => {
    GoogleSignin.configure(options);
  },
  login: () => {
    return new Promise((resolve, reject) => {
      GoogleSignin.signIn()
        .then((user) => {
          resolve(user.accessToken);
        })
        .catch((err) => {
          reject(err);
        })
        .done();
    });
  },
  logout: () => {
    return new Promise((resolve, reject) => {
      GoogleSignin.signOut()
        .then(() => {
          resolve(true);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

const Auth = {Facebook, Google};

export default Auth;
