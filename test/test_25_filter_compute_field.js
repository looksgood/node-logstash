var vows = require('vows'),
    assert = require('assert'),
    os = require('os'),
    filter_helper = require('./filter_helper');

vows.describe('Filter compute field ').addBatch({
  'normal': filter_helper.create('compute_field', 'titi?value=ab#{bouh}', [
    {'@message': 'toto'},
    {'@message': 'toto', '@fields': {'bouh': 'tata'}},
    {'@message': 'toto', '@fields': {'bouh': 42}},
  ], [
    {'@message': 'toto'},
    {'@message': 'toto', '@fields': {'bouh': 'tata', 'titi': 'abtata'}},
    {'@message': 'toto', '@fields': {'bouh': 42, 'titi': 'ab42'}},
  ]),
}).export(module);