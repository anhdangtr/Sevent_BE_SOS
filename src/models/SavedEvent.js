const mongoose = require('mongoose');

const savedEventSchema = new mongoose.Schema({
  folder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SavedFolder',
    required: true,
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
  savedAt: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

// Đảm bảo không lưu trùng event trong cùng 1 folder
savedEventSchema.index({ folder: 1, event: 1 }, { unique: true });

module.exports = mongoose.model('SavedEvent', savedEventSchema);