// eslint-disable-next-line spaced-comment
/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var tu = {}, obAss = Object.assign;

tu.makeAssigner = function (d) {
  return function (o) { return obAss(o, d); };
};

tu.bundleStub = {
  needs: function needs(t, a) { return { t: t, a: a }; },
};





module.exports = tu;
