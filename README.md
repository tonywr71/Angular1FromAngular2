
This is a demonstration of Angular 2 working in conjunction 
with Angular 1 in Visual Studio 2015 
(Dot Net Framework 4.5.2, Asp.Net application, VS2015 Update 3 minimum). 

It specifically follows the instructions of the PhoneCat upgrade example from the Angular Team, 
found here: https://angular.io/docs/ts/latest/guide/upgrade.html except
that I have managed to get the whole thing working under Visual Studio 2015.

It sets up the environment for Angular 2 and then upgrades 
Angular 1 components, using the Upgrade Adapter available 
from the Angular Team, to be able to use them under the 
Angular 2 ecosystem.

To get this to work there are a couple of tricks that you 
need to be aware of. Firstly, you need to get your environment
 ready for Angular 2. To do that, first install or upgrade 
 NodeJs and npm.

The link to download the msi for NodeJs and npm is
 here: https://nodejs.org/en/download/

You will need to tell Visual Studio to use tools 
installed within the environment before tools available in 
VS2015. This is the new way of doing things, and is what 
they do in Dot Net Core. 

To do this, go to Tools -> Options -> Projects and Solutions -> External Web Tools
and make sure the $(PATH) entry in the right pane is moved to the top. After doing
this you will need to close the dialog and restart Visual Studio 2015.

Next, you will need to upgrade Typescript. Angular 2 only works with TypeScript 2.
I couldn't get it working with the npm installer in the environment, so don't do that.
Instead, install TypeScript 2.0 for Visual Studio 2015, found here:
http://download.microsoft.com/download/6/D/8/6D8381B0-03C1-4BD2-AE65-30FF0A4C62DA/TS2.0.3-TS-release20-nightly-20160921.1/TypeScript_Dev14Full.exe

Also, make sure you don't use NuGet Package Manager to install Typing files.
They need to be installed via the node package manager (npm) or you'll end up with
conflicts. Make sure you get rid of any installed in the Scripts folder and use
npm to install the same typings files in the node_modules folder.

Note that the node_modules folder is not included in the project.

If you are downloading this application and trying to get it to work,
remember that package file will need to have its files restored.
In this case, this can be done quite easily by right clicking on the 
bower.json file and selecting "Restore Packages."

Keep an eye on the status bar in the bottom left hand corner and make
sure the restoration is completed before continuing. This could take
some time. The bower package manager is essentially legacy now, and is there
to support angular 1 files.

Next, do the same for the package.json file. Package.json is the node package
manager's package file, but, while the bower package manager was used to 
load old angular files, npm is used to install angular 2 files, but also 
the typings files for angular 1.

Note that this project IS compatible with es5.





