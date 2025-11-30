// "use client"

// import { useState } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { AnimatedElement } from "@/components/animated-element"

// const menuPages = [
//   {
//     title: "Starters",
//     items: [
//       { name: "Truffle Arancini", price: "$16", description: "Crispy risotto balls with black truffle" },
//       { name: "Tuna Tartare", price: "$22", description: "Fresh tuna with avocado and sesame" },
//       { name: "Burrata Caprese", price: "$18", description: "Creamy burrata with heirloom tomatoes" },
//       { name: "Foie Gras Terrine", price: "$28", description: "With brioche and fig compote" },
//     ],
//   },
//   {
//     title: "Main Course",
//     items: [
//       { name: "Wagyu Ribeye", price: "$75", description: "A5 grade with roasted vegetables" },
//       { name: "Pan-Seared Sea Bass", price: "$48", description: "With saffron risotto and beurre blanc" },
//       { name: "Lamb Rack", price: "$52", description: "Herb-crusted with mint jus" },
//       { name: "Lobster Thermidor", price: "$68", description: "Classic preparation with gratin" },
//     ],
//   },
//   {
//     title: "Desserts",
//     items: [
//       { name: "Chocolate Fondant", price: "$14", description: "Warm molten center with vanilla ice cream" },
//       { name: "Crème Brûlée", price: "$12", description: "Classic vanilla with caramelized sugar" },
//       { name: "Tiramisu", price: "$13", description: "House-made with espresso and mascarpone" },
//       { name: "Cheese Selection", price: "$22", description: "Artisanal cheeses with accompaniments" },
//     ],
//   },
//   {
//     title: "Beverages",
//     items: [
//       { name: "Sky Lit Signature", price: "$18", description: "Gin, elderflower, champagne, gold leaf" },
//       { name: "Sunset Manhattan", price: "$16", description: "Bourbon, sweet vermouth, bitters" },
//       { name: "Espresso Martini", price: "$15", description: "Vodka, fresh espresso, coffee liqueur" },
//       { name: "Wine by Glass", price: "$12+", description: "Selection from our sommelier" },
//     ],
//   },
// ]

// const pageDescriptions = [
//   "Begin your culinary journey with our carefully crafted appetizers. Each starter is designed to awaken your palate and set the stage for the courses to follow.",
//   "Our main courses showcase the finest ingredients prepared with precision and passion. From land to sea, each dish tells a story of culinary excellence.",
//   "End your meal on a sweet note with our decadent desserts. Each creation is a masterpiece crafted by our pastry chef.",
//   "Complement your meal with our signature cocktails and extensive wine selection. Our mixologists and sommeliers are here to guide your choices.",
// ]

// export function MenuSection() {
//   const [currentPage, setCurrentPage] = useState(0)
//   const [isFlipping, setIsFlipping] = useState(false)
//   const [flipDirection, setFlipDirection] = useState<"left" | "right">("right")

//   const nextPage = () => {
//     if (currentPage < menuPages.length - 1 && !isFlipping) {
//       setFlipDirection("left")
//       setIsFlipping(true)
//       setTimeout(() => {
//         setCurrentPage(currentPage + 1)
//         setIsFlipping(false)
//       }, 600)
//     }
//   }

//   const prevPage = () => {
//     if (currentPage > 0 && !isFlipping) {
//       setFlipDirection("right")
//       setIsFlipping(true)
//       setTimeout(() => {
//         setCurrentPage(currentPage - 1)
//         setIsFlipping(false)
//       }, 600)
//     }
//   }

//   return (
//     <section id="menu" className="py-24 bg-card">
//       <div className="container mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <AnimatedElement animation="fade-down">
//             <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Culinary Delights</p>
//           </AnimatedElement>

//           <AnimatedElement animation="zoom-in" delay={100}>
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Menu</h2>
//           </AnimatedElement>

//           <AnimatedElement animation="zoom-in" delay={150}>
//             <div className="w-24 h-1 bg-primary mx-auto" />
//           </AnimatedElement>
//         </div>

//         {/* Menu Content */}
//         <div className="flex flex-col lg:flex-row gap-12 items-center">
//           {/* Menu Card - Left Side */}
//           <AnimatedElement animation="fade-right" delay={200} className="w-full lg:w-1/2">
//             <div className="perspective-1000">
//               <div
//                 className={`relative bg-secondary border border-border rounded-lg p-8 min-h-[500px] shadow-2xl transform-style-preserve-3d ${
//                   isFlipping ? (flipDirection === "left" ? "page-flip-left" : "page-flip-right") : ""
//                 }`}
//               >
//                 {/* Decorative Corner Elements */}
//                 <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/30" />
//                 <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/30" />
//                 <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/30" />
//                 <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/30" />

//                 {/* Menu Title */}
//                 <h3 className="text-3xl font-bold text-primary text-center mb-8 tracking-wide">
//                   {menuPages[currentPage].title}
//                 </h3>

