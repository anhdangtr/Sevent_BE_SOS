const mongoose = require('mongoose');

const savedFolderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: [true, 'Tên folder là bắt buộc'],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true,
});

// Đảm bảo user không tạo folder trùng tên
savedFolderSchema.index({ user: 1, name: 1 }, { unique: true });

module.exports = mongoose.model('SavedFolder', savedFolderSchema);