#!/usr/bin/env node

const launch = require('smart-restart')

launch({
  main: require.resolve('./transform.js'),
  command: 'node',
  args: process.argv.slice(2),
})
