describe('Bank Service' , function() {
    var baseSrc = '../../../src/';
    var bankService = require(baseSrc + 'module1/index.js');

    var valuesToTest = [
        [0, 0],
        [1, 1],
        [2, 2],
        [5, 5],
        [12, 13],
        [20, 21]
    ];
        
    var coin;
    var expectExchange;
    
    beforeEach(function() {
        
     });

    valuesToTest.forEach(function(testValues) {
        coin = testValues[0];
        expectExchange = testValues[1];

        describe('Cambiando un Byteland de ' + coin , function() {
            beforeEach(function() {
                coin = coin;
                expectExchange = expectExchange;
            });
            
            it('Debo obtener ' + expectExchange + '$', function() {
                expect(bankService.exchange(coin)).toEqual(expectExchange);
            });
        });
    });
    

});
