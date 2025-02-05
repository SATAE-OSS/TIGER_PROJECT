const products = [
    { name: "กุ้งขาว", unit: "ตัว" },
    { name: "ข้าวเกรียบมโนรา", unit: "ถุง" },
    { name: "ข้าวโพด", unit: "ฝัก" },
    { name: "ปลาดอลลี่", unit: "ถุง" },
    { name: "ปลาหมึก", unit: "กิโล" },
    { name: "กระดูกอ่อน", unit: "กิโล" },
    { name: "คอหมู", unit: "กิโล" },
    { name: "หมูบด", unit: "กิโล" },
    { name: "พอร์คชอป", unit: "ชิ้น" },
    { name: "หมู (สันในสไลด์)", unit: "กิโล" },
    { name: "สามชั้น", unit: "กิโล" },
    { name: "หอยลาย", unit: "ถุง" },
    { name: "หอยแมลงภู่", unit: "ถุง" },
    { name: "เนื้อ AU พิคานย่า MB2+", unit: "กิโล" },
    { name: "เนื้อบด", unit: "กิโล" },
    { name: "เฟรนฟราย Finest", unit: "ถุง" },
    { name: "เม็ดมะม่วงหิมพานต์", unit: "ถุง" },
    { name: "วุ้นเส้น", unit: "ถุง" },
    { name: "เส้นมาม่านู๊ดดี้", unit: "แพ็ค" },
    { name: "เส้นสปาเก็ตตี้", unit: "ถุง" },
    { name: "เส้นเฟตตูชินี่", unit: "ถุง" },
    { name: "แซลมอนนอเวย์(แล่ไม่ลอกหนัง)", unit: "ตัว" },
    { name: "ปีกกลางไก่", unit: "ชิ้น" },
    { name: "สะโพกไก่", unit: "ชิ้น" },
    { name: "อกไก่", unit: "ชิ้น" },
    { name: "สันในไก่", unit: "ชิ้น" },
    { name: "เอ็นไก่", unit: "ถุง" },
    { name: "ไข่ไก่", unit: "แผง" },
    { name: "หอมทอด", unit: "ถุง" },
    { name: "mini waffle hashbrown (FARM FRITES)", unit: "ถุง" },
    { name: "waffle hashbrown (FARM FRITES)", unit: "ถุง" },
    { name: "นักเก็ตไก่", unit: "ถุง" },
    { name: "ไส้กรอกหมู(BMP 1000 กรัม)", unit: "แพ็ค" },
    { name: "ไส้กรอกหมูรมควัน(BMP 1000 กรัม)", unit: "แพ็ค" },
    { name: "ไส้กรอกเฮิร์บ", unit: "แพ็ค" },
    { name: "ไส้กรอกแคมเอบร์แลนด์", unit: "แพ็ค" },
    { name: "ไข่ปลาอิกุระ", unit: "กล่อง" }
];

// สร้างช่องกรอกข้อมูลสินค้า
const productListDiv = document.getElementById("product-list");

products.forEach((product, index) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
        <label for="product${index}">${product.name}: </label>
        <input type="number" id="product${index}" min="0" value=""> ${product.unit}
    `;
    productListDiv.appendChild(productDiv);
});

function generateBill() {
    let billContent = `<h3>ใบสั่งสินค้า</h3><hr><ul>`;
    products.forEach((product, index) => {
        let quantity = document.getElementById(`product${index}`).value;
        if (quantity > 0) {
            billContent += `<li>${product.name} = ${quantity} ${product.unit}</li>`;
        }
    });
    billContent += `</ul><hr><p><strong>รวมทั้งหมด ${products.length} รายการ</strong></p>`;

    document.getElementById("bill").innerHTML = billContent;
}
