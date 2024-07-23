import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { MDBDataTable } from "mdbreact";
import {
  DeleteContent,
  GetContent,
} from "../../adminHttpServices/dashHttpService";
import { Link } from "react-router-dom";
import moment from "moment";

const ContentManagement = () => {
  const [contentM, setContentM] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sno",
        width: 50,
        selected: false,
      },
      {
        label: "Title",
        field: "title",
        width: 50,
        selected: false,
      },

      {
        label: "Status",
        field: "status",
        width: 100,
        selected: false,
      },
      {
        label: "Last updated",
        field: "date",
        width: 100,
        selected: false,
      },
      {
        label: "Actions",
        field: "actions",
        width: 100,
        selected: false,
      },
    ],
    rows: [],
  });

  useEffect(() => {
    getContent();
  }, []);

  const getContent = async () => {
    let { data } = await GetContent();
    console.warn(data);
    if (data && !data?.error) {
      const newRows = [];
      let values = data?.results?.contents;
      values
        ?.sort((a, b) => new Date(b?.updatedAt) - new Date(a?.updatedAt))
        ?.map((list, index) => {
          const returnData = {};
          returnData.sno = index + 1;
          returnData.title = list?.title || "NA";

          returnData.status = list?.status || "NA";
          returnData.date = moment(list?.updatedAt).format("Do MMMM YYYY");

          // returnData.status = (
          //   <div className="check_toggle text-center" key={list?._id}>
          //     <input
          //       type="checkbox"
          //       defaultChecked={list?.status}
          //       name="check1"
          //       id={list?._id}
          //       className="d-none"
          //       // onClick={() => {
          //       //   changeStatus(list?._id, list?.status);
          //       // }}
          //     />
          //     <label for={list?._id}></label>
          //   </div>
          // );
          returnData.actions = (
            <div className="d-flex">
              <Link
                to={`/Content-Management/Details/${list?._id}`}
                state={{
                  isEdit: true,
                  data: list,
                }}
                className="btn btn-primary shadow btn-xs sharp me-2"
              >
                <i className="fa fa-edit"></i>
              </Link>
              <Link
                to={`/Content-Management/Details/${list?._id}`}
                state={{
                  isEdit: false,
                  data: list,
                }}
                className="btn btn-primary shadow btn-xs sharp me-2"
              >
                <i className="fa fa-eye"></i>
              </Link>
              <button
                type="button"
                onClick={() => handleDeleteItem(list?._id)}
                className="btn btn-danger shadow btn-xs sharp"
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          );

          newRows.push(returnData);
        });
      setContentM({ ...contentM, rows: newRows });
    }
  };
  const handleDeleteItem = async (id) => {
    try {
      let { data } = await DeleteContent(id);
      if (data && !data.error) {
        getContent();
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const changeStatus = async (id) => {
  //   try {
  //     let { data } = await Change(id);
  //     if (data && !data.error) {
  //       getContent();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <Layout activeSlide={"Content"}>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="card dz-card" id="bootstrap-table1">
                <div className="col-12 card-body position-relative card-body-2">
                  <div className="d-flex card_title_container">
                    <h4 className="card-title">Content Management</h4>
                    <p className="ps-2 d-none">(14,555)</p>
                  </div>
                  <div className="search_icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                  {/* <div className="d-flex filter_modal">
                    <button
                      type="button"
                      className="btn filter_manage px-3 py-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@mdo"
                    >
                      <i className="fa-solid fa-filter" />
                    </button>
                  </div> */}

                  <div className="table-responsive mdb_table mdb_table_new">
                    <MDBDataTable
                      bordered
                      displayEntries={true}
                      entries={10}
                      className="text-nowrap"
                      hover
                      data={contentM}
                      noBottomColumns
                      sortable={true}
                      paginationLabel={"«»"}
                      // entriesOptions={[5,10,20,30,50,100,150,200]}
                    />
                  </div>
                  <div className="table-responsive mdb_table2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContentManagement;
