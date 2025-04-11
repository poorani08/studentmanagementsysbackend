
const student = require("../model/studentmodel");
const createstudent = async (req, res) => {
    const { name, age, department } = req.body;
    try {
        const newstud = new student({ name, age, department });
        await newstud.save();
        res.status(201).json(newstud);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const getstudent = async (req, res) => {
    try {
        const studs = await student.find();
        res.json(studs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const getstudentbyid = async (req, res) => {
    const { id } = req.params;
    try {
        const stud = await student.findById(id);
        if (!stud) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json(stud);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const updatestudent = async (req, res) => {
    const { id } = req.params;
    const { name, age, department } = req.body;
    try {
        const stud = await student.findByIdAndUpdate(
            id, { name, age, department }, { new: true }
        );
        if (!stud) {
            return res.status(404).json({ message: "student not found" });
        }
        res.json(stud);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const deletestudent = async (req, res) => {
    const { id } = req.params;
    try {
        const stud = await student.findByIdAndDelete(id);
        if (!stud) {
            return res.status(404).json({ message: "student not found" });
        }
        res.json({ message: "student deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
module.exports = {
    createstudent,
    getstudent,
    getstudentbyid, 
    updatestudent,
    deletestudent
};