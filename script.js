document.addEventListener('DOMContentLoaded', function() {

    // ===== ANIMASI SCROLL =====
    const sections = document.querySelectorAll('.content-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // ===== DATA PENDIDIKAN =====
    const educationData = [
        {
            school: "SMK Negeri 2 Surakarta",
            year: "2023 - Sekarang",
            major: "PPLG (Pengembangan Perangkat Lunak dan Gim)",
            desc: "Sedang mempelajari pemrograman, pengembangan web, dan pembuatan aplikasi."
        }
    ];

    // ===== RENDER KE HTML =====
    function renderEducation() {
        const container = document.getElementById("education-list");
        container.innerHTML = "";

        educationData.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("education-item");

            div.innerHTML = `
                <h3>${item.school} (${item.year})</h3>
                <p>${item.major}</p>
                <p>${item.desc}</p>
            `;

            container.appendChild(div);
        });
    }

    // ===== TAMBAH DATA =====
    window.tambahPendidikan = function() {
        const school = prompt("Nama Sekolah / Kampus:");
        const year = prompt("Tahun:");
        const major = prompt("Jurusan:");
        const desc = prompt("Deskripsi:");

        if (school && year && major) {
            educationData.push({
                school,
                year,
                major,
                desc
            });

            renderEducation();
        }
    }

    // ===== JALANKAN AWAL =====
    renderEducation();

});