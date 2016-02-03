var tabsToNotes = require('tabs-to-notes');

var sampleInput = `---------------------|
---------------------|
-9-9-9-9-9-9-9-9-9-9-|
-9-9-9-9-9-9-9-9-9-9-|
-7-7-7-7-7-7-7-7-7-7-|
---------------------|`;

var notes = tabsToNotes(sampleInput);
console.log(notes);
