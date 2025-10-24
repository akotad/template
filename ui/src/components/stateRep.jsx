import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

function StateRep() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Welcome to shadcn/ui</CardTitle>
          <CardDescription>Your components are working!</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is much easier than building everything from scratch.</p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button>Primary Action</Button>
          <Button variant="outline">Secondary</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default StateRep;