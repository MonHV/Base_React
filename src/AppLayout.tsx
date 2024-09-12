import React, { useState } from "react";
import { Layout, Menu, Dropdown } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import logo from "./image/Logo.png";
import "./AppLayout.css"; // Import tệp CSS

const { Header } = Layout;
const { SubMenu } = Menu;

const AppLayout = () => {
  const [selectedKey, setSelectedKey] = useState(null);

  const handleClick = (key: any) => {
    setSelectedKey(key);
  };

  const handleLogout = () => {
    // Thêm logic đăng xuất ở đây
    console.log("User logged out");
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="logout" onClick={handleLogout}>
        <LogoutOutlined /> Đăng xuất
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <div className="banner" style={{ marginBottom: 0 }}>
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="banner-title">
          PHẦN MỀM QUẢN LÝ LƯU TRỮ TÀI LIỆU ĐIỆN TỬ SỐ HÓA
        </h1>
      </div>

      <Header className="header">
        <Menu
          onClick={handleClick}
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          className="main-menu"
        >
          {/* SubMenu 1 */}
          <SubMenu key="sub1" title="Quản Trị Hệ Thống">
            <Menu.Item key="1-1">Quản Lý Người Dùng Nội Bộ</Menu.Item>
            <Menu.Item key="1-2">Quản Lý Nhóm Người Dùng</Menu.Item>
            <Menu.Item key="1-3">Quản Lý Quy Trình</Menu.Item>
            <Menu.Item key="1-4">Quản Lý Vai Trò</Menu.Item>
            <Menu.Item key="1-5">Quản Lý Phòng Ban</Menu.Item>
            <Menu.Item key="1-6">Quản Lý Nhật Ký, Ghi Log Hệ Thống</Menu.Item>
          </SubMenu>

          {/* SubMenu 2 */}
          <SubMenu key="sub2" title="Quản Lý Danh Mục">
            <Menu.Item key="2-1">Quản Lý Danh Mục Lĩnh Vực</Menu.Item>
            <Menu.Item key="2-2">Quản Lý Danh Mục Hồ Sơ,Văn Bản</Menu.Item>
            <Menu.Item key="2-3">Quản Lý Danh Mục Loại Hồ Sơ,Văn Bản</Menu.Item>
            <Menu.Item key="2-4">Quản Lý Danh Mục Cơ Quan Ban Hành</Menu.Item>
            <Menu.Item key="2-5">Quản Lý Danh Mục Độ Mật</Menu.Item>
            <Menu.Item key="2-6">Quản Lý Danh Mục Phòng Lưu Trữ</Menu.Item>
            <Menu.Item key="2-7">Quản Lý Danh Mục Kho Lưu Trữ</Menu.Item>
            <Menu.Item key="2-8">Quản Lý Danh Mục Thời Hạn Lư Trữ</Menu.Item>
            <Menu.Item key="2-9">Quản Lý Danh Mục Tình Trạng Vật Lý</Menu.Item>
            <Menu.Item key="2-10">
              Quản Lý Danh Mục Mục Đích Khai Thác
            </Menu.Item>
            <Menu.Item key="2-11">Quản Lý Danh Mục Sổ Khai Thác</Menu.Item>
          </SubMenu>

          {/* SubMenu 3 */}
          <SubMenu key="sub3" title="Quản Lý Thu Thập Nội Lưu">
            <Menu.Item key="3-1">Quản Lý Kế Hoạch Nộp Lưu</Menu.Item>
            <Menu.Item key="3-2">Quản Lý Nộp Lưu</Menu.Item>
            <Menu.Item key="3-3">Quản Lý Tiếp Nhận Nguồn Nộp Lưu</Menu.Item>
            <Menu.Item key="3-4">Thu Thập Tài Liệu Điện Tứ</Menu.Item>
          </SubMenu>

          {/* SubMenu 4 */}
          <SubMenu key="sub4" title="Số Hóa Tài Liệu">
            <Menu.Item key="4-1">Cấu Hình Số Hóa Tài Liệu</Menu.Item>
            <Menu.Item key="4-2">Thực Hiện Số Hóa Tài Liệu</Menu.Item>
            <Menu.Item key="4-3">
              Rà Soát - Chỉnh Sửa Lỗi Chính Tả Nội Dung Số Hóa
            </Menu.Item>
            <Menu.Item key="4-4">Ký Số Văn Bản Số Hóa</Menu.Item>
            <Menu.Item key="4-5">Tìm Kiếm Nội Dung Tài Liệu</Menu.Item>
            <Menu.Item key="4-6">Thu Nhập Dữ Liệu Từ Máy Scan</Menu.Item>
            <Menu.Item key="4-7">Phân Loại Tài Liệu Từ Máy Scan</Menu.Item>
            <Menu.Item key="4-8">
              Thu Nhập Tài Liệu Từ Máy Tính Cá Nhân Của Người Dùng
            </Menu.Item>
            <Menu.Item key="4-9">
              Phân Loại Tài Liệu Từ Máy Tính Cá Nhân Của Người Dùng
            </Menu.Item>
          </SubMenu>

          {/* SubMenu 5 */}
          <SubMenu key="sub5" title="Chuẩn Hóa Hồ Sơ">
            <Menu.Item key="5-1">
              Thiết Lập Vùng Nhận Dạng Và Bóc Tách Văn Bản
            </Menu.Item>
            <Menu.Item key="5-2">
              Nhận Dạng Và Bóc Tách Thông Tin Tự Động Trên File
            </Menu.Item>
            <Menu.Item key="5-3">
              {" "}
              Nhận Dạng Và Bóc Tách Thông Tin Tự Động Trên File Theo Định Nghĩa
              Người Dùng
            </Menu.Item>
          </SubMenu>

          {/* SubMenu 6 */}
          <SubMenu key="sub6" title="Kho Lưu Trữ">
            <Menu.Item key="6-1">Quản Lý Kho Lưu Trữ</Menu.Item>
            <Menu.Item key="6-2">Quản Lý Hồ Sơ</Menu.Item>
            <Menu.Item key="6-3">Quản Lý Tài Liệu</Menu.Item>
            <Menu.Item key="6-4">Quản Lý Bàn Giao Hồ Sơ</Menu.Item>
            <Menu.Item key="6-5">Quản Lý Khai Thác Hồ Sơ</Menu.Item>
            <Menu.Item key="6-6">Báo Cáo Thống Kê</Menu.Item>
          </SubMenu>

          <SubMenu key="sub7" title="Tích Hợp">
            <Menu.Item key="7-1">Tạo Mới Bằng Chứng</Menu.Item>
            <Menu.Item key="7-2">
              Gia Hạn Dấu Thời Gian Của Bằng Chứng
            </Menu.Item>
            <Menu.Item key="7-3">Gia Hạn Thuật Toán Của Bằng Chứng</Menu.Item>
            <Menu.Item key="7-4">
              Kiểm Tra Tính Toán Toàn Vẹn Và Tồn Tại Của Bằng Chứng
            </Menu.Item>
            <Menu.Item key="7-5">
              Kiểm Tra Tính Phù Hợp Của Các Tham Số Mật Mã
            </Menu.Item>
            <Menu.Item key="7-6">Phân Tích Và Xử Lý CRL, OCSP</Menu.Item>
            <Menu.Item key="7-7">Đóng Gói CAdES</Menu.Item>
            <Menu.Item key="7-8">Đóng Gói XAdES</Menu.Item>
            <Menu.Item key="7-9">Đóng Gói PAdES</Menu.Item>
            <Menu.Item key="7-10">
              Đóng Gói Bằng Chứng Theo Chuẩn Quốc Tế
            </Menu.Item>
            <Menu.Item key="7-11">
              Kiểm Tra Điều Kiện Ra Hạn Dấu Thời Gian Và Thuật Toán
            </Menu.Item>
          </SubMenu>
        </Menu>

        <div className="user-dropdown">
          <Dropdown overlay={userMenu} trigger={["click"]}>
            <div className="user-info">
              <UserOutlined className="user-icon" />
              <span className="username">Tên Người Dùng</span>
            </div>
          </Dropdown>
        </div>
      </Header>
    </Layout>
  );
};

export default AppLayout;
