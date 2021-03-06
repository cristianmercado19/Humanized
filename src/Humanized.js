/**
 * Created by Cristian on 03/03/2017.
 */

var Humanized = Humanized || {};

Humanized.Var = Humanized.Var || {};
Humanized.Var.jq311 = Humanized.Var.jq311 || {};
Humanized.Var.horseyInstance = Humanized.Var.horseyInstance || {};

Humanized.Var.searchInputId = Humanized.Var.searchInputId || "hy";
Humanized.Var.searchInput = Humanized.Var.searchInput || {};

Humanized.Var.searchDiv = Humanized.Var.searchDiv || {};
Humanized.Var.actionDictionary = Humanized.Var.actionDictionary || [];
Humanized.Var.actionList = Humanized.Var.actionList || [];
Humanized.Var.customActionList = Humanized.Var.customActionList || [];

Humanized.Page = Humanized.Page || {
    _createJavascriptLinkElement : function (url, callback){
        var script = document.createElement('script');

        script.type = 'text/javascript';
        script.src = url;

        // Then bind the event to the callback function.
        // There are several events for cross browser compatibility.
        if (callback){
            script.onreadystatechange = callback;
            script.onload = callback;
        }

        return script;
    },

    _createLinkElement : function (href){

        var link = document.createElement('link');

        link.rel='stylesheet';
        link.type = 'text/css';
        link.href = href;

        return link;
    },

    _getHead : function (){
        var head = document.getElementsByTagName('head')[0];

        return head;
    },

    _createFont: function (fontAddress){
        var font = this._createLinkElement(fontAddress);

        return font;
    },

    addElementToHeader : function(elementToHead){
        var header = this._getHead();

        header.appendChild(elementToHead);
    },

    addFontElement: function(fontUrl){
        var fontLink = this._createFont(fontUrl);
        this.addElementToHeader(fontLink);
    },

    addJavascriptToHead : function(url, callback){
        var scriptElement = this._createJavascriptLinkElement(url, callback);
        this.addElementToHeader(scriptElement);
    }

};

Humanized.FontInitializer = Humanized.FontInitializer ||{

    _addGoogleFont : function(){
        var googleFontUrl = "https://fonts.googleapis.com/css?family=Slabo+27px";
        Humanized.Page.addFontElement(googleFontUrl);
    },

    init: function (){
        this._addGoogleFont();
    }
};

Humanized.IconInitializer = Humanized.IconInitializer ||{

    _addMaterialIconsFont: function(){
        var materialIconUrl = "https://fonts.googleapis.com/icon?family=Material+Icons";
        Humanized.Page.addFontElement(materialIconUrl);
    },

    init : function () {
        this._addMaterialIconsFont();
    }

};

Humanized.StyleInitializer = Humanized.StyleInitializer || {

    _globalStyle : function(){

        var style = `
        .sey-container {
            font-size: 20px;
            font-family: 'Slabo 27px', serif;
            width: 98%;
            display: none;
            position: absolute;
            box-shadow: 1px 2px 6px;
            background-color: rgba(255, 255, 255, 0.54);
            color: #a9d04e;
            transition: left .1s ease-in-out;
            z-index: 1
        }
        .sey-list {
            padding: 0;
            margin: 0;
            list-style-type: none
        }
        .sey-show {
            display: block
        }
        .sey-hide {
            display: none
        }
        .sey-empty {
            cursor: default;
            padding: 7px
        }
        .sey-item {
            cursor: pointer;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding: 7px
        }
        .sey-item:hover {
            background-color: #444;
            color: #fff
        }
        .sey-selected {
            background-color: rgba(156, 156, 156, 0.5);
            color: #fff
        }
        .sey-char-highlight {
            font-weight: bold;
            color: #7f9845;
        }
        .sey-category-id {
            background-color: #eee;
            color: #aaa;
            text-align: right;
            text-transform: capitalize;
            font-style: italic;
            font-size: 12px;
            box-shadow: 1px 0 1px;
            padding: 7px
        }
        `;

        return style;
    },

    _createStyleElement : function(css){
        var style = document.createElement('style');

        style.type = 'text/css';
        style.innerHTML = css;

        return style;
    },

    _addStyle : function(style){
        var styleElement = this._createStyleElement(style);

        Humanized.Page.addElementToHeader(styleElement);
    },

    _addGlobalStyle : function(){
        var style = this._globalStyle();
        this._addStyle(style);
    },

    init: function(){
        this._addGlobalStyle();
    }
};

