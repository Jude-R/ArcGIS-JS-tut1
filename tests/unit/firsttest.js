const { registerSuite } = intern.getInterface('tdd');
const { assert } = intern.getPlugin('chai');

const { mapTests } = require('../unit/firsttest.js');

registerSuite('/tests/unit/firsttest',{
    mapTests: {
        'center should be [-79.20, 43.69]'(){
            const center = [-79.20, 43.69];
            
        }
    }
});