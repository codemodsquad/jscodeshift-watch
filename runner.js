/* eslint-disable no-console */

const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const printDiff = require('print-diff')
const jscodeshift = require('jscodeshift')

const argv = require('yargs').option('transform', {
  alias: 't',
  describe: 'path to the transform file. Can be either a local path or url',
  default: './transform.js',
}).argv

const { _: files } = argv

const transform = require(path.resolve(argv.transform))

const results = {}

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8')
  const reports = []
  const result = transform(
    {
      source,
      path: file,
    },
    {
      jscodeshift: transform.parser
        ? jscodeshift.withParser(transform.parser)
        : jscodeshift,
      stats: () => {},
      report: msg => reports.push(msg),
    },
    {}
  )
  if (source !== result) results[file] = result
  if (files.length > 1) {
    console.error(
      chalk.blue(`
==========================================
${file}
==========================================
`)
    )
  }
  printDiff(source, result)
  if (reports.length) {
    console.error(chalk.blue`
Reports
-------
`)
    reports.forEach(r => console.error(...r))
  }
}

if (Object.keys(results).length) {
  const inquirer = require('inquirer')
  inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'apply',
        message: 'Apply changes',
        default: false,
      },
    ])
    .then(({ apply }) => {
      if (apply) {
        for (const file in results) {
          fs.writeFileSync(file, results[file], 'utf8')
          console.error(`Wrote ${file}`)
        }
      }
      process.send({ exit: 0 })
    })
}
