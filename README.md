# 🎀 Meme Sağlığım - React Native Expo App

Bu proje, Expo ve React Native kullanılarak tasarım (mockup) üzerinden sıfırdan kodlanmış mobil sağlık, farkındalık ve takip uygulamasıdır. Kullanıcıların eğitimlere erişebildiği, anketler çözdüğü ve sağlık bilgilerine ulaşabildiği tam teşekküllü bir frontend (arayüz) projesidir.

## ✨ Neler Yapıldı? (Proje Kapsamı)

Tasarım prototiplerine sadık kalınarak toplam **18 farklı sayfa** ve fonksiyonel etkileşim kodlanmıştır:

- **🔐 Kimlik Doğrulama:** Başlangıç (Login) ve Hoşgeldiniz ekranları.
- **🏠 Ana Sayfa ve Navigasyon:** Gelişmiş çapraz Navigasyon (Alt Bar - `BottomBar`, Yan Menü - `Sidebar`) ve sayfa arası geçişler (Expo Router).
- **📋 Anketler ve Testler:** Çok adımlı değerlendirme modülleri (İyi Oluş Değerlendirme Testi, Meme Kanseri Risk Testi, Formlar).
- **💡 Bilgi ve Eğitim:** Günlük İpuçları, Kaynakça, Eğitim sayfaları. İçeriklerin dinamik gösterimi için açılır-kapanır (`Accordion`) bileşenleri kodlandı.
- **💬 İletişim & Şikayet:** Şikayetlerim ekranı, İletişim / Sohbet (Chat) arayüzleri tasarlandı.
- **⚙️ Ayarlar & Profil:** Gizlilik sekmesi, Güvenlik, Profil detayları sayfaları.
- **🧩 Özel Bileşenler:** Proje genelinde tekrar kullanılabilir UI bileşenleri geliştirildi (Özel butonlar, anket kartları, modal yapılar vb.).
- **⚙️ Build & Publish:** Android Studio, Java ve Gradle ayarlamaları yapılıp Windows klasör yolu (path) sınırları gibi sorunlar aşılarak projenin **tam sürüm (Release) Android APK'sı** üretildi.

> **Not ("Logici / Mantığı" Hakkında):** Daha önce bahsedilen *"backend logici"* (arka uç mantığı), uygulamanın arayüzlerinin ve etkileşimlerinin tamamen yapıldığı ancak henüz gerçek bir veritabanına bağlanmadığı anlamına gelir. Uygulama içerisindeki anket, hesap oluşturma ve veri akışları **geçici (mock) verilerle** çalışmaktadır. Yani Firebase vb. araçlarla bir canlandırma henüz yapılmamıştır (loglama veya backend veritabanı adımları, eğer istenirse ileriki aşamalarda geliştirilebilecek kısımlardır).

## 🚀 Başlarken (Development)

Geliştirme ortamını bilgisayarınızda kurmak için aşağıdaki adımları izleyin.

1. **Bağımlılıkları Yükleyin**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Projeyi Başlatın**
   ```bash
   npx expo start
   ```

Bu komutu çalıştırdığınızda terminalde bir QR kod çıkacaktır. Telefonunuza **Expo Go** uygulamasını (iOS/Android) kurup bu QR kodu okutarak uygulamayı geliştirme aşamasında canlı (live-reload) olarak test edebilirsiniz.

## 📱 APK Kurulumu ve Android Testi (Production)

Bu repo içerisinde, tüm kodlamalar tamamlandıktan sonra alınmış tam teşekküllü release build (`app-release.apk`) bulunmaktadır. 

Uygulamanın Android cihazda gerçek performansını (Production build) test etmek için:

1. Android cihazınızda ayarlardan **Geliştirici Seçeneklerini** ve **USB Hata Ayıklama (USB Debugging)** modunu açın.
2. Cihazınızı bilgisayara USB kablo ile bağlayın ve gelen bildirime izin verin.
3. Terminalde projenin olduğu dizine girip şu komutla APK'yı cihazınıza yükleyin:
   ```bash
   adb install app-release.apk
   ```

*(Alternatif olarak APK dosyasını e-mail, Drive veya WhatsApp üzerinden telefonunuza gönderip direkt olarak da kurabilirsiniz.)*

### 📹 Uygulama Test Videosu

Uygulamanın çalışır halini, tüm sayfaların etkileşimini ve tasarımını gösteren ekran kayıt videosu aşağıdadır (Android Studio emülatörü ile test edilmiştir):

**[📺 Uygulama Test Videosunu İzlemek İçin Buraya Tıklayın](https://youtube.com/shorts/kCkPtFL6BAU?si=06jdjiiwgkDR-V1u)**

## 🛠 Kullanılan Teknolojiler

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/) (Expo Router)
- React Hooks & Context API
- Reanimated & SVG Entegrasyonları
