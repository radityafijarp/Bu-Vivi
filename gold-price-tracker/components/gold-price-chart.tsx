"use client"

import React, { useState } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const currencies = [
  { value: 'USD', label: 'US Dollar (USD)' },
  // { value: 'EUR', label: 'Euro (EUR)' },
  // { value: 'GBP', label: 'British Pound (GBP)' },
  // { value: 'JPY', label: 'Japanese Yen (JPY)' },
  // { value: 'AUD', label: 'Australian Dollar (AUD)' },
  // { value: 'CAD', label: 'Canadian Dollar (CAD)' },
  // { value: 'CHF', label: 'Swiss Franc (CHF)' },
  // { value: 'CNY', label: 'Chinese Yuan (CNY)' },
  { value: 'IDR', label: 'Indonesian Rupiah (IDR)' },
  // { value: 'INR', label: 'Indian Rupee (INR)' },
]

export function GoldPriceChartComponent() {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [currency, setCurrency] = useState('USD')
  const [chartData, setChartData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchGoldPrices = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await axios.get(
        `https://api.metals.live/v1/spot/gold/${startDate}/${endDate}`
      )

      const labels = response.data.map((item: any) => new Date(item.timestamp).toLocaleDateString())
      const prices = response.data.map((item: any) => item.price)

      // Convert prices to selected currency
      const conversionResponse = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/USD`
      )
      const conversionRate = conversionResponse.data.rates[currency]
      const convertedPrices = prices.map((price: number) => price * conversionRate)

      setChartData({
        labels,
        datasets: [
          {
            label: `Gold Price (${currency} per ounce)`,
            data: convertedPrices,
            borderColor: 'rgb(255, 215, 0)',
            backgroundColor: 'rgba(255, 215, 0, 0.5)',
          },
        ],
      })
    } catch (err) {
      setError('Failed to fetch data. Please check your input and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Gold Price Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={fetchGoldPrices} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDate">End Date</Label>
              <Input
                id="endDate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger id="currency">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((curr) => (
                    <SelectItem key={curr.value} value={curr.value}>
                      {curr.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Fetch Gold Prices'}
          </Button>
        </form>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {chartData && (
          <div className="mt-8">
            <Line data={chartData} />
          </div>
        )}
      </CardContent>
    </Card>
  )
}