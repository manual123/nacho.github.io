defineSuite([
        'Renderer/freezeRenderState'
    ], function(
        freezeRenderState) {
    'use strict';

    it('works as expected', function() {
        var fresh = {
            a: 1,
            b: {
                c: 'c'
            },
            _applyFunctions: [function() { }]
        };

        var frozen = freezeRenderState(fresh);
        expect(Object.isFrozen(frozen)).toBe(true);
        expect(Object.isFrozen(frozen.a)).toBe(true);
        expect(Object.isFrozen(frozen.b)).toBe(true);
        expect(Object.isFrozen(frozen.c)).toBe(true);
        expect(Object.isFrozen(frozen._applyFunctions)).toBe(false);
    });
});
