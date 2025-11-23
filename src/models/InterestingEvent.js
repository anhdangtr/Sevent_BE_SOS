const mongoose = require('mongoose');

const interestingEventSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
  likedAt: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

// Đảm bảo user không like trùng event
interestingEventSchema.index({ user: 1, event: 1 }, { unique: true });

module.exports = mongoose.model('InterestingEvent', interestingEventSchema);