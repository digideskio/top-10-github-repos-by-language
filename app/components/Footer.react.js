/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');

var Footer = React.createClass({

  /**
   * @return {object}
   */
  render: function() {

  	return (
      <footer id="footer">
        Courtesy of <a href="https://nodesource.com">NodeSource</a>.
      </footer>
    );
  }

});

module.exports = Footer;