import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import NavBar from "../Components/NavBar";
import DataTable from 'react-data-table-component';
import Search from "../Components/Search";
import Infos from "../Data/Manage.js";
import EditUserModal from "../Components/EditUserModal";

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
            name: 'Password',
            selector: row => row.password
        },
        {
            name: 'Actions',
            cell: row => (
                <div className="flex gap-2">
                    <a className="cursor-pointer" onClick={() => handleEdit(row._id, row.username, row.email, row.password)}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg></a>
                    <a className="cursor-pointer" onClick={() => handleDelete(row._id)}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></a>
                </div>
            )
        },
    ];
    useEffect(() => {
        (async () => {
            try {
                const data = await Infos.getUsers();
                setUsers(data);
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

    const handleEdit = (userId, username, email, password) => {
        setSelectedUser({ userId, username, email, password });
        setEditModalOpen(true);
        console.log("Edit user with ID:", userId);
    };

    const handleDelete = (userId) => {
        const success = Infos.DeletetUserById(userId);
        console.log("Delete user with ID:", userId);
        console.log("Status: ", success);
    };

    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleEditModalClose = () => {
        setEditModalOpen(false);
        setSelectedUser(null);
    };

    // const [filteredUsers, setFilteredUsers] = useState(users);
    // const handleSearch = (searchTerm) => {
    //     if (searchTerm.trim() === '') {
    //         // Si la recherche est vide, réinitialiser à la liste complète des utilisateurs
    //         setFilteredUsers(users);
    //     } else {
    //         // Sinon, appliquer la fonction de recherche
    //         const result = Infos.searchUserByName(users, searchTerm);
    //         setFilteredUsers(result);
    //     }
    //     console.log('Recherche effectuée avec le terme :', searchTerm);
    // };

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
                    {/* <Search onSearch={handleSearch} /> */}
                    <div className="container mt-5 rounded-lg border-2 border-gray-300">
                        <DataTable
                            columns={columns}
                            data={users}
                            pagination
                            paginationPerPage={8}
                            paginationRowsPerPageOptions={[8]}
                            customStyles={customStyles}
                        />
                    </div>
                </div>
                {selectedUser && <EditUserModal
                    isOpen={isEditModalOpen}
                    onClose={handleEditModalClose}
                    user={selectedUser}
                />}
            </div>
        </div>
    );
};

export default UserList;
