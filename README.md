# Playwright Automation Testing Project

![Playwright Tests](https://github.com/tuanhung0308/playwright-app/actions/workflows/playwright.yml/badge.svg)

Project cá nhân dùng để luyện tập Playwright automation testing, chạy trên một app demo
Angular (`pw-practice-app`, dựa trên ngx-admin).

## Cấu trúc project

- `tests/` - các file test Playwright (`.spec.ts`)
- `page-objects/` - các Page Object Model dùng chung cho test
- `pw-practice-app/` - app Angular demo, chạy local ở `http://localhost:4200`
- `.github/workflows/playwright.yml` - pipeline CI/CD tự động chạy test trên GitHub Actions

## Chạy test ở local

Cần 2 terminal chạy song song:

**Terminal 1 - khởi động app Angular:**

```bash
cd pw-practice-app
npm install
npm start
```

Đợi tới khi thấy dòng `Compiled successfully` và `http://localhost:4200/`.

**Terminal 2 - chạy Playwright test:**

```bash
npm install
npx playwright install
npx playwright test
```

### Chạy riêng lẻ

```bash
# Chạy 1 file cụ thể
npx playwright test uiComponents.spec.ts

# Chạy 1 test case theo tên
npx playwright test -g "radio buttons"

# Chạy 1 trình duyệt cụ thể
npx playwright test --project=chromium

# Chế độ UI trực quan (khuyên dùng)
npx playwright test --ui
```

## CI/CD

Mỗi lần push hoặc tạo pull request vào nhánh `main`, GitHub Actions sẽ tự động:

1. Cài dependencies cho cả 2 project
2. Cài trình duyệt Playwright
3. Khởi động app Angular ở chế độ nền
4. Đợi app sẵn sàng rồi chạy toàn bộ test
5. Upload report HTML + video/trace của test fail (nếu có)

Xem chi tiết tại tab [Actions](https://github.com/tuanhung0308/playwright-app/actions).

## Ghi chú

Xem [`TODO.md`](./TODO.md) để biết danh sách các test đang tạm bị comment và lý do.