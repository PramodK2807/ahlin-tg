import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { UpdateContent } from "../../adminHttpServices/dashHttpService";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const EditContent = () => {
  const [titleAr, setTitleAr] = useState();
  const [titleEn, setTitleEn] = useState();
  const [contentAr, setContentAr] = useState("");
  const [contentEn, setContentEn] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(state);

  useEffect(() => {
    let values = state?.data;
    if (values) {
      setTitleAr(values?.titleAr);
      setTitleEn(values?.titleEn);
      setContentAr(values?.contentAr);
      setContentEn(values?.contentEn);
    }
  }, [state?._id]);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ color: [] }, { background: [] }], // Color options
      [{ script: "sub" }, { script: "super" }], // Subscript and superscript
      [{ align: [] }], // Text alignment
      ["link", "image", "video", "formula"], // Link, image, video, formula
      ["clean"], // Remove formatting
    ],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let { data } = await UpdateContent(id, {
        titleEn,
        titleAr,
        contentEn,
        contentAr,
      });
      if (data && !data?.error) {
        navigate(-1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateNew = () => {
    console.log("object");
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
                      <div className="col-6">
                        <div className="col-12 m-b30">
                          <label className="form-label">
                            Title (in English)
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={titleEn}
                            placeholder="English Title"
                            // disabled={!state?.isNew}
                            onChange={(e) => setTitleEn(e.target.value)}
                          />
                        </div>
                        <div className="col-12 m-b30">
                          <label className="form-label">
                            Description (in English)
                          </label>
                          <ReactQuill
                            theme="snow"
                            value={contentEn}
                            onChange={setContentEn}
                            modules={modules}
                            placeholder="English Description"
                          />
                        </div>
                        {state?.isEdit && (
                          <div className="">
                            <button className="btn btn-primary" type="submit">
                              Update
                            </button>
                          </div>
                        )}
                      </div>
                      <div className="col-6">
                        <div className="col-12 m-b30">
                          <label className="form-label">
                            Title (in Arabic)
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Arabic Title"
                            // disabled={!state?.isNew}
                            value={titleAr}
                            onChange={(e) => setTitleAr(e.target.value)}
                          />
                        </div>
                        <div className="col-12 m-b30">
                          <label className="form-label">
                            Description (in Arabic)
                          </label>
                          <ReactQuill
                            theme="snow"
                            value={contentAr}
                            onChange={setContentAr}
                            // onChange={setValue}
                            modules={modules}
                            placeholder="Arabic Description"
                          />
                        </div>
                        {state?.isEdit && (
                          <div className="">
                            <button className="btn btn-primary" type="submit">
                              Update
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    {state?.isNew && (
                      <div className="">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={handleCreateNew}
                        >
                          Create
                        </button>
                      </div>
                    )}
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