//                 {/* Menu Items */}
//                 <div className="space-y-6">
//                   {menuPages[currentPage].items.map((item, index) => (
//                     <div key={index} className="flex justify-between items-start group">
//                       <div className="flex-1">
//                         <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
//                           {item.name}
//                         </p>
//                         <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
//                       </div>
//                       <p className="text-primary font-bold ml-4">{item.price}</p>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Page Number */}
//                 <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
//                   <p className="text-muted-foreground text-sm">
//                     Page {currentPage + 1} of {menuPages.length}
//                   </p>
//                 </div>
//               </div>

//               {/* Navigation Buttons */}
//               <div className="flex justify-center gap-4 mt-6">
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   onClick={prevPage}
//                   disabled={currentPage === 0 || isFlipping}
//                   className="border-border hover:border-primary hover:text-primary hover:scale-110 disabled:opacity-30 bg-transparent transition-all duration-300"
//                 >
//                   <ChevronLeft className="w-5 h-5" />
//                 </Button>
//                 <div className="flex gap-2 items-center">
//                   {menuPages.map((_, index) => (
//                     <div
//                       key={index}
//                       className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                         index === currentPage ? "bg-primary scale-125" : "bg-muted"
//                       }`}
//                     />
//                   ))}
//                 </div>
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   onClick={nextPage}
//                   disabled={currentPage === menuPages.length - 1 || isFlipping}
//                   className="border-border hover:border-primary hover:text-primary hover:scale-110 disabled:opacity-30 bg-transparent transition-all duration-300"
//                 >
//                   <ChevronRight className="w-5 h-5" />
//                 </Button>
//               </div>
//             </div>
//           </AnimatedElement>

//           {/* Description - Right Side */}
//           <AnimatedElement animation="fade-left" delay={300} className="w-full lg:w-1/2 lg:pl-8">
//             <div className="space-y-6">
//               <h3 className="text-2xl font-bold text-foreground">{menuPages[currentPage].title}</h3>
//               <p className="text-muted-foreground text-lg leading-relaxed">{pageDescriptions[currentPage]}</p>
//               <div className="border-l-4 border-primary pl-6 py-4">
//                 <p className="text-foreground italic">
//                   {'"'}Our chefs use only the finest locally-sourced and imported ingredients to create dishes that are
//                   both visually stunning and exceptionally flavorful.{'"'}
//                 </p>
//                 <p className="text-primary mt-2 font-medium">— Executive Chef Marco</p>
//               </div>
//               <div className="pt-4">
//                 <p className="text-sm text-muted-foreground">
//                   * Prices are subject to applicable taxes and service charges.
//                   <br />* Please inform our staff of any dietary requirements or allergies.
//                 </p>
//               </div>
//             </div>
//           </AnimatedElement>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedElement } from "@/components/animated-element"
interface MenuItem {
  name: string
  price: string
  description: string
}

interface MenuPage {
  title: string
  items: MenuItem[]
}

