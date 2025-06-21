import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Calendar,
  BarChart3,
  Smartphone,
  Star,
  CheckCircle,
  TrendingUp,
  MessageSquare,
  Shield,
  Clock,
  Target,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-scree">
      {/* Header */}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                    Transform Your Coaching Business
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                    The Ultimate Dashboard for{" "}
                    <span className="text-orange-500">Fitness Coaches</span>
                  </h1>
                  <p className="max-w-[600px] md:text-xl  text-gray-900">
                    Streamline your coaching business with powerful client
                    management, workout planning, progress tracking, and
                    automated scheduling. Everything you need in one place.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600  text-gray-900"
                  >
                    Start Free Trial
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm  text-gray-900">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>14-day free trial</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg blur-3xl opacity-20"></div>
                  {/* <Image
                    src="/placeholder.svg?height=400&width=600"
                    width="600"
                    height="400"
                    alt="Fitness Coach Dashboard Preview"
                    className="relative rounded-lg shadow-2xl border"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-gray-100 text-foreground">
                  Powerful Features
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
                  Everything You Need to Scale Your Coaching
                </h2>
                <p className="max-w-[900px] text-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our comprehensive dashboard provides all the tools you need to
                  manage clients, track progress, and grow your fitness coaching
                  business.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-orange-100 p-3">
                    <Users className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Client Management
                  </h3>
                  <p className="text-center text-foreground">
                    Organize client profiles, track contact information, and
                    manage relationships with an intuitive client management
                    system.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-green-100 p-3">
                    <Calendar className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Smart Scheduling
                  </h3>
                  <p className="text-center text-foreground">
                    Automated scheduling with calendar integration, booking
                    management, and reminder notifications for you and your
                    clients.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-blue-100 p-3">
                    <BarChart3 className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Progress Tracking
                  </h3>
                  <p className="text-center text-foreground">
                    Visual progress reports, body composition tracking, and
                    performance analytics to keep clients motivated and engaged.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-purple-100 p-3">
                    <Target className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Workout Planning
                  </h3>
                  <p className="text-center text-foreground">
                    Create custom workout plans, exercise libraries, and program
                    templates tailored to each client&apos;s goals and fitness
                    level.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-red-100 p-3">
                    <Smartphone className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Mobile Access
                  </h3>
                  <p className="text-center text-foreground">
                    Access your dashboard anywhere with our responsive design
                    and mobile-optimized interface for on-the-go coaching.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-yellow-100 p-3">
                    <MessageSquare className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Client Communication
                  </h3>
                  <p className="text-center text-foreground">
                    Built-in messaging system, progress check-ins, and automated
                    follow-ups to maintain strong client relationships.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-orange-100 text-orange-800">
                  Success Stories
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Trusted by Fitness Professionals Worldwide
                </h2>
                <p className="max-w-[900px] text-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how FitCoach Pro has transformed coaching businesses and
                  improved client results.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="bg-background border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-foreground mb-4">
                    &quot;FitCoach Pro completely transformed how I manage my
                    clients. The automated scheduling and progress tracking
                    features have saved me hours each week, and my clients love
                    the professional experience.&quot;
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-semibold">SM</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Sarah Mitchell
                      </p>
                      <p className="text-sm text-foreground">
                        Certified Personal Trainer
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-foreground mb-4">
                    &quot;The client progress tracking is incredible. My clients
                    can see their improvements visually, which keeps them
                    motivated. I&apos;ve seen a 40% increase in client retention
                    since switching to FitCoach Pro.&quot;
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold">MJ</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Mike Johnson
                      </p>
                      <p className="text-sm text-foreground">
                        Strength & Conditioning Coach
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-foreground mb-4">
                    &quot;As someone who manages 50+ clients, FitCoach Pro is a
                    lifesaver. The workout planning tools and client
                    communication features have streamlined my entire business
                    operation.&quot;
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">AL</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Amanda Lee</p>
                      <p className="text-sm text-foreground">
                        Online Fitness Coach
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-orange-500 to-red-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Transform Your Coaching Business?
                </h2>
                <p className="mx-auto max-w-[600px] text-orange-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of successful fitness coaches who have already
                  upgraded their business with FitCoach Pro. Start your free
                  trial today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-background text-orange-500 hover:bg-gray-100"
                >
                  Start Your Free Trial
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-background hover:text-orange-500"
                >
                  Schedule a Demo
                </Button>
              </div>
              <div className="flex items-center justify-center gap-8 text-orange-100 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>Proven Results</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <p className="text-xs text-foreground">
          © 2024 FitCoach Pro. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-xs hover:underline underline-offset-4 text-foreground"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-xs hover:underline underline-offset-4 text-foreground"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-xs hover:underline underline-offset-4 text-foreground"
            href="#"
          >
            Contact
          </a>
        </nav>
      </footer>
    </div>
  );
}
