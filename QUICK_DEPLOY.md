# 🚀 快速部署指引 (3步5分钟)

## 步骤 1️⃣：验证修复 (1分钟)

```bash
cd vue-project
node verify-i18n-fix.js
```

✅ 预期：所有检查都显示 [OK]

---

## 步骤 2️⃣：本地测试 (2分钟)

```bash
npm install && npm run build && npm run preview
```

✅ 访问 http://localhost:4173，检查：
- [ ] 文本显示正确（不是"header.home"这样的变量名）
- [ ] 语言切换工作
- [ ] 控制台无错误

---

## 步骤 3️⃣：推送到Vercel (2分钟)

```bash
# 确保代码已提交
git add .
git commit -m "fix(i18n): upgrade vue-i18n and optimize for production"
git push
```

✅ 等待Vercel自动部署，完成！

---

## 如果遇到问题

| 问题 | 解决 |
|------|------|
| 仍显示变量名 | 清除Vercel缓存并重新部署 |
| 语言切换不工作 | 检查浏览器localStorage是否启用 |
| 构建失败 | 查看 DEPLOYMENT_CHECKLIST.md 的故障排除 |

---

## 详细文档

- 📖 完整说明：`README_I18N_FIX.md`
- 📋 检查清单：`DEPLOYMENT_CHECKLIST.md`
- 📚 所有文档：`DOCUMENTATION_INDEX.md`

**就这样！你已经准备好了。** ✨
