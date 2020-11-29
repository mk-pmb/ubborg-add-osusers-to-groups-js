// eslint-disable-next-line spaced-comment
/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var addOsUsersToGroups = require('..'), eq = require('equal-pmb'),
  tu = require('./testUtil');


(function test(a, u, g, r, s) {
  a = tu.makeAssigner({ assumeUserExists: true, member: true });
  u = 'alice bob:carol';
  g = 'users,ftp';
  s = [
    a({ loginName: 'alice', grName: 'users' }),
    a({ loginName: 'alice', grName: 'ftp' }),
    a({ loginName: 'bob',   grName: 'users' }),
    a({ loginName: 'bob',   grName: 'ftp' }),
    a({ loginName: 'carol', grName: 'users' }),
    a({ loginName: 'carol', grName: 'ftp' }),
  ];

  r = addOsUsersToGroups(u, g);
  eq(r, s);

  r = addOsUsersToGroups(u, g, tu.bundleStub);
  eq(r, { t: 'osUserGroupMembership', a: s, specs: s });
}());



console.info('+OK basics test succeeded.');
