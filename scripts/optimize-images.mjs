import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const projectRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const assetsDir = path.join(projectRoot, 'assets');

const images = [
	{ name: 'Hero', ext: 'png' },
	{ name: 'Hero2', ext: 'png' },
	{ name: 'Logo', ext: 'png' },
];

async function ensureDir(dirPath) {
	await fs.mkdir(dirPath, { recursive: true });
}

async function optimizeImage(baseName, ext) {
	const inputPath = path.join(assetsDir, `${baseName}.${ext}`);
	const avifPath = path.join(assetsDir, `${baseName}.avif`);
	const webpPath = path.join(assetsDir, `${baseName}.webp`);

	try {
		await fs.access(inputPath);
	} catch {
		console.warn(`Skip: ${inputPath} not found`);
		return;
	}

	const img = sharp(inputPath);

	await Promise.all([
		img.clone().avif({ quality: 60 }).toFile(avifPath),
		img.clone().webp({ quality: 75 }).toFile(webpPath),
	]);

	console.log(`Optimized: ${baseName} -> AVIF/WebP`);
}

async function run() {
	await ensureDir(assetsDir);
	for (const { name, ext } of images) {
		await optimizeImage(name, ext);
	}
}

run().catch((err) => {
	console.error(err);
	process.exit(1);
});


