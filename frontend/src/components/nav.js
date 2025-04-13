import React, { useState } from "react";
import Sidebar from "./student/sidebar" // Import Sidebar

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className=" text-blue-950 flex">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <nav className="bg-white shadow p-3 flex justify-between items-center fixed top-0 w-full z-10">
                <div className="relative flex items-center">
                    <h1 className="text-2xl italic font-semibold pe-5">Student Admin</h1>
                    <button className="text-2xl px-4" onClick={() => setIsOpen(!isOpen)}>
                        <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"}`}></i>
                    </button>
                    <input type="text" placeholder="Search" className="w-80 px-3 py-2 border border-gray-300 rounded-lg shadow-sm" />
                    <button className="absolute right-3 top-2">
                        <i className="bi bi-search"></i>
                    </button>
                </div>
                <div>
                    <i className="bi bi-bell text-2xl px-3"></i>
                    <i className="bi bi-chat-left-text text-2xl px-3"></i>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;



// import React, { useState } from "react";
// import StudentAdmissionForm from "./student/admission";

// function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [openDropdown, setOpenDropdown] = useState(null);
//     const [showForm, setShowForm] = useState(false);

//     const data = {
//         menu: [
//             { name: "Home", icon: "bi bi-house" },
//             {
//                 name: "Students",
//                 icon: "bi bi-people",
//                 dropdown: [
//                     { name: "View Students", icon: "bi bi-eye", id: '/viewallstudent' },
//                     { name: "Add New Student", icon: "bi bi-plus-circle", action: () => setShowForm(true), id: '/addstudent' }, // Show form
//                     // { name: "Student Details", icon: "bi bi-card-list" },
//                 ],
//             },
//             {
//                 name: "Classes",
//                 icon: "bi bi-building",
//                 dropdown: [
//                     { name: "View Classes", icon: "bi bi-eye" },
//                     { name: "Add New Class", icon: "bi bi-plus-circle" },
//                 ],
//             },
//             { name: "Assignments", icon: "bi bi-journal-check" },
//             { name: "Exams", icon: "bi bi-file-earmark-text" },
//             { name: "Results", icon: "bi bi-clipboard-data" },
//             { name: "Attendance", icon: "bi bi-calendar-check" },
//             { name: "Events", icon: "bi bi-calendar3" },
//             { name: "Announcements", icon: "bi bi-megaphone" },
//             { name: "Settings", icon: "bi bi-gear" },
//             { name: "Logout", icon: "bi bi-box-arrow-in-right" },
//         ],
//     };

//     const toggleDropdown = (menuName) => {
//         setOpenDropdown(openDropdown === menuName ? null : menuName);
//     };

//     return (
//         <div className="h-screen text-blue-950 flex">
//             <nav className="bg-white shadow p-3 flex justify-between items-center fixed top-0 w-full z-10">
//                 <div className="relative flex items-center">
//                     <h1 className="text-2xl italic font-semibold pe-5">Student Admin</h1>
//                     <button className="text-2xl px-4" onClick={() => setIsOpen(!isOpen)}>
//                         <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"}`}></i>
//                     </button>
//                     <input type="text" placeholder="Search" className="w-80 px-3 py-2 border border-gray-300 rounded-lg shadow-sm" />
//                     <button className="absolute right-3 top-2">
//                         <i className="bi bi-search"></i>
//                     </button>
//                 </div>
//                 <div>
//                     <i className="bi bi-bell text-2xl px-3"></i>
//                     <i className="bi bi-chat-left-text text-2xl px-3"></i>
//                 </div>
//             </nav>
//             <div className="flex pt-16 h-full w-full">
//                 <div className={`bg-white font-medium shadow h-full px-3 fixed left-0 top-16 ${isOpen ? "w-64" : "w-16"} transition-all duration-300`}>
//                     <ul className="mt-3 space-y-3">
//                         {data.menu.map((item, index) => (
//                             <li key={index}>
//                                 {item.dropdown ? (
//                                     <div>
//                                         <div className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700" onClick={() => toggleDropdown(item.name)}>
//                                             <i className={item.icon}></i>
//                                             {isOpen && <span>{item.name}</span>}
//                                             {isOpen && (<i className={`bi ${openDropdown === item.name ? "bi-chevron-up" : "bi-chevron-down"} ml-auto`}></i>)}
//                                         </div>
//                                         {openDropdown === item.name && (
//                                             <ul className="ps-6">
//                                                 {item.dropdown.map((subItem, subIndex) => (
//                                                     <li
//                                                         key={subIndex}
//                                                         className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700"
//                                                         onClick={subItem.action ? subItem.action : null}
//                                                     >
//                                                         <i className={subItem.icon}></i>
//                                                         <a href={subItem.id}>{isOpen && <span>{subItem.name}</span>}</a>
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         )}
//                                     </div>
//                                 ) : (
//                                     <a href={item.id} className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700">
//                                         <i className={item.icon}></i>
//                                         {isOpen && <span>{item.name}</span>}
//                                     </a>
//                                 )}
//                             </li>

//                         ))}
//                     </ul>
//                 </div>
//                 {/* <div className={`flex-1 p-4 transition-all duration-300 ${isOpen ? "ml-64" : "ml-16"}`}>
//                     <StudentAdmissionForm />
//                 </div> */}
//             </div>
//         </div>
//     );
// }

// export default Navbar;
