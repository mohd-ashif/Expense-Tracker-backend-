const Expense = require("../model/expensesModel"); 

exports.addExpense = async (req, res) => {
    const { title, amount, date, category, description } = req.body;

    try {
        if (!title || !amount || !date || !category || !description) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (amount < 0) {
            return res.status(400).json({ message: "Amount must be positive" });
        }

        const expense = new Expense({
            title,
            amount,
            date,
            category,
            description
        });

        await expense.save();
        return res.status(200).json({ message: "expense Added" });

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Server Error" });
    }
};

exports.getExpense = async (req, res) => {
    try {
        const expenses = await Expense.find().sort({ createdAt: -1 });
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

exports.deleteExpense = async (req,res)=> {

    const {id}= req.params ;

    try {
        deleteExpense = await Expense.findByIdAndDelete(id)

        if(!deleteExpense){
            return res.status(404).json({message: "expense not found"})
        }
        res.status(200).json({message: "deleted expense"})

    } catch (error) {
        res.status(500).json({message: "Server Error "})
    }

}