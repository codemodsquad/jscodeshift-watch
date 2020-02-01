# jscodeshift-watch

[![CircleCI](https://circleci.com/gh/codemodsquad/jscodeshift-watch.svg?style=svg)](https://circleci.com/gh/codemodsquad/jscodeshift-watch)
[![Coverage Status](https://codecov.io/gh/codemodsquad/jscodeshift-watch/branch/master/graph/badge.svg)](https://codecov.io/gh/codemodsquad/jscodeshift-watch)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm version](https://badge.fury.io/js/jscodeshift-watch.svg)](https://badge.fury.io/js/jscodeshift-watch)

A basic utility I wrote for myself to do quick one-off jscodeshift transforms.
Watches your transform code and reruns any time you save it. Prints a diff
of the transformed code, and if any file(s) changed, prompts whether you want to
write the changes.

## Usage

```
> jscodeshift-watch -t TRANSFORM_PATH PATH...
```