Humanized.ToastyInitializer = Humanized.ToastyInitializer || {

    _addStyles : function() {
        var stylesUrl = "https://cdn.rawgit.com/dolce/iziToast/master/dist/css/iziToast.min.css";
        Humanized.Page.addFontElement(stylesUrl);
    },

    _setDefaultConfiguration : function(){
        iziToast.settings({
            timeout: 2000,
            resetOnHover: true,
            transitionIn: 'fadeInRight',
            transitionOut: 'fadeOutUp'
        });
    },

    _addJavaScriptLibrary : function(){

        var me = this;

        var callback = function(){
            me._setDefaultConfiguration();
        };

        var toastUrl = "https://cdn.rawgit.com/dolce/iziToast/master/dist/js/iziToast.min.js";

        Humanized.Page.addJavascriptToHead(toastUrl, callback);
    },

    init : function(){
        this._addStyles();
        this._addJavaScriptLibrary();
    }
};

Humanized.MouseTrapInitializer = Humanized.MouseTrapInitializer || {

    _addShortLibrary : function(){
        var shortCutUrl = "https://cdn.rawgit.com/ccampbell/mousetrap/master/mousetrap.min.js";
        Humanized.Page.addJavascriptToHead(shortCutUrl);
    },

    init : function(){
        this._addShortLibrary();
    }
};

Humanized.JQueryInitializer = Humanized.JQueryInitializer || {

    _addJQueryLibrary : function(callBack){
        var jQueryUrl = "https://code.jquery.com/jquery-3.1.1.min.js";

        Humanized.Page.addJavascriptToHead(jQueryUrl, callBack);
    },

    init : function (callback) {

        this._addJQueryLibrary(callback);
    }
};

Humanized.HorseyInitializer = Humanized.HorseyInitializer || {

    _addAutocompleteLibrary : function(callback){

        var horseyUrl = "https://bevacqua.github.io/horsey/dist/horsey.js";

        Humanized.Page.addJavascriptToHead(horseyUrl, callback);
    },

    getHorseyInput: function (){
        var searchInputId = Humanized.Var.searchInputId;
        var input = document.querySelector('#' + searchInputId);

        return input;
    },

    init : function (callback){
        this._addAutocompleteLibrary(callback);
    }
};

Humanized.Actions = Humanized.Actions || {
    createKeyForDictionary: function(text){
        var key = text.replace(/\s/g,  "-");

        return key;
    }
};

Humanized.Actions.Initializer = Humanized.Actions.Initializer || {

    init : function (){
        Humanized.Actions.AElements.Initializer.init();
        Humanized.Actions.Custom.Initializer.init();
    }
};

Humanized.Actions.Custom = Humanized.Actions.Custom || {};

