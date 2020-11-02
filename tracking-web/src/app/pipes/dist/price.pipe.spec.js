"use strict";
exports.__esModule = true;
var price_pipe_1 = require("./price.pipe");
describe('PricePipe', function () {
    it('create an instance', function () {
        // Given
        var pipe = new price_pipe_1.PricePipe();
        // Then
        expect(pipe).toBeTruthy();
    });
    describe('transform', function () {
        it('should add € suffix', function () {
            // Given
            var pipe = new price_pipe_1.PricePipe();
            var price = 15.43;
            // When
            var result = pipe.transform(price);
            // Then
            expect(result).toEqual(price + " \u20AC");
        });
        it('should always take 2 decimals', function () {
            // Given
            var pipe = new price_pipe_1.PricePipe();
            var price = 15.4323254;
            var expectedPrice = 15.43;
            // When
            var result = pipe.transform(price);
            // Then
            expect(result).toEqual(expectedPrice + " \u20AC");
        });
    });
});
