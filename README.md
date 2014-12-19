# Nexus UI

**Author:** Ben Taylor

**Contributors:** Jesse Allison, Yemin Oh, Sébastien Piquemal

**Overview:** NexusUI is a JS toolkit for easily designing musical interfaces for mobile apps and web browsers, with emphasis on rapid prototyping and integration with Max/MSP.

**Project Site:** http://www.nexusosc.com

**License:** NexusUI is licensed as open source software under the terms of the "New BSD License", http://creativecommons.org/licenses/BSD/


### How to Use NexusUI

Download nexusUI.js and link to it in the head of your HTML document

```html
<script src="nexusUI.js"></script>
```


Add an HTML5 canvas to your page with a valid nx attribute.

```html
<canvas nx="dial"></canvas>
```

It will automatically convert into a touch-compatible dial interface. 

Valid Nexus objects include: dial, position, keyboard, button, toggle, slider, multislider, matrix, select, tilt, metroball, pixels, colors, sandbox, joints, comment, message, number, banner, multitouch.

See [nexusosc.com](http://www.nexusosc.com) for a complete list, examples and tutorials.


#### Accessing Interface Data

By default, interface event data can be accessed by adding JavaScript event listeners, which can be used to control web audio.

```js
button1.on('press', function(data) {
	// do something musical with the event data
})
```

You can write listeners for individual parameters of a widget

```js
position1.on('x', function(data) {
	// data will be a float equal to the x coordinate of the 2D Position widget.
})
```

Or you can receive a widget's data grouped as a js object

```js
position1.on('*', function(data) {
	// data will be an object with x and y properties (data.x and data.y)
})
```



##### OSC Communication Templates

In addition, the interface can send OSC data through a network to other audio applications (or anything that understands OSC). We offer templates for several server paradigms:

[nx-AjaxDemo](http://www.github.com/lsu-emdm) offers a template for sending OSC via AJAX & PHP through a basic Apache server (Macs have one built-in, Windows users can use WAMP).

[nx-NodeDemo](http://www.github.com/lsu-emdm) offers a socket.io template for users of node.js. 

[nx-max7](http://www.github.com/lsu-emdm) offers a max7 template for receiving data from a NexusUI embedded with [jweb]

[nx-webAudio](http://www.github.com/lsu-emdm) offers a basic web audio project using NexusUI.


#### Additional NexusUI Tools

[nexusDrop](http://www.github.com/lsu-emdm/nexusDrop) offers a drag-and-drop interface for creating NexusUI interfaces.

[nexusUp](http://www.github.com/lsu-emdm/nexusUp) offers a Max/MSP bpatcher for generating NexusUI interfaces from existing Max interfaces.

[Braid](http://braid.nexusosc.com) offers a drag-and-drop interface for creating web audio instruments using Gibber.lib.


### Build instructions

Most users will only need to download the nexusUI.js script from this repository to use NexusUI. However, if you would like to create a custom build of NexusUI, you may do the following:

To build nexusUI yourself, you need [node.js and npm](http://nodejs.org/).

Then open your terminal, and in the root folder of nexusUI, type `npm install` to install the packages needed for the build script. 

*NOTE:* Our current documentation system uses an edited version of jsdox used by the authors. Therefore, your documentation builds (in /api) may not match our own.

Now you need to install [gulp](http://gulpjs.com), which is the tool used to make the build. Type `npm install --global gulp`. (If your node.js configuration does not allow for global installation, you can use `sudo npm install --global gulp`)

Finally, you can build nexusUI by simply typing `gulp` in your terminal.