import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">ホームページ</span>
          <span className="font-bold text-lg">私のホームページ</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  こんにちは、私は[あなたの名前]です
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  [あなたの短い自己紹介や専門分野などを記入してください]
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#contact">お問い合わせ</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#projects">プロジェクトを見る</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
              [ここにあなたの詳細な自己紹介を記入してください]
            </p>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">My Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">プロジェクト1</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">プロジェクトの説明をここに記入</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">プロジェクト2</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">プロジェクトの説明をここに記入</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">プロジェクト3</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">プロジェクトの説明をここに記入</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Contact Me</h2>
            <div className="flex justify-center space-x-4">
              <Button asChild variant="outline">
                <Link href="mailto:your.email@example.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://github.com/yourusername">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://linkedin.com/in/yourusername">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} [あなたの名前]. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
