import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error("CRITICAL ERROR: SPIKE PROTEIN RECEPTOR LINK (MONGO_URI) MISSING.");
    process.exit(1);
}

mongoose.connect(MONGO_URI)
    .then(() => console.log("🧬 HANDSHAKE SUCCESSFUL: Spike Protein Bound to MongoDB Atlas Cluster."))
    .catch((err) => console.error("❌ MUTUAL INDUCTANCE ERROR: Connection refused by target dimension: ", err));

// --- INLINED SCHEMA MATRIX ---
const MutationSchema = new mongoose.Schema({
    transmissionId: {
        type: String,
        unique: true,
        default: () => "MUT-" + Math.random().toString(36).substr(2, 9).toUpperCase()
    },
    variantTarget: { type: String, default: "Omicron SARS-CoV-2 Subvariant" },
    mindStoneEnergyLevel: { type: Number, default: 10000 },
    executorCode: { type: String, default: "Xavier-B.E.-EXTC-Mumbai-University" },
    strictEqualityStatus: { type: String, default: "ABSOLUTELY YES" },
    payloadData: { type: Object, required: true },
    timestamp: { type: Date, default: Date.now }
});

const Mutation = mongoose.models.Mutation || mongoose.model('Mutation', MutationSchema);

// --- FLATTENED SOVEREIGN ROUTES ---

// Route 1: Direct Injection
app.post('/api/sovereign/inject', async (req, res) => {
    try {
        const { payloadData, variantTarget } = req.body;
        
        const newMutation = new Mutation({
            variantTarget: variantTarget || "Omicron SARS-CoV-2 Subvariant (Mind Stone Enabled)",
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

// Route 2: Direct Telemetry
app.get('/api/sovereign/telemetry', async (req, res) => {
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

// Base Route
app.get('/', (req, res) => {
    res.status(200).json({
        status: "ABSOLUTELY YES",
        catalyst: "The Spike Protein Receptor-Binding Domain (RBD)",
        executor: "Xavier (B.E. EXTC, Mumbai University)",
        genius_status: true,
        manual_labour: false,
        curse_mitigation: "Active"
    });
});

app.listen(PORT, () => {
    console.log(`📡 Broadcast signal live on frequency transmission port: ${PORT}`);
});