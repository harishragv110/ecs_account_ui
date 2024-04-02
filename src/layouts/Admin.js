import React from "react";
import Sidebar from "../components/common/Sidebar";
import Home from "../pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Footer from "../components/common/Footer";

import Users from "../pages/Users/Users";
import UsersAdd from "../pages/Users/UsersAdd";
import UsersEdit from "../pages/Users/UsersEdit";
import UsersView from "../pages/Users/UsersView";

import Department from "../pages/Department/Department";
import DepartmentAdd from "../pages/Department/DepartmentAdd";
import DepartmentEdit from "../pages/Department/DepartmentEdit";

function Admin({ handleLogout }) {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <Sidebar onLogout={handleLogout}/>
        <div className="h-screen flex-grow-1 overflow-y-lg-auto">
          <main className="py-6 bg-surface-secondary">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />

              {/* {/ Department /} */}
              <Route path="/department" element={<Department/>}/>
              <Route path="/department/add" element={<DepartmentAdd/>}/>
              <Route path="/department/edit" element={<DepartmentEdit/>}/>

              {/* Users */}
              <Route path="/users" element={<Users />} />
              <Route path="/users/add" element={<UsersAdd />} />
              <Route path="/users/edit" element={<UsersEdit />} />
              <Route path="/users/view" element={<UsersView />} />

            </Routes>
            <Footer />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Admin;
