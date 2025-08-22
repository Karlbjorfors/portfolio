"use client";
import React from "react";
import { MdFileDownload } from "react-icons/md";

const DownloadCV = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/CV250711.pdf";
    link.download = "CV250711.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="btn btn-lg btn-white mb-16" onClick={handleDownloadCV}>
      <div className="flex items-center gap-3">
        <span>Download CV</span>
        <MdFileDownload className="text-xl" />
      </div>
    </button>
  );
};

export default DownloadCV;
