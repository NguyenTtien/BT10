animals = [
    { ten: "chó", anh: "img/chó/7.jfif", thuvien: ["img/chó/1.jfif", "img/chó/2.jfif", "img/chó/3.jfif",
        "img/chó/4.jfif", "img/chó/5.jfif", "img/chó/6.jfif", "img/chó/8.jfif"
    ] },
    { ten: "cừu", anh: "img/cừu/7.jfif", thuvien: ["img/cừu/1.jfif", "img/cừu/2.jfif", "img/cừu/3.jfif",
        "img/cừu/4.jfif", "img/cừu/5.jfif", "img/cừu/6.jfif", "img/cừu/8.jfif"
    ] },
    { ten: "heo", anh: "img/heo/7.jfif", thuvien: ["img/heo/1.jfif", "img/heo/2.jfif", "img/heo/3.jfif",
        "img/heo/4.jfif", "img/heo/5.jfif", "img/heo/6.jfif", "img/heo/8.jfif"
    ] },
    { ten: "mèo", anh: "img/mèo/7.jfif", thuvien: ["img/mèo/1.jfif", "img/mèo/2.jfif", "img/mèo/3.jfif",
        "img/mèo/4.jfif", "img/mèo/5.jfif", "img/mèo/6.jfif", "img/mèo/8.jfif"
    ] },
    { ten: "vịt", anh: "img/vịt/7.jfif", thuvien: ["img/vịt/1.jfif", "img/vịt/2.jfif", "img/vịt/3.jfif",
        "img/vịt/4.jfif", "img/vịt/5.jfif", "img/vịt/6.jfif", "img/vịt/8.jfif"
    ] }
];

const danhSachDiv = document.getElementById('danhsach');
const thuVienDiv = document.getElementById('thuvienanh');

function hienThiDanhSach() {
    animals.forEach(animal => {
        const card = document.createElement('div');
        card.className = 'animal-card';
        card.innerHTML = `
            <img src="${animal.anh}" alt="${animal.ten}">
            <h3>${animal.ten}</h3>
        `;
        
        card.addEventListener("click", () =>{
            hienThiThuVien(animal.thuvien)
        });
        
        danhSachDiv.appendChild(card);
    });
}
function hienThiThuVien(danhSachAnh) {
    thuVienDiv.innerHTML = "";
    
    danhSachAnh.forEach(duongDan => {
        const img = document.createElement('img');
        img.src = duongDan;
        img.className = 'gallery-item';
        thuVienDiv.appendChild(img);
    });
}

hienThiDanhSach();
// nguyễn trung tiến 24nt01050