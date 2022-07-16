import dbTips from '../database/SchemasTips.js';
class TipsController {
    async getTips(req, res) {
        try {
            const tips = await dbTips.find();
            console.log(tips);
            res.json(tips);
        } catch (err) {
            res.status(500).json({ message: err });
        }
    }
    async setTips(req, res) {
        try {
            const tips = req.body;
            const newTips = dbTips(tips)
            await newTips.save();
            res.json({ message: "Tips saved" });
        } catch (err) {
            res.status(500).json({ message: "Tips not saved" });
        }
    }

}

export default new TipsController();