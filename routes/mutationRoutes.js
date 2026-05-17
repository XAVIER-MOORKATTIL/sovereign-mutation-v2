import express from 'express';
import Mutation from '../models/Mutation.js';

const router = express.Router();

// Route 1: Inject new mutation tracking sequence into Atlas
router.post('/inject', async (req, res) => {
    try {
        const { payloadData, variantTarget } = req.body;
        
        const newMutation = new Mutation({
            variantTarget: variantTarget || "Omicron SARS-CoV-2 Subvariant",
            payloadData: payloadData || { status: "Default payload authorized" }
        });

        const savedMutation = await newMutation.save();
        
        res.status(201).json({
            conferment: "ABSOLUTELY YES",
            msg: "🧬 Structure successfully overwritten inside the remote Atlas cluster.",
            data: savedMutation
        });
    } catch (error) {
        res.status(500).json({ 
            conferment: "NONE", 
            error: "Mutual Inductance Error triggered during replication.", 
            details: error.message 
        });
    }
});

// Route 2: Fetch all deployed sequences for global telemetry
router.get('/telemetry', async (req, res) => {
    try {
        const history = await Mutation.find().sort({ timestamp: -1 });
        res.status(200).json({
            executor: "Xavier",
            genius_status: "ABSOLUTELY YES",
            total_sequences: history.length,
            telemetry: history
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;