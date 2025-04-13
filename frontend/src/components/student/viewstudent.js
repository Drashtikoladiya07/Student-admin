import { useEffect, useState } from "react";
import axios from "axios";

const Viewallstudent = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/getstudents");
                setStudents(response.data);
            } catch (error) {
                console.error("Error fetching students:", error);
            }
        };

        fetchStudents();
    }, []);

    return (
        <div className="flex flex-wrap justify-center gap-8 p-5 bg-gray-50">
            {students.map((student) => (
                <div key={student.id} className="w-96 bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center">
                        <img src={student.photo || "/default-profile.png"} alt="Profile" className="w-24 h-24 rounded border" />
                        <div className="ms-5">
                            <h2 className="text-xl font-semibold">{student.firstName} {student.lastName}</h2>
                            <p className="text-gray-500">{student.bio}</p>
                        </div>
                    </div>
                    <div className="text-left text-sm pt-4">
                        {[
                            { label: "First Name", value: student.firstName || "N/A" },
                            { label: "Last Name", value: student.lastName || "N/A" },
                            { label: "Father Name", value: student.fatherName || "N/A" },
                            { label: "Mother Name", value: student.motherName || "N/A" },
                            { label: "Gender", value: student.gender || "N/A" },
                            { label: "Date of Birth", value: student.dob || "N/A" },
                            { label: "Religion", value: student.religion || "N/A" },
                            { label: "Class", value: student.class || "N/A" },
                            { label: "Section", value: student.section || "N/A" },
                            { label: "Roll Number", value: student.roll || "N/A" },
                            { label: "Blood Group", value: student.bloodGroup || "N/A" },
                            { label: "Admission ID", value: student.admissionId || "N/A" },
                            { label: "Email", value: student.email || "N/A" },
                            { label: "Phone", value: student.phone || "N/A" },
                            { label: "Address", value: student.address || "N/A" }
                        ].map((item, index) => (
                            <p key={index} className="py-1 flex justify-between">
                                <strong className="w-40">{item.label}:</strong>
                                <span className="flex-1 text-left">{item.value}</span>
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Viewallstudent;