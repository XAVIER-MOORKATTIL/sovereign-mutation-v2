import mongoose from 'mongoose';

const MutationSchema = new mongoose.Schema({
    transmissionId: {
        type: String,
        required: true,
        unique: true,
        default: () => "MUT-" + Math.random().toString(36).substr(2, 9).toUpperCase()
    },
    variantTarget: {
        type: String,
        required: true,
        default: "Omicron SARS-CoV-2 Subvariant"
    },
    mindStoneEnergyLevel: {
        type: Number,
        required: true,
        default: 10000
    },
    executorCode: {
        type: String,
        default: "Xavier-B.E.-EXTC-Mumbai-University"
    },
    strictEqualityStatus: {
        type: String,
        default: "ABSOLUTELY YES"
    },
    payloadData: {
        type: Object,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Mutation', MutationSchema);