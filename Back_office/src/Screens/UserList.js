import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import NavBar from "../Components/NavBar";
import DataTable from 'react-data-table-component';
import Button from "../Components/Button";
import Search from "../Components/Search";
import Infos from "../Data/Manage.js";



const UserList = () => {
    const [users, setUsers] = useState([]);
    const columns = [
        {
            name: 'Id',
            selector: row => row._id
        },
        {
            name: 'Username',
            selector: row => row.username
        },
        {
            name: 'Email',
            selector: row => row.email
        },
        {
            name: 'Actions',
            cell: row => (
                <div>
                    <Button bg={"blue"} text={"Edit"} color={"white"} width={"60px"} height={"30px"} onClick={() => handleEdit(row._id)} />
                    <Button bg={"red"} text={"Delete"} color={"white"} width={"60px"} height={"30px"} onClick={() => handleDelete(row._id)}/>
                </div>
            )
        },
    ];
    useEffect(() => {
        (async () => {
            try {
                const data = await Infos.getUsers();
                setUsers(data);
                console.log("Reponsee", data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        })();
    }, []);

    const customStyles = {
        headRow: {
            style: {
                minHeight: '56px',
            },
        },
        headCells: {
            style: {
                fontSize: '14px',
                fontWeight: 'bold',
            },
        },
        rows: {
            style: {
                minHeight: '52px',
            },
        },
        pagination: {
            style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
        },
    };

    const handleEdit = (userId) => {
        console.log("Edit user with ID:", userId);
    };

    const handleDelete = (userId) => {
        console.log("Delete user with ID:", userId);
    };

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
                    <Search />
                    <div className="container mt-5 rounded-lg border-2 border-gray-300">
                        <DataTable
                            columns={columns}
                            data={users}
                            pagination
                            paginationPerPage={8}
                            paginationRowsPerPageOptions={[8, 16, 24]}
                            customStyles={customStyles}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserList;
