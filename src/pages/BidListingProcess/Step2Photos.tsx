import Button from "@/components/shared/Button";
import { UploadCloud } from "lucide-react";
import { useState } from "react";
import { Controller } from "react-hook-form";

const Step2Photos = ({ control, onNext, onPrev }) => {
  const [previews, setPreviews] = useState([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field) => {
    const files = Array.from(e.target.files);
    field.onChange(files);
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews(newPreviews);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-heading">Upload Images</h2>
      <p className="text-body mt-1">Upload up to 6 JPEG/PNG images.</p>
      <Controller
        name="photos"
        control={control}
        render={({ field }) => (
          <div className="mt-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-accent transition-all duration-300">
              <input
                type="file"
                id="file-upload"
                multiple
                accept="image/jpeg, image/png"
                className="hidden"
                onChange={(e) => handleFileChange(e, field)}
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <UploadCloud className="w-12 h-12 text-gray-400" />
                <p className="mt-2 text-body font-semibold">
                  Click to upload or drag and drop
                </p>
                <p className="text-sm text-gray-500">
                  Upload up to 6 JPEG/PNG images.
                </p>
              </label>
            </div>
            {previews.length > 0 && (
              <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-4">
                {previews.map((src, i) => (
                  <div key={i} className="relative aspect-square">
                    <img
                      src={src}
                      alt={`Preview ${i}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      />
      <p className="text-sm text-body mt-4">
        Make sure your images clearly show the item. No text overlays or contact
        info allowed.
      </p>
      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onPrev}>
          Previous
        </Button>
        <Button onClick={onNext}>Next: Item Details</Button>
      </div>
    </div>
  );
};

export default Step2Photos;
