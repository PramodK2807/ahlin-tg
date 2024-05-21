import React from "react";
import Layout from "../Layout/Layout";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default Admin;
