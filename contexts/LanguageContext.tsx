import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  id: {
    // Header
    'nav.about': 'Tentang Kami',
    'nav.services': 'Layanan',
    'nav.partnership': 'Kemitraan',
    'nav.contact': 'Kontak',
    'nav.career': 'Karir',

    // Home Page
    'home.hero.title': 'Memimpin Pengelolaan Hutan Berkelanjutan di Riau',
    'home.hero.subtitle': 'Perusahaan swasta nasional yang berdedikasi pada pengelolaan hutan berkelanjutan melalui Pemanfaatan Jasa Lingkungan Penyerapan dan/atau Penyimpanan Karbon (PJL-PL)',
    'home.hero.cta': 'Pelajari Lebih Lanjut',
    'home.hero.contact': 'Hubungi Kami',
    
    'home.stats.title': 'Dampak Kami dalam Angka',
    'home.stats.forest': 'Hektar Hutan Dikelola',
    'home.stats.carbon': 'Ton CO₂ Diserap/Tahun',
    'home.stats.community': 'Komunitas Terbantu',
    'home.stats.partners': 'Partner Strategis',

    'home.mission.title': 'Misi Kami',
    'home.mission.content': 'Menjadi pemimpin dalam pengelolaan hutan berkelanjutan dengan mengintegrasikan konservasi lingkungan, pembangunan ekonomi, dan kesejahteraan masyarakat. Kami berkomitmen untuk melindungi keanekaragaman hayati sambil menciptakan nilai ekonomi melalui perdagangan karbon dan layanan ekosistem.',
    
    'home.vision.title': 'Visi Kami',
    'home.vision.content': 'Menjadi perusahaan pengelolaan hutan terdepan di Indonesia yang diakui secara internasional atas kontribusinya terhadap mitigasi perubahan iklim dan pelestarian lingkungan berkelanjutan.',

    'home.services.title': 'Layanan Utama Kami',
    'home.services.carbon.title': 'Perdagangan Karbon',
    'home.services.carbon.desc': 'Program sertifikasi dan perdagangan kredit karbon berkualitas tinggi',
    'home.services.forest.title': 'Pengelolaan Hutan',
    'home.services.forest.desc': 'Praktik kehutanan berkelanjutan yang melindungi keanekaragaman hayati',
    'home.services.community.title': 'Pemberdayaan Masyarakat',
    'home.services.community.desc': 'Program pengembangan kapasitas dan ekonomi untuk komunitas lokal',
    'home.services.research.title': 'Riset & Inovasi',
    'home.services.research.desc': 'Penelitian terdepan dalam ilmu kehutanan dan teknologi lingkungan',

    'home.certifications.title': 'Sertifikasi & Penghargaan',
    'home.certifications.vcs': 'Verified Carbon Standard',
    'home.certifications.ccb': 'Climate, Community & Biodiversity Standards',
    'home.certifications.fsc': 'Forest Stewardship Council',
    'home.certifications.iso': 'ISO 14001 Environmental Management',

    // About Page
    'about.hero.title': 'Kisah Kami',
    'about.hero.subtitle': 'Memimpin Pengelolaan Hutan Berkelanjutan di Indonesia',
    'about.story.title': 'Siapa Kami',
    'about.story.p1': 'PT. Nur Mutiara Riau, didirikan melalui Akta No. 64 pada 28 Juli 2020, berada di garis depan pengelolaan hutan berkelanjutan di Indonesia. Mandat utama kami adalah pengelolaan hutan produksi seluas ±38.564 hektar di Kabupaten Indragiri Hilir, Provinsi Riau.',
    'about.story.p2': 'Konsesi vital ini, yang terdiri dari hutan mangrove sekunder dan hutan rawa gambut, merupakan penyerap karbon kritis dan benteng keanekaragaman hayati. Kami berkomitmen pada model pengelolaan yang menyelaraskan pelestarian ekologi, kemakmuran masyarakat, dan aksi iklim, beroperasi sepenuhnya sesuai dengan peraturan Indonesia, termasuk Peraturan Presiden No. 98 Tahun 2021.',
    'about.vision.title': 'Visi',
    'about.vision.content': 'Mewujudkan pengelolaan hutan produksi berkelanjutan melalui jasa lingkungan dan penyerapan karbon, memberikan manfaat multifungsi bagi ekosistem dan masyarakat.',
    'about.goals.title': 'Tujuan',
    'about.goals.1': 'Memberikan solusi pengelolaan hutan yang memprioritaskan konservasi lingkungan dan keseimbangan sosial-ekonomi.',
    'about.goals.2': 'Mendukung upaya pengurangan emisi gas rumah kaca dan meningkatkan ketahanan iklim.',
    'about.goals.3': 'Menciptakan peluang ekonomi bagi masyarakat lokal melalui kegiatan ramah lingkungan di sekitar hutan.',
    'about.mission.title': 'Misi',
    'about.mission.1': 'Menerapkan pengelolaan hutan berkelanjutan yang selaras dengan prinsip kehati-hatian dan peraturan pemerintah.',
    'about.mission.2': 'Meningkatkan fungsi ekosistem hutan sebagai penyerap dan penyimpan karbon untuk mengurangi risiko emisi gas rumah kaca.',
    'about.mission.3': 'Memberdayakan masyarakat sekitar melalui pemanfaatan Hasil Hutan Bukan Kayu (HHBK) dan ekowisata.',
    'about.mission.4': 'Melakukan rehabilitasi dan restorasi hutan dan lahan di area yang terdegradasi.',
    'about.team.title': 'Temui Tim Kepemimpinan Kami',
    
    'about.title': 'Tentang Nur Mutiara Riau',
    'about.intro': 'Nur Mutiara Riau adalah perusahaan swasta nasional yang berkomitmen pada pengelolaan hutan berkelanjutan melalui Pemanfaatan Jasa Lingkungan Penyerapan dan/atau Penyimpanan Karbon (PJL-PL) di Provinsi Riau, Indonesia.',
    
    'about.history.title': 'Sejarah Perusahaan',
    'about.history.2018': 'Pendirian perusahaan dan akuisisi konsesi hutan',
    'about.history.2019': 'Implementasi program baseline carbon assessment',
    'about.history.2020': 'Sertifikasi VCS dan CCB pertama diterima',
    'about.history.2021': 'Ekspansi program pemberdayaan masyarakat',
    'about.history.2022': 'Pencapaian 1 juta ton CO₂ diserap',
    'about.history.2023': 'Kemitraan strategis dengan organisasi internasional',
    'about.history.2024': 'Peluncuran program inovasi teknologi kehutanan',
    'about.history.2025': 'Ekspansi area konservasi dan diversifikasi layanan',

    'about.values.title': 'Nilai-Nilai Inti',
    'about.values.sustainability': 'Keberlanjutan',
    'about.values.sustainability.desc': 'Mengintegrasikan kelestarian lingkungan dalam setiap keputusan bisnis',
    'about.values.integrity': 'Integritas',
    'about.values.integrity.desc': 'Beroperasi dengan transparansi dan standar etika tertinggi',
    'about.values.innovation': 'Inovasi',
    'about.values.innovation.desc': 'Terus mengembangkan solusi baru untuk pengelolaan hutan',
    'about.values.collaboration': 'Kolaborasi',
    'about.values.collaboration.desc': 'Membangun kemitraan yang kuat dengan semua stakeholder',

    'about.leadership.title': 'Tim Kepemimpinan',
    'about.leadership.ceo': 'Chief Executive Officer',
    'about.leadership.coo': 'Chief Operating Officer',
    'about.leadership.cfo': 'Chief Financial Officer',
    'about.leadership.cto': 'Chief Technology Officer',

    'about.structure.title': 'Struktur Organisasi',
    'about.structure.board': 'Dewan Direksi',
    'about.structure.management': 'Manajemen Eksekutif',
    'about.structure.operations': 'Operasional',
    'about.structure.finance': 'Keuangan & Akuntansi',
    'about.structure.tech': 'Teknologi & Inovasi',
    'about.structure.community': 'Pemberdayaan Masyarakat',
    'about.structure.env': 'Konservasi Lingkungan',

    // Services Page
    'services.title': 'Layanan Kami',
    'services.subtitle': 'Kami menawarkan berbagai layanan yang berpusat pada pengelolaan hutan berkelanjutan dan perdagangan karbon. Keahlian kami terletak pada pengembangan proyek karbon, restorasi ekosistem, dan pemberdayaan masyarakat.',
    'services.intro': 'Kami menawarkan solusi komprehensif untuk pengelolaan hutan berkelanjutan dan perdagangan karbon dengan standar internasional.',
    'services.carbon.description': 'Kami mengkhususkan diri dalam mengembangkan proyek karbon berkualitas tinggi dan berskala besar yang menghasilkan kredit karbon yang dapat diverifikasi dan berdampak. Pendekatan kami mengintegrasikan metodologi ilmiah yang ketat dan teknologi pemantauan canggih untuk memastikan integritas dan permanensi pengurangan emisi. Dengan fokus pada upaya konservasi dan rehabilitasi, kami membantu bisnis dan negara mencapai tujuan iklim mereka.',
    'services.restoration.title': 'Restorasi Ekosistem',
    'services.restoration.description': 'Tim kami menerapkan pendekatan ilmiah terdepan untuk memulihkan ekosistem lahan gambut dan mangrove yang terdegradasi. Habitat kritis ini sangat penting untuk keanekaragaman hayati, perlindungan pesisir, dan penyerapan karbon. Proyek restorasi kami bertujuan untuk membangun kembali ekosistem yang tangguh, meningkatkan penyerap karbon alami, dan menciptakan planet yang lebih sehat untuk generasi mendatang.',
    'services.community.description': 'Keberlanjutan meluas melampaui lingkungan ke masyarakat yang bergantung padanya. Kami berkomitmen untuk bekerja sama dengan masyarakat lokal dalam mengembangkan mata pencaharian berkelanjutan. Melalui program kolaboratif dalam ekowisata, pertanian berkelanjutan, dan penggunaan Hasil Hutan Bukan Kayu (HHBK) yang bertanggung jawab, kami memberdayakan masyarakat untuk menjadi penjaga warisan alam mereka.',

    'services.carbon.title': 'Perdagangan Kredit Karbon',
    'services.carbon.desc': 'Program perdagangan kredit karbon berkualitas tinggi dengan sertifikasi VCS dan CCB',
    'services.carbon.feature1': 'Proyek REDD+ tersertifikasi',
    'services.carbon.feature2': 'Monitoring, Reporting, dan Verification (MRV)',
    'services.carbon.feature3': 'Akses ke pasar karbon internasional',
    'services.carbon.feature4': 'Due diligence dan dokumentasi lengkap',

    'services.forest.title': 'Pengelolaan Hutan Berkelanjutan',
    'services.forest.desc': 'Praktik kehutanan yang memastikan kelestarian ekosistem dan keanekaragaman hayati',
    'services.forest.feature1': 'Pemetaan dan inventarisasi hutan',
    'services.forest.feature2': 'Monitoring kesehatan hutan',
    'services.forest.feature3': 'Pencegahan illegal logging',
    'services.forest.feature4': 'Restorasi dan rehabilitasi lahan',

    'services.community.title': 'Pemberdayaan Masyarakat',
    'services.community.desc': 'Program yang meningkatkan kesejahteraan masyarakat lokal sambil menjaga kelestarian hutan',
    'services.community.feature1': 'Pelatihan keterampilan dan kapasitas',
    'services.community.feature2': 'Pengembangan usaha berkelanjutan',
    'services.community.feature3': 'Pendidikan lingkungan',
    'services.community.feature4': 'Akses kesehatan dan infrastruktur',

    'services.research.title': 'Riset & Pengembangan',
    'services.research.desc': 'Penelitian inovatif untuk meningkatkan efektivitas pengelolaan hutan dan penyerapan karbon',
    'services.research.feature1': 'Teknologi remote sensing dan GIS',
    'services.research.feature2': 'Analisis biomassa dan stok karbon',
    'services.research.feature3': 'Studi keanekaragaman hayati',
    'services.research.feature4': 'Pengembangan best practices',

    'services.process.title': 'Proses Perdagangan Karbon',
    'services.process.step1': 'Penilaian & Verifikasi',
    'services.process.step1.desc': 'Evaluasi potensi karbon dan baseline assessment',
    'services.process.step2': 'Sertifikasi',
    'services.process.step2.desc': 'Audit dan sertifikasi oleh lembaga independen',
    'services.process.step3': 'Monitoring',
    'services.process.step3.desc': 'Pemantauan berkelanjutan dan pelaporan rutin',
    'services.process.step4': 'Perdagangan',
    'services.process.step4.desc': 'Transaksi kredit karbon di pasar global',

    // Partnership Page
    'partnership.hero.title': 'Bermitra Dengan Kami',
    'partnership.hero.subtitle': 'Berkolaborasi untuk Masa Depan yang Berkelanjutan dan Adil',
    'partnership.why.title': 'Mengapa Bermitra dengan Nur Mutiara Riau?',
    'partnership.why.description': 'Dengan bermitra dengan kami, Anda berinvestasi pada masa depan di mana pertumbuhan bisnis dan pengelolaan lingkungan berjalan beriringan. Bergabunglah dengan inisiatif yang kredibel, berdampak, dan berfokus pada masyarakat.',
    'partnership.benefits.1.title': 'Dampak Terukur',
    'partnership.benefits.1.description': 'Berkontribusi pada proyek pengurangan karbon yang terverifikasi yang membuat perbedaan nyata terhadap tujuan iklim global.',
    'partnership.benefits.2.title': 'Pemberdayaan Masyarakat',
    'partnership.benefits.2.description': 'Mendukung mata pencaharian berkelanjutan dan memberdayakan masyarakat lokal untuk menjadi penjaga hutan mereka.',
    'partnership.benefits.3.title': 'Tanggung Jawab Korporat',
    'partnership.benefits.3.description': 'Selaraskan merek Anda dengan proyek keberlanjutan terkemuka, meningkatkan profil ESG dan kepercayaan pemangku kepentingan Anda.',
    'partnership.models.title': 'Model Kemitraan Kami',
    'partnership.models.1.title': 'Offsetting Karbon',
    'partnership.models.1.description': 'Beli kredit karbon berkualitas tinggi dari proyek kami untuk mengimbangi emisi perusahaan Anda dan mencapai netralitas karbon.',
    'partnership.models.2.title': 'Sponsorship Korporat',
    'partnership.models.2.description': 'Sponsori langsung program konservasi, restorasi, atau pengembangan masyarakat kami untuk menunjukkan komitmen Anda terhadap keberlanjutan.',
    'partnership.models.3.title': 'Teknologi & Riset',
    'partnership.models.3.description': 'Berkolaborasi dengan kami dengan menyediakan teknologi, keahlian, atau dukungan riset untuk meningkatkan pemantauan dan efektivitas proyek kami.',
    'partnership.cta.title': 'Siap Membuat Perbedaan?',
    'partnership.cta.description': 'Mari diskusikan bagaimana kita dapat bekerja sama untuk mencapai tujuan bersama. Hubungi tim kemitraan kami untuk memulai percakapan.',
    'partnership.cta.button': 'Hubungi Kami Hari Ini',
    'partnership.title': 'Kemitraan Strategis',
    'partnership.intro': 'Kami percaya bahwa kolaborasi adalah kunci kesuksesan dalam mencapai tujuan keberlanjutan. Mari bergabung dengan kami untuk menciptakan dampak positif yang berkelanjutan.',

    'partnership.benefits.title': 'Keuntungan Bermitra dengan Kami',
    'partnership.benefits.1': 'Akses ke Kredit Karbon Berkualitas',
    'partnership.benefits.1.desc': 'Portofolio kredit karbon tersertifikasi dengan integritas tinggi',
    'partnership.benefits.2': 'Transparansi Penuh',
    'partnership.benefits.2.desc': 'Pelaporan dan dokumentasi lengkap untuk setiap proyek',
    'partnership.benefits.3': 'Dampak Terukur',
    'partnership.benefits.3.desc': 'Metrik dampak lingkungan dan sosial yang jelas',
    'partnership.benefits.4': 'Dukungan Teknis',
    'partnership.benefits.4.desc': 'Tim ahli siap membantu di setiap tahap kerjasama',

    'partnership.types.title': 'Jenis Kemitraan',
    'partnership.types.corporate': 'Kemitraan Korporat',
    'partnership.types.corporate.desc': 'Kolaborasi strategis untuk pencapaian target net-zero',
    'partnership.types.ngo': 'Organisasi Non-Profit',
    'partnership.types.ngo.desc': 'Kerjasama dalam program konservasi dan pemberdayaan',
    'partnership.types.government': 'Pemerintah',
    'partnership.types.government.desc': 'Dukungan kebijakan dan implementasi program nasional',
    'partnership.types.research': 'Institusi Riset',
    'partnership.types.research.desc': 'Kolaborasi riset dan pengembangan teknologi',

    'partnership.success.title': 'Kisah Sukses',
    'partnership.cta': 'Tertarik Bermitra?',
    'partnership.contact': 'Hubungi Tim Kemitraan Kami',

    // Career Page
    'career.title': 'Bergabung dengan Tim Kami',
    'career.subtitle': 'Jadilah bagian dari tim yang bersemangat yang berdedikasi untuk memberikan dampak positif pada lingkungan dan masyarakat lokal. Di PT. Nur Mutiara Riau, kami percaya bahwa orang-orang kami adalah aset terbesar kami.',
    'career.openings': 'Lowongan Saat Ini',
    'career.jobs.1.title': 'Spesialis Kehutanan',
    'career.jobs.1.location': 'Riau, Indonesia',
    'career.jobs.1.type': 'Penuh Waktu',
    'career.jobs.2.title': 'Petugas Keterlibatan Masyarakat',
    'career.jobs.2.location': 'Riau, Indonesia',
    'career.jobs.2.type': 'Penuh Waktu',
    'career.jobs.3.title': 'Analis GIS',
    'career.jobs.3.location': 'Remote',
    'career.jobs.3.type': 'Kontrak',
    'career.jobs.4.title': 'Ilmuwan Lingkungan',
    'career.jobs.4.location': 'Riau, Indonesia',
    'career.jobs.4.type': 'Penuh Waktu',
    'career.jobs.5.title': 'Manajer Proyek, Proyek Karbon',
    'career.jobs.5.location': 'Jakarta, Indonesia',
    'career.jobs.5.type': 'Penuh Waktu',
    'career.notfound.title': 'Tidak menemukan posisi yang sesuai?',
    'career.notfound.description': 'Kami selalu mencari individu yang berbakat dan bersemangat. Kirimkan resume Anda dan kami akan mengingat Anda untuk lowongan di masa depan.',
    'career.intro': 'Bergabunglah dengan tim kami dan menjadi bagian dari solusi untuk masa depan yang lebih berkelanjutan. Kami mencari individu yang bersemangat tentang konservasi lingkungan dan pembangunan berkelanjutan.',

    'career.culture.title': 'Budaya Perusahaan',
    'career.culture.desc': 'Kami menciptakan lingkungan kerja yang mendukung pertumbuhan profesional, inovasi, dan keseimbangan kehidupan kerja.',

    'career.benefits.title': 'Benefit Karyawan',
    'career.benefits.1': 'Asuransi Kesehatan',
    'career.benefits.2': 'Tunjangan Pensiun',
    'career.benefits.3': 'Program Pengembangan',
    'career.benefits.4': 'Work-Life Balance',
    'career.benefits.5': 'Bonus Kinerja',
    'career.benefits.6': 'Cuti yang Fleksibel',

    'career.growth.title': 'Jalur Karir',
    'career.growth.entry': 'Entry Level',
    'career.growth.junior': 'Junior Professional',
    'career.growth.senior': 'Senior Professional',
    'career.growth.lead': 'Team Lead',
    'career.growth.manager': 'Manager',
    'career.growth.director': 'Director',

    'career.positions.title': 'Posisi Terbuka',
    'career.positions.forestry': 'Forest Management Specialist',
    'career.positions.carbon': 'Carbon Project Analyst',
    'career.positions.community': 'Community Development Officer',
    'career.positions.gis': 'GIS Analyst',
    'career.positions.apply': 'Lamar Sekarang',

    // Contact Page
    'contact.title': 'Hubungi Kami',
    'contact.subtitle': 'Kami ingin mendengar dari Anda. Apakah Anda memiliki pertanyaan tentang proyek kami, kemitraan, atau hal lainnya, tim kami siap menjawab semua pertanyaan Anda.',
    'contact.intro': 'Kami ingin mendengar dari Anda. Apakah Anda memiliki pertanyaan tentang proyek kami, kemitraan, atau hal lainnya, tim kami siap menjawab semua pertanyaan Anda.',
    'contact.address': 'Alamat',
    'contact.email': 'Email',
    'contact.phone': 'Telepon',
    'contact.whatsapp': 'Chat dengan kami di WhatsApp',
    'contact.form.name': 'Nama',
    'contact.form.email': 'Email',
    'contact.form.message': 'Pesan',
    'contact.form.submit': 'Kirim Pesan',

    // Footer
    'footer.about': 'Perusahaan swasta nasional yang berdedikasi pada pengelolaan hutan berkelanjutan melalui Pemanfaatan Jasa Lingkungan (PJL-PL) di Provinsi Riau, Indonesia.',
    'footer.contact': 'Hubungi Kami',
    'footer.commitment': 'Komitmen Kami',
    'footer.commitment.1': 'Pengelolaan Hutan Berkelanjutan',
    'footer.commitment.2': 'Konservasi Lingkungan',
    'footer.commitment.3': 'Pemberdayaan Masyarakat',
    'footer.commitment.4': 'Keunggulan Kredit Karbon',
    'footer.copyright': 'Hak Cipta',
    'footer.rights': 'Nur Mutiara Riau. Semua Hak Dilindungi.',
  },
  en: {
    // Header
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.partnership': 'Partnership',
    'nav.contact': 'Contact',
    'nav.career': 'Career',

    // Home Page
    'home.hero.title': 'Leading Sustainable Forest Management in Riau',
    'home.hero.subtitle': 'A national private company dedicated to sustainable forest management through Environmental Services Utilization for Carbon Absorption and/or Storage (PJL-PL)',
    'home.hero.cta': 'Learn More',
    'home.hero.contact': 'Contact Us',
    
    'home.stats.title': 'Our Impact in Numbers',
    'home.stats.forest': 'Hectares of Forest Managed',
    'home.stats.carbon': 'Tons of CO₂ Absorbed/Year',
    'home.stats.community': 'Communities Supported',
    'home.stats.partners': 'Strategic Partners',

    'home.mission.title': 'Our Mission',
    'home.mission.content': 'To be a leader in sustainable forest management by integrating environmental conservation, economic development, and community welfare. We are committed to protecting biodiversity while creating economic value through carbon trading and ecosystem services.',
    
    'home.vision.title': 'Our Vision',
    'home.vision.content': 'To become Indonesia\'s leading forest management company, internationally recognized for its contribution to climate change mitigation and sustainable environmental preservation.',

    'home.services.title': 'Our Core Services',
    'home.services.carbon.title': 'Carbon Trading',
    'home.services.carbon.desc': 'High-quality carbon credit certification and trading programs',
    'home.services.forest.title': 'Forest Management',
    'home.services.forest.desc': 'Sustainable forestry practices that protect biodiversity',
    'home.services.community.title': 'Community Empowerment',
    'home.services.community.desc': 'Capacity building and economic development programs for local communities',
    'home.services.research.title': 'Research & Innovation',
    'home.services.research.desc': 'Cutting-edge research in forestry science and environmental technology',

    'home.certifications.title': 'Certifications & Awards',
    'home.certifications.vcs': 'Verified Carbon Standard',
    'home.certifications.ccb': 'Climate, Community & Biodiversity Standards',
    'home.certifications.fsc': 'Forest Stewardship Council',
    'home.certifications.iso': 'ISO 14001 Environmental Management',

    // About Page
    'about.hero.title': 'Our Story',
    'about.hero.subtitle': 'Pioneering Sustainable Forest Management in Indonesia',
    'about.story.title': 'Who We Are',
    'about.story.p1': 'PT. Nur Mutiara Riau, established through Deed No. 64 on July 28, 2020, is at the forefront of sustainable forest management in Indonesia. Our primary mandate is the stewardship of a ±38,564-hectare production forest in Indragiri Hilir Regency, Riau Province.',
    'about.story.p2': 'This vital concession, comprising secondary mangrove and peat swamp forests, represents a critical carbon sink and a bastion of biodiversity. We are committed to a management model that harmonizes ecological preservation, community prosperity, and climate action, operating in full compliance with Indonesian regulations, including Presidential Regulation No. 98 of 2021.',
    'about.vision.title': 'Vision',
    'about.vision.content': 'To realize the sustainable management of production forests through environmental services and carbon absorption, providing multifunctional benefits for ecosystems and society.',
    'about.goals.title': 'Goals',
    'about.goals.1': 'Provide forest management solutions that prioritize environmental conservation and socio-economic balance.',
    'about.goals.2': 'Support efforts to reduce greenhouse gas emissions and enhance climate resilience.',
    'about.goals.3': 'Create economic opportunities for local communities through eco-friendly activities around the forest.',
    'about.mission.title': 'Mission',
    'about.mission.1': 'Implement sustainable forest management aligned with precautionary principles and government regulations.',
    'about.mission.2': 'Enhance forest ecosystem functions as carbon sinks and storage to reduce greenhouse gas emission risks.',
    'about.mission.3': 'Empower surrounding communities through the use of Non-Timber Forest Products (NTFPs) and ecotourism.',
    'about.mission.4': 'Conduct forest and land rehabilitation and restoration in degraded areas.',
    'about.team.title': 'Meet Our Leadership',
    
    'about.title': 'About Nur Mutiara Riau',
    'about.intro': 'Nur Mutiara Riau is a national private company committed to sustainable forest management through Environmental Services Utilization for Carbon Absorption and/or Storage (PJL-PL) in Riau Province, Indonesia.',
    
    'about.history.title': 'Company History',
    'about.history.2018': 'Company establishment and forest concession acquisition',
    'about.history.2019': 'Implementation of baseline carbon assessment program',
    'about.history.2020': 'First VCS and CCB certifications received',
    'about.history.2021': 'Expansion of community empowerment programs',
    'about.history.2022': 'Achievement of 1 million tons of CO₂ absorbed',
    'about.history.2023': 'Strategic partnerships with international organizations',
    'about.history.2024': 'Launch of forestry technology innovation program',
    'about.history.2025': 'Expansion of conservation areas and service diversification',

    'about.values.title': 'Core Values',
    'about.values.sustainability': 'Sustainability',
    'about.values.sustainability.desc': 'Integrating environmental preservation in every business decision',
    'about.values.integrity': 'Integrity',
    'about.values.integrity.desc': 'Operating with transparency and the highest ethical standards',
    'about.values.innovation': 'Innovation',
    'about.values.innovation.desc': 'Continuously developing new solutions for forest management',
    'about.values.collaboration': 'Collaboration',
    'about.values.collaboration.desc': 'Building strong partnerships with all stakeholders',

    'about.leadership.title': 'Leadership Team',
    'about.leadership.ceo': 'Chief Executive Officer',
    'about.leadership.coo': 'Chief Operating Officer',
    'about.leadership.cfo': 'Chief Financial Officer',
    'about.leadership.cto': 'Chief Technology Officer',

    'about.structure.title': 'Organizational Structure',
    'about.structure.board': 'Board of Directors',
    'about.structure.management': 'Executive Management',
    'about.structure.operations': 'Operations',
    'about.structure.finance': 'Finance & Accounting',
    'about.structure.tech': 'Technology & Innovation',
    'about.structure.community': 'Community Empowerment',
    'about.structure.env': 'Environmental Conservation',

    // Services Page
    'services.title': 'Our Services',
    'services.subtitle': 'We offer a range of services centered around sustainable forest management and carbon trading. Our expertise lies in carbon project development, ecosystem restoration, and community empowerment.',
    'services.intro': 'We offer comprehensive solutions for sustainable forest management and carbon trading with international standards.',
    'services.carbon.description': 'We specialize in developing high-quality, large-scale carbon projects that generate verifiable and impactful carbon credits. Our approach integrates rigorous scientific methodologies and advanced monitoring technologies to ensure the integrity and permanence of emission reductions. By focusing on conservation and rehabilitation efforts, we help businesses and nations achieve their climate goals.',
    'services.restoration.title': 'Ecosystem Restoration',
    'services.restoration.description': 'Our team implements leading-edge scientific approaches to restore degraded peatland and mangrove ecosystems. These critical habitats are vital for biodiversity, coastal protection, and carbon sequestration. Our restoration projects aim to rebuild resilient ecosystems, enhance natural carbon sinks, and create a healthier planet for future generations.',
    'services.community.description': 'Sustainability extends beyond the environment to the people who depend on it. We are committed to working hand-in-hand with local communities to develop sustainable livelihoods. Through collaborative programs in ecotourism, sustainable agriculture, and the responsible use of Non-Timber Forest Products (NTFPs), we empower communities to become stewards of their natural heritage.',

    'services.carbon.title': 'Carbon Credit Trading',
    'services.carbon.desc': 'High-quality carbon credit trading program with VCS and CCB certification',
    'services.carbon.feature1': 'Certified REDD+ projects',
    'services.carbon.feature2': 'Monitoring, Reporting, and Verification (MRV)',
    'services.carbon.feature3': 'Access to international carbon markets',
    'services.carbon.feature4': 'Complete due diligence and documentation',

    'services.forest.title': 'Sustainable Forest Management',
    'services.forest.desc': 'Forestry practices that ensure ecosystem and biodiversity preservation',
    'services.forest.feature1': 'Forest mapping and inventory',
    'services.forest.feature2': 'Forest health monitoring',
    'services.forest.feature3': 'Illegal logging prevention',
    'services.forest.feature4': 'Land restoration and rehabilitation',

    'services.community.title': 'Community Empowerment',
    'services.community.desc': 'Programs that improve local community welfare while maintaining forest conservation',
    'services.community.feature1': 'Skills and capacity training',
    'services.community.feature2': 'Sustainable business development',
    'services.community.feature3': 'Environmental education',
    'services.community.feature4': 'Access to healthcare and infrastructure',

    'services.research.title': 'Research & Development',
    'services.research.desc': 'Innovative research to improve forest management effectiveness and carbon absorption',
    'services.research.feature1': 'Remote sensing and GIS technology',
    'services.research.feature2': 'Biomass and carbon stock analysis',
    'services.research.feature3': 'Biodiversity studies',
    'services.research.feature4': 'Best practices development',

    'services.process.title': 'Carbon Trading Process',
    'services.process.step1': 'Assessment & Verification',
    'services.process.step1.desc': 'Carbon potential evaluation and baseline assessment',
    'services.process.step2': 'Certification',
    'services.process.step2.desc': 'Audit and certification by independent bodies',
    'services.process.step3': 'Monitoring',
    'services.process.step3.desc': 'Continuous monitoring and regular reporting',
    'services.process.step4': 'Trading',
    'services.process.step4.desc': 'Carbon credit transactions in global markets',

    // Partnership Page
    'partnership.hero.title': 'Partner With Us',
    'partnership.hero.subtitle': 'Collaborate for a Sustainable and Equitable Future',
    'partnership.why.title': 'Why Partner with Nur Mutiara Riau?',
    'partnership.why.description': 'By partnering with us, you are investing in a future where business growth and environmental stewardship go hand in hand. Join a credible, impactful, and community-focused initiative.',
    'partnership.benefits.1.title': 'Measurable Impact',
    'partnership.benefits.1.description': 'Contribute to verified carbon reduction projects that make a real difference to global climate goals.',
    'partnership.benefits.2.title': 'Community Empowerment',
    'partnership.benefits.2.description': 'Support sustainable livelihoods and empower local communities to become guardians of their forests.',
    'partnership.benefits.3.title': 'Corporate Responsibility',
    'partnership.benefits.3.description': 'Align your brand with a leading sustainability project, enhancing your ESG profile and stakeholder trust.',
    'partnership.models.title': 'Our Partnership Models',
    'partnership.models.1.title': 'Carbon Offsetting',
    'partnership.models.1.description': 'Purchase high-quality carbon credits from our projects to offset your company\'s emissions and achieve carbon neutrality.',
    'partnership.models.2.title': 'Corporate Sponsorship',
    'partnership.models.2.description': 'Directly sponsor our conservation, restoration, or community development programs to showcase your commitment to sustainability.',
    'partnership.models.3.title': 'Technology & Research',
    'partnership.models.3.description': 'Collaborate with us by providing technology, expertise, or research support to enhance our monitoring and project effectiveness.',
    'partnership.cta.title': 'Ready to Make a Difference?',
    'partnership.cta.description': 'Let\'s discuss how we can work together to achieve mutual goals. Reach out to our partnership team to start the conversation.',
    'partnership.cta.button': 'Contact Us Today',
    'partnership.title': 'Strategic Partnerships',
    'partnership.intro': 'We believe that collaboration is the key to success in achieving sustainability goals. Join us to create lasting positive impact.',

    'partnership.benefits.title': 'Benefits of Partnering with Us',
    'partnership.benefits.1': 'Access to Quality Carbon Credits',
    'partnership.benefits.1.desc': 'Portfolio of certified carbon credits with high integrity',
    'partnership.benefits.2': 'Full Transparency',
    'partnership.benefits.2.desc': 'Complete reporting and documentation for every project',
    'partnership.benefits.3': 'Measurable Impact',
    'partnership.benefits.3.desc': 'Clear environmental and social impact metrics',
    'partnership.benefits.4': 'Technical Support',
    'partnership.benefits.4.desc': 'Expert team ready to assist at every stage of cooperation',

    'partnership.types.title': 'Partnership Types',
    'partnership.types.corporate': 'Corporate Partnership',
    'partnership.types.corporate.desc': 'Strategic collaboration for achieving net-zero targets',
    'partnership.types.ngo': 'Non-Profit Organizations',
    'partnership.types.ngo.desc': 'Cooperation in conservation and empowerment programs',
    'partnership.types.government': 'Government',
    'partnership.types.government.desc': 'Policy support and national program implementation',
    'partnership.types.research': 'Research Institutions',
    'partnership.types.research.desc': 'Research collaboration and technology development',

    'partnership.success.title': 'Success Stories',
    'partnership.cta': 'Interested in Partnering?',
    'partnership.contact': 'Contact Our Partnership Team',

    // Career Page
    'career.title': 'Join Our Team',
    'career.subtitle': 'Be a part of a passionate team dedicated to making a positive impact on the environment and local communities. At PT. Nur Mutiara Riau, we believe that our people are our greatest asset.',
    'career.openings': 'Current Openings',
    'career.jobs.1.title': 'Forestry Specialist',
    'career.jobs.1.location': 'Riau, Indonesia',
    'career.jobs.1.type': 'Full-time',
    'career.jobs.2.title': 'Community Engagement Officer',
    'career.jobs.2.location': 'Riau, Indonesia',
    'career.jobs.2.type': 'Full-time',
    'career.jobs.3.title': 'GIS Analyst',
    'career.jobs.3.location': 'Remote',
    'career.jobs.3.type': 'Contract',
    'career.jobs.4.title': 'Environmental Scientist',
    'career.jobs.4.location': 'Riau, Indonesia',
    'career.jobs.4.type': 'Full-time',
    'career.jobs.5.title': 'Project Manager, Carbon Projects',
    'career.jobs.5.location': 'Jakarta, Indonesia',
    'career.jobs.5.type': 'Full-time',
    'career.notfound.title': 'Don\'t see a role for you?',
    'career.notfound.description': 'We are always looking for talented and passionate individuals. Send us your resume and we\'ll keep you in mind for future openings.',
    'career.intro': 'Join our team and become part of the solution for a more sustainable future. We are looking for individuals passionate about environmental conservation and sustainable development.',

    'career.culture.title': 'Company Culture',
    'career.culture.desc': 'We create a work environment that supports professional growth, innovation, and work-life balance.',

    'career.benefits.title': 'Employee Benefits',
    'career.benefits.1': 'Health Insurance',
    'career.benefits.2': 'Retirement Benefits',
    'career.benefits.3': 'Development Programs',
    'career.benefits.4': 'Work-Life Balance',
    'career.benefits.5': 'Performance Bonus',
    'career.benefits.6': 'Flexible Leave',

    'career.growth.title': 'Career Path',
    'career.growth.entry': 'Entry Level',
    'career.growth.junior': 'Junior Professional',
    'career.growth.senior': 'Senior Professional',
    'career.growth.lead': 'Team Lead',
    'career.growth.manager': 'Manager',
    'career.growth.director': 'Director',

    'career.positions.title': 'Open Positions',
    'career.positions.forestry': 'Forest Management Specialist',
    'career.positions.carbon': 'Carbon Project Analyst',
    'career.positions.community': 'Community Development Officer',
    'career.positions.gis': 'GIS Analyst',
    'career.positions.apply': 'Apply Now',

    // Contact Page
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'We\'d love to hear from you. Whether you have a question about our projects, partnerships, or anything else, our team is ready to answer all your questions.',
    'contact.intro': 'We\'d love to hear from you. Whether you have questions about our projects, partnerships, or anything else, our team is ready to answer all your questions.',
    'contact.address': 'Address',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.whatsapp': 'Chat with us on WhatsApp',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',

    // Footer
    'footer.about': 'A national private company dedicated to sustainable forest management through Environmental Services Utilization (PJL-PL) in Riau Province, Indonesia.',
    'footer.contact': 'Contact Us',
    'footer.commitment': 'Our Commitment',
    'footer.commitment.1': 'Sustainable Forest Management',
    'footer.commitment.2': 'Environmental Conservation',
    'footer.commitment.3': 'Community Development',
    'footer.commitment.4': 'Carbon Credit Excellence',
    'footer.copyright': 'Copyright',
    'footer.rights': 'Nur Mutiara Riau. All Rights Reserved.',
  },
};
