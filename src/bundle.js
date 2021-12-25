import mochaUi from 'mocha-grommet-reporter';

import { mocha } from 'mocha/mocha.js';

mocha.setup({
  ui: 'bdd',
  slow: 1500,
  timeout: 10000,
  reporter: mochaUi
});

require('./App.test.js');


mocha.run();



function mochaRun(){
    mocha.run();
}