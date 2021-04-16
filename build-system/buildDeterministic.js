#!/usr/bin/env node
/**
* @file Reproducible Builds Timestamp 
* @version 1.0.2
* @license Apache-2.0
* @param SOURCE_DATE_EPOCH
* 
* $> ./buildEpoch.js
* $> node buildEpoch.js
* # configure your env such that:
* $> export SOURCE_DATE_EPOCH=''
* $> node buildEpoch.js
* $> 2021-04-01T17:51:45.267Z
*/
'use strict';
const now = new Date();
if (process.env.SOURCE_DATE_EPOCH) {
  now = new Date(
    process.env.SOURCE_DATE_EPOCH * 1000 + now.getTimezoneOffset() * 60000
  );
}
console.log(now);
/** @exports SourceDateBuild */
