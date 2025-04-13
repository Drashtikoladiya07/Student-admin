import React, { useState } from "react";
import axios from "axios";

const AddClass = () => {
    const [formData, setFormData] = useState({
        teacherName: "",
        idno: "",
        gender: "",
        class: "",
        subject: "",
        section: "",
        time: "",
        dob: "",
        phone: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/createclass", formData);
            alert("Class Added Successfully!");
            console.log(response.data);
        } catch (error) {
            console.error("Error submitting form", error);
            alert("Failed to add Class!");
        }
    };

    const handleReset = () => {
        setFormData({
            teacherName: "",
            idno: "",
            gender: "",
            classes: "",
            subject: "",
            section: "",
            time: "",
            dob: "",
            phone: "",
            email: "",
        });
    };

    return (
        <div>
            <div>
                <h1 className="text-2xl font-semibold">Classes</h1>
                <div className="py-3">
                    <a href={"/"} className="text-blue-500 hover:text-blue-900 font-medium">Home</a><a href="#" className="text-blue-900 font-medium"><i class="bi bi-chevron-right text-blue-900 px-3 font-medium"></i>  Add New Class</a>
                </div>
            </div>
            <div className="max-w-full bg-gray-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-700 mb-5">Add New Class Schedule</h2>
                <form onSubmit={handleSubmit} className="grid lg:grid-cols-4 gap-4">
                    <div>
                        <label className="block text-gray-700 font-medium pb-2 ps-2">Teacher Name *</label>
                        <input type="text" name="teacherName" value={formData.teacherName} onChange={handleChange} required className="w-full bg-gray-100 text-gray-400 p-2 border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium pb-2 ps-2">ID No</label>
                        <input type="text" name="idno" value={formData.idno} onChange={handleChange} className="w-full bg-gray-100 text-gray-400 p-2 border rounded-lg" />
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
                        <label className="block text-gray-700 font-medium pb-2 ps-2">Class</label>
                        <select name="classes" value={formData.classes} onChange={handleChange} className="w-full bg-gray-100 text-gray-400 p-2 border rounded-lg">
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
                        <label className="block text-gray-700 font-medium pb-2 ps-2">Subject *</label>
                        <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full bg-gray-100 text-gray-400 p-2 border rounded-lg">
                            <option value="">Please Select Group</option>
                            <option value="English">English</option>
                            <option value="Mathmethics">Mathmethics</option>
                            <option value="Physics">Physics</option>
                            <option value="chemistry">chemisty</option>
                            <option value="Biology">Biology</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium pb-2 ps-2">Section *</label>
                        <select name="section" value={formData.section} onChange={handleChange} required className="w-full bg-gray-100 text-gray-400 p-2 border rounded-lg">
                            <option value="">Please Select Religion</option>
                            <option value="pink">Pink</option>
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="rose">Rose</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium pb-2 ps-2">Time *</label>
                        <input type="text" name="time" value={formData.time} onChange={handleChange} required className="w-full bg-gray-100 text-gray-400 p-2 border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium pb-2 ps-2">Date of Birth *</label>
                        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="w-full bg-gray-100 text-gray-400 p-2 border rounded-lg" />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium pb-2 ps-2">Phone*</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-gray-100 text-gray-400 p-2 border rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium pb-2 ps-2">E-Mail*</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-gray-100 text-gray-400 p-2 border rounded-lg" />
                    </div><br />
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

export default AddClass;