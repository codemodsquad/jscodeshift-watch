#!/usr/bin/env node

const launch = require('smart-restart')

launch({
  main: require.resolve('./runner.js'),
  command: 'node',
  args: process.argv.slice(2),
  restartOnError: false,
  restartOnExit: false,
})
