import fs from "node:fs"
import path from "node:path"
import { NextResponse } from "next/server"

export async function GET() {
  const photosDirectory = path.join(process.cwd(), "public", "images")

  try {
    const fileNames = fs.readdirSync(photosDirectory)

    const images = fileNames
      .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
      .map((fileName) => `/images/${fileName}`)

    return NextResponse.json(images)
  } catch (error) {
    console.error("Error reading images directory:", error)

    return NextResponse.error()
  }
}
