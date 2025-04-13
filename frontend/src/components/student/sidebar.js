import React, { useState } from "react";
import StudentAdmissionForm from "./admission";


const Sidebar = ({ isOpen, setIsOpen }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (menuName) => {
        if (isOpen) {
            setOpenDropdown(openDropdown === menuName ? null : menuName);
        }
    };

    const data = {
        menu: [
            { name: "Home", icon: "bi bi-house", id: "/" },
            {
                name: "Students",
                icon: "bi bi-people",
                dropdown: [
                    { name: "View Students", icon: "bi bi-eye", id: "/viewallstudent" },
                    { name: "Add New Student", icon: "bi bi-plus-circle", id: "/addstudent" },
                ],
            },
            {
                name: "Classes",
                icon: "bi bi-building",
                dropdown: [
                    { name: "View Classes", icon: "bi bi-eye", id: "/viewallclass" },
                    { name: "Add New Class", icon: "bi bi-plus-circle", id: "/addclass" },
                ],
            },
            { name: "Assignments", icon: "bi bi-journal-check", id: "/assignments" },
            { name: "Exams", icon: "bi bi-file-earmark-text", id: "/exams" },
            { name: "Results", icon: "bi bi-clipboard-data", id: "/results" },
            { name: "Attendance", icon: "bi bi-calendar-check", id: "/attendance" },
            { name: "Events", icon: "bi bi-calendar3", id: "/events" },
            { name: "Announcements", icon: "bi bi-megaphone", id: "/announcements" },
            { name: "Settings", icon: "bi bi-gear", id: "/settings" },
            { name: "Logout", icon: "bi bi-box-arrow-in-right", id: "/logout" },
        ],
    };

    return (
        <div className="flex mt-20">
            <aside className={`bg-white text-blue-950 font-medium h-screen fixed top-0 left-0 shadow-lg transition-all duration-300 ${isOpen ? "w-64" : "w-16"}`}>
                <div className="flex items-center justify-between p-4">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-blue-950">
                        <i className="bi bi-list text-2xl"></i>
                    </button>
                </div>
                <ul className="">
                    {data.menu.map((item, index) => (
                        <li key={index} className="relative">
                            {item.dropdown ? (
                                <div>
                                    <div className="flex items-center p-3 cursor-pointer hover:bg-gray-100 hover:text-blue-800" onClick={() => toggleDropdown(item.name)}>
                                        <i className={`${item.icon} text-lg`}></i>
                                        <span className={`ml-3 transition-all duration-300 ${isOpen ? "block" : "hidden"} whitespace-nowrap`}>{item.name}</span>
                                        <i className={`bi ml-auto ${openDropdown === item.name ? "bi-chevron-up" : "bi-chevron-down"} transition-all duration-300 ${isOpen ? "block" : "hidden"}`}></i>
                                    </div>
                                    {openDropdown === item.name && isOpen && (
                                        <ul className="ml-6 border-gray-500">
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <li key={subIndex} className="p-2 hover:bg-gray-100 hover:text-blue-800 cursor-pointer">
                                                    <a href={subItem.id} className="flex items-center">
                                                        <i className={`${subItem.icon} text-sm`}></i>
                                                        <span className="ml-2">{subItem.name}</span>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ) : (
                                <a href={item.id} className="flex items-center p-3 hover:bg-gray-100 hover:text-blue-800">
                                    <i className={`${item.icon} text-lg`}></i>
                                    <span className={`ml-3 transition-all duration-300 ${isOpen ? "block" : "hidden"} whitespace-nowrap`}>{item.name}</span>
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;