Humanized.Actions.Custom.Initializer = Humanized.Actions.Custom.Initializer || {

    _addACustomAction : function(text, actionToCall){

        var customActionText = "hz " + text;

        Humanized.Var.customActionList.push(customActionText);

        var keyTextInDictionary = Humanized.Actions.createKeyForDictionary(customActionText);

        var actionManager = {};
        actionManager.runAction = actionToCall;

        Humanized.Var.actionDictionary[keyTextInDictionary] = actionManager;
    },

    _addGoBackAction: function(){

        var action = function(){
            window.history.back();
        };

        this._addACustomAction("go back", action);
    },

    _addGoForwardAction : function(){

        var action = function(){
            window.history.forward();
        };

        this._addACustomAction("go forward", action);
    },

    _showAvailableActions : function () {
        var aActionAvailables = Humanized.Var.actionList.length;
        var customActionAvailables = Humanized.Var.customActionList.length;

        iziToast.info({
            title: 'Actions',
            message: 'A ref (' + aActionAvailables + ') and customs (' + customActionAvailables + ')',
            position: 'topRight',
            balloon: true
        });
    },

    _addShowAvailableActions : function(){
        var me = this;

        var action = function(){
            me._showAvailableActions();
        };

        this._addACustomAction("show available actions", action);
    },

    _addCloseWindowAction : function () {
        var action = function () {
            window.close();
        };

        this._addACustomAction("close current window", action);
    },

    _createListOfCustomActionsForAllPages: function(){
        this._addGoBackAction();
        this._addGoForwardAction();
        this._addShowAvailableActions();
        this._addCloseWindowAction();
    },

    init : function(){
        this._createListOfCustomActionsForAllPages();
    }
};

Humanized.Actions.AElements = Humanized.Actions.AElements|| {};

Humanized.Actions.AElements.Initializer = Humanized.Actions.AElements.Initializer || {

    _normalizeText: function(text){
        var normalized = text;

        normalized = normalized.toLowerCase();
        normalized = normalized.replace(/(\r\n|\n|\r)/gm, " ");
        normalized = normalized.trim();

        return normalized;
    },

    _isAValidAction : function(aElement, text){

        var isVisible = Humanized.Var.jq311(aElement).is(":visible");

        var atLeastThreeCharacters = (text && text.length > 3);

        var isAValidAction = (isVisible && atLeastThreeCharacters);

        return isAValidAction;
    },

    _addAction: function (keyTextInDictionary, aElement, text) {
        var actionManager = {};

        actionManager.aElementToClick = aElement[0];
        actionManager.runAction = function () {
            this.aElementToClick.click();
        };

        Humanized.Var.actionDictionary[keyTextInDictionary] = actionManager;

        Humanized.Var.actionList.push(text);
    },

    _addActionIfDoesNotExist: function (element, text) {
        var keyTextInDictionary = Humanized.Actions.createKeyForDictionary(text);

        var keyDoesNotExist = !Humanized.Var.actionDictionary[keyTextInDictionary];

        if (keyDoesNotExist) {
            this._addAction(keyTextInDictionary, element, text);
        }
    },

    _createListOfActions: function(){

        var me = this;

        Humanized.Var.jq311("a").each(function( index ) {

            var text = Humanized.Var.jq311(this).text();

            var aElement = Humanized.Var.jq311(this);

            text = me._normalizeText(text);

            var isAValidAction = me._isAValidAction(this, text);

            if (isAValidAction) {
                me._addActionIfDoesNotExist(aElement, text);
            }

        });
    },

    init : function(){
        this._createListOfActions();
    }
};

Humanized.InputInitializer = Humanized.InputInitializer || {

    _initializeAutoCompleteComponent: function(){
        var input = Humanized.HorseyInitializer.getHorseyInput();

        Humanized.Var.horseyInstance= horsey(input, {
            source: [{
                id: 'A actions',
                list: Humanized.Var.actionList
            }, {
                id: 'HZ Custom Actions',
                list: Humanized.Var.customActionList
            }]
            ,noMatches: ":-(   no matches"
            , blankSearch: true
            , limit: 15
        });

    },

    _initializeSearchInput : function(){
        var searchInputId = Humanized.Var.searchInputId;
        Humanized.Var.searchInput = Humanized.Var.jq311("<input id='" + searchInputId + "' style='margin-left: 10px; margin-right: 10px;outline: none; color: #9fbe57; font-size: 40px; font-family: &quot;Slabo 27px&quot;, serif; background: transparent; width: inherit; height: inherit; border: 0px solid;' />");
    },

    _initializeSearchDiv: function(){
        Humanized.Var.searchDiv = Humanized.Var.jq311("<div id='mySearchDiv' style='border-radius: 5px; padding: 2px; height: 50px; width: 98%; background-color: rgba(27, 27, 27, 0.5); position:fixed; top:65px; left:10px;'></div>");
    },

    _addSearch: function(){

        Humanized.Var.searchDiv.hide();

        Humanized.Var.searchDiv.append(Humanized.Var.searchInput);

        Humanized.Var.jq311("body").append(Humanized.Var.searchDiv);
    },

    _initializeSearch : function(){

        this._initializeSearchInput();
        this._initializeSearchDiv();

        this._addSearch();

        this._initializeAutoCompleteComponent();
    },

    hideAndCleanControl : function () {

        Humanized.Var.horseyInstance.hide();

        Humanized.Var.searchDiv.fadeOut(2000, function () {
            Humanized.Var.searchInput.val('');
        });
    },

    init : function(){
        this._initializeSearch();
    }
};

