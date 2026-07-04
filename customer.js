// مصفوفة الكاتالوج الأساسية للموديلات
const sqCatalog = [
    { id: 'm1', name: 'عباية كلوش بخيوط ذهبية', price: '125,000', category: 'abaya', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400' },
    { id: 'm2', name: 'فستان السهرة الفاخر - مجمع الذهبي', price: '85,000', category: 'dress', img: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=400' }
];

let sqCustomerFavs = [];
let selectedSizes = []; // لتخزين القياسات المحددة للموديل الجديد

// دالة تشغيل الكاتالوج وعرض المنتجات للزبون
function drawCustomerCatalog(productsList) {
    const container = document.getElementById('cust-main-view') || document.getElementById('sq-grid-products');
    if (!container) return;
    // هنا كود الرسم الخاص بك للزبون...
}

// 👑 دالة التحكم بالملاحة والتنقل (الصورة الأولى image_eebcec.jpg)
function handleCustNavigation(targetView) {
    // إخفاء واجهات الزبون
    if(document.getElementById('cust-main-view')) document.getElementById('cust-main-view').classList.add('hidden');
    if(document.getElementById('cust-sidebar-area')) document.getElementById('cust-sidebar-area').classList.add('hidden');
    
    // ضبط لوحة إدارة التاجر الفخمة
    const merchantDash = document.getElementById('sq-merchant-admin-dashboard');
    
    if (targetView === 'home') {
        if(merchantDash) merchantDash.style.display = 'none';
        if(document.getElementById('cust-main-view')) document.getElementById('cust-main-view').classList.remove('hidden');
        if(document.getElementById('cust-sidebar-area')) document.getElementById('cust-sidebar-area').classList.remove('hidden');
    } 
    else if (targetView === 'merchant_admin') {
        if(merchantDash) {
            merchantDash.style.display = 'block';
            console.log("تم فتح لوحة إدارة التاجر الفخمة بنجاح! 👑");
        }
    }
}

// ----------------------------------------------------
// 🔥 ربط تفاصيل واجهة الرفع للمخزن السحابي (الصورة الثانية image_eec08e.jpg)
// ----------------------------------------------------

// 1. دالة تحديد وإلغاء تحديد القياسات (size-chip) عند النقر عليها
function toggleSize(element, sizeValue) {
    element.classList.toggle('active'); // إضافة كلاس للشكل (تقدر تخليه بالـ CSS يغير اللون)
    
    const index = selectedSizes.indexOf(sizeValue);
    if (index > -1) {
        selectedSizes.splice(index, 1); // إزالة إذا كان موجود
        element.style.background = '#111'; // إرجاع اللون الأصلي
        element.style.color = '#fff';
    } else {
        selectedSizes.push(sizeValue); // إضافة القياس
        element.style.background = '#D4AF37'; // تلوينه بالذهبي عند التحديد
        element.style.color = '#000';
    }
    console.log("القياسات المختارة حالياً:", selectedSizes);
}

// 2. دالة المعاينة الفورية للصور والفيديوهات المستوردة من الجهاز
function previewDeviceMedia(type) {
    const fileInput = type === 'image' ? document.getElementById('file-img-input') : document.getElementById('file-vid-input');
    const imgPreview = document.getElementById('device-image-view');
    const vidPreview = document.getElementById('device-vid-view');
    const placeholder = document.getElementById('preview-placeholder');
    
    if (!fileInput || !fileInput.files || !fileInput.files[0]) return;
    
    const file = fileInput.files[0];
    const fileURL = URL.createObjectURL(file);
    
    if (placeholder) placeholder.style.display = 'none'; // إخفاء نص المعاينة
    
    if (type === 'image') {
        if (imgPreview) {
            imgPreview.src = fileURL;
            imgPreview.style.display = 'block';
        }
        if (vidPreview) vidPreview.style.display = 'none';
        if (document.getElementById('lbl-img-file')) document.getElementById('lbl-img-file').innerText = "📸 تم اختيار الصورة";
    } else {
        if (vidPreview) {
            vidPreview.src = fileURL;
            vidPreview.style.display = 'block';
        }
        if (imgPreview) imgPreview.style.display = 'none';
        if (document.getElementById('lbl-vid-file')) document.getElementById('lbl-vid-file').innerText = "🎥 تم اختيار الفيديو";
    }
}

// 3. دالة رفع الموديل الجديد وقراءة البيانات كاملة
function uploadNewModel() {
    const name = document.getElementById('p-name')?.value;
    const price = document.getElementById('p-price')?.value;
    const color = document.getElementById('color-select-1')?.value;
    
    if (!name || !price) {
        alert("⚠️ يرجى إدخال اسم الموديل والسعر أولاً صاحب مجمع الذهبي!");
        return;
    }
    
    // بناء كائن الموديل الجديد بالبيانات المحددة
    const newModel = {
        id: 'm' + (sqCatalog.length + 1),
        name: name,
        price: price,
        color: color,
        sizes: [...selectedSizes],
        category: 'uploaded'
    };
    
    console.log("🚀 جاري الرفع للمخزن السحابي:", newModel);
    alert(`✨ تم رفع الموديل (${name}) للمخزن السحابي بنجاح! 👑`);
    
    // إعادة تصفير الحقول بعد الرفع الناجح
    if(document.getElementById('p-name')) document.getElementById('p-name').value = '';
    if(document.getElementById('p-price')) document.getElementById('p-price').value = '';
    selectedSizes = [];
    // إعادة رسوم الأزرار لحالتها الأصلية
    document.querySelectorAll('.size-chip').forEach(el => {
        el.style.background = '#111';
        el.style.color = '#fff';
    });
}

// دالة المفضلة للزبون
function handleFavToggle(id) {
    // كود المفضلة الخاص بك...
}

// عند تحميل الصفحة بالكامل
window.addEventListener('load', () => {
    handleCustNavigation('home'); // يبدأ بواجهة الزبون كافتراضي
});// إجبار المتصفح على فتح لوحة التاجر الفخمة فوراً عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
    if (typeof handleCustNavigation === 'function') {
        handleCustNavigation('merchant_admin');
    }
});