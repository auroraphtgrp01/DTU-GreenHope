# VietQR NocoBase Plugin
## 🌟 Giới Thiệu
_**[@dtu-olp-2024/vietqr-nocobase](https://www.npmjs.com/package/@dtu-olp-2024/vietqr-nocobase)**_ là một plugin cho nền tảng NocoBase, tích hợp VietQR API, giúp dễ dàng sinh mã QR thanh toán
### 🏆 Bối Cảnh
Plugin được phát triển như một phần của cuộc thi **Mã Nguồn Mở năm 2024**.

## ✨ Tính Năng
- 🏦 Tích hợp trực tiếp với VietQR API
- ⚡ Sinh mã QR thanh toán nhanh chóng
- 🌐 Hỗ trợ đa ngân hàng
- 🔧 Tùy chỉnh thông tin thanh toán linh hoạt
- 📄 Xuất mã QR dưới nhiều định dạng (PNG, SVG)

### 🔧 **Sử dụng yarn:**

```bash
    yarn add @olp-dtu-2024/vietqr-nocobase 
```

### 🛠️ **Thêm trực tiếp với plugin manager:**

Từ trên menu, bạn chọn biểu tượng **Plugin manager** để truy cập vào Plugin manager

![Truy cập plugin manager page](image-3.png)

Tiếp theo, bạn ấn nút **`Add new`** để mở hộp thoại thêm plugin.

![Mở hộp thoại thêm mới plugin](image-4.png)

  ✏️ **Sử dụng tên plugin**:

  - Nhập tên plugin _**[@dtu-olp-2024/vietqr-nocobase](https://www.npmjs.com/package/@dtu-olp-2024/vietqr-nocobase)**_ vào ô nhập **`Npm package name`**.

![Điền tên plugin vào Npm package name](image-33.png)

  ✅ **Kích hoạt plugin**:

Sau khi thêm plugin thành công, bạn phải **`enable`** plugin này để sử dụng:

![Kích hoạt plugin](image-34.png)

## 💡 **Hướng dẫn sử dụng**

  _**@dtu-olp-2024/vietqr-nocobase**_ là một plugin server. Vì thế, để sử dụng bạn sử dụng nó bằng cách gọi API. 
  
  Ví dụ với _`WorkFlow`_:

  ![alt text](image-35.png)
  Bao gồm các thành phần:
  - **Methods**: POST
  - **Path**: '/api/qr-donate'
  - **Body**: Dữ liệu bạn muốn dùng để tạo nội dung chuyển khoản
  

## 📋 Yêu Cầu Tiên Quyết
- Node.js version 18.x trở lên
- NocoBase phiên bản 1.x
- Kết nối internet ổn định
## 👥 Tác Giả
- Lê Minh Tuấn
- Trần Nguyễn Duy Khánh
- Trịnh Minh Son
## 📄 Giấy Phép
Dự án được phân phối dưới giấy phép [GNU General Public License v3.0 ](https://github.com/olp-dtu-2024/DTU-GreenHope/blob/main/LICENCE)
## 🤝 Đóng Góp
Chúng tôi rất hoan nghênh các đóng góp từ cộng đồng! Vui lòng:

- Tạo issue để báo cáo lỗi
- Gửi pull request để đề xuất cải tiến
- Truy cập GitHub Repository của chúng tôi để biết thêm chi tiết

## 🆘 Hỗ Trợ
Nếu gặp bất kỳ vấn đề nào, vui lòng:

- Mở issue tại GitHub repository
- Liên hệ trực tiếp với nhóm phát triển
## ⚠️ Lưu Ý
- Đảm bảo tương thích với phiên bản NocoBase hiện tại
- Kiểm tra kết nối và cấu hình trước khi sử dụng



*"Được phát triển với ❤️ bởi Nhóm DTU_DZ1 🌟"*