const menuPages = [
  {
    title: "Starters",
    items: [
      { name: "Truffle Arancini", price: "$16", description: "Crispy risotto balls with black truffle" },
      { name: "Tuna Tartare", price: "$22", description: "Fresh tuna with avocado and sesame" },
      { name: "Burrata Caprese", price: "$18", description: "Creamy burrata with heirloom tomatoes" },
      { name: "Foie Gras Terrine", price: "$28", description: "With brioche and fig compote" },
    ],
  },
  {
    title: "Main Course",
    items: [
      { name: "Wagyu Ribeye", price: "$75", description: "A5 grade with roasted vegetables" },
      { name: "Pan-Seared Sea Bass", price: "$48", description: "With saffron risotto and beurre blanc" },
      { name: "Lamb Rack", price: "$52", description: "Herb-crusted with mint jus" },
      { name: "Lobster Thermidor", price: "$68", description: "Classic preparation with gratin" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Chocolate Fondant", price: "$14", description: "Warm molten center with vanilla ice cream" },
      { name: "Crème Brûlée", price: "$12", description: "Classic vanilla with caramelized sugar" },
      { name: "Tiramisu", price: "$13", description: "House-made with espresso and mascarpone" },
      { name: "Cheese Selection", price: "$22", description: "Artisanal cheeses with accompaniments" },
    ],
  },
  {
    title: "Beverages",
    items: [
      { name: "Sky Lit Signature", price: "$18", description: "Gin, elderflower, champagne, gold leaf" },
      { name: "Sunset Manhattan", price: "$16", description: "Bourbon, sweet vermouth, bitters" },
      { name: "Espresso Martini", price: "$15", description: "Vodka, fresh espresso, coffee liqueur" },
      { name: "Wine by Glass", price: "$12+", description: "Selection from our sommelier" },
    ],
  },
]

const pageDescriptions: string[] = [
  "Begin your culinary journey with our carefully crafted appetizers...",
  "Our main courses showcase the finest ingredients...",
  "End your meal on a sweet note with our decadent desserts...",
  "Complement your meal with our signature cocktails...",
]


export function MenuSection() {
  const [currentPage, setCurrentPage] = useState(0)

  // animation state
  const [anim, setAnim] = useState({
    active: false,
    from: 0,
    to: 0,
    direction: "left" as "left" | "right",
  })

  const ANIM_DURATION = 420 // ms (matches CSS)

  const animateTo = (toIndex: number, direction: "left" | "right") => {
    if (anim.active) return
    setAnim({ active: true, from: currentPage, to: toIndex, direction })
    // After animation finishes, update currentPage and clear anim
    setTimeout(() => {
      setCurrentPage(toIndex)
      setAnim(prev => ({ ...prev, active: false }))
    }, ANIM_DURATION)
  }

  const nextPage = () => {
    if (currentPage < menuPages.length - 1 && !anim.active) {
      animateTo(currentPage + 1, "left")
    }
  }

  const prevPage = () => {
    if (currentPage > 0 && !anim.active) {
      animateTo(currentPage - 1, "right")
    }
  }

  // helper: render a card for index (used for animated in/out and static)
  const MenuCard = ({ index, extraClass = "" }: { index: number; extraClass?: string }) => (
    <div
      className={`relative bg-secondary border border-border rounded-lg p-8 min-h-[500px] shadow-2xl transform-style-preserve-3d ${extraClass}`}
      aria-hidden={index !== currentPage}
    >
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/30" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/30" />

      <h3 className="text-3xl font-bold text-primary text-center mb-8 tracking-wide">
        {menuPages[index].title}
      </h3>

      <div className="space-y-6">
        {menuPages[index].items.map((item, idx) => (
          <div key={idx} className="flex justify-between items-start group">
            <div className="flex-1">
              <p className="text-foreground font-semibold group-hover:text-primary transition-colors">{item.name}</p>
              <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
            </div>
            <p className="text-primary font-bold ml-4">{item.price}</p>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <p className="text-muted-foreground text-sm">
          Page {index + 1} of {menuPages.length}
        </p>
      </div>
    </div>
  )

  return (
    <section id="menu" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedElement animation="fade-down">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Culinary Delights</p>
          </AnimatedElement>

          <AnimatedElement animation="zoom-in" delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Menu</h2>
          </AnimatedElement>

          <AnimatedElement animation="zoom-in" delay={150}>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </AnimatedElement>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Menu Card - Left Side */}
          <AnimatedElement animation="fade-right" delay={200} className="w-full lg:w-1/2">
            <div className="perspective-1000">
              {/* Sliding wrapper: keep relative so absolute cards can stack */}
              <div className="relative overflow-hidden h-[500px]">
                {/* if anim.active -> render both from and to with appropriate classes */}
                {anim.active ? (
                  <>
                    {/* outgoing card */}
                    <div
                      className={`absolute inset-0 will-change-transform ${
                        anim.direction === "left" ? "slide-exit-left" : "slide-exit-right"
                      }`}
                    >
                      <MenuCard index={anim.from} />
                    </div>

                    {/* incoming card */}
                    <div
                      className={`absolute inset-0 will-change-transform ${
                        anim.direction === "left" ? "slide-enter-left" : "slide-enter-right"
                      }`}
                    >
                      <MenuCard index={anim.to} />
                    </div>
                  </>
                ) : (
                  // not animating: render single current card
                  <div className="relative inset-0">
                    <MenuCard index={currentPage} />
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4 mt-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevPage}
                  disabled={currentPage === 0 || anim.active}
                  className="border-border hover:border-primary hover:text-primary hover:scale-110 disabled:opacity-30 bg-transparent transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <div className="flex gap-2 items-center">
                  {menuPages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentPage ? "bg-primary scale-125" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextPage}
                  disabled={currentPage === menuPages.length - 1 || anim.active}
                  className="border-border hover:border-primary hover:text-primary hover:scale-110 disabled:opacity-30 bg-transparent transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </AnimatedElement>

          {/* Description - Right Side */}
          <AnimatedElement animation="fade-left" delay={300} className="w-full lg:w-1/2 lg:pl-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">{menuPages[currentPage].title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{pageDescriptions[currentPage]}</p>
              <div className="border-l-4 border-primary pl-6 py-4">
                <p className="text-foreground italic">
                  {'"'}Our chefs use only the finest locally-sourced and imported ingredients to create dishes that are
                  both visually stunning and exceptionally flavorful.{'"'}
                </p>
                <p className="text-primary mt-2 font-medium">— Executive Chef Marco</p>
              </div>
              <div className="pt-4">
                <p className="text-sm text-muted-foreground">
                  * Prices are subject to applicable taxes and service charges.
                  <br />* Please inform our staff of any dietary requirements or allergies.
                </p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}
