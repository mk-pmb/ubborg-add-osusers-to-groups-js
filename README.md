
<!--#echo json="package.json" key="name" underline="=" -->
ubborg-add-osusers-to-groups
============================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Simplify adding existing osUsers to groups.
<!--/#echo -->



API
---

This module exports one function:

### addUsers(loginNames, grNames[, bun[, opt]])

Return an array of `osUserGroupMembership` specs for adding
users from list `loginNames` to users in list `grNames`.
Each of the lists should be array, but may also be string, in which
case it will be split by whitespace, comma and/or colon.

If `bun` is truthy, it's assumed to be an ubborg bundle, and the
memberships will be requested on its behalf. In this case, the
resulting promise will be returned, with the specs array stored
in a property `specs` on that promise.

`opt` may be a dictionary object to override details of each spec.




Usage
-----

see [test/basics.js](test/basics.js)


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
