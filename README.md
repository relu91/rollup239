# rollup239
A sample rollup project to reproduce the issue 239.
It seems that node-globals plugins breaks module resolution, with the reference to https://github.com/uber/deck.gl/issues/2530 it could be 
that some module is using both ES6 syntax and commoJS... but it's just speculation. 

## Reproduce the issue
Just clone the repository and run:

`npm run rollup`

the out.js has require calls everywhere.

### other infos
The issue seems to involve the two modules `bufferutils` and `utf-8-validate`. 
