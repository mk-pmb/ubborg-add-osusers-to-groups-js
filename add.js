// eslint-disable-next-line spaced-comment
/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

module.exports = (function setup(d, f) {
  d = { assumeUserExists: true, member: true };
  function each(l, i) {
    if (!l.forEach) { l = String(l || '').split(/\s|:|,/).filter(Boolean); }
    l.forEach(i);
  }
  f = function addOsUsersToGroups(loginNames, grNames, bun, opt) {
    var s = [];
    each(loginNames, function addUser(u) {
      each(grNames, function addUser(g) {
        s.push(Object.assign({ loginName: u, grName: g }, d, opt));
      });
    });
    if (!bun) { return s; }
    return Object.assign(bun.needs('osUserGroupMembership', s), { specs: s });
  };
  return f;
}());
