import { Trainer, PricingTier, ClassItem, Testimonial } from './types';

export const TRAINERS: Trainer[] = [
  {
    id: 1,
    name: "Kavi Perera",
    role: "Head Performance Coach",
    image: "https://picsum.photos/seed/kavi/400/500",
    specialization: ["Strength & Conditioning", "Athlete Prep", "Hypertrophy"]
  },
  {
    id: 2,
    name: "Sarah Jayawardena",
    role: "Lead HIIT Instructor",
    image: "https://picsum.photos/seed/sarah/400/500",
    specialization: ["Fat Loss", "Functional Training", "Mobility"]
  },
  {
    id: 3,
    name: "Malik De Silva",
    role: "Bodybuilding Specialist",
    image: "https://picsum.photos/seed/malik/400/500",
    specialization: ["Competition Prep", "Nutrition", "Muscle Gain"]
  }
];

export const PRICING: PricingTier[] = [
  {
    name: "Basic",
    price: "8,500",
    period: "Month",
    features: [
      "Access to Gym Floor (Off-peak)",
      "Locker Usage",
      "1 Intro Session",
      "Free WiFi"
    ]
  },
  {
    name: "Elite",
    price: "15,000",
    period: "Month",
    highlight: true,
    features: [
      "Unlimited 24/7 Access",
      "All Group Classes Included",
      "Sauna & Steam Room",
      "Quarterly Body Analysis",
      "Bring a Friend (1x/month)"
    ]
  },
  {
    name: "Transformation",
    price: "45,000",
    period: "3 Months",
    features: [
      "Everything in Elite",
      "12 Personal Training Sessions",
      "Custom Nutrition Plan",
      "Weekly Check-ins",
      "Fitfinity Merch Pack"
    ]
  }
];

export const CLASSES: ClassItem[] = [
  {
    id: 1,
    title: "Power HIIT",
    time: "06:00 AM - 07:00 AM",
    days: ["Mon", "Wed", "Fri"],
    image: "https://picsum.photos/seed/hiit/600/400"
  },
  {
    id: 2,
    title: "Iron Pump",
    time: "05:30 PM - 06:30 PM",
    days: ["Tue", "Thu"],
    image: "https://picsum.photos/seed/pump/600/400"
  },
  {
    id: 3,
    title: "Mobility Flow",
    time: "08:00 AM - 09:00 AM",
    days: ["Sat", "Sun"],
    image: "https://picsum.photos/seed/yoga/600/400"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Dilshan R.",
    role: "Software Engineer",
    quote: "I tried 4 different gyms in Colombo before finding Fitfinity. The atmosphere here is unmatched. It pushes you to be better.",
    image: "https://picsum.photos/seed/dilshan/100/100",
    result: "Lost 12kg in 3 Months"
  },
  {
    id: 2,
    name: "Ayesha M.",
    role: "Medical Student",
    quote: "Clean, safe, and professional. The trainers actually care about your form. It’s my escape from university stress.",
    image: "https://picsum.photos/seed/ayesha/100/100",
    result: "Gained significant strength"
  }
];
