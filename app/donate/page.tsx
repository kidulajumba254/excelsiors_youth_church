"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreditCard, Heart, DollarSign } from "lucide-react"

export default function DonatePage() {
  const [donationType, setDonationType] = useState("offering")
  const [amount, setAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate transaction processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)

      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false)
        setAmount("")
        setCustomAmount("")
      }, 3000)
    }, 1500)
  }

  const handleAmountSelect = (value: string) => {
    setAmount(value)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setAmount("custom")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">Support Our Ministry</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your generous contributions help us continue our mission of empowering youth through faith, fellowship, and
            service.
          </p>
        </div>

        {isSuccess ? (
          <Card className="border-green-500">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-green-700 flex items-center">
                <Heart className="mr-2 h-5 w-5" /> Thank You for Your Donation!
              </CardTitle>
              <CardDescription>Your transaction has been processed successfully.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-center text-gray-700 mb-4">
                Your support makes a difference in the lives of our youth. You should receive a confirmation email
                shortly.
              </p>
              <Button
                onClick={() => setIsSuccess(false)}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black"
              >
                Make Another Donation
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Make a Donation</CardTitle>
              <CardDescription>Choose your donation type and amount</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label>Donation Type</Label>
                    <RadioGroup
                      defaultValue="offering"
                      value={donationType}
                      onValueChange={setDonationType}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="offering" id="offering" />
                        <Label htmlFor="offering" className="cursor-pointer">
                          Offering
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="tithe" id="tithe" />
                        <Label htmlFor="tithe" className="cursor-pointer">
                          Tithe
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="special" id="special" />
                        <Label htmlFor="special" className="cursor-pointer">
                          Special Project
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {donationType === "special" && (
                    <div className="space-y-2">
                      <Label htmlFor="project">Select Project</Label>
                      <Select>
                        <SelectTrigger id="project">
                          <SelectValue placeholder="Select a project" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="youth-retreat">Youth Retreat Fund</SelectItem>
                          <SelectItem value="mission-trip">Missions Trip</SelectItem>
                          <SelectItem value="equipment">Media Equipment</SelectItem>
                          <SelectItem value="building">Kitty Funds</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label>Amount</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <Button
                        type="button"
                        variant={amount === "10" ? "default" : "outline"}
                        className={amount === "10" ? "bg-yellow-400 hover:bg-yellow-500 text-black" : ""}
                        onClick={() => handleAmountSelect("10")}
                      >
                        KES 10
                      </Button>
                      <Button
                        type="button"
                        variant={amount === "25" ? "default" : "outline"}
                        className={amount === "25" ? "bg-yellow-400 hover:bg-yellow-500 text-black" : ""}
                        onClick={() => handleAmountSelect("25")}
                      >
                       KES 25
                      </Button>
                      <Button
                        type="button"
                        variant={amount === "50" ? "default" : "outline"}
                        className={amount === "50" ? "bg-yellow-400 hover:bg-yellow-500 text-black" : ""}
                        onClick={() => handleAmountSelect("50")}
                      >
                       KES 50
                      </Button>
                      <Button
                        type="button"
                        variant={amount === "100" ? "default" : "outline"}
                        className={amount === "100" ? "bg-yellow-400 hover:bg-yellow-500 text-black" : ""}
                        onClick={() => handleAmountSelect("100")}
                      >
                        KES 100
                      </Button>
                      <Button
                        type="button"
                        variant={amount === "250" ? "default" : "outline"}
                        className={amount === "250" ? "bg-yellow-400 hover:bg-yellow-500 text-black" : ""}
                        onClick={() => handleAmountSelect("250")}
                      >
                        KES 250
                      </Button>
                      <Button
                        type="button"
                        variant={amount === "custom" ? "default" : "outline"}
                        className={amount === "custom" ? "bg-yellow-400 hover:bg-yellow-500 text-black" : ""}
                        onClick={() => handleAmountSelect("custom")}
                      >
                        Custom
                      </Button>
                    </div>

                    {amount === "custom" && (
                      <div className="mt-2">
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                          <Input
                            type="number"
                            placeholder="Enter amount"
                            className="pl-10"
                            value={customAmount}
                            onChange={handleCustomAmountChange}
                            min="1"
                            step="0.01"
                            required
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <Tabs defaultValue="card">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="card">Credit Card</TabsTrigger>
                      <TabsTrigger value="bank">Bank Transfer</TabsTrigger>
                    </TabsList>
                    <TabsContent value="card" className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" placeholder="Daniel Kigen" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" required />
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="bank" className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <Label htmlFor="accountName">Account Holder Name</Label>
                        <Input id="accountName" placeholder="Daniel Kigen" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="accountNumber">Account Number</Label>
                        <Input id="accountNumber" placeholder="123456789" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="routingNumber">Routing Number</Label>
                        <Input id="routingNumber" placeholder="987654321" required />
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email (for receipt)</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-bold"
                  disabled={isProcessing || !amount || (amount === "custom" && !customAmount)}
                >
                  {isProcessing ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <CreditCard className="mr-2 h-4 w-4" /> Complete Donation
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col text-sm text-gray-500 border-t pt-4">
              <p>Your donation is secure and encrypted.</p>
              <p>Excelsiors Youth Ministry is a registered 501(c)(3) organization.</p>
            </CardFooter>
          </Card>
        )}

        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Other Ways to Give</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">By Mail</h3>
              <p className="text-gray-600">
                Send checks payable to "Excelsiors Youth Ministry" to:
                <br />
                Tel Aviv, Nairobi.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">In Person</h3>
              <p className="text-gray-600">
                You can give during our regular services or drop by our office during business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
