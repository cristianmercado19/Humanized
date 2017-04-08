/**
 * Created by Cristian on 03/03/2017.
 */
'use strict';

describe("Add font", function() {
    var initializer = Humanized.Initializer;

    it("should include a font in the header", function() {

        var font = "https://fonts.googleapis.com/css?family=Slabo+27px";

        initializer._addGoogleFont(font);

        var header = document.getElementsByTagName('head')[0];

        expect(header.outerHTML).toContain(font);
    });
});


describe("A Initializer for Humanized project", function() {
    var initializer = Humanized.Initializer;

    it("should exist ", function() {

        expect(initializer).toEqual(jasmine.anything());
    });

    it("should initialize", function() {

        spyOn(initializer, 'init');

        initializer.init();

        expect(initializer.init).toHaveBeenCalled();
    });

    it("should call the add font function", function(){

        spyOn(initializer, '_addGoogleFont').and.callThrough();

        initializer.init();

        expect(initializer._addGoogleFont).toHaveBeenCalled();
    });

    it("should call the add iziToast library", function(){

        spyOn(initializer, '_addToastLibrary').and.callThrough();

        initializer.init();

        expect(initializer._addToastLibrary).toHaveBeenCalled();
    });

    it("should call the add shortCuts library", function(){

        spyOn(initializer, '_addShortLibrary').and.callThrough();

        initializer.init();

        expect(initializer._addShortLibrary).toHaveBeenCalled();
    });

    it("should call the add Material Icon Font", function(){

        spyOn(initializer, '_addMaterialIconsFont').and.callThrough();

        initializer.init();

        expect(initializer._addMaterialIconsFont).toHaveBeenCalled();
    });
});