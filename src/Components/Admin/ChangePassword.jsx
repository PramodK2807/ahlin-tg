import React from "react";

const ChangePassword = () => {
  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="card profile-card card-bx m-b30">
              <div className="card-header">
                <h6 className="title">Change Password</h6>
              </div>
              <form className="profile-form">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-4 m-b30">
                      <label className="form-label">Old Password </label>
                      <input
                        type="password"
                        className="form-control"
                        defaultValue="Jennifer Garcia"
                      />
                    </div>
                    <div className="col-sm-4 m-b30">
                      <label className="form-label">New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        defaultValue="xyz@gmail.com"
                      />
                    </div>
                    <div className="col-sm-4 m-b30">
                      <label className="form-label">Confirm New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        defaultValue="+49 9123819230"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary">UPDATE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
