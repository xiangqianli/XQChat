# XQChat

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

This project realized an auto-chat robot with the AngularJS framework, some screenshots are listed below:
<img src="https://github.com/xiangqianli/XQChat/blob/master/screenshots/snapshot_pc1.png?raw=true" width="50%" ></img>
<img src="https://github.com/xiangqianli/XQChat/blob/master/screenshots/snapshot_pc2.png?raw=true" width="50%" style="float:right;" ></img>  

While in the mobile simulator, it looks like this:  

<img src="https://github.com/xiangqianli/XQChat/blob/master/screenshots/snapshot_phone.png?raw=true" width="50%" align="center" ></img>

##Prerequisites

*Code tree:*  

    -app
        --images //store images
        --scripts  //js files
        --styles    //css files
        --views     //html files
        index.html
    -bower_components //dependency packages
    -dist //each time grunt rebuild, dist folder will refresh the project inside there to be set up.
    -heroku //not used right now, because heroku is not available without backend code
    -node_modules //dependency packages, mainly used for grunt project build
    -test //test units
    ... //configuration files

*This app is writen with AngularJs, no backend. But with Yoeman, it's still possible to liveload locally.*
You can deploy this app on any operating system. However, OS X is recommended if possible. Some commands may need to be added sudo in OS X or Linux environments.  

*Install Requirements*

1. [node](https://nodejs.org)(including npm)  

2. [bower](https://bower.io/)

3. [grunt](http://gruntjs.com/getting-started)
At the command prompt, type the following to install Grunt command-line interface(CLI):
(1) sudo npm install -g grunt-cli
Next install Grunt to use within project. To do this, go to the 'XQChat' folder and type the following at the prompt:
(2) npm install grunt --save-dev

4. [karma](https://karma-runner.github.io/1.0/intro/installation.html)
set up the Karma command line tools globally as follows:
(1) sudo npm install karma-cli -g 
set up within the chatbot project:
(2) npm install grunt-karma karma karma-phantomjs-launcher karma-jasmine jasmine-core phantomjs-prebuilt --save-dev

5. Yo and Yeoman
(1)sudo npm install yo -g
(2)sudo npm install generator-angular -g
(3)set up within the chatbot folder:
yo angular


## Build & development

Run `grunt` for building and `grunt serve` for preview.

Once you've start up the grunt server, the preview address will be: [http://localhost:9000/#/contact](http://localhost:9000/#/contact)

## Testing (Not used right now)

Running `grunt test` will run the unit tests with karma.
