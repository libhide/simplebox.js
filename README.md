# simplebox.js

simplebox.js is a lightweight lightbox plugin (1.4 KB) that is easy to modify or extend to fit your needs. This plugin is intended to be a quick, responsive, efficient.

The idea behind this plugin was to make setting up lightbox painless. My experience with finding and setting up lightbox plugins has been pretty bad. The plugins I've come across almost always have too many features. simplebox.js is designed to have just one feature: lightboxing. It's responsive out of the box and allows only a few crucial settings.

## Usage

1. To get started, clone or download the zip for the repository. Once downloaded, you can checkout the demo inside the demo folder if you want.
2. To hook the plugin up with your website, copy everything in the /dist folder and add it your project.
    - **CSS:** You can either include the simplebox.min.css as a an individual file to your project or include it into your main stylesheet (as an SCSS partial?) to cut down on HTTP requests.
    - **Images**: There is only one image included which is the default 'X' icon for the lightbox. You do have the option to override this image using the plugin's settings (more on this later). Add this image to your primary images folder.
    - **JS**: This is the heart and soul of the plugin. Add the js file to your project.
3. After adding the files and making sure you have jQuery hooked up, just call the plugin:

```JavaScript
$('.slb').simplebox();
```

## Options

The plugin comes with three options. Yes, just three. Think of this as a feature and not a drawback! If you want to access these options, call the plugin like this:

```JavaScript
$('.slb').simplebox({
    fadeSpeed: 300, // default is 400ms
    closeImage: "img/x.svg", // default image is the cross.svg provided with the plugin
    closeCrossAnimation: false // If set to true, the closing animation for the cross is used
});
```

## In the Wild

- http://ratiksharma.com/blog/

If you are using this plugin and want your product to be listed here, hit me up on @Ratik96 on Twitter!
