# simplebox.js

simplebox.js is a lightweight lightbox plugin (603 bytes) that is easy to modify or extend to fit your needs. This plugin is intended to be a quick, responsive, efficient.

The idea behind this plugin was to make the process of setting up a lightbox painless. My experience with finding and setting up lightbox plugins has been pretty bad. The plugins I've come across almost always have too many features. simplebox.js is designed to have just one feature: lightboxing. It's responsive out of the box and allows only a few crucial settings.

## Installation
To install simplebox, you will have to include the following resources in your page. The JS files should be loaded in the order stipulated below. For the CSS file, you can either incorporate it with your site's stylesheet, or load it externally through the `<link>` element in `<head>`.

| Type | File Name            | Description                                                                                                            |
|------|----------------------|------------------------------------------------------------------------------------------------------------------------|
| JS   | [jQuery](http://jquery.com) | jQuery is obviously needed |
| JS   | `dist/js/simplebox.min.js` | Confers the main functionality of the plugin. |
| CSS  | `dist/css/simplebox.min.css`   | Offers styles that are crucial for the correct display of simplebox. The appearance will break if this is not included. Properties in this file include the necessary vendor prefixes. |

## Usage
### Basic
It is rather straightforward to use simplebox&mdash;just add the **slb** class to all the images you want this plugin to work for and then simply chain the `.simplebox()` method to `$(".slb")` in your JavaScript.

```html
<img class="slb" src="/path/to/image" alt="lorem ipsum" />
```

```javascript
$(function () {
    // This assumes that you have placed the cross.svg file inside /img in your project
    $(".slb").simplebox();
});
```

### Advanced

The plugin comes with three options. Yes, just three. Think of this as a feature and not a drawback! If you want to access these options, call the plugin like this:

```JavaScript
$('.slb').simplebox({
    fadeSpeed: 300 // default is 400ms, applied to all fade animations in the plugin
});
```

## In the Wild

- http://ratiksharma.com/blog/

If you are using this plugin and want your product to be listed here, hit me up on @Ratik96 on Twitter!
