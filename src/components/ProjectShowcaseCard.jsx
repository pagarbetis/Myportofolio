import { useState } from "react";
import { getConfigData } from "../data/configReader";

export default function ProjectShowcaseCard() {
  const configData = getConfigData();
  const projects = configData.projects || [];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="px-2">
      <div className="flex flex-col bg-gray-100 rounded-lg px-5 py-5 gap-y-4">
        <div className="font-medium text-lg flex items-center gap-x-2">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          Projects
        </div>

        <div className="flex flex-col gap-y-5">
          {projects.map((project, index) => {
            const images =
              Array.isArray(project["project-images"]) &&
              project["project-images"].length > 0
                ? project["project-images"]
                : project["project-image-url"]
                ? [project["project-image-url"]]
                : [];

            return (
              <div
                key={index}
                className="bg-white rounded-lg p-5 border border-gray-200 drop-shadow-sm flex flex-col gap-y-4"
              >
                {/* 1. Header: Judul, Tech Stack Singkat & Tombol GitHub */}
                <div className="flex items-start justify-between gap-x-4">
                  <div>
                    <h2 className="font-semibold text-lg text-gray-900">
                      {project["project-name"]}
                    </h2>
                    {project["project-desc"] && (
                      <p className="text-xs font-medium text-gray-500 mt-0.5">
                        {project["project-desc"]}
                      </p>
                    )}
                  </div>

                  {project["project-link"] && (
                    <a
                      href={project["project-link"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-800 transition"
                    >
                      View ↗
                    </a>
                  )}
                </div>

                {/* 2. Galeri Gambar (Klik buat Zoom) */}
                {images.length > 0 && (
                  <div
                    className={`grid gap-3 ${
                      images.length === 1
                        ? "grid-cols-1"
                        : "grid-cols-1 sm:grid-cols-2"
                    }`}
                  >
                    {images.map((imgSrc, imgIdx) => (
                      <button
                        key={imgIdx}
                        type="button"
                        onClick={() => setSelectedImage(imgSrc)}
                        className="group relative rounded-lg overflow-hidden border border-gray-200 bg-gray-50 aspect-video text-left cursor-zoom-in"
                      >
                        <img
                          src={imgSrc}
                          alt={`${project["project-name"]} preview ${imgIdx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-300"
                        />
                        <span className="absolute bottom-2 right-2 text-[11px] bg-black/70 text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition">
                          Klik perbesar
                        </span>
                      </button>
                    ))}
                  </div>
                )}

                {/* 3. Role & Deskripsi Lengkap di Bawah Gambar */}
                {(project["project-role"] || project["project-full-desc"]) && (
                  <div className="border-t border-gray-100 pt-3 flex flex-col gap-y-2">
                    {project["project-role"] && (
                      <div className="text-xs text-gray-700">
                        <span className="font-semibold text-gray-900">
                          Role:
                        </span>{" "}
                        <span>{project["project-role"]}</span>
                      </div>
                    )}

                    {project["project-full-desc"] && (
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {project["project-full-desc"]}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Preview Gambar Project */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
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
              alt="Project Full Preview"
              className="w-full h-auto max-h-[85vh] object-contain bg-gray-50"
            />
          </div>
        </div>
      )}
    </div>
  );
}