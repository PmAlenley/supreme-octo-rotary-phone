"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  Pause,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Maximize,
  Home,
  ChefHat,
  Bed,
  Bath,
  Eye,
  Clock,
  Users,
} from "lucide-react"

interface VirtualTourProps {
  propertyId: string
  propertyName: string
}

export default function VirtualTour({ propertyId, propertyName }: VirtualTourProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentRoom, setCurrentRoom] = useState("living-room")
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(100)
  const [viewCount, setViewCount] = useState(1247)
  const [duration, setDuration] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const rooms = [
    { id: "living-room", name: "Living Room", icon: Home },
    { id: "kitchen", name: "Kitchen", icon: ChefHat },
    { id: "bedroom", name: "Bedroom", icon: Bed },
    { id: "bathroom", name: "Bathroom", icon: Bath },
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setRotation((prev) => (prev + 1) % 360)
        setDuration((prev) => prev + 1)
      }, 100)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const handleReset = () => {
    setIsPlaying(false)
    setRotation(0)
    setDuration(0)
    setZoom(100)
  }

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 25, 200))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 25, 50))
  }

  const handleRoomChange = (roomId: string) => {
    setIsLoading(true)
    setCurrentRoom(roomId)
    setRotation(0)
    setTimeout(() => setIsLoading(false), 1000)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Tour Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-t-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">{propertyName}</h3>
            <p className="text-blue-100">Interactive 360° Virtual Tour</p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span>{viewCount.toLocaleString()} views</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{formatTime(duration)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>{zoom}% zoom</span>
            </div>
          </div>
        </div>
      </div>

      {/* Virtual Tour Viewer */}
      <div className="relative bg-gray-900 aspect-video rounded-none">
        {isLoading && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
            <div className="text-white text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <p>Loading {rooms.find((r) => r.id === currentRoom)?.name}...</p>
            </div>
          </div>
        )}

        <div
          className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center transition-transform duration-100"
          style={{
            transform: `rotate(${rotation}deg) scale(${zoom / 100})`,
            backgroundImage: `radial-gradient(circle at ${50 + Math.sin(rotation * 0.1) * 20}% ${50 + Math.cos(rotation * 0.1) * 20}%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}
        >
          <div className="text-white text-center">
            <div className="text-6xl mb-4">
              {rooms.find((r) => r.id === currentRoom)?.icon &&
                (() => {
                  const IconComponent = rooms.find((r) => r.id === currentRoom)!.icon
                  return <IconComponent className="h-16 w-16 mx-auto" />
                })()}
            </div>
            <h4 className="text-2xl font-bold mb-2">{rooms.find((r) => r.id === currentRoom)?.name}</h4>
            <p className="text-blue-200">360° Interactive View</p>

            {/* Simulated Hotspots */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full animate-pulse cursor-pointer"></div>
            <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-white rounded-full animate-pulse cursor-pointer"></div>
            <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-white rounded-full animate-pulse cursor-pointer"></div>
          </div>
        </div>

        {/* Floating Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20" onClick={handlePlay}>
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20" onClick={handleReset}>
              <RotateCcw className="h-4 w-4" />
            </Button>
            <div className="w-px h-6 bg-white/30 mx-2"></div>
            <Button
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/20"
              onClick={handleZoomOut}
              disabled={zoom <= 50}
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-white text-sm px-2">{zoom}%</span>
            <Button
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/20"
              onClick={handleZoomIn}
              disabled={zoom >= 200}
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            <div className="w-px h-6 bg-white/30 mx-2"></div>
            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
              <Maximize className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Room Navigation */}
      <div className="bg-white p-6 rounded-b-lg border-t">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold">Navigate Rooms</h4>
          <Badge variant="outline" className="text-blue-600 border-blue-600">
            {rooms.find((r) => r.id === currentRoom)?.name}
          </Badge>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {rooms.map((room) => {
            const IconComponent = room.icon
            return (
              <Button
                key={room.id}
                variant={currentRoom === room.id ? "default" : "outline"}
                className="flex items-center gap-2 p-3 h-auto"
                onClick={() => handleRoomChange(room.id)}
                disabled={isLoading}
              >
                <IconComponent className="h-4 w-4" />
                <span className="text-sm">{room.name}</span>
              </Button>
            )
          })}
        </div>

        {/* Tour Statistics */}
        <div className="mt-6 pt-4 border-t">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">{viewCount.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total Views</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">{formatTime(duration)}</div>
              <div className="text-sm text-gray-600">Tour Duration</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">{zoom}%</div>
              <div className="text-sm text-gray-600">Current Zoom</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">{rotation}°</div>
              <div className="text-sm text-gray-600">Rotation Angle</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
