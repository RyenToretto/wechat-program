const mongoose = require('mongoose');

// 4. 获取 schema 对象、model 对象、创建 document 对象
// ① 获取 Schema 模式类
const Schema = mongoose.Schema;

// ② 实例约束对象
const booksSchema = new Schema({
  isbnArr: Array,    // 要求集合中的文档的 bookId 字段 的值类型为 String
  openId: {
    type: String,    // 要求集合中的文档的 openId 字段 的值类型为 String
    unique: true    // 设置 唯一
  },
  createTime: {
    type: Date,
    default: Date.now
  }
});

// ③ 获取 model 模型类(集合名称 复数)
const Books = mongoose.model('booksTable', booksSchema);
module.exports = Books;
