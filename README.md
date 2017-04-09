# Humanized
Shortcuts auto-generated for any web page.
Inspired by [Humanized Enso Launcher](https://github.com/GChristensen/enso-portable)

### Description

Humanized gives you the posibility to execute actions easily.
- Read all href attributes and generate an autocomplete list
- call Humanized as a console
- Use commands or find an action using smart filter
- Execute it

#### Use example
- When you enter to a page, Humanized inject the behaviour and parse the html content
<img src="https://raw.github.com/cristianmercado19/Humanized/Screenshots/Humanized_01.png" />

- Type cmd to open the web console
<img src="https://raw.github.com/cristianmercado19/Humanized/Screenshots/Humanized_02.png" />

- Type to filter and press enter to execute
<img src="https://raw.github.com/cristianmercado19/Humanized/Screenshots/Humanized_03.png" />

- Executing action
<img src="https://raw.github.com/cristianmercado19/Humanized/Screenshots/Humanized_04.png" />

- There are custom actions, all of these start with hz
<img src="https://raw.github.com/cristianmercado19/Humanized/Screenshots/Humanized_05.png" />

- Executing show available actions
<img src="https://raw.github.com/cristianmercado19/Humanized/Screenshots/Humanized_06.png" />


___
### Install

#### Standard
Include the reference in the Head tag

```
<script type="text/javascript" src="https://raw.githubusercontent.com/cristianmercado19/Humanized/master/src/Humanized.js"></script>
```

Call initialization after page has been loaded

```
    Humanized.Initializer.init();
```


#### [Tampermonkey](http://tampermonkey.net/)
It is a chrome version of legendary Greasemonkey.
Using this script you will be able to apply Humanized to all pages (or a limited set)

```
// ==UserScript==
// @name         Humanized
// @namespace    https://github.com/cristianmercado19
// @version      1.0
// @description  Shortcuts auto-generated for any web page... Inspired by Humanized Enso Launcher
// @author       Cristian Mercado
// @match        http://*/*
// @match        https://*/*
// @require      https://raw.githubusercontent.com/cristianmercado19/Humanized/master/src/Humanized.js
// @grant        none
// ==/UserScript==

(function() {
   
    Humanized.Initializer.init();

})();
```

___
### Version Log

- **v1.0.0**
  - Initial Version
  
  
  
