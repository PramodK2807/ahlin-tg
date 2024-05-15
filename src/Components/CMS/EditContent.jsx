import React from "react";
import Layout from "../Layout/Layout";

const EditContent = () => {
  return (
    <Layout activeSlide={"Content"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="card profile-card card-bx m-b30">
                <div className="card-header">
                  <h6 className="title">Edit Content</h6>
                </div>
                <form className="profile-form">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 m-b30">
                        <label className="form-label">Title</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="About Us"
                        />
                      </div>
                      <div className="col-12 m-b30">
                        <label className="form-label">Description</label>
                        <textarea
                          className="form-control edit_content_textarea"
                          defaultValue={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary">Update</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditContent;
