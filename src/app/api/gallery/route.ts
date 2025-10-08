import { NextResponse } from 'next/server';
import { getGalleryImages } from '@/lib/cloudinary';

export async function GET() {
  try {
    const galleryItems = await getGalleryImages();
    return NextResponse.json(galleryItems);
  } catch (error) {
    console.error('Error in gallery API route:', error);
    return NextResponse.json({ error: 'Failed to fetch gallery items' }, { status: 500 });
  }
}