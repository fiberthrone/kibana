import _ from 'lodash';
import IndexPatternsFieldFormatProvider from 'ui/index_patterns/_field_format/field_format';

function cutToPipe(str) {
  const pos = str.indexOf('|');
  return pos === -1 ? str : str.substring(0,  pos);
}

export default function CutToPipeFormatProvider(Private) {
  const FieldFormat = Private(IndexPatternsFieldFormatProvider);
  _.class(CutToPipe).inherits(FieldFormat);
  function CutToPipe(params) {
    CutToPipe.Super.call(this, params);
  }
  CutToPipe.id = 'cuttopipe';
  CutToPipe.title = 'Cut to pipe';
  CutToPipe.fieldType = ['string'];
  CutToPipe.editor = require('ui/stringify/editors/cuttopipe.html');
  CutToPipe.prototype._convert = {
    text: cutToPipe,
    html: cutToPipe
  };
  CutToPipe.sampleInputs = [
    'Hello',
    'Hello | world',
    'I\'m | Iron | Man!'
  ];

  return CutToPipe;
}
