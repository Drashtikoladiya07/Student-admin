const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/myschoolDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("Error:", err));

// Student Schema
const studentSchema = new mongoose.Schema({
    firstName: String, lastName: String, motherName: String, fatherName: String, gender: String, dob: String, roll: String, email: String, bloodGroup: String, religion: String, class: String, section: String, address: String, admissionId: String, phone: String, bio: String, photo: String
});

const Student = mongoose.model("Student", studentSchema);

// File Upload Configuration
const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// API to Handle Student Admission
app.post("/api/createstudents", upload.single("photo"), async (req, res) => {
    try {
        const { firstName, lastName, motherName, fatherName, gender, dob, roll, email, bloodGroup, religion, class: studentClass, section, address, admissionId, phone, bio } = req.body;
        const photo = req.file ? req.file.path : null;

        const newStudent = new Student({
            firstName, lastName, motherName, fatherName, gender, dob, roll, email, bloodGroup, religion, class: studentClass, section, address, admissionId, phone, bio, photo
        });

        await newStudent.save();
        res.status(201).json({ message: "Student Added Successfully", student: newStudent });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Class Schema
const classSchema = new mongoose.Schema({
    teacherName: String, idno: String, gender: String, classes: String, subject: String, section: String, time: String, date: String, phone: String, email: String, dob: String, // If any document like a syllabus is uploaded
});

const Class = mongoose.model("Class", classSchema);

// API to Handle Class Creation
app.post("/api/createclass", async (req, res) => {
    try {
        const { teacherName, idno, gender, classes, subject, section, time, date, phone, email, dob } = req.body;

        const newClass = new Class({ teacherName, idno, gender, classes, subject, section, time, date, phone, email, dob });

        await newClass.save();
        res.status(201).json({ message: "Class Schedule Added Successfully", classData: newClass });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



// API to Get All Students
app.get("/api/getstudents", async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// API to Get All class
app.get("/api/getclasses", async (req, res) => {
    try {
        const classes = await Class.find();
        res.status(200).json(classes);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
