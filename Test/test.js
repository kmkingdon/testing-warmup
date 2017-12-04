var assert = require("assert");
var exercise = require("../app.js");

describe("Warmup testing drill", ()=> {
  describe("#findFirstLetter", ()=> {
    it("returns the first character of a string", ()=> {
      assert.equal(exercise.findFirstLetter("kevin"), "k");
    })
  })
})
