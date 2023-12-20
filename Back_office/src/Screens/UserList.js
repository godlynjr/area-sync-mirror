import React from "react";
import Sidebar from "../Components/Sidebar";
import NavBar from "../Components/NavBar";
import DataTable from 'react-data-table-component';
import Button from "../Components/Button";
import Search from "../Components/Search";

const columns = [
    {
        name: 'Name',
        selector: row => row.name,
        sortable: true
    },
    {
        name: 'Email',
        selector: row => row.email,
        sortable: true
    },
    {
        name: 'Since',
        selector: row => row.since,
        sortable: true
    },
    {
        name: 'Status',
        selector: row => row.status,
        sortable: true
    },
];
const data = [
    {
        id: 1,
        name: 'yousaf',
        email: 'yousaf@gmail.com',
        since: '02/12/2023',
        status: 'online'
    },
    {
        id: 2,
        name: 'eliséé',
        email: 'eliséé@gmail.com',
        since: '10/02/2023',
        status: 'offline'
    },
    {
        id: 3,
        name: 'hanim',
        email: 'hanimyousaf@gmail.com',
        since: '23/11/2023',
        status: 'offline'
    },
    {
        id: 3,
        name: 'hanim',
        email: 'hanimyousaf@gmail.com',
        since: '23/11/2023',
        status: 'offline'
    },
    {
        id: 3,
        name: 'hanim',
        email: 'hanimyousaf@gmail.com',
        since: '23/11/2023',
        status: 'offline'
    },
    {
        id: 3,
        name: 'hanim',
        email: 'hanimyousaf@gmail.com',
        since: '23/11/2023',
        status: 'offline'
    },
    {
        id: 3,
        name: 'hanim',
        email: 'hanimyousaf@gmail.com',
        since: '23/11/2023',
        status: 'offline'
    },
    {
        id: 3,
        name: 'hanim',
        email: 'hanimyousaf@gmail.com',
        since: '23/11/2023',
        status: 'offline'
    },
    {
        id: 3,
        name: 'hanim',
        email: 'hanimyousaf@gmail.com',
        since: '23/11/2023',
        status: 'offline'
    },
    
];

const UserList = () => {
    return (
      <div className="flex">
        <div className="basis-[15%] h-[100vh] border">
          <Sidebar />
        </div>
        <div className="basis-[85%] border">
            <NavBar />
          <div className="block rounded-lg p-6">
            <h1 className="sm:text-[27px] md:text-[29px] text-[31px] text-black-900 text-shadow-ts font-bold font-roboto">
              List of Users
            </h1>
            <div className="flex justify-between">
                <Search />
                <Button bg={"red"} text={"Delete"} color={"white"} width={"100px"} height={"40px"} />
            </div>
            <div className="container mt-5 rounded-lg border-2 border-gray-300">
                <DataTable
                    columns={columns}
                    data={data}
                    selectableRows
                />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default UserList;
