import React from 'react';
import { Route, Routes, BrowserRouter as Router, NavLink, } from 'react-router-dom';
import { Order_List } from '../Pages/Order_List';
import { Order_Detail } from '../Pages/Order_Detail';
import { Customer } from '../Pages/Customer';
import { Analytics } from '../Pages/Analytics';
import { Reviews } from '../Pages/Reviews';
import { Foods } from '../Pages/Foods';
import { Foods_Detail } from '../Pages/Foods_Detail';
import { Customer_Detail } from '../Pages/Customer_Detail';
import { Calender } from '../Pages/Calender';
import { Chat } from '../Pages/Chat';
import { Dashboard } from '../Pages/Dashboard';

const SidebarLink = ({ to, label, }) => (
  <li className="mb-2">
    <NavLink
      to={to}
      className="block px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded transition duration-300"
      activeClassName="bg-blue-700" // Specify the active class
    >
      {label}
    </NavLink>
  </li>
);

const AppRoutes = () => (
  <Routes>
    <Route path="Dashboard" element={<Dashboard />} />
    <Route path="Order_List" element={<Order_List />} />
    <Route path="Order_Detail" element={<Order_Detail />} />
    <Route path="Customer" element={<Customer />} />
    <Route path="Analytics" element={<Analytics />} />
    <Route path="Reviews" element={<Reviews />} />
    <Route path="Foods" element={<Foods />} />
    <Route path="Foods_Detail" element={<Foods_Detail />} />
    <Route path="Customer_Detail" element={<Customer_Detail />} />
    <Route path="Calender" element={<Calender />} />
    <Route path="Chat" element={<Chat />} />
  </Routes>
);

const Router_App = () => (
  <Router>
    <div className='bg-cyan-800' style={{ display: 'flex' }} >
      <nav className='bg-cyan-900 p-6'>
        <div>
          <h1 className='heading'>Sedap<span className='text-slate-200'>.</span></h1>
          <p className='text-slate-200 mb-5'>Modern Admin Dashboard</p>
        </div>
        <ul>
          <SidebarLink to="/Dashboard" label="Dashboard" />
          <SidebarLink to="/Order_List" label="Order List" />
          <SidebarLink to="/Order_Detail" label="Order Detail" />
          <SidebarLink to="/Customer" label="Customer" />
          <SidebarLink to="/Analytics" label="Analytics" />
          <SidebarLink to="/Reviews" label="Reviews" />
          <SidebarLink to="/Foods" label="Foods" />
          <SidebarLink to="/Foods_Detail" label="Foods Detail" />
          <SidebarLink to="/Customer_Detail" label="Customer Detail" />
          <SidebarLink to="/Calender" label="Calender" />
          <SidebarLink to="/Chat" label="Chat" />
        </ul>
      </nav>
      <div style={{ marginLeft: '100px' }}>
        <AppRoutes />
      </div>
    </div>
  </Router>
);

export { Router_App };
