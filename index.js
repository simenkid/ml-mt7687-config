module.exports = {
  'init:mt7687': {
    source: require('./commands/init_mt7687'),
    description: 'init mt7687 env',
  },
  'build:init': {
    source: require('./commands/build_init'),
    description: 'Reset mt7687 build env',
  },
  'parse:js' : {
    source: require('./commands/parse_js'),
    description: 'parse all js lib',
  },
  'build:js' : {
    source: require('./commands/build_js'),
    description: 'build a js file',
  },
  'build:bin' : {
    source: require('./commands/build_bin'),
    description: 'build binary',
  },
  'install:gcc' : {
    source: require('./commands/install_gcc'),
    description: 'install gcc',
  },
  'install:resetSDK' : {
    source: require('./commands/install_resetsdk'),
    description: 'install and reset sdk',
  },
  'install:sdk' : {
    source: require('./commands/install_sdk'),
    description: 'install sdk',
  },
  'install:jerry' : {
    source: require('./commands/install_jerry'),
    description: 'install jerry',
  },
  'install:ml' : {
    source: require('./commands/install_ml'),
    description: 'install ml',
  },
  'install:cache' : {
    source: require('./commands/install_cache'),
    description: 'install cache',
  },
}