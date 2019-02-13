# Humanized
Shortcuts auto-generated for any web page.
Inspired by [Humanized Enso Launcher](https://github.com/GChristensen/enso-portable)

### Description

Humanized gives you the possibility to easily execute an action without the use of mouse.
- Automatically a list of action is generated after parse your html page
- All **href** attributes and **buttons** are collected to generate an autocomplete list
- Typing 'cmd' an auto-completer is opened 
- Find the action using smart filter
- Execute it

#### Demo
- When you enter to a page, Humanized inject the behaviour and parse the html content
<img src="https://github.com/cristianmercado19/Humanized/blob/master/Screenshots/Humanized01.png?raw=true" />

- Type **cmd** to open the *web console*
<img src="https://github.com/cristianmercado19/Humanized/blob/master/Screenshots/Humanized02.png?raw=true" />

- Type any *text* to filter, select and press *enter* to execute
<img src="https://github.com/cristianmercado19/Humanized/blob/master/Screenshots/Humanized03.png?raw=true" />

- Executing action
<img src="https://github.com/cristianmercado19/Humanized/blob/master/Screenshots/Humanized04.png?raw=true" />

- There are **custom commands**, all of these start with **hz**
<img src="https://github.com/cristianmercado19/Humanized/blob/master/Screenshots/Humanized05.png?raw=true" />

- EG, to show available actions
<img src="https://github.com/cristianmercado19/Humanized/blob/master/Screenshots/Humanized06.png?raw=true" />


___
### Install

#### OPTION 1: Standard
Include the reference in the Head tag

```
<script type="text/javascript" src="https://raw.githubusercontent.com/cristianmercado19/Humanized/master/src/Humanized.js"></script>
```

Call initialization after page has been loaded

```
    Humanized.Initializer.init();
```


#### OPTION 2: [Tampermonkey](http://tampermonkey.net/)
It is a chrome version of legendary **Greasemonkey**.
Install this extension in your browser and add the script to apply it onto all desired web sites.
Just update the match pattern in:
// @match        http://*/*
**Humanized** will be applied automatically

```
// ==UserScript==
// @name         Humanized
// @namespace    https://github.com/cristianmercado19
// @version      1.0
// @description  Shortcuts auto-generated for any web page... Inspired by Humanized Enso Launcher
// @author       Cristian Mercado
// @match        http://*/*
// @require      https://raw.githubusercontent.com/cristianmercado19/Humanized/master/src/Humanized.js
// @grant        none
// ==/UserScript==

(function() {
   
    Humanized.Initializer.init();

})();
```


___
### Special thanks
- [Humanized Enso Launcher](https://github.com/GChristensen/enso-portable)
- [Horsey](https://github.com/bevacqua/horsey)
- [iziToast](https://github.com/dolce/iziToast)
- [Mousetrap](https://github.com/ccampbell/mousetrap)

___
### Version Log

- **v1.0.0**
  - Initial Version
