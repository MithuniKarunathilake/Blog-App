import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ImageIcon } from 'lucide-react';

export default function ImageUploader() {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedImage(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleUpload = () => {
        if (selectedImage) {
            console.log('Uploading image:', selectedImage);
        }
    };

    return (
        <div className="space-y-4">
            <div>
                <label className="text-lg font-semibold">Upload Image</label>
                <div className="mt-2 flex items-center gap-4">
                    <Input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        id="image-upload"
                    />
                    <label htmlFor="image-upload">
                        <Button variant="outline" className="flex items-center gap-2">
                            <ImageIcon className="h-5 w-5" />
                            {selectedImage ? 'Change Image' : 'Choose Image'}
                        </Button>
                    </label>
                </div>
            </div>

            {previewUrl && (
                <div>
                    <h4 className="text-md font-semibold">Preview:</h4>
                    <img src={previewUrl} alt="Preview" className="w-full h-auto mt-2" />
                </div>
            )}

            <Button variant="default" onClick={handleUpload} disabled={!selectedImage}>
                Upload
            </Button>
        </div>
    );
}
