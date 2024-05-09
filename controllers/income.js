
const Income = require("../model/incomModel"); 

exports.addIncome = async (req, res) => {
    const { title, amount, date, category, description } = req.body;

    try {
        if (!title || !amount || !date || !category || !description) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (amount < 0) {
            return res.status(400).json({ message: "Amount must be positive" });
        }

        const income = new Income({
            title,
            amount,
            date,
            category,
            description
        });

        await income.save();
        return res.status(200).json({ message: "Income Added" });

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Server Error" });
    }
};

exports.getIncome = async (req, res) => {
    try {
        const incomes = await Income.find().sort({ createdAt: -1 });
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};


exports.deleteIncome = async (req,res)=> {

    const {id}= req.params ;

    try {
        deleteIncome = await Income.findByIdAndDelete(id)

        if(!deleteIncome){
            return res.status(404).json({message: "Income not found"})
        }
        res.status(200).json({message: "deleted Income"})

    } catch (error) {
        res.status(500).json({message: "Server Error "})
    }

}