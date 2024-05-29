import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import { UpdateContent } from "../../adminHttpServices/dashHttpService";

const EditContent = () => {
  const [contentDetails, setContentDetails] = useState({});
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setContentDetails(state?.data);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contentDetails);
    try {
      let { data } = await UpdateContent(contentDetails?._id, {
        title: contentDetails.title,
        content: contentDetails.content,
      });
      if (data && !data?.error) {
        navigate(-1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout activeSlide={"Content"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="card profile-card card-bx m-b30">
                <div className="card-header">
                  <h6 className="title">{state?.title}</h6>
                </div>
                <form className="profile-form" onSubmit={handleSubmit}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 m-b30">
                        <label className="form-label">Title</label>
                        <input
                          type="text"
                          className="form-control"
                          value={contentDetails?.title}
                          disabled
                          onChange={(e) =>
                            setContentDetails({
                              ...contentDetails,
                              title: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="col-12 m-b30">
                        <label className="form-label">Description</label>
                        <textarea
                          className="form-control edit_content_textarea"
                          value={contentDetails?.content}
                          onChange={(e) =>
                            setContentDetails({
                              ...contentDetails,
                              content: e.target.value,
                            })
                          }
                          disabled={!state?.isEdit}
                        />
                      </div>
                    </div>
                  </div>
                  {state?.isEdit && (
                    <div className="card-footer">
                      <button className="btn btn-primary" type="submit">
                        Update
                      </button>
                    </div>
                  )}
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
