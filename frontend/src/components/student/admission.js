import React, { useState } from "react";
import axios from "axios";

const StudentAdmissionForm = () => {
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", motherName: "", fatherName: "", gender: "", dob: "", roll: "", email: "", bloodGroup: "", religion: "", class: "", section: "", address: "", admissionId: "", phone: "", bio: "", photo: null,
    });
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });

        if (formData.photo) {
            formDataToSend.append("photo", formData.photo);
        }

        try {
            const response = await axios.post("http://localhost:3000/api/createstudents", formDataToSend, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            alert("Student Added Successfully!");
            console.log(response.data);
        } catch (error) {
            console.error("Error submitting form", error);
            alert("Failed to add student!");
        }
    };

    const handleReset = () => {
        setFormData({
            firstName: "", lastName: "", motherName: "", fatherName: "", gender: "", dob: "", roll: "", email: "", bloodGroup: "", religion: "", class: "", section: "", address: "", admissionId: "", phone: "", bio: "", photo: null,
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, photo: e.target.files[0] });
    };

    return (
        <div>
            <div>
                <h1 className="text-2xl font-semibold">Students</h1>
                <div className="py-3">
                    <a href={"/"} className="text-blue-500 hover:text-blue-900 font-medium">Home</a><a href="#" className="text-blue-900 font-medium"><i class="bi bi-chevron-right text-blue-900 px-3 font-medium"></i>  Student Admit Form</a>
                </div>
            </div>
            <div className="max-w-full bg-gray-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-700 mb-5">Add New Student</h2>
                <form onSubmit={handleSubmit} className="grid lg:grid-cols-4 gap-4">
                    <div>
                        <label className="block text-gray-700 font-medium pb-2 ps-2">First Name *</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full bg-gray-100 text-gray-400 p-2 border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium pb-2 ps-2">Last Name *</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full bg-gray-100 text-gray-400 p-2 border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium pb-2 ps-2">Mother Name *</label>
                        <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required className="w-full bg-gray-100 text-gray-400 p-2 border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium pb-2 ps-2">Father Name *</label>
                        <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required className="w-full bg-gray-100 text-gray-400 p-2 border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium pb-2 ps-2">Gender *</label>
                        <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full bg-gray-100 text-gray-400 p-2 border rounded-lg">
                            <option value="">Please Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium pb-2 ps-2">Date of Birth *</label>
                        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="w-full bg-gray-100 text-gray-400 p-2 border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium pb-2 ps-2">RollNumber</label>
                        <input type="text" name="roll" value={formData.roll} onChange={handleChange} className="w-full bg-gray-100 text-gray-400 p-2 border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium pb-2 ps-2">E-Mail</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-100 text-gray-400 p-2 border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium pb-2 ps-2">Blood Group *</label>
                        <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required className="w-full bg-gray-100 text-gray-400 p-2 border rounded-lg">
                            <option value="">Please Select Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium pb-2 ps-2">Religion *</label>
                        <select name="religion" value={formData.religion} onChange={handleChange} required className="w-full bg-gray-100 text-gray-400 p-2 border rounded-lg">
                            <option value="">Please Select Religion</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Muslim">Muslim</option>
                            <option value="Christian">Christian</option>
                            <option value="Sikh">Sikh</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium pb-2 ps-2">Class *</label>
                        <select name="class" value={formData.class} onChange={handleChange} required className="w-full bg-gray-100 text-gray-400 p-2 border rounded-lg">
                            <option value="">Please Select Class</option>
                            <option value="1">Class 1</option>
                            <option value="2">Class 2</option>
                            <option value="3">Class 3</option>
                            <option value="4">Class 4</option>
                            <option value="5">Class 5</option>
                            <option value="6">Class 6</option>
                            <option value="7">Class 7</option>
                            <option value="8">Class 8</option>
                            <option value="9">Class 9</option>
                            <option value="10">Class 10</option>
                            <option value="11-science">Class 11 (Science)</option>
                            <option value="11-commerce">Class 11 (Commerce)</option>
                            <option value="12-science">Class 12 (Science)</option>
                            <option value="12-commerce">Class 12 (Commerce)</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium pb-2 ps-2">Section *</label>
                        <select name="section" value={formData.section} onChange={handleChange} required className="w-full bg-gray-100 text-gray-400 p-2 border rounded-lg">
                            <option value="">Please Select Section</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium pb-2 ps-2">Address *</label>
                        <input type="text" name="address" value={formData.address} onChange={handleChange} required className="w-full bg-gray-100 text-gray-400 p-2 border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium pb-2 ps-2">Admission ID</label>
                        <input type="text" name="admissionId" value={formData.admissionId} onChange={handleChange} className="w-full bg-gray-100 text-gray-400 p-2 border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium pb-2 ps-2">Phone</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-gray-100 text-gray-400 p-2 border rounded-lg" />
                    </div>
                    <div className="col-span-2">
                        <label className="block text-gray-700 font-medium pb-2 ps-2">Short BIO</label>
                        <textarea name="bio" value={formData.bio} onChange={handleChange} className="w-full bg-gray-100 text-gray-400 p-2 border rounded-lg" rows="5"></textarea>
                    </div>
                    <div className="col-span-2">
                        <label className="block text-gray-700 font-medium pb-2 ps-2">Upload Student Photo (150px X 150px)</label>
                        <input type="file" onChange={handleFileChange} className="w-full text-gray-400 p-2" />
                    </div>
                    <div className="col-span-2 flex justify-between mt-4">
                        <button type="submit" className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-lg">submit</button>
                        <button
                            type="reset"
                            className="bg-blue-900 text-white px-6 py-2 rounded-lg shadow-lg"
                            onClick={handleReset}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StudentAdmissionForm;