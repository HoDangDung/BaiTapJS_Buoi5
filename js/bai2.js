// Mô hình 3 khối:

// Đầu vào: Cho người dùng nhập tên và số kw điện

// Xử lý:
function tinhTienDien() {
    let name = document.getElementById("name").value,
        kw = document.getElementById("kw").value * 1,
        tinhTien = 0;
    checkNull(name, kw);

    document.getElementById("tinhTienDien").innerHTML = tienDien(name, tinhTien, kw);
    document.getElementById("tinhTienDien").className = "bg-success card-footer text-white"
}

function checkNull(a, b) {
    if (!a || !b) {
        alert("Please enter your info!!!");
        return;
    }
}

function tienDien(name, tinhTien, kw) {
    let current = new Intl.NumberFormat("vn-VN");
    if (kw <= 50) {
        tinhTien = kw * 500;
    } else if (kw <= 100) {
        tinhTien = 50 * 500 + (kw - 50) * 650;
    } else if (kw <= 150) {
        tinhTien = 50 * 500 + 50 * 650 + (kw - 100) * 850;
    } else if (kw <= 200) {
        tinhTien = 50 * 500 + 50 * 650 + 50 * 150 + (kw - 150) * 1100;
    } else {
        tinhTien = 50 * 500 + 50 * 650 + 50 * 150 + 50 * 200 + (kw - 200) * 1300;
    }
    return ("Tên: " + name + "; Tiền điện: " + current.format(tinhTien) + " đồng");
}

// Đầu ra: Tính ra số tiền điện người đó cần trả