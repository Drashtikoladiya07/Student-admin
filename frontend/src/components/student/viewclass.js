import { useEffect, useState } from "react";
import axios from "axios";

const Viewallclass = () => {
    const [classes, setclasses] = useState([]);

    useEffect(() => {
        const fetchclass = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/getclasses");
                setclasses(response.data);
            } catch (error) {
                console.error("Error fetching class:", error);
            }
        };

        fetchclass();
    }, []);

    return (
        <div className="flex flex-wrap justify-center gap-8 p-5 bg-gray-50">
            {classes.map((Class) => (
                <div key={Class.id} className="w-96 bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-left text-sm pt-4">
                        {[
                            { label: "Teacher Name", value: Class.teacherName || "N/A" },
                            { label: "Subject", value: Class.subject || "N/A" },
                            { label: "ID No", value: Class.idno || "N/A" },
                            { label: "Class", value: Class.classes || "N/A" },
                            { label: "Section", value: Class.section || "N/A" },
                            { label: "Gender", value: Class.gender || "N/A" },
                            { label: "Date of Birth", value: Class.dob || "N/A" },
                            { label: "Time", value: Class.time || "N/A" },
                            { label: "Email", value: Class.email || "N/A" },
                            { label: "Phone", value: Class.phone || "N/A" },
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

export default Viewallclass;