import { Card } from "@/components/ui/card"
import LoginLeftColumn from "@/components/auth/LoginLeftColumn"
import LoginRightColumn from "@/components/auth/LoginRightColumn"

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-4xl grid md:grid-cols-2 p-0 overflow-hidden">
          <LoginLeftColumn />
          <LoginRightColumn />
        </Card>
      </main>
    </div>
  )
}
