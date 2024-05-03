import React from 'react'
import Layout from '../Layout/Layout'

const GuestsDetails = () => {
  return (
    <Layout activeSlide={"Dashboard"}>
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="card profile-card card-bx m-b30">
              <div className="card-header">
                <h6 className="title">Guests Details</h6>
              </div>
              <form className="profile-form">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-3 m-b30">
                      <label className="form-label">
                        Name<sup className="mandatesign">*</sup>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Robin"
                      />
                    </div>
                    <div className="col-md-3 m-b30">
                      <label className="form-label">
                        Email<sup className="mandatesign">*</sup>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue="robin@gmail.com"
                      />
                    </div>
                    <div className="col-md-3 m-b30">
                      <label className="form-label">
                        Mobile NO<sup className="mandatesign">*</sup>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="+955 8123819230"
                      />
                    </div>
                    <div className="col-md-3 m-b30">
                      <label className="form-label">
                        Registered On<sup className="mandatesign">*</sup>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="21 August 2022"
                      />
                    </div>
                    <div className="col-md-12 m-b30">
                      <label className="form-label">
                        Address<sup className="mandatesign">*</sup>
                      </label>
                      <div className="rounded p-4 border">
                        <div className="d-flex justify-content-between checkboxdivwidth">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              Home
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="flexCheckChecked"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              Office
                            </label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-3 py-3">
                            <div>
                              <label>Plot No :</label>
                              <input
                                type="text"
                                className="border-bottom inpubordernone ms-2"
                                defaultValue="512-A"
                              />
                            </div>
                            <div className="pt-4">
                              <label>District :</label>
                              <input
                                type="text"
                                className="border-bottom inpubordernone  ms-2"
                                defaultValue="Riyadh"
                              />
                            </div>
                          </div>
                          <div className="col-md-3 py-3">
                            <div>
                              <label>Area :</label>
                              <input
                                type="text"
                                className="border-bottom inpubordernone  ms-2"
                                defaultValue="Riyadh"
                              />
                            </div>
                            <div className="pt-4">
                              <label>State :</label>
                              <input
                                type="text"
                                className="border-bottom inpubordernone  ms-2"
                                defaultValue="Makkah"
                              />
                            </div>
                          </div>
                          <div className="col-md-3 py-3">
                            <div>
                              <label>Landmark :</label>
                              <input
                                type="text"
                                className="border-bottom inpubordernone  ms-2 "
                                defaultValue="2929 Al Madina Road"
                              />
                            </div>
                            <div className="pt-4">
                              <label>Country :</label>
                              <input
                                type="text"
                                className="border-bottom inpubordernone  ms-2"
                                defaultValue="Saudi Arabia"
                              />
                            </div>
                          </div>
                          <div className="col-md-3 py-3">
                            <div>
                              <label>City :</label>
                              <input
                                type="text"
                                className="border-bottom inpubordernone  ms-2"
                                defaultValue="Jeddah"
                              />
                            </div>
                            <div className="pt-4">
                              <label>PinCode :</label>
                              <input
                                type="text"
                                className="border-bottom inpubordernone  ms-2"
                                defaultValue={11564}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="card dz-card" id="bootstrap-table1">
              <div className="card-header flex-wrap border-0">
                <div>
                  <h4 className="card-title">Booking History</h4>
                </div>
              </div>
              <div className="card-body pt-0">
                <div className="table-responsive">
                  <table className="table mb-0 table-hover">
                    <thead>
                      <tr>
                        <th>S.NO</th>
                        <th>Booking ID</th>
                        <th>Customer Name</th>
                        <th>Booking Type</th>
                        <th>Booking Amount</th>
                        <th>Booking Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>#ID0047687</td>
                        <td>James</td>
                        <td>Flower Shop</td>
                        <td>200 SAR</td>
                        <td>21 Nov 2024</td>
                        <td>
                          <div className="d-flex px-3">
                            <a
                              href="booking-management-details.html"
                              className="btn btn-primary shadow btn-xs sharp me-2"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>#ID0047896</td>
                        <td>Roby sen</td>
                        <td>Hotels/Restaurent</td>
                        <td>150 SAR</td>
                        <td>01 August 2025</td>
                        <td>
                          <div className="d-flex px-3">
                            <a
                              href="booking-management-details.html"
                              className="btn btn-primary shadow btn-xs sharp me-2"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>#ID0047896</td>
                        <td>Mini Arora</td>
                        <td>Event Management</td>
                        <td>120 SAR</td>
                        <td>01 August 2024</td>
                        <td>
                          <div className="d-flex px-3">
                            <a
                              href="booking-management-details.html"
                              className="btn btn-primary shadow btn-xs sharp me-2"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default GuestsDetails