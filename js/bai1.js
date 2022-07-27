//Quản lý tuyển sinh

//Mô hình 3 khối

// Đầu vào: Người dùng nhập iểm 3 môn của thí sinh, chọn khu vực, chọn đối tượng

// Xử lý:
function ketQua() {
    let diemChuan = document.getElementById("diemChuan").value * 1,
        diem1 = document.getElementById("diem1").value * 1,
        diem2 = document.getElementById("diem2").value * 1,
        diem3 = document.getElementById("diem3").value * 1,
        khuVuc = document.getElementById("khuVuc").value * 1,
        doiTuong = document.getElementById("doiTuong").value * 1;

    if (!diemChuan) {
        alert("Vui lòng nhập điểm");
        return;
    }

    let ketQua = diem1 + diem2 + diem3 + doiTuong + khuVuc;

    document.getElementById("ketQua").innerHTML = tinhDiem(diemChuan, diem1, diem2, diem3, ketQua);
    document.getElementById("ketQua").className = "bg-success card-footer text-white"
}

function tinhDiem(diemChuan, diem1, diem2, diem3, ketQua) {
    if (diem1 === 0 || diem2 == 0 || diem3 === 0) {
        return "Bạn đã rớt. Do có điểm bằng 0";
    }
    if (checkDiem(diem1) ||
        checkDiem(diem2) ||
        checkDiem(diem3) ||
        checkDiem(diemChuan)) {
        alert("Điểm này hơi kỳ nha!!!");
        return;
    }
    switch (true) {
        case ketQua < diemChuan:
            return "Bạn đã rớt. Tổng điểm là : " +ketQua;
            break;
        case ketQua >= diemChuan:
            return "Bạn đã đậu. Tổng điểm là : " +ketQua;
            break;
        default:
            break;
    }
}

// Check điểm người dùng nhập có hợp lệ hay hông
function checkDiem(diem) {
    return diem < 0 || diem > 10;
}


// Đầu ra: Cho biết thí sinh đó đậu hay rớt và tổng só điểm đạt được

//==================