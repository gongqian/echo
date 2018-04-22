nvm ls
nvm use 9.4
rm -rf node_modules
rm package-lock.json
 npm uninstall -g ionic
 npm cache clean --force
 npm install -g ionic
 npm install 
 npm install -g cordova

 cordova run ios
ionic cordova platform remove android 
 ionic cordova platform add android

  ionic cordova platform rm android 
  ionic cordova platform add android@6.4.0 
  ionic cordova build android

  ionic cordova platform add ios

  ionic cordova run ios

/*firebase*/
node -v
v8.9.3 /9.4
npm -v
5.5.1 /5.6
ionic -v
3.19.0  /3.20
cordova -v
7.1.0  /8.0.0
npm install -g @angular/cli
npm install -g cordova ionic
npm install angularfire2 firebase promise-polyfill --save


 ionic doctor check


 ionic info

 cli packages: (/Users/developer/.nvm/versions/node/v9.4.0/lib/node_modules)

    @ionic/cli-utils  : 1.19.2
    ionic (Ionic CLI) : 3.20.0

global packages:

    cordova (Cordova CLI) : not installed

local packages:

    @ionic/app-scripts : 3.1.9
    Cordova Platforms  : none
    Ionic Framework    : ionic-angular 3.9.2

System:

    Android SDK Tools : 26.1.1
    ios-deploy        : 1.9.2
    Node              : v9.4.0
    npm               : 5.6.0
    OS                : macOS High Sierra
    Xcode             : Xcode 9.3 Build version 9E145

Environment Variables:

    ANDROID_HOME : /Users/developer/Library/Android/sdk/

Misc:

    backend : pro
