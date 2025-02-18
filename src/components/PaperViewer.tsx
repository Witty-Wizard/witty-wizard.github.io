"use client";
import { Document,pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

interface PaperViewerProps {
    url: string;
}

const PaperViewer = ({ url }: PaperViewerProps) => {

    return (
        <div className="flex flex-col items-center">
            <div className="overflow-auto max-h-[calc(80vh-120px)] w-full flex justify-center">
                <Document
                    file={url}
                    loading={
                        <div className="flex items-center justify-center h-[60vh]">
                            <div className="animate-pulse text-gray-400">Loading PDF...</div>
                        </div>
                    }
                />
            </div>
        </div>
    );
};

export default PaperViewer;