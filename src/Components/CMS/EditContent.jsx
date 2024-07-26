import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import { UpdateContent } from "../../adminHttpServices/dashHttpService";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const EditContent = () => {
  const [title, setTitle] = useState();
  const [value, setValue] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (state?.isNew) {
      setTitle("");
      setValue("");
    } else {
      setTitle(state?.data?.title);
      setValue(state?.data?.content);
    }
  }, []);

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
      let { data } = await UpdateContent(state?._id, {
        title: title,
        content: value,
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
                            value={title}
                            placeholder="English Title"
                            disabled={!state?.isNew}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>
                        <div className="col-12 m-b30">
                          <label className="form-label">
                            Description (in English)
                          </label>
                          <ReactQuill
                            theme="snow"
                            value={value}
                            onChange={setValue}
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
                            value={"عنوان"}
                            placeholder="Arabic Title"
                            disabled={!state?.isNew}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>
                        <div className="col-12 m-b30">
                          <label className="form-label">
                            Description (in Arabic)
                          </label>
                          <ReactQuill
                            theme="snow"
                            value={"المؤتمر الدولي العاشر ليونيكود  الشبكة العالمية انترنيت ويونيكود، حيث ستتم، على الصعيدين الدولي والمحلي على حد سواء مناقشة سبل استخدام يونكود في النظم القائمة وفيما يخص التطبيقات الحاسوبية، الخطوط، تصميم النصوص والحوسبة"}
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
