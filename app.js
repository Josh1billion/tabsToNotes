var tabsToNotes = require('tabs-to-notes');

var sampleInput = `|123
|1--
|-3-
|---
|--2
|---`;

var notes = tabsToNotes(sampleInput);
console.log(notes);
