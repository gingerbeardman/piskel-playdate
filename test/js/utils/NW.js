describe("NW.js environment testing", function() {

    beforeEach(function() {});
    afterEach(function() {});
    
    /**
     * @todo Figure out if tests are being run in NW.js or not since disabling headless mode launches the app.
     */
    it("checks for NW.js environment", function() {
      pending();
      expect(global.nw).not.toBeUndefined();
    });

});
  