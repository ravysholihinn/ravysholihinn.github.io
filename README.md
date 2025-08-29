# Portfolio Website - Programmer

Website portofolio modern dan responsif untuk programmer dengan desain yang elegan dan interaktif.

## ✨ Fitur

- **Desain Modern**: UI/UX yang clean dan profesional
- **Responsive Design**: Tampil sempurna di semua perangkat
- **Smooth Animations**: Animasi yang halus dan menarik
- **Interactive Elements**: Elemen interaktif yang engaging
- **Contact Form**: Form kontak yang functional
- **SEO Friendly**: Struktur HTML yang baik untuk SEO

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur semantic yang modern
- **CSS3**: Styling advanced dengan Grid, Flexbox, dan Animations
- **JavaScript (ES6+)**: Interaktivitas dan animasi dinamis
- **Font Awesome**: Icon library yang lengkap
- **Google Fonts**: Typography yang profesional (Poppins)

## 📁 Struktur Proyek

```
porto/
├── index.html          # Halaman utama
├── css/
│   └── style.css      # Stylesheet utama
├── js/
│   └── script.js      # JavaScript untuk interaktivitas
├── images/
│   └── README.md      # Panduan untuk gambar
└── README.md          # Dokumentasi proyek
```

## 🚀 Cara Penggunaan

1. **Clone atau Download** proyek ini
2. **Buka** file `index.html` di browser
3. **Ganti data pribadi** sesuai dengan informasi Anda:
   - Nama dan title di hero section
   - Deskripsi about section
   - Skills dan teknologi
   - Project portfolio
   - Informasi kontak

## 📝 Customization

### Mengganti Data Pribadi

1. **Hero Section** (Baris 30-50 di index.html):

   ```html
   <h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
   <h2 class="hero-subtitle">Your Title</h2>
   ```

2. **About Section** (Baris 80-120 di index.html):

   - Ganti deskripsi pribadi
   - Update statistik (projects, experience, clients)

3. **Skills Section** (Baris 140-180 di index.html):

   - Update skill cards dengan teknologi yang Anda kuasai
   - Sesuaikan persentase skill progress

4. **Projects Section** (Baris 200-280 di index.html):

   - Ganti dengan project yang sudah Anda buat
   - Update link github dan demo
   - Ganti gambar project

5. **Contact Section** (Baris 300-350 di index.html):
   - Update email, phone, dan alamat

### Mengganti Warna Theme

Edit file `css/style.css` dan ganti variable warna utama:

```css
/* Ganti gradient utama dari */
background: linear-gradient(135deg, #6c5ce7, #a29bfe);

/* Menjadi warna pilihan Anda */
background: linear-gradient(135deg, #your-color-1, #your-color-2);
```

### Menambahkan Gambar

1. Tambahkan gambar ke folder `images/`
2. Update path di `index.html`:

   ```html
   <!-- Ganti dari placeholder -->
   <img src="https://via.placeholder.com/..." alt="" />

   <!-- Menjadi gambar lokal -->
   <img src="images/your-image.jpg" alt="" />
   ```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Laptop**: 992px - 1199px
- **Tablet**: 768px - 991px
- **Mobile**: < 768px

## 🎨 Color Palette

- **Primary**: #6c5ce7 (Purple)
- **Secondary**: #a29bfe (Light Purple)
- **Accent**: #ffeaa7 (Yellow)
- **Text**: #333333 (Dark Gray)
- **Background**: #f8f9fa (Light Gray)

## ⚡ Performance Tips

1. **Optimize Images**: Compress gambar sebelum upload
2. **Lazy Loading**: Gunakan loading="lazy" untuk gambar
3. **Minify Files**: Minify CSS dan JS untuk production
4. **CDN**: Gunakan CDN untuk font dan icon

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📧 Contact Form Setup

Form contact saat ini menggunakan JavaScript untuk validasi. Untuk membuat form benar-benar functional, Anda perlu:

1. **Backend Service**: PHP, Node.js, atau service lain
2. **Email Service**: SMTP, SendGrid, atau Mailgun
3. **Form Handler**: Script untuk memproses form submission

Contoh dengan PHP:

```php
<?php
if ($_POST['name'] && $_POST['email'] && $_POST['message']) {
    $to = "your-email@example.com";
    $subject = "Contact from Portfolio: " . $_POST['subject'];
    $message = "Name: " . $_POST['name'] . "\n" .
               "Email: " . $_POST['email'] . "\n" .
               "Message: " . $_POST['message'];

    mail($to, $subject, $message);
    echo "Message sent successfully!";
}
?>
```

## 🚀 Deployment

### GitHub Pages

1. Upload ke GitHub repository
2. Enable GitHub Pages di settings
3. Pilih branch untuk deployment

### Netlify

1. Drag & drop folder ke Netlify
2. Atau connect dengan GitHub repository

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` di folder project

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Poppins)
- **Placeholder Images**: via.placeholder.com
- **Inspiration**: Modern web design trends

---

**Note**: Jangan lupa untuk mengganti semua data sampel dengan informasi pribadi Anda yang sebenarnya!

## 🆘 Support

Jika Anda menemukan bug atau memerlukan bantuan, silakan:

1. Check dokumentasi ini terlebih dahulu
2. Search di issues yang sudah ada
3. Buat issue baru jika diperlukan

Happy coding! 🎉
