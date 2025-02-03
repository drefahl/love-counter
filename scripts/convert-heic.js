const fs = require("fs-extra")
const path = require("node:path")
const heicConvert = require("heic-convert")
const sharp = require("sharp")

async function convertHEIC() {
  const imagesDir = path.join(process.cwd(), "public", "images")
  const files = await fs.readdir(imagesDir)

  for (const file of files) {
    if (path.extname(file).toLowerCase() === ".heic") {
      const inputPath = path.join(imagesDir, file)
      const outputName = `${path.basename(file, ".heic")}.jpg`
      const outputPath = path.join(imagesDir, outputName)

      try {
        // Converter HEIC para JPEG
        const inputBuffer = await fs.readFile(inputPath)
        const outputBuffer = await heicConvert({
          buffer: inputBuffer,
          format: "JPEG",
          quality: 0.8,
        })

        // Otimizar a imagem com Sharp
        await sharp(outputBuffer).jpeg({ quality: 80, mozjpeg: true }).toFile(outputPath)

        console.log(`✅ Convertido: ${file} -> ${outputName}`)

        // Opcional: remover o arquivo HEIC original
        await fs.unlink(inputPath)
      } catch (error) {
        console.error(`❌ Erro ao converter ${file}:`, error)
      }
    }
  }
}

convertHEIC()
