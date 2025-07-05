import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@radix-ui/react-select"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Finances</h1>

      <Card>
        <CardContent className="p-4 space-y-4">
          <div className="flex gap-4">
            {/* ✅ Wrap the trigger inside Select */}
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
              </SelectContent>
            </Select>

            <Button>Export</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
