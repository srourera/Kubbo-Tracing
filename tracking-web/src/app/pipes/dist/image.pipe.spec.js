"use strict";
exports.__esModule = true;
var Properties_1 = require("../configuration/Properties");
var image_pipe_1 = require("./image.pipe");
describe('ImagePipe', function () {
    it('create an instance', function () {
        // Given
        var pipe = new image_pipe_1.ImagePipe();
        // Then
        expect(pipe).toBeTruthy();
    });
    describe('transform', function () {
        it('should add url prefix', function () {
            // Given
            var pipe = new image_pipe_1.ImagePipe();
            var id = 1;
            // When
            var result = pipe.transform(id);
            // Then
            expect(result).toEqual(Properties_1.imagesUrl + "/" + id);
        });
    });
});
