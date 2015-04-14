define(['durandal/system'], function (sut) {
    describe('durandal/system', function(){
        describe('debug', function () {
            it('returns false when no arguments', function () {
                var isDebugging = sut.debug();

                expect(isDebugging).toBe(false);
            });

            it('sets debug value', function () {
                sut.debug(true);
                var isDebugging = sut.debug();

                expect(isDebugging).toBe(true);
            });
        });

        describe('acquire', function() {

            it('should resolve preloaded modules synchronously', function() {

                var spy = jasmine.createSpy('spy');

                sut.acquire('durandal/system').then(spy);

                expect(spy.calls.argsFor(0)[0]).toBe(sut);

            });

        });
    });
});