Humanized.ShortCutsInitializer = Humanized.ShortCutsInitializer || {

    _showExecutedAction : function (actionName) {
        iziToast.success({
            title: actionName,
            position: 'bottomRight',
            message: 'action is executing...'
        });
    },

    _showIsNotAValidAction: function (invalidActionName) {
        iziToast.error({
            title: invalidActionName,
            close: false,
            position: 'bottomRight',
            message: 'Is not an Action registered'
        });
    },

    _setEnterCommand : function () {
        var me = this;
        var input = Humanized.HorseyInitializer.getHorseyInput();

        Mousetrap(input).bind('enter', function(e) {

            Humanized.Var.jq311("body").focus();

            setTimeout( function(){

                var textSelected = Humanized.Var.searchInput.val();

                var textKey = Humanized.Actions.createKeyForDictionary(textSelected);

                var aAction = Humanized.Var.actionDictionary[textKey];

                Humanized.InputInitializer.hideAndCleanControl();

                if(aAction && aAction.runAction) {
                    me._showExecutedAction(textSelected);
                    aAction.runAction();
                }else{
                    me._showIsNotAValidAction(textSelected);
                }

            }, 100);

            return false;
        });
    },

    _setCmdCommand : function(){
        Mousetrap.bind('c m d', function(e) {

            Humanized.Var.searchDiv.show();

            var input = Humanized.HorseyInitializer.getHorseyInput();
            input.focus();

            return false;
        });
    },

    _setEscCommand : function () {
        var input = Humanized.HorseyInitializer.getHorseyInput();

        Mousetrap(input).bind('esc', function(e) {

            // lost focus
            Humanized.Var.jq311(e.target).blur();

            setTimeout( function(){

                Humanized.InputInitializer.hideAndCleanControl();

            }, 100);

            return false;
        });
    },

    init : function() {
        this._setCmdCommand();
        this._setEnterCommand();
        this._setEscCommand();
    }
};

Humanized.Initializer = Humanized.Initializer || {

    _welcomeMessage: function(){
        iziToast.info({
            title: 'Humanized Installed',
            message: 'type [cmd] to open Humanized',
            position: 'bottomCenter',
            balloon: true
        });
    },

    init : function(){

        Humanized.StyleInitializer.init();

        Humanized.FontInitializer.init();

        Humanized.IconInitializer.init();

        Humanized.ToastyInitializer.init();

        Humanized.MouseTrapInitializer.init();

        var me = this;

        var callbackAfterJQueryLoad = function(){

            Humanized.Var.jq311 = $.noConflict(true);

            Humanized.Actions.Initializer.init();

            Humanized.InputInitializer.init();

            Humanized.ShortCutsInitializer.init();

            me._welcomeMessage();
        };

        var callbackAfterAutocompleteLoad = function(){

            Humanized.JQueryInitializer.init(callbackAfterJQueryLoad);
        };

        Humanized.HorseyInitializer.init(callbackAfterAutocompleteLoad)
    }
};
