import React from 'react';

function TopBanner() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-2">
          <img src="./logo192.png" alt="companyLogo" />
        </div>
        <div className="col align-self-center text-start">
          <h1>Top Banner</h1>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TopBanner;
