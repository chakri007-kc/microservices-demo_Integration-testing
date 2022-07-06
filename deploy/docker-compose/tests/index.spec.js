(function (){
    'use strict';
  
    var expect    = require("chai").expect
      , endpoints = require("../../api/endpoints")
  
    describe("endpoints", function() {
      describe("catalogueUrl", function() {
        it("points to the proper endpoint", function() {
          expect(endpoints.catalogueUrl).to.equal("http://catalogue");
        });
      });
  
      describe("tagsUrl", function() {
        it("points to the proper endpoint", function() {
          expect(endpoints.tagsUrl).to.equal("http://catalogue/tags");
        });
      });
  

    });
  }());