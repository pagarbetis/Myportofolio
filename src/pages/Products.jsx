import { useState } from "react";

export default function ExperiencePage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const trainingsAndCerts = [
    {
      title: "Web Programming Vocational Training",
      org: "PPKD Jakarta Pusat",
      meta: "Training & Practical Projects",
      desc: "Membangun aplikasi web full-stack dan berbasis framework modern dengan praktik pengembangan terstruktur dan kolaborasi proyek.",
      images: ["/ppkd1.png", "/ppkd2.png"],
    },
    {
      title: "Front-End Web Developer - Intermediate",
      org: "Dicoding Academy",
      meta: "Certificate",
      desc: "Mengembangkan aplikasi web interaktif, arsitektur komponen, dan penerapan standar pengembangan front-end modern.",
      images: ["/dicoding.png"],
    },
    {
      title: "Introduction to Cybersecurity",
      org: "Cisco Networking Academy",
      meta: "Certificate & Badge",
      desc: "Memahami dasar keamanan siber, ancaman jaringan, perlindungan data, dan praktik keamanan digital.",
      images: ["/cisco.png"],
    },
  ];

  const workExperiences = [
    {
      role: "General Affairs Support",
      org: "PT Aksi Plus Indonesia",
      meta: "Operational & Support",
      desc: "Mendukung operasional harian kantor, koordinasi kebutuhan fasilitas/administrasi, serta memastikan kelancaran alur kerja tim.",
    },
    {
      role: "Operational Driver & Office Boy",
      org: "Previous Operational Roles",
      meta: "Operations & Logistics",
      desc: "Menjalankan tugas operasional lapangan dan dukungan kantor dengan ketepatan waktu, tanggung jawab tinggi, serta koordinasi yang andal.",
    },
  ];

  return (
    <div className="flex flex-col gap-y-4 py-4 px-2">
      {/* Training & Certifications */}
      <div className="flex flex-col bg-gray-100 rounded-lg px-5 py-5 gap-y-4">
        <div className="font-medium text-lg flex items-center gap-x-2">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          Training & Certifications
        </div>

        <div className="flex flex-col gap-y-4">
          {trainingsAndCerts.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg px-5 py-4 border border-gray-200 drop-shadow-sm flex flex-col gap-y-3"
            >
              <div className="flex flex-col gap-y-1">
                <div className="flex items-center justify-between gap-x-2">
                  <h2 className="font-medium text-base text-gray-900">
                    {item.title}
                  </h2>
                  <span className="text-xs text-gray-500 shrink-0">
                    {item.meta}
                  </span>
                </div>
                <p className="text-xs font-medium text-gray-500">{item.org}</p>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Gambar Sertifikat (bisa 1 atau lebih) */}
              {item.images && item.images.length > 0 && (
                <div
                  className={`grid gap-3 pt-1 ${
                    item.images.length === 1
                      ? "grid-cols-1"
                      : "grid-cols-1 sm:grid-cols-2"
                  }`}
                >
                  {item.images.map((imgSrc, imgIdx) => (
                    <button
                      key={imgIdx}
                      type="button"
                      onClick={() => setSelectedImage(imgSrc)}
                      className="group relative rounded-lg overflow-hidden border border-gray-200 bg-gray-50 aspect-[16/11] text-left cursor-zoom-in"
                    >
                      <img
                        src={imgSrc}
                        alt={`${item.title} certificate ${imgIdx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-300"
                      />
                      <span className="absolute bottom-2 right-2 text-[11px] bg-black/70 text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition">
                        Klik perbesar
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience */}
      <div className="flex flex-col bg-gray-100 rounded-lg px-5 py-5 gap-y-4">
        <div className="font-medium text-lg flex items-center gap-x-2">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          Work Experience
        </div>

        <div className="flex flex-col gap-y-3">
          {workExperiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg px-5 py-4 border border-gray-200 drop-shadow-sm flex flex-col gap-y-1"
            >
              <div className="flex items-center justify-between gap-x-2">
                <h2 className="font-medium text-base text-gray-900">
                  {exp.role}
                </h2>
                <span className="text-xs text-gray-500 shrink-0">
                  {exp.meta}
                </span>
              </div>
              <p className="text-xs font-medium text-gray-500">{exp.org}</p>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Preview Gambar Sertifikat */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-black/70 hover:bg-black text-white text-xs px-3 py-1.5 rounded-lg"
            >
              Tutup ✕
            </button>
            <img
              src={selectedImage}
              alt="Certificate Full Preview"
              className="w-full h-auto max-h-[85vh] object-contain bg-gray-50"
            />
          </div>
        </div>
      )}
    </div>
  );
}