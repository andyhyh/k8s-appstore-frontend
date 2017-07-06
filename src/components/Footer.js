import React from 'react'

const uninettLogo = require('../../node_modules/uninett-bootstrap-theme/images/Uninett_pil_rod.svg')

const stylex = {
  "paddingBottom:": "-6px"
}

const Footer = () => (
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="footer-uninett">
          <div className="footer-content-uninett">
              <div className="footer-logo" >
                <img src={uninettLogo} alt="Uninett logo" type="image/svg+xml"  style={stylex} />
              </div>
              <div className="footer-uninett-department">UNINETT AS 2013-2014</div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
