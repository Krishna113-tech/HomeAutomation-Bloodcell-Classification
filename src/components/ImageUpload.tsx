
import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Image as ImageIcon, X } from "lucide-react";
import { toast } from "sonner";

interface ImageUploadProps {
  onImageUpload: (imageUrl: string) => void;
}

const ImageUpload = ({ onImageUpload }: ImageUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast.error("Please upload an image file");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setUploadedImage(result);
      onImageUpload(result);
      toast.success("Image uploaded successfully!");
    };
    reader.readAsDataURL(file);
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  const removeImage = () => {
    setUploadedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Sample images for demonstration
  const sampleImages = [
    { name: "Neutrophil", url: "/placeholder.svg?height=100&width=100&text=Neutrophil" },
    { name: "Lymphocyte", url: "/placeholder.svg?height=100&width=100&text=Lymphocyte" },
    { name: "Monocyte", url: "/placeholder.svg?height=100&width=100&text=Monocyte" },
    { name: "Eosinophil", url: "/placeholder.svg?height=100&width=100&text=Eosinophil" }
  ];

  const useSampleImage = (imageUrl: string, name: string) => {
    setUploadedImage(imageUrl);
    onImageUpload(imageUrl);
    toast.success(`Sample ${name} image loaded!`);
  };

  return (
    <div className="space-y-4">
      {!uploadedImage ? (
        <>
          <Card
            className={`border-2 border-dashed transition-colors cursor-pointer ${
              dragActive 
                ? "border-blue-500 bg-blue-50" 
                : "border-gray-300 hover:border-gray-400"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={onButtonClick}
          >
            <CardContent className="flex flex-col items-center justify-center py-12 px-6">
              <Upload className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-lg font-medium text-gray-700 mb-2">
                Upload Blood Cell Image
              </p>
              <p className="text-sm text-gray-500 text-center mb-4">
                Drag and drop your image here, or click to browse
              </p>
              <p className="text-xs text-gray-400">
                Supports: JPG, PNG, JPEG (Max: 10MB)
              </p>
            </CardContent>
          </Card>

          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleChange}
          />

          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-700">Or try sample images:</p>
            <div className="grid grid-cols-2 gap-3">
              {sampleImages.map((sample) => (
                <Button
                  key={sample.name}
                  variant="outline"
                  size="sm"
                  className="h-auto p-3 flex flex-col items-center space-y-2"
                  onClick={() => useSampleImage(sample.url, sample.name)}
                >
                  <ImageIcon className="h-4 w-4" />
                  <span className="text-xs">{sample.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Card>
          <CardContent className="p-4">
            <div className="relative">
              <img
                src={uploadedImage}
                alt="Uploaded blood cell"
                className="w-full h-64 object-cover rounded-lg"
              />
              <Button
                size="sm"
                variant="destructive"
                className="absolute top-2 right-2"
                onClick={removeImage}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-3 text-center">
              Image ready for analysis
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ImageUpload;
