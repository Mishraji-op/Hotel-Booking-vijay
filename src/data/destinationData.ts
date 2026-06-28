// ─── Types ───────────────────────────────────────────────────────────────────

export interface DestPackage {
  name: string;
  duration: string;
  price: number;
  highlights: string[];
}

export interface PlaceToVisit {
  name: string;
  description: string;
  image: string;
}

export interface SeasonCard {
  period: string;
  description: string;
  type: 'sun' | 'leaf' | 'snow' | 'rain';
  recommended?: boolean;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface DestinationDetail {
  slug: string;
  name: string;
  heroImage: string;
  heroTitle: string;
  heroDescription: string;
  packages: DestPackage[];
  featuredImage: { src: string; caption: string };
  aboutHeading: string;
  aboutParagraphs: string[];
  whyVisit: { emoji: string; text: string }[];
  placesToVisit: PlaceToVisit[];
  aboutPackagesHeading: string;
  aboutPackagesParagraphs: string[];
  bestTime: SeasonCard[];
  inclusions: string[];
  faq: FAQItem[];
}

// ─── Slug Map (destination name → URL slug) ──────────────────────────────────

export const slugMap: Record<string, string> = {
  'Leh': 'leh-ladakh',
  'Kashmir': 'kashmir',
  'Shimla-Manali': 'shimla-manali',
  'Darjeeling Gangtok': 'darjeeling-gangtok',
  'Guwahati & Shillong': 'guwahati-shillong',
  'Uttarakhand Nainital Corbett': 'nainital-corbett',
  'Kerala': 'kerala',
  'Himachal Pradesh': 'himachal-pradesh',
  'Goa': 'goa',
  'Rajasthan': 'rajasthan',
  'Kashmir (Winter Package)': 'kashmir-winter',
  'Madhya Pradesh': 'madhya-pradesh',
  'Uttarakhand Chardham': 'chardham',
  'Kedarnath Rishikesh': 'kedarnath-rishikesh',
  'Badrinath': 'badrinath',
  'Kedarnath': 'kedarnath',
  'Uttarakhand Do Dham': 'do-dham',
  'Haridwar': 'haridwar',
  'Bali': 'bali',
  'Malaysia': 'malaysia',
  'Singapore': 'singapore',
  'Vietnam': 'vietnam',
  'Thailand': 'thailand',
  'Bhutan': 'bhutan',
};

export function getSlug(name: string): string {
  return slugMap[name] || name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// ─── Destination Data ────────────────────────────────────────────────────────

export const destinationDetails: Record<string, DestinationDetail> = {

  // ═══════════════════════════════════════════════════════════════════════════
  // 1. KASHMIR
  // ═══════════════════════════════════════════════════════════════════════════
  'kashmir': {
    slug: 'kashmir',
    name: 'Kashmir',
    heroImage: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroTitle: 'Kashmir Tour Packages 2026 | Best Deals & Offers',
    heroDescription: 'Explore the breathtaking beauty of Kashmir with our customized tour packages designed for Indian travelers. From the serene Dal Lake in Srinagar to the snow-covered landscapes of Gulmarg and the lush green valleys of Pahalgam, Kashmir offers a perfect mix of nature, adventure, and relaxation.',
    packages: [
      { name: 'Kashmir', duration: '6D / 5N', price: 22999, highlights: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Dal Lake'] },
      { name: 'Srinagar Pahalgam Gulmarg', duration: '6D / 5N', price: 20200, highlights: ['Shikara Ride', 'Gondola', 'Betaab Valley'] },
      { name: 'Ladakh Summer Holiday', duration: '7D / 6N', price: 25999, highlights: ['Pangong Lake', 'Nubra Valley', 'Khardung La'] },
      { name: 'Srinagar Pahalgam', duration: '7D / 6N', price: 24500, highlights: ['Aru Valley', 'Chandanwari', 'Houseboat'] },
      { name: 'Srinagar Pahalgam Gulmarg Kashmir', duration: '6D / 5N', price: 25900, highlights: ['Complete Tour', 'Gondola', 'Dal Lake', 'Betaab Valley'] },
    ],
    featuredImage: { src: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Shikara Ride in Dal Lake' },
    aboutHeading: 'Jammu & Kashmir Tour',
    aboutParagraphs: [
      'Kashmir, often called Paradise on Earth, is one of India\'s most beautiful destinations. Surrounded by snow-capped mountains, lush valleys, alpine lakes, and colorful gardens, Kashmir offers a perfect blend of nature, adventure, culture, and relaxation.',
      'Visitors can explore Srinagar, Gulmarg, Pahalgam, Sonmarg, and many other scenic locations while enjoying local Kashmiri culture, cuisine, and hospitality.',
    ],
    whyVisit: [
      { emoji: '🌄', text: 'Stunning valleys & snow mountains' },
      { emoji: '🚤', text: 'Shikara ride in Dal Lake' },
      { emoji: '🎿', text: 'Gondola & skiing in Gulmarg' },
      { emoji: '🌸', text: 'Beautiful gardens & landscapes' },
      { emoji: '💑', text: 'Perfect honeymoon destination' },
      { emoji: '📸', text: 'Amazing photography locations' },
    ],
    placesToVisit: [
      { name: 'Srinagar', description: 'The summer capital of J&K, famous for Dal Lake, Mughal Gardens, houseboats, and the bustling old city with its papier-mâché and pashmina crafts. A shikara ride at sunset is an unforgettable experience.', image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Gulmarg', description: 'Known as the "Meadow of Flowers," Gulmarg is India\'s premier ski destination and home to the world\'s second-highest operating cable car (Gondola). In summer, it transforms into a lush golf course and trekking paradise.', image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Pahalgam', description: 'The "Valley of Shepherds" is a tranquil town along the Lidder River. It serves as the base camp for the Amarnath Yatra and offers stunning valleys like Betaab, Aru, and Chandanwari for trekking and sightseeing.', image: 'https://images.pexels.com/photos/2749656/pexels-photo-2749656.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Sonmarg', description: 'The "Meadow of Gold" sits at 2,800 m and is the gateway to Ladakh via Zoji La. Surrounded by glaciers, alpine flowers, and trout streams, it\'s perfect for pony rides and day trips to Thajiwas Glacier.', image: 'https://images.pexels.com/photos/414746/pexels-photo-414746.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Mughal Gardens', description: 'Srinagar\'s Mughal Gardens — Shalimar Bagh, Nishat Bagh, and Chashme Shahi — are terraced masterpieces with cascading fountains, vibrant flower beds, and chinar-shaded avenues dating to the Mughal era.', image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ],
    aboutPackagesHeading: 'About Kashmir Tour Packages',
    aboutPackagesParagraphs: [
      'Kashmir is a dream destination for travelers seeking natural beauty, peace, and adventure. The region includes popular destinations like Srinagar, Gulmarg, Sonmarg, and Pahalgam.',
      'Srinagar is famous for Dal Lake, houseboats, and Mughal gardens. Gulmarg is known for skiing and the world\'s highest gondola ride. Pahalgam offers beautiful valleys and riverside views.',
    ],
    bestTime: [
      { period: 'March – June', description: 'Pleasant weather & sightseeing. Tulip gardens in full bloom, ideal for family trips.', type: 'sun', recommended: true },
      { period: 'July – September', description: 'Green valleys & budget travel. Occasional rain but fewer crowds and lower prices.', type: 'rain' },
      { period: 'December – February', description: 'Snowfall & honeymoon trips. Gulmarg skiing season and frozen Dal Lake magic.', type: 'snow' },
    ],
    inclusions: ['Hotel accommodation', 'Daily breakfast', 'Daily dinner', 'Airport transfers', 'Sightseeing tours', 'Local transportation', 'Shikara ride', 'Tour assistance'],
    faq: [
      { q: 'Is Kashmir safe for tourists?', a: 'Yes, Kashmir is safe for tourists. The region has a well-developed tourism infrastructure and warm, hospitable locals. Tourist areas like Srinagar, Gulmarg, and Pahalgam are well-policed and welcoming.' },
      { q: 'What is the best time to visit Kashmir?', a: 'The best time is March to June for pleasant weather. December to February is ideal for snow lovers and skiing in Gulmarg. July to September offers green landscapes at budget-friendly prices.' },
      { q: 'How many days are enough for Kashmir?', a: 'We recommend 5–7 days for a complete Kashmir experience covering Srinagar, Gulmarg, and Pahalgam. For a shorter trip, 4 days can cover the highlights.' },
      { q: 'What is included in Kashmir packages?', a: 'Our packages include hotel accommodation, daily breakfast and dinner, airport transfers, sightseeing tours, local transportation, a shikara ride, and dedicated tour assistance.' },
      { q: 'Do I need permits for Kashmir?', a: 'No special permits are needed for most tourist areas in Kashmir. However, some restricted zones near the border may require permits, which we arrange if your itinerary includes them.' },
      { q: 'Are adventure activities available?', a: 'Yes! Kashmir offers skiing and snowboarding in Gulmarg, trekking in Pahalgam, river rafting in Sonamarg, paragliding, horse riding, and much more.' },
      { q: 'Which places should I visit in Kashmir?', a: 'Must-visit places include Dal Lake in Srinagar, Gulmarg for the Gondola ride, Pahalgam for valley views, Sonmarg for glaciers, and the Mughal Gardens for history and beauty.' },
      { q: 'How can I reach Kashmir?', a: 'You can fly to Sheikh ul-Alam International Airport in Srinagar with direct flights from Delhi, Mumbai, and other cities. By road, Kashmir is accessible via the Jammu-Srinagar Highway.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 2. LEH LADAKH
  // ═══════════════════════════════════════════════════════════════════════════
  'leh-ladakh': {
    slug: 'leh-ladakh',
    name: 'Leh Ladakh',
    heroImage: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroTitle: 'Ladakh Tour Packages 2026 | Adventure Trips & Scenic Road Journeys',
    heroDescription: 'Explore the breathtaking landscapes of Ladakh with our customized tour packages designed for travelers across India. From the vibrant streets of Leh and the crystal-clear waters of Pangong Lake to the sand dunes of Nubra Valley and the thrilling high-altitude passes, Ladakh offers a perfect mix of adventure and natural beauty. Whether you are planning a bike trip, group tour, or family vacation, our Ladakh packages include hotel stays, transfers, permits, and sightseeing for a safe and unforgettable travel experience.',
    packages: [
      { name: 'Leh', duration: '6D / 5N', price: 45500, highlights: ['Leh Sightseeing', 'Magnetic Hill', 'Shanti Stupa', 'Hall of Fame'] },
      { name: 'Leh Ladakh Airfare', duration: '7D / 6N', price: 58999, highlights: ['Round-Trip Flights', 'Nubra Valley', 'Pangong Lake', 'Khardung La'] },
      { name: 'Ladakh Summer Holiday', duration: '7D / 6N', price: 25999, highlights: ['Pangong Lake', 'Nubra Valley', 'Diskit Monastery', 'Chang La'] },
      { name: 'Ladakh', duration: '6D / 5N', price: 27999, highlights: ['Leh Local', 'Magnetic Hill', 'Thiksey', 'Shey Palace'] },
    ],
    featuredImage: { src: 'https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Landscape of sand dunes at Nubra Valley, Ladakh' },
    aboutHeading: 'Leh Ladakh',
    aboutParagraphs: [
      'Leh Ladakh tour packages offer an awe-inspiring adventure in the northernmost region of India. Nestled amidst the majestic Himalayas, Ladakh is renowned for its surreal landscapes, ancient monasteries, and vibrant culture. These packages typically include accommodation, transportation, guided tours, and permits to restricted areas.',
      'Travelers can explore the iconic Pangong Lake, famous for its ever-changing hues, and visit the ancient monasteries of Thiksey and Hemis, immersing themselves in Buddhist spirituality. Nubra Valley, with its stunning sand dunes and the world\'s highest motorable road, Khardung La, is another highlight. Adventurers can opt for thrilling activities like river rafting, mountain biking, and trekking in the rugged terrains.',
      'Cultural enthusiasts can engage with the warm-hearted locals, experiencing Ladakhi traditions and cuisine. Packages often cater to various preferences, including luxury, budget, and adventure tours. A trip to Leh Ladakh promises an unforgettable blend of natural beauty and cultural richness in this remote, Himalayan paradise.',
    ],
    whyVisit: [
      { emoji: '🏔️', text: 'Stunning mountains & landscapes' },
      { emoji: '🏍️', text: 'Famous road trips & bike tours' },
      { emoji: '🌊', text: 'Pangong Lake & Nubra Valley' },
      { emoji: '🛕', text: 'Monasteries & culture' },
      { emoji: '📸', text: 'Perfect for adventure lovers' },
    ],
    placesToVisit: [
      { name: 'Pangong Lake', description: 'A 134 km long high-altitude lake stretching from India to Tibet. Its waters shift between cobalt blue, turquoise, and emerald green depending on sunlight. Camping by the lake under a star-filled sky is unforgettable.', image: 'https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Nubra Valley', description: 'Known as the "Valley of Flowers," Nubra features white sand dunes at Hunder where you can ride double-humped Bactrian camels. The Diskit Monastery overlooks the valley with a giant Maitreya Buddha statue.', image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Khardung La', description: 'One of the world\'s highest motorable passes at 17,982 ft. The road to Nubra Valley crosses this legendary pass, offering breathtaking views of snow-covered peaks and the thrill of standing on top of the world.', image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Thiksey Monastery', description: 'A stunning 12-storey hilltop monastery resembling Lhasa\'s Potala Palace. Home to a two-storey seated Maitreya Buddha, it offers sunrise views and the peaceful chanting of resident monks.', image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Magnetic Hill', description: 'A gravity-defying optical illusion where vehicles appear to roll uphill. Located on the Leh-Kargil Highway, it\'s one of Ladakh\'s quirkiest attractions and a fun stop on any Leh sightseeing tour.', image: 'https://images.pexels.com/photos/414746/pexels-photo-414746.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ],
    aboutPackagesHeading: 'About Ladakh Tour Packages',
    aboutPackagesParagraphs: [
      'Ladakh is one of the most unique travel destinations in India, known for its breathtaking landscapes and adventurous routes. The region includes popular places like Leh, Pangong Lake, Nubra Valley, and Magnetic Hill.',
      'Leh is the main city and starting point of Ladakh tours, offering monasteries, local markets, and cultural experiences. Pangong Lake is one of the most famous attractions, known for its crystal-clear blue water and changing colors.',
      'Nubra Valley is another must-visit destination, famous for sand dunes and double-humped camels. The journey to Nubra Valley via Khardung La Pass is one of the highest motorable roads in the world.',
      'Ladakh is also popular for bike trips and road journeys, attracting adventure lovers from across the country. The scenic beauty, peaceful environment, and thrilling routes make Ladakh a dream destination for travelers.',
    ],
    bestTime: [
      { period: 'May – September', description: 'Best time for travel. Roads are open, weather is pleasant, all passes accessible. Ideal for bike trips, sightseeing, and adventure.', type: 'sun', recommended: true },
      { period: 'October – April', description: 'Extreme cold & limited access. Most roads closed. Only recommended for Chadar Trek enthusiasts and experienced winter travelers.', type: 'snow' },
    ],
    inclusions: ['Hotel accommodation', 'Meals (breakfast & dinner)', 'Transfers', 'Sightseeing tours', 'Inner line permits', 'Oxygen support', 'Driver allowance', 'Tour assistance'],
    faq: [
      { q: 'What is the best time to visit Ladakh?', a: 'May to September is the best time when roads are open. Weather is suitable for sightseeing and travel.' },
      { q: 'How much does a Ladakh trip cost?', a: 'Our packages start from ₹25,999 per person including hotels, meals, transfers, and permits. Premium packages with airfare range from ₹45,000–₹59,000.' },
      { q: 'Which are the best places to visit in Ladakh?', a: 'The must-visit places include Pangong Lake, Nubra Valley, Khardung La Pass, Thiksey Monastery, Magnetic Hill, Shanti Stupa, Hemis Monastery, and Leh Palace.' },
      { q: 'Is Ladakh safe for tourists?', a: 'Yes, Ladakh is very safe for tourists. Altitude sickness is the main concern — we include acclimatization days and oxygen support in all packages.' },
      { q: 'How many days are enough for Ladakh?', a: 'We recommend 5–8 days. This includes 1 day for acclimatization, 2 for Nubra Valley, 1 for Pangong Lake, and 1–2 for Leh local sightseeing.' },
      { q: 'Is Ladakh good for bike trips?', a: 'Yes! Ladakh is one of the most popular bike trip destinations in India. We offer bike trip packages with Royal Enfield rentals, support vehicles, and experienced ride marshals.' },
      { q: 'What is included in Ladakh tour packages?', a: 'Our packages include hotel accommodation, meals (breakfast & dinner), transfers, sightseeing tours, inner line permits, oxygen support, and a dedicated support team.' },
      { q: 'Do I need permits for Ladakh?', a: 'Yes, Inner Line Permits (ILP) are required for Pangong Lake, Nubra Valley, and other restricted areas. All permits are included in our packages and arranged by our team.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3. GOA
  // ═══════════════════════════════════════════════════════════════════════════
  'goa': {
    slug: 'goa',
    name: 'Goa',
    heroImage: 'https://images.pexels.com/photos/1002348/pexels-photo-1002348.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroTitle: 'Goa Tour Packages 2026 | Beach Holidays & Party Getaways',
    heroDescription: 'Experience the vibrant beaches, Portuguese heritage, and legendary nightlife of Goa. From the bustling shores of Baga to the serene sands of Palolem, our curated packages offer the ultimate coastal escape for families, couples, and friends.',
    packages: [
      { name: 'Goa Beach Holiday', duration: '5D / 4N', price: 29999, highlights: ['Baga Beach', 'Dudhsagar Falls', 'Basilica'] },
      { name: 'North Goa Explorer', duration: '4D / 3N', price: 19999, highlights: ['Calangute', 'Anjuna', 'Fort Aguada'] },
      { name: 'South Goa Serenity', duration: '5D / 4N', price: 24999, highlights: ['Palolem', 'Colva', 'Cabo de Rama'] },
      { name: 'Goa Honeymoon Special', duration: '6D / 5N', price: 34999, highlights: ['Cruise', 'Spa', 'Candlelit Dinner'] },
    ],
    featuredImage: { src: 'https://images.pexels.com/photos/1002348/pexels-photo-1002348.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Golden Sunset at Baga Beach' },
    aboutHeading: 'Goa — Sun, Sand & Celebrations',
    aboutParagraphs: [
      'Goa is India\'s smallest state but its biggest party destination. With 100+ km of coastline, Portuguese colonial heritage, world-class seafood, and a laid-back vibe, Goa attracts millions of travelers every year.',
      'Beyond the beaches, Goa offers spice plantations, majestic waterfalls, centuries-old churches, vibrant flea markets, and a nightlife scene that rivals any global city.',
    ],
    whyVisit: [
      { emoji: '🏖️', text: 'Pristine golden beaches' },
      { emoji: '🎉', text: 'Vibrant nightlife & beach parties' },
      { emoji: '⛪', text: 'Portuguese colonial heritage' },
      { emoji: '🍤', text: 'World-class seafood cuisine' },
      { emoji: '🌊', text: 'Water sports & adventures' },
      { emoji: '💑', text: 'Romantic honeymoon destination' },
    ],
    placesToVisit: [
      { name: 'Baga Beach', description: 'The heart of North Goa\'s party scene — buzzing shacks, water sports, and Saturday night markets. Baga is where Goa\'s energy is at its peak.', image: 'https://images.pexels.com/photos/1002348/pexels-photo-1002348.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Basilica of Bom Jesus', description: 'A UNESCO World Heritage Site housing the mortal remains of St. Francis Xavier. This 16th-century church is a masterpiece of Baroque architecture.', image: 'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Dudhsagar Falls', description: 'A four-tiered, 310 m waterfall on the Goa-Karnataka border. Accessible by jeep through dense jungle, it\'s one of India\'s tallest and most spectacular falls.', image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Fort Aguada', description: 'A well-preserved 17th-century Portuguese fort overlooking the Arabian Sea. Its lighthouse offers panoramic views of the coastline.', image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Palolem Beach', description: 'South Goa\'s most beautiful crescent-shaped beach. Lined with palm trees and colorful beach huts, it\'s perfect for swimming, kayaking, and dolphin spotting.', image: 'https://images.pexels.com/photos/2749656/pexels-photo-2749656.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ],
    aboutPackagesHeading: 'About Goa Tour Packages',
    aboutPackagesParagraphs: [
      'Our Goa packages cover both North and South Goa, giving you the best of beaches, heritage, adventure, and nightlife. Choose from budget-friendly trips to luxury honeymoon packages.',
      'All packages include beachside accommodation, breakfast, airport transfers, sightseeing, and a complimentary sunset cruise on select itineraries.',
    ],
    bestTime: [
      { period: 'November – February', description: 'Peak season. Pleasant weather, Christmas & New Year parties.', type: 'sun', recommended: true },
      { period: 'March – May', description: 'Hot but fewer crowds and lower prices. Great for budget travel.', type: 'sun' },
      { period: 'June – September', description: 'Monsoon season. Lush green Goa, waterfalls at their peak.', type: 'rain' },
    ],
    inclusions: ['Beach resort stay', 'Daily breakfast', 'Airport transfers', 'Sightseeing tours', 'Sunset cruise', 'Water sports', 'North & South Goa tour', 'Tour assistance'],
    faq: [
      { q: 'Is Goa safe for tourists?', a: 'Yes, Goa is one of India\'s safest tourist destinations with well-policed tourist areas and a welcoming local culture.' },
      { q: 'What is the best time to visit Goa?', a: 'November to February offers the best weather. The Christmas–New Year period is the peak festive season.' },
      { q: 'How many days are enough for Goa?', a: '4–5 days is ideal to explore both North and South Goa beaches, heritage sites, and nightlife.' },
      { q: 'What water sports are available?', a: 'Parasailing, jet skiing, banana boat rides, scuba diving, snorkeling, kayaking, and flyboarding are all available.' },
      { q: 'Can I visit Dudhsagar Falls?', a: 'Yes, from October to May. The jeep safari to the falls through Bhagwan Mahaveer Sanctuary is an adventure in itself.' },
      { q: 'Is Goa good for families?', a: 'Absolutely! South Goa beaches are calm and family-friendly, and there are parks, museums, and cultural shows for all ages.' },
      { q: 'What food should I try in Goa?', a: 'Must-try dishes include fish curry rice, prawn balchao, bebinca, vindaloo, and feni (local cashew spirit).' },
      { q: 'How can I reach Goa?', a: 'Fly to Dabolim Airport (GOI) or Manohar International Airport (GOX). Goa is also well-connected by train (Madgaon station) and road.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 4. KERALA
  // ═══════════════════════════════════════════════════════════════════════════
  'kerala': {
    slug: 'kerala',
    name: 'Kerala',
    heroImage: 'https://images.pexels.com/photos/256447/pexels-photo-256447.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroTitle: 'Kerala Tour Packages 2026 | God\'s Own Country Awaits',
    heroDescription: 'Discover the lush backwaters, rolling tea hills, spice-scented streets, and golden beaches of Kerala. From houseboat cruises in Alleppey to wildlife safaris in Periyar, Kerala is India\'s most tranquil paradise.',
    packages: [
      { name: 'Kerala', duration: '6D / 5N', price: 26999, highlights: ['Alleppey', 'Munnar', 'Kochi', 'Backwaters'] },
      { name: 'Cochin, Alleppey, Varkala & Kovalam', duration: '7D / 6N', price: 24000, highlights: ['Cochin', 'Houseboat', 'Varkala Beach', 'Kovalam'] },
      { name: 'Munnar', duration: '3D / 2N', price: 8900, highlights: ['Tea Gardens', 'Mattupetty Dam', 'Echo Point'] },
      { name: 'Munnar Thekkady Alleppey', duration: '5D / 4N', price: 18900, highlights: ['Munnar', 'Periyar Wildlife', 'Houseboat'] },
      { name: 'Munnar Alleppey Kerala', duration: '4D / 3N', price: 19900, highlights: ['Tea Plantations', 'Backwater Cruise', 'Kochi'] },
    ],
    featuredImage: { src: 'https://images.pexels.com/photos/256447/pexels-photo-256447.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Houseboat Cruise on Alleppey Backwaters' },
    aboutHeading: 'Kerala — God\'s Own Country',
    aboutParagraphs: [
      'Kerala is a tropical paradise along India\'s southwestern Malabar Coast, renowned for its palm-lined backwaters, misty hill stations, spice plantations, and Ayurvedic wellness traditions.',
      'From the colonial heritage of Fort Kochi to the tea gardens of Munnar, the wildlife of Periyar, and the beach bliss of Kovalam — Kerala offers an incredibly diverse experience in a compact geography.',
    ],
    whyVisit: [
      { emoji: '🛶', text: 'Serene backwater houseboat cruises' },
      { emoji: '🍵', text: 'Rolling tea plantations in Munnar' },
      { emoji: '🐘', text: 'Wildlife safaris in Periyar' },
      { emoji: '🧘', text: 'Ayurvedic spa & wellness retreats' },
      { emoji: '🏖️', text: 'Beautiful beaches — Kovalam & Varkala' },
      { emoji: '🌶️', text: 'Spice garden tours & local cuisine' },
    ],
    placesToVisit: [
      { name: 'Alleppey (Alappuzha)', description: 'The "Venice of the East" is famous for its palm-fringed backwater canals. A night on a traditional houseboat gliding through serene waterways is the quintessential Kerala experience.', image: 'https://images.pexels.com/photos/256447/pexels-photo-256447.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Munnar', description: 'A hill station at 1,600 m altitude, carpeted with endless tea plantations, misty valleys, and exotic flora. Eravikulam National Park here is home to the endangered Nilgiri Tahr.', image: 'https://images.pexels.com/photos/2749656/pexels-photo-2749656.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Fort Kochi', description: 'A charming blend of Portuguese, Dutch, and British colonial heritage. Walk past Chinese fishing nets, visit St. Francis Church (India\'s oldest European church), and explore the vibrant art galleries.', image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Periyar Wildlife Sanctuary', description: 'Home to elephants, tigers, and exotic birds. Enjoy a boat ride on Periyar Lake surrounded by dense tropical forest, or trek through the wilderness with tribal guides.', image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Kovalam Beach', description: 'A crescent-shaped beach with lighthouse views, Ayurvedic massage parlours, and calm waters perfect for swimming. Kovalam is one of South India\'s most popular beach destinations.', image: 'https://images.pexels.com/photos/1002348/pexels-photo-1002348.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ],
    aboutPackagesHeading: 'About Kerala Tour Packages',
    aboutPackagesParagraphs: [
      'Our Kerala packages offer the perfect blend of backwaters, hill stations, wildlife, and beaches. Choose from couple-focused honeymoon packages to family adventure itineraries.',
      'All packages include quality accommodation, daily breakfast, airport transfers, houseboat stays, and sightseeing tours. Ayurvedic spa sessions available on premium packages.',
    ],
    bestTime: [
      { period: 'October – February', description: 'Post-monsoon. Cool weather, lush greenery, perfect for sightseeing.', type: 'sun', recommended: true },
      { period: 'March – May', description: 'Warm but great for beach holidays and hill station retreats.', type: 'sun' },
      { period: 'June – September', description: 'Monsoon season. Ideal for Ayurvedic treatments and green landscapes.', type: 'rain' },
    ],
    inclusions: ['Hotel & houseboat stay', 'Daily breakfast', 'Daily dinner', 'Airport transfers', 'Sightseeing tours', 'Backwater cruise', 'Spice garden visit', 'Tour assistance'],
    faq: [
      { q: 'What is the best time to visit Kerala?', a: 'October to February is ideal with cool, pleasant weather. Monsoon season (June–September) is perfect for Ayurvedic retreats.' },
      { q: 'How many days are needed for Kerala?', a: '5–7 days is recommended to cover Kochi, Munnar, Alleppey backwaters, and a beach destination.' },
      { q: 'Is Kerala safe for solo travelers?', a: 'Yes, Kerala is one of India\'s safest states with high literacy and welcoming locals. Solo female travelers regularly visit without concerns.' },
      { q: 'What is a houseboat stay like?', a: 'Traditional kettuvallam houseboats on Alleppey backwaters offer private bedrooms, en-suite bathrooms, sun decks, and freshly cooked Kerala meals. It\'s magical!' },
      { q: 'Are Ayurvedic treatments available?', a: 'Yes! Kerala is the birthplace of Ayurveda. We include spa sessions in premium packages and can arrange extended wellness retreats.' },
      { q: 'What food should I try?', a: 'Must-try: Kerala fish curry, appam with stew, puttu with kadala curry, banana chips, and payasam for dessert.' },
      { q: 'Can I see wildlife in Kerala?', a: 'Yes! Periyar Wildlife Sanctuary offers boat safaris and trekking. You can spot elephants, tigers, sambar deer, and exotic birds.' },
      { q: 'How can I reach Kerala?', a: 'Fly to Cochin (COK), Trivandrum (TRV), or Calicut (CCJ) airports. Kerala is also well-connected by train and has excellent road connectivity.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 5. RAJASTHAN
  // ═══════════════════════════════════════════════════════════════════════════
  'rajasthan': {
    slug: 'rajasthan',
    name: 'Rajasthan',
    heroImage: 'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroTitle: 'Rajasthan Tour Packages 2026 | Royal Heritage & Desert Adventures',
    heroDescription: 'Step into the land of maharajas, majestic forts, golden deserts, and vibrant culture. From the pink city of Jaipur to the blue city of Jodhpur and the romantic lakes of Udaipur, Rajasthan is India\'s most regal destination.',
    packages: [
      { name: 'Jaipur Ranthambhore', duration: '5D / 4N', price: 12000, highlights: ['Amer Fort', 'Hawa Mahal', 'Tiger Safari', 'City Palace'] },
      { name: 'Udaipur Kumbhalgarh', duration: '4D / 3N', price: 7800, highlights: ['Lake Pichola', 'Kumbhalgarh Fort', 'City Palace', 'Ranakpur'] },
    ],
    featuredImage: { src: 'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Majestic Amer Fort — Jaipur' },
    aboutHeading: 'Rajasthan — Land of Kings',
    aboutParagraphs: [
      'Rajasthan is India\'s largest state and its most colorful. Every city has a distinct personality — Jaipur is pink, Jodhpur is blue, Jaisalmer is golden, and Udaipur is white. Together, they tell the story of India\'s royal heritage.',
      'From desert safaris on camelback under star-filled skies to exploring enormous forts and palaces, Rajasthan offers an experience that transports you to a bygone era of maharajas and warriors.',
    ],
    whyVisit: [
      { emoji: '🏰', text: 'Majestic forts & palaces' },
      { emoji: '🐪', text: 'Desert camel safaris' },
      { emoji: '🎨', text: 'Vibrant culture & festivals' },
      { emoji: '🍛', text: 'Rich Rajasthani cuisine' },
      { emoji: '🛍️', text: 'Colorful bazaars & handicrafts' },
      { emoji: '📸', text: 'Incredible photography opportunities' },
    ],
    placesToVisit: [
      { name: 'Jaipur — The Pink City', description: 'Home to Amer Fort, Hawa Mahal, City Palace, and Jantar Mantar. The vibrant bazaars of Johari and Bapu are perfect for shopping jewelry, textiles, and handicrafts.', image: 'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Udaipur — City of Lakes', description: 'The most romantic city in India with Lake Pichola, City Palace, and Jag Mandir. Sunset from a lakeside restaurant is pure magic.', image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Jaisalmer — The Golden City', description: 'A living fort rising from the Thar Desert. Explore havelis with intricate stone carvings, ride camels across sand dunes, and sleep under stars in desert camps.', image: 'https://images.pexels.com/photos/2749656/pexels-photo-2749656.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Jodhpur — The Blue City', description: 'Dominated by the mighty Mehrangarh Fort, Jodhpur\'s blue-washed houses create a stunning cityscape. The Umaid Bhawan Palace is one of the world\'s largest private residences.', image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Pushkar', description: 'One of India\'s oldest cities with the only Brahma Temple in the world. The annual Pushkar Camel Fair is a riot of color, music, and desert culture.', image: 'https://images.pexels.com/photos/2905570/pexels-photo-2905570.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ],
    aboutPackagesHeading: 'About Rajasthan Tour Packages',
    aboutPackagesParagraphs: [
      'Our Rajasthan packages take you through India\'s most regal heritage — from Jaipur\'s pink-walled fort city to the golden desert of Jaisalmer and the romantic lakes of Udaipur.',
      'All packages include heritage hotel stays, daily breakfast, airport transfers, sightseeing tours, and a desert safari experience with cultural performances.',
    ],
    bestTime: [
      { period: 'October – March', description: 'Cool weather, ideal for sightseeing. Best time to visit desert regions.', type: 'sun', recommended: true },
      { period: 'April – June', description: 'Very hot (45°C+). Budget prices. Good for heritage hotel staycations.', type: 'sun' },
      { period: 'July – September', description: 'Monsoon. Forts and palaces look dramatic with rain clouds.', type: 'rain' },
    ],
    inclusions: ['Heritage hotel stay', 'Daily breakfast', 'Daily dinner', 'Airport transfers', 'Sightseeing tours', 'Desert safari', 'Cultural performances', 'Tour guide'],
    faq: [
      { q: 'What is the best time to visit Rajasthan?', a: 'October to March offers pleasant weather. Avoid April–June when temperatures exceed 45°C in desert regions.' },
      { q: 'How many days are needed for Rajasthan?', a: '6–10 days is ideal. A Jaipur-Jodhpur-Udaipur circuit takes 6 days; adding Jaisalmer requires 8–10 days.' },
      { q: 'Is desert safari included?', a: 'Yes! Our packages include a camel safari with cultural performances and camping under the stars in Jaisalmer or Pushkar.' },
      { q: 'What should I wear?', a: 'Light, breathable cotton clothes. Carry a scarf for sun protection and modest clothing for temple visits.' },
      { q: 'Is Rajasthan safe for women travelers?', a: 'Yes, tourist areas are well-policed and safe. We provide experienced guides and comfortable transport on all packages.' },
      { q: 'What food should I try?', a: 'Dal baati churma, laal maas, ghevar, pyaaz kachori, and ker sangri are must-try Rajasthani specialties.' },
      { q: 'Can I stay in a palace hotel?', a: 'Yes! Rajasthan is famous for heritage palace hotels. Our premium packages include stays at converted royal palaces.' },
      { q: 'How can I reach Rajasthan?', a: 'Fly to Jaipur (JAI), Jodhpur (JDH), or Udaipur (UDR). Rajasthan is also well-connected by train from Delhi and Mumbai.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 6. SHIMLA-MANALI
  // ═══════════════════════════════════════════════════════════════════════════
  'shimla-manali': {
    slug: 'shimla-manali',
    name: 'Shimla & Manali',
    heroImage: 'https://images.pexels.com/photos/414746/pexels-photo-414746.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroTitle: 'Shimla Manali Tour Packages 2026 | Twin Hill Station Magic',
    heroDescription: 'Experience the charm of two legendary Himalayan hill stations. From Shimla\'s colonial elegance to Manali\'s adventure-packed valleys, this twin-city journey offers snow sports, apple orchards, and breathtaking mountain views.',
    packages: [
      { name: 'Shimla Manali', duration: '7D / 6N', price: 24999, highlights: ['Mall Road', 'Solang Valley', 'Rohtang', 'Kufri'] },
      { name: 'Shimla Manali Amritsar', duration: '10D / 9N', price: 31500, highlights: ['Golden Temple', 'Solang Valley', 'Mall Road', 'Wagah Border'] },
      { name: 'Manali from Chandigarh', duration: '4D / 3N', price: 13499, highlights: ['Solang Valley', 'Hadimba Temple', 'Old Manali'] },
      { name: 'Shimla Manali Chandigarh', duration: '7D / 6N', price: 25897, highlights: ['Kufri', 'Rohtang Pass', 'Rock Garden', 'Mall Road'] },
      { name: 'Shimla Manali Vacation', duration: '6D / 5N', price: 32000, highlights: ['Premium Stay', 'Snow Points', 'Spa', 'Sightseeing'] },
    ],
    featuredImage: { src: 'https://images.pexels.com/photos/414746/pexels-photo-414746.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Snow-Covered Rohtang Pass' },
    aboutHeading: 'Shimla & Manali — Himalayan Gems',
    aboutParagraphs: [
      'Shimla, the former summer capital of British India, enchants with its colonial architecture, toy-train rides, and panoramic mountain views. Manali, just a scenic drive away, is the adventure capital of Himachal.',
      'Together, they create India\'s most popular hill station circuit — perfect for honeymooners, families, and adventure seekers alike.',
    ],
    whyVisit: [
      { emoji: '❄️', text: 'Snow-covered mountains & skiing' },
      { emoji: '🚂', text: 'UNESCO Toy Train ride' },
      { emoji: '🏂', text: 'Adventure sports in Solang' },
      { emoji: '🍎', text: 'Apple orchards & scenic valleys' },
      { emoji: '💑', text: 'Top honeymoon destination' },
      { emoji: '🏔️', text: 'Rohtang Pass & Atal Tunnel' },
    ],
    placesToVisit: [
      { name: 'Mall Road, Shimla', description: 'The bustling heart of Shimla with shops, restaurants, and the iconic Christ Church. A walk along the Ridge offers stunning views of snow-capped peaks.', image: 'https://images.pexels.com/photos/2749656/pexels-photo-2749656.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Rohtang Pass', description: 'A legendary high-altitude pass at 13,050 ft offering snow activities, glaciers, and breathtaking views. Now accessible year-round via the Atal Tunnel.', image: 'https://images.pexels.com/photos/414746/pexels-photo-414746.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Solang Valley', description: 'Manali\'s adventure playground — paragliding, zorbing, skiing, and snow tubing. The valley is stunning in every season.', image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Hadimba Temple', description: 'A 16th-century pagoda-style temple surrounded by cedar forests. Its unique wooden architecture and serene setting make it Manali\'s most iconic landmark.', image: 'https://images.pexels.com/photos/2905570/pexels-photo-2905570.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Kufri', description: 'A tiny hill station near Shimla famous for its ski slopes, pony rides, and the Himalayan Nature Park with red pandas and snow leopards.', image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ],
    aboutPackagesHeading: 'About Shimla Manali Packages',
    aboutPackagesParagraphs: [
      'Our Shimla-Manali packages combine the best of both hill stations in a seamless itinerary. Enjoy colonial heritage, snow adventures, and scenic drives through the Himalayas.',
      'All packages include comfortable accommodation, meals, Volvo transport options, sightseeing, and adventure activities.',
    ],
    bestTime: [
      { period: 'March – June', description: 'Pleasant weather. Apple blossoms, green valleys, outdoor activities.', type: 'sun', recommended: true },
      { period: 'October – November', description: 'Autumn colors, clear skies, fewer crowds. Post-monsoon beauty.', type: 'leaf' },
      { period: 'December – February', description: 'Snowfall season. Skiing in Solang and Kufri. Magical winter.', type: 'snow' },
    ],
    inclusions: ['Hotel accommodation', 'Daily breakfast', 'Daily dinner', 'Volvo transfers', 'Sightseeing tours', 'Adventure activities', 'Rohtang/Atal Tunnel visit', 'Tour guide'],
    faq: [
      { q: 'When does it snow in Shimla-Manali?', a: 'December to February brings heavy snowfall. January is the peak snow month with skiing opportunities in Solang and Kufri.' },
      { q: 'How to reach Shimla and Manali?', a: 'Fly to Chandigarh and drive to Shimla (4 hrs) and Manali (10 hrs). Volvo buses run overnight from Delhi. The Kalka-Shimla toy train is also popular.' },
      { q: 'How many days do I need?', a: '6–7 days covers both destinations well. 3–4 days for Shimla alone and 3–4 for Manali.' },
      { q: 'Is Rohtang Pass open year-round?', a: 'The pass road closes in winter, but the Atal Tunnel (9.02 km) provides year-round access to Lahaul Valley beyond Rohtang.' },
      { q: 'What adventure activities are available?', a: 'Paragliding, skiing, river rafting, zorbing, horse riding, trekking, and zip-lining are all available.' },
      { q: 'Is it suitable for families?', a: 'Absolutely! Both destinations are family-friendly with plenty of activities for children and comfortable accommodation.' },
      { q: 'What clothes should I carry?', a: 'Pack warm layers even in summer. Winters require heavy woolens, thermals, and snow boots.' },
      { q: 'Are there apple orchards to visit?', a: 'Yes! Kotgarh and Narkanda near Shimla have beautiful apple orchards. July–September is harvest season.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 7. DARJEELING GANGTOK
  // ═══════════════════════════════════════════════════════════════════════════
  'darjeeling-gangtok': {
    slug: 'darjeeling-gangtok',
    name: 'Darjeeling & Gangtok',
    heroImage: 'https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroTitle: 'Darjeeling Gangtok Packages 2026 | Tea Gardens & Mountains',
    heroDescription: 'Witness sunrise over Kanchenjunga, ride the Darjeeling Himalayan Railway, explore vibrant Sikkimese culture, and sip the world\'s finest tea in the misty hills of Northeast India.',
    packages: [
      { name: 'Darjeeling Gangtok', duration: '6D / 5N', price: 28999, highlights: ['Tiger Hill', 'Tsomgo Lake', 'Nathula', 'Toy Train'] },
      { name: 'Darjeeling Gangtok Kalimpong', duration: '7D / 6N', price: 32200, highlights: ['Kalimpong', 'Tiger Hill', 'Gangtok', 'Tsomgo Lake'] },
      { name: 'Sikkim Darjeeling', duration: '6D / 5N', price: 25600, highlights: ['Gangtok', 'Pelling', 'Darjeeling', 'Ravangla'] },
      { name: 'Darjeeling Gangtok', duration: '5D / 4N', price: 24599, highlights: ['Tiger Hill', 'Mall Road', 'MG Marg', 'Tea Gardens'] },
      { name: 'Kolkata', duration: '3D / 2N', price: 12500, highlights: ['Victoria Memorial', 'Howrah Bridge', 'City Tour'] },
    ],
    featuredImage: { src: 'https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Sunrise at Tiger Hill — Kanchenjunga View' },
    aboutHeading: 'Darjeeling & Gangtok Tour',
    aboutParagraphs: [
      'Darjeeling, the "Queen of Hills," is famous for its tea plantations, the toy train, and unforgettable sunrise views of Kanchenjunga. Gangtok, the capital of Sikkim, offers a blend of Buddhist culture, pristine nature, and high-altitude lakes.',
      'Together, they create one of India\'s most scenic circuits — where British colonial charm meets Himalayan mysticism.',
    ],
    whyVisit: [
      { emoji: '🌅', text: 'Sunrise over Kanchenjunga' },
      { emoji: '🍵', text: 'World-famous tea plantations' },
      { emoji: '🚂', text: 'UNESCO Darjeeling Toy Train' },
      { emoji: '🏔️', text: 'Tsomgo Lake & Nathula Pass' },
      { emoji: '🛕', text: 'Buddhist monasteries & culture' },
      { emoji: '🌺', text: 'Rhododendron forests & orchids' },
    ],
    placesToVisit: [
      { name: 'Tiger Hill', description: 'Watch the first rays of dawn illuminate Kanchenjunga and the Himalayan range. This sunrise viewpoint is one of India\'s most iconic experiences.', image: 'https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Tsomgo Lake', description: 'A glacial lake at 12,310 ft near Gangtok. Frozen in winter and surrounded by wildflowers in summer, with yak rides along its shores.', image: 'https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Nathula Pass', description: 'The Indo-China border pass at 14,140 ft. Open to Indian tourists, it offers stunning views and a unique chance to stand at an international border.', image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Happy Valley Tea Estate', description: 'One of the oldest tea gardens in Darjeeling. Walk through aromatic tea bushes, watch the plucking and processing, and taste freshly brewed Darjeeling tea.', image: 'https://images.pexels.com/photos/2749656/pexels-photo-2749656.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Rumtek Monastery', description: 'The largest monastery in Sikkim and seat of the Karmapa. Its golden stupas, prayer halls, and serene setting offer a deep spiritual experience.', image: 'https://images.pexels.com/photos/2905570/pexels-photo-2905570.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ],
    aboutPackagesHeading: 'About Darjeeling Gangtok Packages',
    aboutPackagesParagraphs: [
      'Our packages combine the colonial charm of Darjeeling with the natural beauty of Sikkim. Experience tea trails, mountain railways, and Buddhist heritage.',
      'All packages include comfortable stays, meals, permits for Nathula, and guided sightseeing tours.',
    ],
    bestTime: [
      { period: 'March – May', description: 'Spring blooms, clear mountain views, pleasant temperatures.', type: 'sun', recommended: true },
      { period: 'October – December', description: 'Post-monsoon clarity. Crystal-clear Kanchenjunga views.', type: 'sun' },
      { period: 'June – September', description: 'Monsoon season. Lush but foggy. Tea harvest period.', type: 'rain' },
    ],
    inclusions: ['Hotel accommodation', 'Daily breakfast', 'Daily dinner', 'Airport transfers', 'Sightseeing tours', 'Nathula permits', 'Toy train ride', 'Tour guide'],
    faq: [
      { q: 'When is the best time to visit?', a: 'March to May for spring blooms and October to December for clear mountain views.' },
      { q: 'Do I need permits?', a: 'Yes, Indian nationals need permits for Nathula Pass and some parts of Sikkim. Foreign nationals need additional permits. We handle all permits.' },
      { q: 'How to reach Darjeeling?', a: 'Fly to Bagdogra Airport (IXB) and drive 3 hours to Darjeeling or 5 hours to Gangtok.' },
      { q: 'Is the toy train ride included?', a: 'Yes! A ride on the UNESCO Darjeeling Himalayan Railway is included in all Darjeeling packages.' },
      { q: 'What is the altitude?', a: 'Darjeeling is at 6,710 ft and Gangtok at 5,410 ft. Nathula Pass reaches 14,140 ft.' },
      { q: 'What should I pack?', a: 'Warm layers, rain jacket, comfortable walking shoes, and sunscreen. Temperatures range from 5°C to 20°C.' },
      { q: 'Can I visit tea gardens?', a: 'Yes! Happy Valley and Glenburn tea estates offer guided tours with tastings.' },
      { q: 'Is Nathula Pass always open?', a: 'Nathula is open to Indian tourists Wed–Sun, closed Mon–Tue. It may close due to bad weather or diplomatic reasons.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 8. HIMACHAL PRADESH
  // ═══════════════════════════════════════════════════════════════════════════
  'himachal-pradesh': {
    slug: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    heroImage: 'https://images.pexels.com/photos/2749656/pexels-photo-2749656.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroTitle: 'Himachal Pradesh Packages 2026 | Devbhoomi Adventures',
    heroDescription: 'Explore the divine land of Himachal Pradesh — from the spiritual vibes of Dharamshala to the colonial charm of Dalhousie and the pine forests of Kasauli. Snow-capped peaks, cedar trails, and hill-station magic await.',
    packages: [
      { name: 'Shimla Manali', duration: '7D / 6N', price: 24999, highlights: ['Mall Road', 'Solang Valley', 'Rohtang', 'Kufri'] },
      { name: 'Shimla Manali Amritsar', duration: '10D / 9N', price: 31500, highlights: ['Golden Temple', 'Solang Valley', 'Mall Road', 'Wagah Border'] },
      { name: 'Manali from Chandigarh', duration: '4D / 3N', price: 13499, highlights: ['Solang Valley', 'Hadimba Temple', 'Old Manali'] },
      { name: 'Shimla Manali Chandigarh', duration: '7D / 6N', price: 25897, highlights: ['Kufri', 'Rohtang Pass', 'Rock Garden', 'Mall Road'] },
      { name: 'Shimla Manali Vacation', duration: '6D / 5N', price: 32000, highlights: ['Premium Stay', 'Snow Points', 'Spa', 'Sightseeing'] },
    ],
    featuredImage: { src: 'https://images.pexels.com/photos/2749656/pexels-photo-2749656.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Pine Forest Trail — Himachal Pradesh' },
    aboutHeading: 'Himachal Pradesh — Devbhoomi',
    aboutParagraphs: [
      'Himachal Pradesh, the "Land of Gods," is a northern Indian state spanning the western Himalayas. Known for its snow-capped mountains, deep valleys, Buddhist monasteries, and adventure sports, Himachal is a year-round destination.',
      'From the Tibetan culture of Dharamshala to the Scottish beauty of Dalhousie, Himachal offers diverse experiences for every kind of traveler.',
    ],
    whyVisit: [
      { emoji: '🏔️', text: 'Snow-capped Himalayan peaks' },
      { emoji: '🧘', text: 'Spiritual retreats & monasteries' },
      { emoji: '🌲', text: 'Dense cedar & pine forests' },
      { emoji: '⛷️', text: 'Adventure sports & trekking' },
      { emoji: '🍎', text: 'Apple orchards & culture' },
      { emoji: '🌤️', text: 'Perfect weather escape' },
    ],
    placesToVisit: [
      { name: 'Dharamshala & McLeodGanj', description: 'Home of the Dalai Lama and the Tibetan government-in-exile. Trek to Triund, visit Buddhist temples, and enjoy the vibrant café culture.', image: 'https://images.pexels.com/photos/2749656/pexels-photo-2749656.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Dalhousie', description: 'A charming hill station with Victorian-era architecture, pine-covered slopes, and the "Mini Switzerland" of Khajjiar.', image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Kasauli', description: 'A quiet colonial cantonment town with heritage churches, brewery tours, and Monkey Point offering panoramic Himalayan views.', image: 'https://images.pexels.com/photos/414746/pexels-photo-414746.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Khajjiar', description: 'Called the "Mini Switzerland of India," this lush meadow surrounded by cedar forests is perfect for horse riding, zorbing, and photography.', image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Bir Billing', description: 'Asia\'s highest paragliding site and a major center for meditation retreats. The flight from Billing to Bir offers spectacular valley views.', image: 'https://images.pexels.com/photos/2905570/pexels-photo-2905570.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ],
    aboutPackagesHeading: 'About Himachal Pradesh Packages',
    aboutPackagesParagraphs: [
      'Our Himachal packages cover the best hill stations, trekking trails, and spiritual retreats in Devbhoomi.',
      'All packages include hotel stays, meals, transport, sightseeing, and experienced local guides.',
    ],
    bestTime: [
      { period: 'March – June', description: 'Ideal weather for sightseeing and outdoor adventures.', type: 'sun', recommended: true },
      { period: 'October – November', description: 'Clear skies, autumn colors. Great for photography.', type: 'leaf' },
      { period: 'December – February', description: 'Snowfall in most hill stations. Perfect for snow lovers.', type: 'snow' },
    ],
    inclusions: ['Hotel accommodation', 'Daily breakfast', 'Daily dinner', 'Transport', 'Sightseeing', 'Trek support', 'Permits', 'Tour guide'],
    faq: [
      { q: 'What is the best time to visit Himachal?', a: 'March to June for pleasant weather, December to February for snow experiences.' },
      { q: 'Is Himachal Pradesh safe?', a: 'Yes, it\'s one of India\'s safest states with warm, hospitable locals and well-developed tourism infrastructure.' },
      { q: 'How to reach?', a: 'Fly to Dharamshala (Gaggal Airport) or Chandigarh. Buses and trains from Delhi are also convenient.' },
      { q: 'Can I do paragliding?', a: 'Yes! Bir Billing is Asia\'s highest paragliding site, and Solang Valley near Manali also offers paragliding.' },
      { q: 'What should I pack?', a: 'Warm layers, comfortable walking shoes, rain jacket, and sun protection.' },
      { q: 'Is trekking available?', a: 'Yes! Triund, Hampta Pass, Beas Kund, and many more treks are available for all difficulty levels.' },
      { q: 'Are there family-friendly options?', a: 'Absolutely! Dalhousie, Kasauli, and Dharamshala are excellent family destinations.' },
      { q: 'What food is famous?', a: 'Try Himachali dham, siddu, babru, tudkiya bhath, and madra — all traditional regional specialties.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // GUWAHATI & SHILLONG
  // ═══════════════════════════════════════════════════════════════════════════
  'guwahati-shillong': {
    slug: 'guwahati-shillong',
    name: 'Guwahati & Shillong',
    heroImage: 'https://images.pexels.com/photos/2907196/pexels-photo-2907196.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroTitle: 'Guwahati & Shillong Tour Packages 2026 | Northeast India',
    heroDescription: 'Discover the Scotland of the East with our customized Guwahati & Shillong tour packages. From the sacred Kamakhya Temple to the crystal-clear waters of Dawki River, misty Shillong Peak, and the living root bridges of Cherrapunji — experience the unexplored beauty of Northeast India.',
    packages: [
      { name: 'Guwahati and Shillong', duration: '6D / 5N', price: 22999, highlights: ['Kamakhya Temple', 'Shillong Peak', 'Elephant Falls', 'Dawki'] },
      { name: 'Guwahati & Kaziranga', duration: '5D / 4N', price: 21498, highlights: ['Kaziranga Safari', 'One-Horned Rhino', 'Kamakhya Temple'] },
      { name: 'Guwahati & Shillong', duration: '5D / 4N', price: 17390, highlights: ['Shillong Peak', 'Ward\'s Lake', 'Elephant Falls'] },
    ],
    featuredImage: { src: 'https://images.pexels.com/photos/2907196/pexels-photo-2907196.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Crystal-Clear Dawki River, Meghalaya' },
    aboutHeading: 'Guwahati & Shillong Tour',
    aboutParagraphs: [
      'Guwahati, the gateway to Northeast India, is a vibrant city on the banks of the Brahmaputra. Famous for the ancient Kamakhya Temple, Umananda Island, and bustling markets, it offers a rich cultural experience.',
      'Shillong, the capital of Meghalaya, is known as the "Scotland of the East" for its rolling hills, pine forests, and pleasant climate. Together with Cherrapunji\'s living root bridges and Dawki\'s crystal-clear river, this region is a paradise for nature lovers.',
    ],
    whyVisit: [
      { emoji: '🛕', text: 'Kamakhya Temple' },
      { emoji: '⛰️', text: 'Shillong Peak & Hills' },
      { emoji: '🌊', text: 'Crystal-clear Dawki River' },
      { emoji: '🌿', text: 'Living Root Bridges' },
      { emoji: '🦏', text: 'Kaziranga Wildlife Safari' },
      { emoji: '📸', text: 'Stunning Photography Spots' },
    ],
    placesToVisit: [
      { name: 'Kamakhya Temple', description: 'One of India\'s most sacred Shakti Peethas, perched on Nilachal Hill in Guwahati. The temple attracts pilgrims and tourists year-round with its ancient architecture and spiritual significance.', image: 'https://images.pexels.com/photos/2907196/pexels-photo-2907196.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Shillong Peak', description: 'The highest point of Shillong at 6,449 ft offering panoramic views of the city and surrounding hills. On clear days, you can see the plains of Bangladesh in the distance.', image: 'https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Dawki River', description: 'Famous for its crystal-clear turquoise waters where boats appear to float in mid-air. Located on the India-Bangladesh border, it\'s one of the most photographed spots in Northeast India.', image: 'https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Elephant Falls', description: 'A beautiful three-tiered waterfall near Shillong, surrounded by lush greenery. Named by the British after an elephant-shaped rock that once stood nearby.', image: 'https://images.pexels.com/photos/414746/pexels-photo-414746.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ],
    aboutPackagesHeading: 'About Guwahati & Shillong Tour Packages',
    aboutPackagesParagraphs: [
      'Our Northeast India packages cover Guwahati, Shillong, Cherrapunji, and optionally Kaziranga National Park. Each package includes comfortable stays, transfers, and guided sightseeing.',
      'Whether you want a spiritual journey to Kamakhya, a nature escape in Meghalaya\'s hills, or a wildlife safari in Kaziranga — we have the perfect itinerary for you.',
    ],
    bestTime: [
      { period: 'October – April', description: 'Best weather for sightseeing, clear skies, and pleasant temperatures. Ideal for exploring hills and waterfalls.', type: 'sun', recommended: true },
      { period: 'May – September', description: 'Monsoon season with heavy rainfall. Waterfalls at their best but roads can be challenging.', type: 'rain' },
    ],
    inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'Daily Dinner', 'Airport Transfers', 'Sightseeing Tours', 'Local Transportation', 'Tour Guide', 'Permit Assistance'],
    faq: [
      { q: 'What is the best time to visit Shillong?', a: 'October to April is the best time with pleasant weather and clear skies. Monsoon (June–September) brings heavy rain but the waterfalls are spectacular.' },
      { q: 'How to reach Guwahati?', a: 'Fly to Lokpriya Gopinath Bordoloi International Airport (Guwahati). Direct flights from Delhi, Mumbai, Kolkata, and Bangalore.' },
      { q: 'Is Kaziranga included?', a: 'Our "Guwahati & Kaziranga" package includes a jeep safari in Kaziranga National Park, home to the one-horned Indian rhinoceros.' },
      { q: 'How many days are enough?', a: 'We recommend 5–6 days to cover Guwahati, Shillong, Cherrapunji, and Dawki. Add 2 more days for Kaziranga.' },
      { q: 'Is Northeast India safe?', a: 'Yes, the region is very safe for tourists. The locals are warm and hospitable, and tourist infrastructure is well-developed.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // NAINITAL & JIM CORBETT (UTTARAKHAND)
  // ═══════════════════════════════════════════════════════════════════════════
  'nainital-corbett': {
    slug: 'nainital-corbett',
    name: 'Nainital & Jim Corbett',
    heroImage: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroTitle: 'Uttarakhand Tour Packages 2026 | Nainital, Corbett & Char Dham',
    heroDescription: 'Explore the divine land of Uttarakhand — from the serene lakes of Nainital and thrilling tiger safaris in Jim Corbett to the sacred Char Dham Yatra. Whether you seek adventure in Rishikesh, spirituality in Haridwar, or mountain tranquility, Uttarakhand has it all.',
    packages: [
      { name: 'Uttarakhand Rishikesh', duration: '5D / 4N', price: 17999, highlights: ['Rafting', 'Lakshman Jhula', 'Ganga Aarti', 'Yoga'] },
      { name: 'Uttrakhand Do Dham', duration: '8D / 7N', price: 37999, highlights: ['Kedarnath', 'Badrinath', 'Rishikesh', 'Haridwar'] },
      { name: 'Uttrakhand Char Dham', duration: '12D / 11N', price: 54999, highlights: ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'] },
      { name: 'Ek Dham Badrinath', duration: '6D / 5N', price: 26999, highlights: ['Badrinath Temple', 'Mana Village', 'Vasudhara Falls'] },
      { name: 'Haridwar', duration: '6D / 5N', price: 21999, highlights: ['Ganga Aarti', 'Har Ki Pauri', 'Mansa Devi', 'Chandi Devi'] },
      { name: 'Ek Dham Kedarnath', duration: '6D / 5N', price: 25999, highlights: ['Kedarnath Temple', 'Gaurikund', 'Trek', 'Rishikesh'] },
      { name: 'Uttarakhand Nainital-Corbett', duration: '6D / 5N', price: 22500, highlights: ['Naini Lake', 'Corbett Safari', 'Snow View', 'Bhimtal'] },
      { name: 'Haridwar Rishikesh Mussoorie', duration: '6D / 5N', price: 35599, highlights: ['Ganga Aarti', 'Rafting', 'Kempty Falls', 'Mall Road'] },
      { name: 'Nainital, Kausani & Corbett', duration: '6D / 5N', price: 32198, highlights: ['Naini Lake', 'Kausani Sunset', 'Corbett Safari'] },
      { name: 'Badrinath & Kedarnath Yatra', duration: '6D / 5N', price: 33900, highlights: ['Do Dham', 'Kedarnath Trek', 'Badrinath Darshan'] },
    ],
    featuredImage: { src: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Naini Lake — The Jewel of Kumaon' },
    aboutHeading: 'Uttarakhand Tour — Dev Bhoomi',
    aboutParagraphs: [
      'Uttarakhand, the "Land of Gods," is a treasure trove of natural beauty, spirituality, and adventure. From the sacred Char Dham circuit to the serene lakes of Nainital and thrilling wildlife safaris in Jim Corbett National Park, this state offers something for every traveler.',
      'Rishikesh is the adventure capital of India with river rafting and bungee jumping. Haridwar\'s Ganga Aarti is a soul-stirring experience. Mussoorie, the "Queen of Hills," offers colonial charm and stunning views.',
    ],
    whyVisit: [
      { emoji: '🛕', text: 'Sacred Char Dham Yatra' },
      { emoji: '🏞️', text: 'Naini Lake & Hill Stations' },
      { emoji: '🐅', text: 'Jim Corbett Tiger Safari' },
      { emoji: '🏄', text: 'River Rafting in Rishikesh' },
      { emoji: '🙏', text: 'Ganga Aarti at Haridwar' },
      { emoji: '⛰️', text: 'Himalayan Mountain Views' },
    ],
    placesToVisit: [
      { name: 'Nainital', description: 'A charming hill station built around the emerald Naini Lake. Famous for boating, the Mall Road, Snow View Point, and Naina Devi Temple. A perfect family getaway in the Kumaon hills.', image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Jim Corbett National Park', description: 'India\'s oldest national park and a premier tiger reserve. Enjoy jeep safaris through sal forests, spot Bengal tigers, elephants, and over 600 bird species in this wildlife paradise.', image: 'https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Rishikesh', description: 'The Yoga Capital of the World, set on the banks of the Ganges. Famous for Lakshman Jhula, Ram Jhula, river rafting, bungee jumping, and spiritual ashrams.', image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Haridwar', description: 'One of India\'s holiest cities, where the Ganges enters the plains. The evening Ganga Aarti at Har Ki Pauri is a mesmerizing spiritual experience not to be missed.', image: 'https://images.pexels.com/photos/2907196/pexels-photo-2907196.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Kedarnath & Badrinath', description: 'Two of the four sacred Char Dham shrines nestled high in the Himalayas. Kedarnath requires a scenic 16 km trek, while Badrinath is accessible by road with stunning mountain views.', image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ],
    aboutPackagesHeading: 'About Uttarakhand Tour Packages',
    aboutPackagesParagraphs: [
      'Our Uttarakhand packages cover the full spectrum — from pilgrimage tours (Char Dham, Do Dham, Ek Dham) to adventure trips (Rishikesh rafting) and leisure getaways (Nainital, Mussoorie).',
      'All packages include comfortable hotels, meals, transfers, and dedicated tour assistance. Pilgrimage packages include VIP darshan arrangements and helicopter options where available.',
    ],
    bestTime: [
      { period: 'March – June', description: 'Pleasant weather, ideal for hill stations and Char Dham Yatra. Perfect for family trips and sightseeing.', type: 'sun', recommended: true },
      { period: 'July – September', description: 'Monsoon season. Lush greenery but some roads may be affected. Char Dham routes may have disruptions.', type: 'rain' },
      { period: 'October – February', description: 'Cold winters with snowfall in higher areas. Great for Nainital and Mussoorie snow experiences.', type: 'snow' },
    ],
    inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'Daily Dinner', 'Transfers', 'Sightseeing', 'Safari Permits', 'Darshan Assistance', 'Driver Allowance'],
    faq: [
      { q: 'What is the best time for Char Dham Yatra?', a: 'May to June and September to October. The shrines are open from April/May to November. Monsoon (July–August) can cause road disruptions.' },
      { q: 'How many days for Nainital & Corbett?', a: 'We recommend 5–6 days to cover Nainital, Bhimtal, and a Corbett safari comfortably.' },
      { q: 'Is river rafting safe in Rishikesh?', a: 'Yes! Rafting is conducted by certified operators with safety gear. Grade 1–4 rapids are available for all experience levels.' },
      { q: 'Do I need permits for Jim Corbett?', a: 'Yes, safari permits are required and are included in our packages. We arrange jeep safari bookings in advance.' },
      { q: 'Can I do Kedarnath by helicopter?', a: 'Yes, helicopter services are available from Phata/Guptkashi to Kedarnath. We can arrange helicopter bookings at additional cost.' },
      { q: 'What is included in pilgrimage packages?', a: 'Hotel stays, meals, transfers, darshan assistance, and local guide. VIP darshan and helicopter options available on request.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MADHYA PRADESH
  // ═══════════════════════════════════════════════════════════════════════════
  'madhya-pradesh': {
    slug: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    heroImage: 'https://images.pexels.com/photos/5007839/pexels-photo-5007839.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroTitle: 'Madhya Pradesh Tour Packages 2026 | Heart of Incredible India',
    heroDescription: 'Explore the cultural heartland of India — ancient temples of Khajuraho, tiger trails of Bandhavgarh & Kanha, the holy city of Ujjain, the hill station of Pachmarhi, and the historic grandeur of Orchha & Sanchi.',
    packages: [
      { name: 'Ancient Temples to Tiger Trails', duration: '6D / 5N', price: 35125, highlights: ['Khajuraho', 'Bandhavgarh Safari', 'Orchha'] },
      { name: 'Wild Soul of India', duration: '8D / 7N', price: 37606, highlights: ['Kanha Safari', 'Bandhavgarh', 'Pench', 'Tigers'] },
      { name: 'Pachmarhi Weekend Getaway', duration: '3D / 2N', price: 11025, highlights: ['Bee Falls', 'Pandav Caves', 'Dhoopgarh'] },
      { name: 'Malwa', duration: '5D / 4N', price: 16538, highlights: ['Mandu', 'Indore', 'Omkareshwar', 'Maheshwar'] },
      { name: 'Mahakal Pilgrimage Weekend', duration: '2D / 1N', price: 5678, highlights: ['Mahakaleshwar', 'Ram Ghat', 'Ujjain Darshan'] },
      { name: 'Leisure and Wild', duration: '6D / 5N', price: 26116, highlights: ['Kanha', 'Pachmarhi', 'Nature Walks'] },
      { name: 'Heritage of Madhya Pradesh', duration: '5D / 4N', price: 21058, highlights: ['Sanchi Stupa', 'Bhimbetka', 'Bhopal', 'Orchha'] },
    ],
    featuredImage: { src: 'https://images.pexels.com/photos/5007839/pexels-photo-5007839.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Khajuraho Temples — UNESCO World Heritage' },
    aboutHeading: 'Madhya Pradesh — Heart of India',
    aboutParagraphs: [
      'Madhya Pradesh, the heart of India, is a treasure trove of history, wildlife, and spirituality. Home to three UNESCO World Heritage Sites — Khajuraho, Sanchi, and Bhimbetka — the state offers a cultural depth unmatched by any other.',
      'Wildlife enthusiasts flock to Bandhavgarh, Kanha, and Pench for tiger safaris, while pilgrims visit Ujjain\'s Mahakaleshwar Jyotirlinga. The hill station of Pachmarhi and the historic fort city of Orchha add diversity to every itinerary.',
    ],
    whyVisit: [
      { emoji: '🛕', text: 'Khajuraho & Sanchi Temples' },
      { emoji: '🐅', text: 'Tiger Safari in Bandhavgarh & Kanha' },
      { emoji: '🙏', text: 'Mahakaleshwar Jyotirlinga' },
      { emoji: '🏔️', text: 'Pachmarhi Hill Station' },
      { emoji: '🏰', text: 'Orchha & Mandu Forts' },
      { emoji: '🎨', text: 'Bhimbetka Rock Shelters' },
    ],
    placesToVisit: [
      { name: 'Khajuraho', description: 'UNESCO World Heritage Site famous for its stunning medieval temples adorned with intricate erotic sculptures. A masterpiece of Indian art and architecture dating back to the Chandela dynasty.', image: 'https://images.pexels.com/photos/5007839/pexels-photo-5007839.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Bandhavgarh National Park', description: 'One of India\'s best tiger reserves with the highest density of Bengal tigers. The park also features the ancient Bandhavgarh Fort and diverse wildlife including leopards, deer, and birds.', image: 'https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Ujjain', description: 'One of India\'s seven sacred cities, home to the Mahakaleshwar Jyotirlinga. The city hosts the grand Kumbh Mela and offers a deeply spiritual experience on the banks of the Shipra River.', image: 'https://images.pexels.com/photos/2907196/pexels-photo-2907196.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Pachmarhi', description: 'The only hill station in MP, known as "Satpura ki Rani." Surrounded by forests, waterfalls, caves, and viewpoints. Bee Falls, Pandav Caves, and Dhoopgarh sunset are must-visits.', image: 'https://images.pexels.com/photos/414746/pexels-photo-414746.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Orchha', description: 'A hidden gem on the banks of the Betwa River with magnificent Bundela-era palaces and cenotaphs. The Jehangir Mahal, Raja Mahal, and Ram Raja Temple are architectural marvels.', image: 'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ],
    aboutPackagesHeading: 'About Madhya Pradesh Tour Packages',
    aboutPackagesParagraphs: [
      'Our Madhya Pradesh packages range from weekend getaways to Pachmarhi and Ujjain, to week-long wildlife and heritage circuits covering Khajuraho, Bandhavgarh, Kanha, and Orchha.',
      'All packages include comfortable accommodation, meals, transfers, safari permits (where applicable), and experienced local guides.',
    ],
    bestTime: [
      { period: 'October – March', description: 'Pleasant weather ideal for sightseeing and wildlife safaris. Tiger spotting is best in the dry months of March–May.', type: 'sun', recommended: true },
      { period: 'April – June', description: 'Hot summers but excellent for tiger safaris as animals come to water holes. Best time for wildlife photography.', type: 'leaf' },
      { period: 'July – September', description: 'Monsoon brings lush greenery. Pachmarhi is beautiful but national parks are closed for the season.', type: 'rain' },
    ],
    inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'Daily Dinner', 'Transfers', 'Safari Permits', 'Sightseeing', 'Local Guide', 'Driver Allowance'],
    faq: [
      { q: 'What is the best time for tiger safari?', a: 'October to June when national parks are open. March to May offers the best tiger sighting probability as vegetation is thin and animals gather at water sources.' },
      { q: 'How to reach Madhya Pradesh?', a: 'Major airports in Bhopal, Indore, and Jabalpur. Well-connected by trains from Delhi, Mumbai, and other cities.' },
      { q: 'Is Khajuraho worth visiting?', a: 'Absolutely! The Khajuraho temples are a UNESCO World Heritage Site and one of India\'s most remarkable architectural achievements. Allow at least half a day.' },
      { q: 'Can I combine wildlife and heritage?', a: 'Yes! Our "Ancient Temples to Tiger Trails" package perfectly combines Khajuraho temples with Bandhavgarh tiger safari.' },
      { q: 'What is the Mahakal temple?', a: 'Mahakaleshwar in Ujjain is one of the 12 Jyotirlingas of Lord Shiva. The Bhasma Aarti at dawn is a unique spiritual experience.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // UTTARAKHAND CHARDHAM
  // ═══════════════════════════════════════════════════════════════════════════
  'chardham': {
    slug: 'chardham',
    name: 'Chardham Yatra',
    heroImage: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroTitle: 'Uttarakhand Chardham Yatra Packages 2026 | Sacred Pilgrimage',
    heroDescription: 'Embark on the holiest pilgrimage in Hinduism — the Char Dham Yatra covering Yamunotri, Gangotri, Kedarnath, and Badrinath. We also offer Do Dham, Ek Dham, and Uttarakhand adventure packages for every type of traveler.',
    packages: [
      { name: 'Uttarakhand Rishikesh', duration: '5D / 4N', price: 17999, highlights: ['Rafting', 'Lakshman Jhula', 'Ganga Aarti', 'Yoga'] },
      { name: 'Uttrakhand Do Dham', duration: '8D / 7N', price: 37999, highlights: ['Kedarnath', 'Badrinath', 'Rishikesh', 'Haridwar'] },
      { name: 'Uttrakhand Char Dham', duration: '12D / 11N', price: 54999, highlights: ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'] },
      { name: 'Ek Dham Badrinath', duration: '6D / 5N', price: 26999, highlights: ['Badrinath Temple', 'Mana Village', 'Vasudhara Falls'] },
      { name: 'Haridwar', duration: '6D / 5N', price: 21999, highlights: ['Ganga Aarti', 'Har Ki Pauri', 'Mansa Devi', 'Chandi Devi'] },
      { name: 'Ek Dham Kedarnath', duration: '6D / 5N', price: 25999, highlights: ['Kedarnath Temple', 'Gaurikund', 'Trek', 'Rishikesh'] },
      { name: 'Uttarakhand Nainital-Corbett', duration: '6D / 5N', price: 22500, highlights: ['Naini Lake', 'Corbett Safari', 'Snow View', 'Bhimtal'] },
      { name: 'Haridwar Rishikesh Mussoorie', duration: '6D / 5N', price: 35599, highlights: ['Ganga Aarti', 'Rafting', 'Kempty Falls', 'Mall Road'] },
      { name: 'Nainital, Kausani & Corbett', duration: '6D / 5N', price: 32198, highlights: ['Naini Lake', 'Kausani Sunset', 'Corbett Safari'] },
      { name: 'Badrinath & Kedarnath Yatra', duration: '6D / 5N', price: 33900, highlights: ['Do Dham', 'Kedarnath Trek', 'Badrinath Darshan'] },
    ],
    featuredImage: { src: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Kedarnath Temple — Sacred Himalayan Shrine' },
    aboutHeading: 'Chardham Yatra — The Sacred Circuit',
    aboutParagraphs: [
      'The Char Dham Yatra is Hinduism\'s most sacred pilgrimage, covering four divine shrines — Yamunotri, Gangotri, Kedarnath, and Badrinath — nestled high in the Garhwal Himalayas of Uttarakhand.',
      'Beyond pilgrimage, Uttarakhand offers adventure in Rishikesh, spirituality in Haridwar, hill station charm in Mussoorie and Nainital, and wildlife safaris in Jim Corbett National Park.',
    ],
    whyVisit: [
      { emoji: '🙏', text: 'Sacred Char Dham Circuit' },
      { emoji: '🛕', text: 'Kedarnath & Badrinath Temples' },
      { emoji: '🕉️', text: 'Ganga Aarti at Haridwar' },
      { emoji: '🏄', text: 'River Rafting in Rishikesh' },
      { emoji: '⛰️', text: 'Himalayan Mountain Views' },
      { emoji: '🐅', text: 'Jim Corbett Tiger Safari' },
    ],
    placesToVisit: [
      { name: 'Kedarnath', description: 'One of the holiest Shiva temples, perched at 3,583 m in the Himalayas. The trek from Gaurikund (16 km) through stunning mountain scenery is a transformative spiritual experience.', image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Badrinath', description: 'The sacred abode of Lord Vishnu, situated between the Nar and Narayan mountain ranges. The temple and nearby Mana Village (last Indian village before Tibet) are must-visits.', image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Haridwar', description: 'One of India\'s seven holiest cities, where the Ganges enters the plains. The evening Ganga Aarti at Har Ki Pauri is a mesmerizing spiritual spectacle not to be missed.', image: 'https://images.pexels.com/photos/2907196/pexels-photo-2907196.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Rishikesh', description: 'The Yoga Capital of the World and Adventure Capital of India. Famous for river rafting, bungee jumping, Lakshman Jhula, and peaceful ashrams on the banks of the Ganges.', image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Yamunotri & Gangotri', description: 'The source shrines of the sacred Yamuna and Ganga rivers. Yamunotri features hot springs and a beautiful trek, while Gangotri offers stunning glacier views and the revered Gangotri Temple.', image: 'https://images.pexels.com/photos/414746/pexels-photo-414746.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ],
    aboutPackagesHeading: 'About Chardham & Uttarakhand Packages',
    aboutPackagesParagraphs: [
      'We offer the full spectrum of Uttarakhand tours — from the complete Char Dham circuit (12 days) to shorter Do Dham and Ek Dham options. Adventure seekers can choose Rishikesh packages, and nature lovers can explore Nainital and Corbett.',
      'All pilgrimage packages include comfortable accommodation, meals, transfers, darshan assistance, and experienced guides. Helicopter options are available for Kedarnath.',
    ],
    bestTime: [
      { period: 'May – June', description: 'Char Dham portals open. Best weather for the yatra with pleasant temperatures and clear skies.', type: 'sun', recommended: true },
      { period: 'September – October', description: 'Post-monsoon clarity. Less crowded and beautiful autumn colors. Last chance before portals close in November.', type: 'leaf' },
      { period: 'July – August', description: 'Monsoon season. Heavy rainfall can cause landslides and road disruptions. Not recommended for Char Dham.', type: 'rain' },
    ],
    inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'Daily Dinner', 'Transfers', 'Darshan Assistance', 'Sightseeing', 'Local Guide', 'Driver Allowance', 'Toll & Parking', 'Permit Assistance'],
    faq: [
      { q: 'When do Char Dham portals open?', a: 'Portals open in April/May (exact dates decided by priests) and close in October/November after Diwali. Plan between May and October.' },
      { q: 'Is helicopter available for Kedarnath?', a: 'Yes, helicopter services operate from Phata, Guptkashi, and Sirsi. We can arrange bookings at additional cost.' },
      { q: 'How difficult is the Kedarnath trek?', a: 'The 16 km trek from Gaurikund is moderate. Ponies, palkis (palanquins), and helicopter services are available for those who prefer not to trek.' },
      { q: 'Can I do just Kedarnath or Badrinath?', a: 'Yes! We offer Ek Dham packages for both Kedarnath and Badrinath individually, as well as Do Dham (both together).' },
      { q: 'What should I pack?', a: 'Warm layers, rain jacket, comfortable trekking shoes, medicines for altitude, and religious offerings. We provide a detailed packing list upon booking.' },
      { q: 'Is Rishikesh rafting safe?', a: 'Yes! Rafting is conducted by certified operators with full safety gear. Grade 1–4 rapids available for all levels.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // KEDARNATH & RISHIKESH
  // ═══════════════════════════════════════════════════════════════════════════
  'kedarnath-rishikesh': {
    slug: 'kedarnath-rishikesh',
    name: 'Kedarnath & Rishikesh',
    heroImage: 'https://images.pexels.com/photos/2905570/pexels-photo-2905570.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroTitle: 'Kedarnath & Rishikesh Tour Packages 2026 | Pilgrimage & Adventure',
    heroDescription: 'Experience the divine energy of Kedarnath Temple and the thrilling adventure of Rishikesh. From the sacred trek to Lord Shiva\'s abode to river rafting on the Ganges, our packages offer the perfect blend of spirituality and adventure in Uttarakhand.',
    packages: [
      { name: 'Uttarakhand Rishikesh', duration: '5D / 4N', price: 17999, highlights: ['Rafting', 'Lakshman Jhula', 'Ganga Aarti', 'Yoga'] },
      { name: 'Uttrakhand Do Dham', duration: '8D / 7N', price: 37999, highlights: ['Kedarnath', 'Badrinath', 'Rishikesh', 'Haridwar'] },
      { name: 'Uttarakhand Char Dham', duration: '12D / 11N', price: 54999, highlights: ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'] },
      { name: 'Ek Dham Badrinath', duration: '6D / 5N', price: 26999, highlights: ['Badrinath Temple', 'Mana Village', 'Vasudhara Falls'] },
      { name: 'Haridwar', duration: '6D / 5N', price: 21999, highlights: ['Ganga Aarti', 'Har Ki Pauri', 'Mansa Devi', 'Chandi Devi'] },
      { name: 'Ek Dham Kedarnath', duration: '6D / 5N', price: 25999, highlights: ['Kedarnath Temple', 'Gaurikund', 'Trek', 'Rishikesh'] },
      { name: 'Uttarakhand Nainital-Corbett', duration: '6D / 5N', price: 22500, highlights: ['Naini Lake', 'Corbett Safari', 'Snow View', 'Bhimtal'] },
      { name: 'Haridwar Rishikesh Mussoorie', duration: '6D / 5N', price: 35599, highlights: ['Ganga Aarti', 'Rafting', 'Kempty Falls', 'Mall Road'] },
      { name: 'Nainital, Kausani & Corbett', duration: '6D / 5N', price: 32198, highlights: ['Naini Lake', 'Kausani Sunset', 'Corbett Safari'] },
      { name: 'Badrinath & Kedarnath Yatra', duration: '6D / 5N', price: 33900, highlights: ['Do Dham', 'Kedarnath Trek', 'Badrinath Darshan'] },
    ],
    featuredImage: { src: 'https://images.pexels.com/photos/2905570/pexels-photo-2905570.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Kedarnath Temple at Dawn' },
    aboutHeading: 'Kedarnath & Rishikesh Tour',
    aboutParagraphs: [
      'Kedarnath, one of the 12 Jyotirlingas of Lord Shiva, sits at 3,583 m in the Garhwal Himalayas. The 16 km trek from Gaurikund through breathtaking mountain scenery is a transformative spiritual journey undertaken by lakhs of devotees every year.',
      'Rishikesh, the Yoga Capital of the World, offers a unique blend of spirituality and adventure. From the soul-stirring Ganga Aarti at Triveni Ghat to heart-pumping river rafting and bungee jumping, Rishikesh has something for everyone.',
    ],
    whyVisit: [
      { emoji: '🙏', text: 'Sacred Kedarnath Jyotirlinga' },
      { emoji: '🏄', text: 'River Rafting in Rishikesh' },
      { emoji: '🕉️', text: 'Ganga Aarti Experience' },
      { emoji: '🥾', text: 'Scenic Himalayan Treks' },
      { emoji: '🧘', text: 'Yoga & Meditation Ashrams' },
      { emoji: '⛰️', text: 'Stunning Mountain Views' },
    ],
    placesToVisit: [
      { name: 'Kedarnath Temple', description: 'One of the holiest Shiva temples, perched at 3,583 m in the Himalayas. The trek from Gaurikund through stunning mountain scenery is a once-in-a-lifetime spiritual experience. Helicopter services also available.', image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Rishikesh', description: 'The Yoga Capital of the World, set on the banks of the sacred Ganges. Famous for Lakshman Jhula, Ram Jhula, river rafting, bungee jumping, and spiritual ashrams.', image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Haridwar', description: 'One of India\'s seven holiest cities where the Ganges enters the plains. The evening Ganga Aarti at Har Ki Pauri is a mesmerizing spiritual spectacle.', image: 'https://images.pexels.com/photos/2907196/pexels-photo-2907196.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Badrinath', description: 'The sacred abode of Lord Vishnu between the Nar and Narayan mountain ranges. Visit the ancient temple and nearby Mana Village — the last Indian village before Tibet.', image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ],
    aboutPackagesHeading: 'About Kedarnath & Rishikesh Packages',
    aboutPackagesParagraphs: [
      'Our packages cover the entire Uttarakhand spiritual and adventure spectrum — from the sacred Char Dham Yatra to weekend Rishikesh rafting trips. Choose Ek Dham for a focused pilgrimage, or combine Do Dham and Char Dham for the full circuit.',
      'All packages include comfortable accommodation, meals, transfers, darshan assistance, and experienced guides. Helicopter options are available for Kedarnath at additional cost.',
    ],
    bestTime: [
      { period: 'May – June', description: 'Kedarnath portals open. Best weather for trekking and pilgrimage with pleasant temperatures.', type: 'sun', recommended: true },
      { period: 'September – October', description: 'Post-monsoon clarity with fewer crowds. Beautiful autumn colors and clear Himalayan views.', type: 'leaf' },
      { period: 'July – August', description: 'Monsoon season with heavy rainfall. Not recommended for Kedarnath due to landslide risk.', type: 'rain' },
    ],
    inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'Daily Dinner', 'Transfers', 'Darshan Assistance', 'Sightseeing', 'Local Guide', 'Driver Allowance', 'Toll & Parking', 'Permit Assistance'],
    faq: [
      { q: 'How difficult is the Kedarnath trek?', a: 'The 16 km trek from Gaurikund is moderate difficulty. Ponies, palkis (palanquins), and helicopter services are available for those who prefer not to trek.' },
      { q: 'Is helicopter available for Kedarnath?', a: 'Yes, helicopter services operate from Phata, Guptkashi, and Sirsi to Kedarnath. We can arrange bookings at additional cost.' },
      { q: 'When does Kedarnath temple open?', a: 'Kedarnath portals open in April/May (exact date decided by priests) and close in October/November after Diwali.' },
      { q: 'Is Rishikesh rafting safe?', a: 'Yes! Rafting is conducted by certified operators with full safety gear. Grade 1–4 rapids are available for all experience levels.' },
      { q: 'Can I combine Kedarnath and Badrinath?', a: 'Yes! Our Do Dham package covers both Kedarnath and Badrinath in 8 days with comfortable stays and transfers.' },
      { q: 'What should I pack for Kedarnath?', a: 'Warm layers, rain jacket, comfortable trekking shoes, medicines for altitude, water bottle, and religious offerings.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BADRINATH
  // ═══════════════════════════════════════════════════════════════════════════
  'badrinath': {
    slug: 'badrinath',
    name: 'Badrinath',
    heroImage: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroTitle: 'Badrinath Tour Packages 2026 | Sacred Abode of Lord Vishnu',
    heroDescription: 'Visit one of India\'s holiest shrines — Badrinath Dham, nestled between the Nar and Narayan mountain ranges. Explore Mana Village, Vasudhara Falls, and Tapt Kund on this divine Himalayan pilgrimage.',
    packages: [
      { name: 'Uttarakhand Rishikesh', duration: '5D / 4N', price: 17999, highlights: ['Rafting', 'Lakshman Jhula', 'Ganga Aarti', 'Yoga'] },
      { name: 'Uttarakhand Do Dham', duration: '8D / 7N', price: 37999, highlights: ['Kedarnath', 'Badrinath', 'Rishikesh', 'Haridwar'] },
      { name: 'Uttarakhand Char Dham', duration: '12D / 11N', price: 54999, highlights: ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'] },
      { name: 'Ek Dham Badrinath', duration: '6D / 5N', price: 26999, highlights: ['Badrinath Temple', 'Mana Village', 'Vasudhara Falls'] },
      { name: 'Haridwar', duration: '6D / 5N', price: 21999, highlights: ['Ganga Aarti', 'Har Ki Pauri', 'Mansa Devi', 'Chandi Devi'] },
      { name: 'Ek Dham Kedarnath', duration: '6D / 5N', price: 25999, highlights: ['Kedarnath Temple', 'Gaurikund', 'Trek', 'Rishikesh'] },
      { name: 'Uttarakhand Nainital–Corbett', duration: '6D / 5N', price: 22500, highlights: ['Naini Lake', 'Corbett Safari', 'Snow View', 'Bhimtal'] },
      { name: 'Haridwar, Rishikesh & Mussoorie', duration: '6D / 5N', price: 35599, highlights: ['Ganga Aarti', 'Rafting', 'Kempty Falls', 'Mall Road'] },
      { name: 'Nainital, Kausani & Corbett', duration: '6D / 5N', price: 32198, highlights: ['Naini Lake', 'Kausani Sunset', 'Corbett Safari'] },
      { name: 'Badrinath & Kedarnath Yatra', duration: '6D / 5N', price: 33900, highlights: ['Do Dham', 'Kedarnath Trek', 'Badrinath Darshan'] },
    ],
    featuredImage: { src: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Badrinath Temple — Abode of Lord Vishnu' },
    aboutHeading: 'Badrinath Dham — Abode of Lord Vishnu',
    aboutParagraphs: [
      'Badrinath, one of the four Char Dhams, is dedicated to Lord Vishnu and sits at 3,133 m in the Garhwal Himalayas. The ancient temple is flanked by the majestic Nar and Narayan peaks and the holy Alaknanda River.',
      'Nearby Mana Village is India\'s last inhabited village before the Tibetan border. Visitors can explore Vasudhara Falls, Tapt Kund hot springs, and the mythical Vyas Gufa where Ved Vyas is believed to have composed the Mahabharata.',
    ],
    whyVisit: [
      { emoji: '🛕', text: 'Badrinath Temple Darshan' },
      { emoji: '🏔️', text: 'Mana — Last Indian Village' },
      { emoji: '🌊', text: 'Vasudhara Falls' },
      { emoji: '♨️', text: 'Tapt Kund Hot Springs' },
      { emoji: '📖', text: 'Vyas Gufa — Mahabharata Cave' },
      { emoji: '⛰️', text: 'Himalayan Mountain Views' },
    ],
    placesToVisit: [
      { name: 'Badrinath Temple', description: 'One of the four Char Dhams and one of 108 Divya Desams of Lord Vishnu. The colorful temple against snow-capped peaks is an iconic sight. VIP darshan arrangements available.', image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Mana Village', description: 'India\'s last village before the Tibetan border. Visit Vyas Gufa, Ganesh Gufa, Bheem Pul (natural rock bridge), and Saraswati River origin. A fascinating cultural experience.', image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Vasudhara Falls', description: 'A magnificent 400-ft waterfall about 5 km from Mana Village. Legend says the water does not touch sinners. The trek offers stunning views of Himalayan peaks.', image: 'https://images.pexels.com/photos/414746/pexels-photo-414746.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ],
    aboutPackagesHeading: 'About Badrinath Tour Packages',
    aboutPackagesParagraphs: [
      'Our Badrinath packages range from focused Ek Dham trips to comprehensive Char Dham circuits. All packages include comfortable stays, meals, transfers, and darshan assistance.',
      'We also offer combined packages with Kedarnath (Do Dham), Rishikesh adventure, and Nainital leisure — covering the full Uttarakhand experience.',
    ],
    bestTime: [
      { period: 'May – June', description: 'Badrinath portals open. Best weather with pleasant days and clear mountain views.', type: 'sun', recommended: true },
      { period: 'September – October', description: 'Post-monsoon clarity. Fewer crowds and beautiful autumn colors before portals close.', type: 'leaf' },
      { period: 'July – August', description: 'Monsoon with heavy rain. Roads may be affected. Not ideal for the yatra.', type: 'rain' },
    ],
    inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'Daily Dinner', 'Transfers', 'Darshan Assistance', 'Sightseeing', 'Local Guide', 'Driver Allowance', 'Toll & Parking', 'Permit Assistance'],
    faq: [
      { q: 'When does Badrinath temple open?', a: 'Portals open in April/May and close in October/November. Exact dates are decided by the temple committee.' },
      { q: 'How to reach Badrinath?', a: 'Drive from Haridwar/Rishikesh via Joshimath (300 km). Nearest airport is Jolly Grant, Dehradun.' },
      { q: 'Can I combine Badrinath and Kedarnath?', a: 'Yes! Our Do Dham package covers both shrines in 8 days with comfortable transfers.' },
      { q: 'Is the road to Badrinath safe?', a: 'The road is well-maintained but mountainous. Our experienced drivers ensure safe travel. Avoid monsoon months for best road conditions.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // KEDARNATH
  // ═══════════════════════════════════════════════════════════════════════════
  'kedarnath': {
    slug: 'kedarnath',
    name: 'Kedarnath',
    heroImage: 'https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroTitle: 'Kedarnath Tour Packages 2026 | Mahadev Ka Dham',
    heroDescription: 'Trek to one of the 12 Jyotirlingas of Lord Shiva at 3,583 m in the Garhwal Himalayas. The 16 km trek from Gaurikund through breathtaking mountain scenery is a transformative spiritual experience.',
    packages: [
      { name: 'Uttarakhand Rishikesh', duration: '5D / 4N', price: 17999, highlights: ['Rafting', 'Lakshman Jhula', 'Ganga Aarti', 'Yoga'] },
      { name: 'Uttarakhand Do Dham', duration: '8D / 7N', price: 37999, highlights: ['Kedarnath', 'Badrinath', 'Rishikesh', 'Haridwar'] },
      { name: 'Uttarakhand Char Dham', duration: '12D / 11N', price: 54999, highlights: ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'] },
      { name: 'Ek Dham Badrinath', duration: '6D / 5N', price: 26999, highlights: ['Badrinath Temple', 'Mana Village', 'Vasudhara Falls'] },
      { name: 'Haridwar', duration: '6D / 5N', price: 21999, highlights: ['Ganga Aarti', 'Har Ki Pauri', 'Mansa Devi', 'Chandi Devi'] },
      { name: 'Ek Dham Kedarnath', duration: '6D / 5N', price: 25999, highlights: ['Kedarnath Temple', 'Gaurikund', 'Trek', 'Rishikesh'] },
      { name: 'Uttarakhand Nainital–Corbett', duration: '6D / 5N', price: 22500, highlights: ['Naini Lake', 'Corbett Safari', 'Snow View', 'Bhimtal'] },
      { name: 'Haridwar, Rishikesh & Mussoorie', duration: '6D / 5N', price: 35599, highlights: ['Ganga Aarti', 'Rafting', 'Kempty Falls', 'Mall Road'] },
      { name: 'Nainital, Kausani & Corbett', duration: '6D / 5N', price: 32198, highlights: ['Naini Lake', 'Kausani Sunset', 'Corbett Safari'] },
      { name: 'Badrinath & Kedarnath Yatra', duration: '6D / 5N', price: 33900, highlights: ['Do Dham', 'Kedarnath Trek', 'Badrinath Darshan'] },
    ],
    featuredImage: { src: 'https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Kedarnath Temple — Jyotirlinga of Lord Shiva' },
    aboutHeading: 'Kedarnath Dham — Mahadev Ka Dham',
    aboutParagraphs: [
      'Kedarnath, one of the 12 Jyotirlingas, is among Hinduism\'s holiest shrines. The ancient stone temple sits at 3,583 m surrounded by snow-capped peaks, with the Mandakini River flowing nearby.',
      'The 16 km trek from Gaurikund takes you through stunning Himalayan landscapes. For those who prefer not to trek, ponies, palkis, and helicopter services are available.',
    ],
    whyVisit: [
      { emoji: '🙏', text: 'Kedarnath Jyotirlinga' },
      { emoji: '🥾', text: '16 km Himalayan Trek' },
      { emoji: '🚁', text: 'Helicopter Services' },
      { emoji: '❄️', text: 'Snow-Capped Peaks' },
      { emoji: '🏞️', text: 'Chorabari & Vasuki Tal' },
      { emoji: '⛰️', text: 'Gaurikund & Bhairav Temple' },
    ],
    placesToVisit: [
      { name: 'Kedarnath Temple', description: 'One of the 12 Jyotirlingas of Lord Shiva, perched at 3,583 m. The ancient stone temple has survived centuries of natural calamities and stands as a testament to faith and architecture.', image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Gaurikund', description: 'The starting point of the Kedarnath trek and a sacred hot spring where Goddess Parvati is believed to have meditated. Also the base camp for the pilgrimage.', image: 'https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Chorabari Tal (Gandhi Sarovar)', description: 'A glacial lake at 3,900 m, about 1 km from Kedarnath Temple. The pristine lake surrounded by snow peaks is a rewarding side trek for adventurous pilgrims.', image: 'https://images.pexels.com/photos/414746/pexels-photo-414746.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ],
    aboutPackagesHeading: 'About Kedarnath Tour Packages',
    aboutPackagesParagraphs: [
      'Choose from Ek Dham Kedarnath for a focused pilgrimage, Do Dham to combine with Badrinath, or the full Char Dham circuit. Adventure lovers can add Rishikesh rafting.',
      'All packages include accommodation, meals, transfers, trek/helicopter assistance, and experienced guides who know the terrain well.',
    ],
    bestTime: [
      { period: 'May – June', description: 'Portals open. Best weather for the trek with pleasant days and manageable cold nights.', type: 'sun', recommended: true },
      { period: 'September – October', description: 'Post-monsoon with fewer crowds. Clear skies and stunning autumn views.', type: 'leaf' },
      { period: 'July – August', description: 'Monsoon. Heavy rain and landslide risk. Trek not recommended.', type: 'rain' },
    ],
    inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'Daily Dinner', 'Transfers', 'Darshan Assistance', 'Sightseeing', 'Local Guide', 'Driver Allowance', 'Toll & Parking', 'Permit Assistance'],
    faq: [
      { q: 'How difficult is the Kedarnath trek?', a: 'The 16 km trek from Gaurikund is moderate. Ponies, palkis, and helicopter services are available.' },
      { q: 'Is helicopter available?', a: 'Yes, helicopter services from Phata, Guptkashi, and Sirsi. We arrange bookings at additional cost.' },
      { q: 'When does the temple open?', a: 'Portals open in April/May and close in October/November after Diwali.' },
      { q: 'What should I pack?', a: 'Warm layers, rain jacket, trekking shoes, altitude medicine, water bottle, and religious offerings.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // UTTARAKHAND DO DHAM
  // ═══════════════════════════════════════════════════════════════════════════
  'do-dham': {
    slug: 'do-dham',
    name: 'Do Dham Yatra',
    heroImage: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroTitle: 'Do Dham Yatra Packages 2026 | Kedarnath & Badrinath',
    heroDescription: 'Combine two of India\'s most sacred Dhams — Kedarnath and Badrinath — in one divine yatra through the majestic Garhwal Himalayas. Our packages include comfortable stays, transfers, darshan assistance, and experienced guides.',
    packages: [
      { name: 'Uttarakhand Rishikesh', duration: '5D / 4N', price: 17999, highlights: ['Rafting', 'Lakshman Jhula', 'Ganga Aarti', 'Yoga'] },
      { name: 'Uttarakhand Do Dham', duration: '8D / 7N', price: 37999, highlights: ['Kedarnath', 'Badrinath', 'Rishikesh', 'Haridwar'] },
      { name: 'Uttarakhand Char Dham', duration: '12D / 11N', price: 54999, highlights: ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'] },
      { name: 'Ek Dham Badrinath', duration: '6D / 5N', price: 26999, highlights: ['Badrinath Temple', 'Mana Village', 'Vasudhara Falls'] },
      { name: 'Haridwar', duration: '6D / 5N', price: 21999, highlights: ['Ganga Aarti', 'Har Ki Pauri', 'Mansa Devi', 'Chandi Devi'] },
      { name: 'Ek Dham Kedarnath', duration: '6D / 5N', price: 25999, highlights: ['Kedarnath Temple', 'Gaurikund', 'Trek', 'Rishikesh'] },
      { name: 'Uttarakhand Nainital–Corbett', duration: '6D / 5N', price: 22500, highlights: ['Naini Lake', 'Corbett Safari', 'Snow View', 'Bhimtal'] },
      { name: 'Haridwar, Rishikesh & Mussoorie', duration: '6D / 5N', price: 35599, highlights: ['Ganga Aarti', 'Rafting', 'Kempty Falls', 'Mall Road'] },
      { name: 'Nainital, Kausani & Corbett', duration: '6D / 5N', price: 32198, highlights: ['Naini Lake', 'Kausani Sunset', 'Corbett Safari'] },
      { name: 'Badrinath & Kedarnath Yatra', duration: '6D / 5N', price: 33900, highlights: ['Do Dham', 'Kedarnath Trek', 'Badrinath Darshan'] },
    ],
    featuredImage: { src: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Do Dham — Twin Sacred Shrines of Uttarakhand' },
    aboutHeading: 'Do Dham Yatra — Kedarnath & Badrinath',
    aboutParagraphs: [
      'The Do Dham Yatra combines the two most important Char Dham shrines — Kedarnath (Lord Shiva) and Badrinath (Lord Vishnu) — into a single powerful pilgrimage through the Garhwal Himalayas.',
      'Starting from Haridwar or Rishikesh, the journey takes you through scenic mountain passes, holy confluences at Devprayag and Rudraprayag, and the spiritual energy of two ancient Himalayan temples.',
    ],
    whyVisit: [
      { emoji: '🙏', text: 'Kedarnath & Badrinath Darshan' },
      { emoji: '🛕', text: 'Two Dhams in One Yatra' },
      { emoji: '⛰️', text: 'Garhwal Himalayan Scenery' },
      { emoji: '🌊', text: 'Holy Confluences (Prayags)' },
      { emoji: '🚁', text: 'Helicopter Option for Kedarnath' },
      { emoji: '🕉️', text: 'Deep Spiritual Experience' },
    ],
    placesToVisit: [
      { name: 'Kedarnath Temple', description: 'One of the 12 Jyotirlingas of Lord Shiva at 3,583 m. The 16 km trek from Gaurikund is a transformative spiritual experience. Helicopter services also available.', image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Badrinath Temple', description: 'Sacred abode of Lord Vishnu between the Nar and Narayan peaks. Explore Mana Village, Vasudhara Falls, and Tapt Kund hot springs.', image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Devprayag', description: 'The sacred confluence of the Bhagirathi and Alaknanda rivers, forming the holy Ganges. A visually stunning and spiritually significant stop on the yatra.', image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Rishikesh & Haridwar', description: 'Start and end your yatra in these sacred cities. Experience Ganga Aarti, river rafting, yoga ashrams, and the spiritual energy of the Ganges.', image: 'https://images.pexels.com/photos/2907196/pexels-photo-2907196.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ],
    aboutPackagesHeading: 'About Do Dham Yatra Packages',
    aboutPackagesParagraphs: [
      'Our Do Dham package covers Kedarnath and Badrinath in 8 days with comfortable stays at each stop, meals, transfers, and darshan assistance.',
      'We also offer the full Char Dham (12 days), individual Ek Dham packages, and adventure add-ons like Rishikesh rafting.',
    ],
    bestTime: [
      { period: 'May – June', description: 'Both temple portals open. Best weather for the yatra with clear skies and pleasant temperatures.', type: 'sun', recommended: true },
      { period: 'September – October', description: 'Post-monsoon clarity. Fewer crowds and beautiful autumn scenery. Last window before portals close.', type: 'leaf' },
      { period: 'July – August', description: 'Monsoon. Heavy rain, landslide risk. Not recommended for Do Dham Yatra.', type: 'rain' },
    ],
    inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'Daily Dinner', 'Transfers', 'Darshan Assistance', 'Sightseeing', 'Local Guide', 'Driver Allowance', 'Toll & Parking', 'Permit Assistance'],
    faq: [
      { q: 'How many days for Do Dham?', a: 'We recommend 8 days / 7 nights to cover both Kedarnath and Badrinath comfortably with Haridwar/Rishikesh.' },
      { q: 'Which Dham is visited first?', a: 'Typically Kedarnath first (via Guptkashi/Gaurikund), then Badrinath (via Joshimath). The route is optimized for smooth travel.' },
      { q: 'Is helicopter available?', a: 'Yes, for the Kedarnath leg. Helicopter services from Phata/Guptkashi are available at additional cost.' },
      { q: 'Can I extend to Char Dham?', a: 'Yes! Add Yamunotri and Gangotri for the complete Char Dham circuit (12 days).' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // HARIDWAR
  // ═══════════════════════════════════════════════════════════════════════════
  'haridwar': {
    slug: 'haridwar',
    name: 'Haridwar',
    heroImage: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroTitle: 'Haridwar Tour Packages 2026 | Gateway to the Gods',
    heroDescription: 'Witness the mesmerizing Ganga Aarti at Har Ki Pauri, bathe in the holy waters of the Ganges, and explore one of India\'s seven sacred cities. Haridwar is the gateway to Uttarakhand\'s pilgrimage and adventure destinations.',
    packages: [
      { name: 'Uttarakhand Rishikesh', duration: '5D / 4N', price: 17999, highlights: ['Rafting', 'Lakshman Jhula', 'Ganga Aarti', 'Yoga'] },
      { name: 'Uttarakhand Do Dham', duration: '8D / 7N', price: 37999, highlights: ['Kedarnath', 'Badrinath', 'Rishikesh', 'Haridwar'] },
      { name: 'Uttarakhand Char Dham', duration: '12D / 11N', price: 54999, highlights: ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'] },
      { name: 'Ek Dham Badrinath', duration: '6D / 5N', price: 26999, highlights: ['Badrinath Temple', 'Mana Village', 'Vasudhara Falls'] },
      { name: 'Haridwar', duration: '6D / 5N', price: 21999, highlights: ['Ganga Aarti', 'Har Ki Pauri', 'Mansa Devi', 'Chandi Devi'] },
      { name: 'Ek Dham Kedarnath', duration: '6D / 5N', price: 25999, highlights: ['Kedarnath Temple', 'Gaurikund', 'Trek', 'Rishikesh'] },
      { name: 'Uttarakhand Nainital–Corbett', duration: '6D / 5N', price: 22500, highlights: ['Naini Lake', 'Corbett Safari', 'Snow View', 'Bhimtal'] },
      { name: 'Haridwar, Rishikesh & Mussoorie', duration: '6D / 5N', price: 35599, highlights: ['Ganga Aarti', 'Rafting', 'Kempty Falls', 'Mall Road'] },
      { name: 'Nainital, Kausani & Corbett', duration: '6D / 5N', price: 32198, highlights: ['Naini Lake', 'Kausani Sunset', 'Corbett Safari'] },
      { name: 'Badrinath & Kedarnath Yatra', duration: '6D / 5N', price: 33900, highlights: ['Do Dham', 'Kedarnath Trek', 'Badrinath Darshan'] },
    ],
    featuredImage: { src: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Ganga Aarti at Har Ki Pauri, Haridwar' },
    aboutHeading: 'Haridwar — Gateway to the Gods',
    aboutParagraphs: [
      'Haridwar, one of India\'s seven holiest cities, is where the sacred Ganges descends from the Himalayas into the plains. The city is a vibrant center of Hindu spirituality, with ancient temples, ashrams, and the world-famous Ganga Aarti at Har Ki Pauri.',
      'As the gateway to Uttarakhand\'s pilgrimage circuit, Haridwar connects to Rishikesh, Mussoorie, Kedarnath, Badrinath, and the Char Dham route. It\'s also a starting point for Rajaji National Park wildlife safaris.',
    ],
    whyVisit: [
      { emoji: '🕉️', text: 'Ganga Aarti at Har Ki Pauri' },
      { emoji: '🛕', text: 'Mansa Devi & Chandi Devi' },
      { emoji: '🌊', text: 'Holy Ganges Bathing' },
      { emoji: '🏞️', text: 'Rajaji National Park' },
      { emoji: '🧘', text: 'Ashrams & Spiritual Centers' },
      { emoji: '🚪', text: 'Gateway to Char Dham' },
    ],
    placesToVisit: [
      { name: 'Har Ki Pauri', description: 'The most sacred ghat in Haridwar where Lord Vishnu\'s footprint is believed to be imprinted. The evening Ganga Aarti here with thousands of diyas floating on the Ganges is an unforgettable spectacle.', image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Mansa Devi Temple', description: 'A hilltop temple dedicated to Goddess Mansa Devi, reachable by cable car. Offers panoramic views of Haridwar and the Ganges. Tie a wish thread and return when it\'s fulfilled.', image: 'https://images.pexels.com/photos/2907196/pexels-photo-2907196.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Chandi Devi Temple', description: 'An ancient hilltop temple dedicated to Goddess Chandi. Accessible by cable car from Chandighat. One of the Siddha Peethas with powerful spiritual energy.', image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Rishikesh', description: 'Just 25 km from Haridwar, the Yoga Capital offers Lakshman Jhula, river rafting, bungee jumping, and tranquil ashrams. A must-add to any Haridwar trip.', image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ],
    aboutPackagesHeading: 'About Haridwar Tour Packages',
    aboutPackagesParagraphs: [
      'Our Haridwar packages range from focused spiritual trips to combined packages with Rishikesh, Mussoorie, and the Char Dham circuit.',
      'All packages include comfortable stays, meals, transfers, temple visit assistance, and local guides. Perfect for families, pilgrims, and spiritual seekers.',
    ],
    bestTime: [
      { period: 'October – March', description: 'Pleasant weather for sightseeing and temple visits. Ganga Aarti is best experienced in cooler months.', type: 'sun', recommended: true },
      { period: 'April – June', description: 'Warm but perfect for starting Char Dham Yatra. Kumbh/Ardh Kumbh Mela years attract millions.', type: 'leaf' },
      { period: 'July – September', description: 'Monsoon with the Ganges in full flow. Kanwar Yatra season brings huge pilgrim crowds in July-August.', type: 'rain' },
    ],
    inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'Daily Dinner', 'Transfers', 'Temple Visit Assistance', 'Sightseeing', 'Local Guide', 'Driver Allowance'],
    faq: [
      { q: 'What is the Ganga Aarti timing?', a: 'The evening Ganga Aarti at Har Ki Pauri starts at sunset (around 6-7 PM). Arrive 30 minutes early for the best viewing spots.' },
      { q: 'How to reach Haridwar?', a: 'By train (Haridwar Junction), by air (Jolly Grant Airport, Dehradun — 35 km), or by road from Delhi (230 km, 5-6 hours).' },
      { q: 'Can I combine Haridwar with Rishikesh?', a: 'Absolutely! They\'re just 25 km apart. Our "Haridwar, Rishikesh & Mussoorie" package covers all three.' },
      { q: 'Is Haridwar safe for families?', a: 'Yes, Haridwar is very safe and family-friendly. It\'s one of India\'s most visited pilgrimage cities with excellent infrastructure.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BALI
  // ═══════════════════════════════════════════════════════════════════════════
  'bali': {
    slug: 'bali',
    name: 'Bali',
    heroImage: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroTitle: 'Bali Tour Packages 2026 | Island of the Gods',
    heroDescription: 'Discover the magical island of Bali — from ancient temples and emerald rice terraces to pristine beaches and world-class surf. Our customized Bali packages offer the perfect tropical getaway with comfortable stays, sightseeing, and unforgettable experiences.',
    packages: [
      { name: 'Bali', duration: '6D / 5N', price: 22999, highlights: ['Ubud', 'Tanah Lot', 'Kuta Beach', 'Kintamani'] },
      { name: 'Bali Paradise', duration: '7D / 6N', price: 98999, highlights: ['Luxury Villa', 'Spa', 'Private Tours', 'Uluwatu', 'Seminyak'] },
    ],
    featuredImage: { src: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Tanah Lot Temple at Sunset, Bali' },
    aboutHeading: 'Bali — Island of the Gods',
    aboutParagraphs: [
      'Bali, Indonesia\'s most famous island, is a paradise of ancient Hindu temples, lush rice terraces, volcanic mountains, and stunning beaches. The island seamlessly blends spirituality, culture, and natural beauty.',
      'From the artistic hub of Ubud to the surf beaches of Kuta and the dramatic cliffs of Uluwatu, Bali offers diverse experiences — yoga retreats, temple visits, water sports, nightlife, and world-class dining.',
    ],
    whyVisit: [
      { emoji: '🛕', text: 'Ancient Hindu Temples' },
      { emoji: '🌾', text: 'Ubud Rice Terraces' },
      { emoji: '🏖️', text: 'Pristine Beaches' },
      { emoji: '🌋', text: 'Kintamani Volcano' },
      { emoji: '🧘', text: 'Yoga & Wellness Retreats' },
      { emoji: '🌅', text: 'Spectacular Sunsets' },
    ],
    placesToVisit: [
      { name: 'Ubud', description: 'The cultural heart of Bali, famous for its rice terraces, art galleries, monkey forest, and traditional dance performances. A haven for yoga and wellness enthusiasts.', image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Tanah Lot', description: 'An iconic sea temple perched on a rock formation in the ocean. One of Bali\'s most photographed landmarks, especially stunning at sunset.', image: 'https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Uluwatu', description: 'A dramatic clifftop temple overlooking the Indian Ocean. Famous for its Kecak fire dance performance at sunset and world-class surfing below.', image: 'https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Seminyak & Kuta', description: 'Bali\'s most popular beach areas with vibrant nightlife, upscale restaurants, boutique shopping, and beautiful sandy beaches perfect for surfing and sunbathing.', image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ],
    aboutPackagesHeading: 'About Bali Tour Packages',
    aboutPackagesParagraphs: [
      'Our Bali packages range from budget-friendly 6-day trips to premium 7-day luxury experiences with private villas, spa treatments, and exclusive tours.',
      'All packages include airport transfers, hotel accommodation, breakfast, sightseeing, and experienced English-speaking guides.',
    ],
    bestTime: [
      { period: 'April – October', description: 'Dry season with sunny days, low humidity, and perfect beach weather. Best time for sightseeing and outdoor activities.', type: 'sun', recommended: true },
      { period: 'November – March', description: 'Wet season with afternoon tropical showers. Lower prices and fewer crowds. Lush green landscapes.', type: 'rain' },
    ],
    inclusions: ['Hotel/Villa Accommodation', 'Daily Breakfast', 'Airport Transfers', 'Sightseeing Tours', 'English-Speaking Guide', 'Visa Assistance', 'Travel Insurance'],
    faq: [
      { q: 'Do Indians need a visa for Bali?', a: 'Indians can get Visa on Arrival (VoA) for 30 days at Bali airport. We assist with all documentation.' },
      { q: 'What is the best time to visit Bali?', a: 'April to October is the dry season with the best weather. November to March is the rainy season but offers lower prices.' },
      { q: 'Is Bali safe for Indian travelers?', a: 'Yes, Bali is very safe and welcoming. It has a strong Hindu culture similar to India, making Indian tourists feel at home.' },
      { q: 'What currency is used?', a: 'Indonesian Rupiah (IDR). USD and credit cards are widely accepted in tourist areas.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MALAYSIA
  // ═══════════════════════════════════════════════════════════════════════════
  'malaysia': {
    slug: 'malaysia',
    name: 'Malaysia',
    heroImage: 'https://images.pexels.com/photos/22804/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1920',
    heroTitle: 'Malaysia Tour Packages 2026 | Truly Asia',
    heroDescription: 'Experience the best of Southeast Asia — from the iconic Petronas Twin Towers of Kuala Lumpur to the pristine beaches of Langkawi, ancient Batu Caves, and the cultural melting pot of George Town. Malaysia offers modern luxury, natural beauty, and diverse cuisine.',
    packages: [
      { name: 'Malaysia', duration: '6D / 5N', price: 21500, highlights: ['Petronas Towers', 'Batu Caves', 'Genting Highlands', 'KL City Tour'] },
      { name: 'Malaysia Explorer', duration: '8D / 7N', price: 45500, highlights: ['Kuala Lumpur', 'Langkawi', 'Penang', 'Cameron Highlands'] },
    ],
    featuredImage: { src: 'https://images.pexels.com/photos/22804/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200', caption: 'Petronas Twin Towers — Kuala Lumpur' },
    aboutHeading: 'Malaysia — Truly Asia',
    aboutParagraphs: [
      'Malaysia is a vibrant Southeast Asian nation that perfectly blends modernity with tradition. The iconic Petronas Twin Towers dominate the Kuala Lumpur skyline, while ancient rainforests, tropical islands, and multicultural heritage create a diverse travel experience.',
      'From the street food paradise of Penang to the duty-free island of Langkawi, the tea plantations of Cameron Highlands, and the Hindu shrine of Batu Caves — Malaysia offers something for every traveler.',
    ],
    whyVisit: [
      { emoji: '🏙️', text: 'Petronas Twin Towers' },
      { emoji: '🏝️', text: 'Langkawi Island Beaches' },
      { emoji: '🛕', text: 'Batu Caves' },
      { emoji: '🍜', text: 'World-Class Street Food' },
      { emoji: '🌿', text: 'Cameron Highlands Tea' },
      { emoji: '🏛️', text: 'George Town Heritage' },
    ],
    placesToVisit: [
      { name: 'Kuala Lumpur', description: 'Malaysia\'s capital city, home to the iconic Petronas Twin Towers, bustling Bukit Bintang shopping district, historic Merdeka Square, and the vibrant Jalan Alor food street.', image: 'https://images.pexels.com/photos/22804/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Langkawi', description: 'A duty-free tropical island paradise with stunning beaches, the Sky Bridge, mangrove tours, and island-hopping adventures. Perfect for relaxation and water sports.', image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Batu Caves', description: 'A series of limestone caves housing Hindu temples, dominated by a 42.7 m golden statue of Lord Murugan. The 272-step climb to the main temple cave is a cultural highlight.', image: 'https://images.pexels.com/photos/2907196/pexels-photo-2907196.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Penang (George Town)', description: 'A UNESCO World Heritage city famous for its colonial architecture, vibrant street art, and arguably the best street food in Asia. A multicultural melting pot of Malay, Chinese, and Indian cultures.', image: 'https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ],
    aboutPackagesHeading: 'About Malaysia Tour Packages',
    aboutPackagesParagraphs: [
      'Our Malaysia packages cover Kuala Lumpur city tours to comprehensive explorer packages including Langkawi, Penang, and Cameron Highlands.',
      'All packages include flights assistance, hotel accommodation, breakfast, sightseeing, transfers, and experienced guides.',
    ],
    bestTime: [
      { period: 'March – October', description: 'Dry season on the west coast (KL, Langkawi, Penang). Best weather for sightseeing and beach activities.', type: 'sun', recommended: true },
      { period: 'November – February', description: 'Monsoon on the east coast but west coast remains relatively dry. Good time for KL and Langkawi.', type: 'rain' },
    ],
    inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'Airport Transfers', 'Sightseeing Tours', 'English-Speaking Guide', 'Visa Assistance', 'Travel Insurance'],
    faq: [
      { q: 'Do Indians need a visa for Malaysia?', a: 'Yes, Indians need a visa. eVISA (eNTRI) is available for 15-day stays. We assist with the complete visa process.' },
      { q: 'What currency is used?', a: 'Malaysian Ringgit (MYR). Credit cards are widely accepted. ATMs available everywhere.' },
      { q: 'Is Malaysia safe for Indian travelers?', a: 'Very safe! Malaysia has a large Indian community and Indian food is widely available. English is commonly spoken.' },
      { q: 'What is the best time to visit?', a: 'March to October for the west coast (KL, Langkawi). Malaysia is a year-round destination with tropical climate.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SINGAPORE
  // ═══════════════════════════════════════════════════════════════════════════
  'singapore': {
    slug: 'singapore',
    name: 'Singapore',
    heroImage: 'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroTitle: 'Singapore Tour Packages 2026 | The Lion City',
    heroDescription: 'Experience the dazzling city-state of Singapore — futuristic gardens, world-class shopping, vibrant hawker centers, and iconic landmarks. From Marina Bay Sands to Sentosa Island, Singapore is the perfect blend of modern luxury and cultural heritage.',
    packages: [
      { name: 'Singapore', duration: '4D / 3N', price: 89999, highlights: ['Marina Bay Sands', 'Sentosa Island', 'Gardens by the Bay', 'Universal Studios'] },
    ],
    featuredImage: { src: 'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Marina Bay Sands — Singapore Skyline' },
    aboutHeading: 'Singapore — The Lion City',
    aboutParagraphs: [
      'Singapore is a stunning city-state that punches far above its size. The futuristic skyline of Marina Bay, the lush Gardens by the Bay, and world-class attractions like Universal Studios make it one of Asia\'s top travel destinations.',
      'Despite its modern sheen, Singapore has deep cultural roots — from the colorful shophouses of Chinatown and Little India to the aromatic hawker centers serving some of the world\'s best street food.',
    ],
    whyVisit: [
      { emoji: '🏙️', text: 'Marina Bay Sands Skyline' },
      { emoji: '🌳', text: 'Gardens by the Bay' },
      { emoji: '🎢', text: 'Universal Studios' },
      { emoji: '🏝️', text: 'Sentosa Island' },
      { emoji: '🍜', text: 'Hawker Center Street Food' },
      { emoji: '🛍️', text: 'Orchard Road Shopping' },
    ],
    placesToVisit: [
      { name: 'Marina Bay Sands', description: 'Singapore\'s most iconic landmark with a rooftop infinity pool, observation deck, luxury shopping, and the spectacular light & water show at night.', image: 'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Gardens by the Bay', description: 'Futuristic nature park featuring the iconic Supertree Grove, Cloud Forest, and Flower Dome. The light show at night is mesmerizing.', image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Sentosa Island', description: 'A resort island with Universal Studios, S.E.A. Aquarium, Adventure Cove, beaches, and cable car rides. Perfect for families and thrill-seekers.', image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ],
    aboutPackagesHeading: 'About Singapore Tour Packages',
    aboutPackagesParagraphs: [
      'Our Singapore package covers all major attractions in 4 days including Marina Bay, Gardens by the Bay, Sentosa Island, and city tours.',
      'Package includes hotel accommodation, breakfast, airport transfers, sightseeing, and visa assistance.',
    ],
    bestTime: [
      { period: 'Year-Round', description: 'Singapore has a tropical climate with warm weather year-round. February–April is slightly drier. December–January sees festive celebrations.', type: 'sun', recommended: true },
    ],
    inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'Airport Transfers', 'Sightseeing Tours', 'Attraction Tickets', 'Visa Assistance', 'Travel Insurance'],
    faq: [
      { q: 'Do Indians need a visa for Singapore?', a: 'Yes, Indians need a visa. We assist with the complete e-visa application process.' },
      { q: 'Is Singapore expensive?', a: 'Singapore can be pricey but our packages offer great value with included attractions. Hawker centers offer affordable, delicious food.' },
      { q: 'How many days are enough?', a: '3-4 days is perfect to cover all major attractions including Marina Bay, Gardens, Sentosa, and city exploration.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // VIETNAM
  // ═══════════════════════════════════════════════════════════════════════════
  'vietnam': {
    slug: 'vietnam',
    name: 'Vietnam',
    heroImage: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroTitle: 'Vietnam Tour Packages 2026 | Land of the Ascending Dragon',
    heroDescription: 'Explore the breathtaking landscapes of Vietnam — from the emerald waters of Ha Long Bay and the ancient streets of Hanoi to the vibrant energy of Ho Chi Minh City and the terraced rice fields of Sapa. Vietnam offers stunning natural beauty, rich history, and incredible cuisine.',
    packages: [
      { name: 'Vietnam', duration: '6D / 5N', price: 53999, highlights: ['Ha Long Bay', 'Hanoi', 'Ho Chi Minh City', 'Hoi An'] },
    ],
    featuredImage: { src: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Ha Long Bay — UNESCO World Heritage' },
    aboutHeading: 'Vietnam — Land of the Ascending Dragon',
    aboutParagraphs: [
      'Vietnam is a Southeast Asian gem stretching along the eastern coast of the Indochinese Peninsula. The country offers an incredible diversity of landscapes — from the limestone karsts of Ha Long Bay to the lush rice paddies of the north and the bustling streets of Ho Chi Minh City.',
      'Vietnamese cuisine is world-renowned for its fresh flavors — pho, banh mi, and spring rolls are just the beginning. The country\'s rich history, ancient temples, and warm hospitality make it a must-visit destination.',
    ],
    whyVisit: [
      { emoji: '🏞️', text: 'Ha Long Bay Cruise' },
      { emoji: '🍜', text: 'World-Famous Cuisine' },
      { emoji: '🏛️', text: 'Ancient Hoi An Town' },
      { emoji: '🌾', text: 'Sapa Rice Terraces' },
      { emoji: '🏍️', text: 'Vibrant Street Life' },
      { emoji: '🕌', text: 'Rich History & Culture' },
    ],
    placesToVisit: [
      { name: 'Ha Long Bay', description: 'A UNESCO World Heritage Site with thousands of limestone karsts and islands rising from emerald waters. Overnight cruises offer kayaking, cave exploration, and stunning sunsets.', image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Hanoi', description: 'Vietnam\'s charming capital with French colonial architecture, the Old Quarter, Ho Chi Minh Mausoleum, and legendary street food. A city that beautifully blends old and new.', image: 'https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Ho Chi Minh City', description: 'Vietnam\'s largest city, a dynamic metropolis with French colonial landmarks, war museums, vibrant markets, and an incredible food scene.', image: 'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ],
    aboutPackagesHeading: 'About Vietnam Tour Packages',
    aboutPackagesParagraphs: [
      'Our Vietnam package covers the highlights in 6 days — Hanoi, Ha Long Bay, and Ho Chi Minh City with comfortable stays and guided tours.',
      'Package includes hotel accommodation, breakfast, transfers, sightseeing, Ha Long Bay cruise, and visa assistance.',
    ],
    bestTime: [
      { period: 'October – April', description: 'Best overall weather. North is cool and dry, south is warm with less rain. Ideal for Ha Long Bay cruises.', type: 'sun', recommended: true },
      { period: 'May – September', description: 'Hot and humid with monsoon rains, especially in the south. Good deals and fewer tourists.', type: 'rain' },
    ],
    inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'Airport Transfers', 'Ha Long Bay Cruise', 'Sightseeing Tours', 'English-Speaking Guide', 'Visa Assistance'],
    faq: [
      { q: 'Do Indians need a visa for Vietnam?', a: 'Yes, but e-Visa is available online for 30 days. We assist with the complete application process.' },
      { q: 'Is Vietnam affordable?', a: 'Very affordable! Vietnam offers excellent value — great food, accommodation, and experiences at budget-friendly prices.' },
      { q: 'Is Vietnam safe?', a: 'Yes, Vietnam is very safe for tourists with low crime rates and friendly locals.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // THAILAND
  // ═══════════════════════════════════════════════════════════════════════════
  'thailand': {
    slug: 'thailand',
    name: 'Thailand',
    heroImage: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroTitle: 'Thailand Tour Packages 2026 | Land of Smiles',
    heroDescription: 'Discover the magic of Thailand — from the bustling streets of Bangkok and glittering temples to the tropical paradise of Pattaya\'s beaches. Our Thailand packages offer the perfect mix of culture, adventure, nightlife, and relaxation.',
    packages: [
      { name: 'Thailand', duration: '5D / 4N', price: 26999, highlights: ['Bangkok', 'Pattaya', 'Grand Palace', 'Floating Market'] },
      { name: 'Bangkok Pattaya', duration: '5D / 4N', price: 42000, highlights: ['Grand Palace', 'Coral Island', 'Alcazar Show', 'Safari World'] },
    ],
    featuredImage: { src: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Grand Palace — Bangkok, Thailand' },
    aboutHeading: 'Thailand — Land of Smiles',
    aboutParagraphs: [
      'Thailand is Southeast Asia\'s most popular tourist destination, famous for its ornate temples, pristine beaches, vibrant street life, and incredible cuisine. Bangkok\'s Grand Palace and floating markets are world-renowned.',
      'Pattaya offers beautiful beaches, water sports, coral island trips, and vibrant nightlife. Together, Bangkok and Pattaya make for the perfect introduction to Thailand\'s diverse offerings.',
    ],
    whyVisit: [
      { emoji: '🛕', text: 'Grand Palace & Temples' },
      { emoji: '🏖️', text: 'Pattaya Beaches' },
      { emoji: '🛶', text: 'Floating Markets' },
      { emoji: '🍜', text: 'Thai Street Food' },
      { emoji: '🎭', text: 'Alcazar & Cultural Shows' },
      { emoji: '🐘', text: 'Safari World' },
    ],
    placesToVisit: [
      { name: 'Bangkok', description: 'Thailand\'s vibrant capital with the magnificent Grand Palace, Wat Pho, floating markets, bustling Khao San Road, and world-class shopping at MBK and Chatuchak Market.', image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Pattaya', description: 'A lively beach resort city with Coral Island, water sports, Nong Nooch Garden, the famous Alcazar cabaret show, and vibrant Walking Street nightlife.', image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Coral Island (Koh Larn)', description: 'A beautiful island just 45 minutes from Pattaya with crystal-clear waters, white sand beaches, snorkeling, parasailing, and water activities.', image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ],
    aboutPackagesHeading: 'About Thailand Tour Packages',
    aboutPackagesParagraphs: [
      'Our Thailand packages cover Bangkok and Pattaya with all major attractions, comfortable stays, and guided tours.',
      'All packages include hotel accommodation, breakfast, airport transfers, sightseeing, and visa-on-arrival assistance.',
    ],
    bestTime: [
      { period: 'November – February', description: 'Cool and dry season. Best weather for sightseeing and beach activities. Most popular tourist season.', type: 'sun', recommended: true },
      { period: 'March – May', description: 'Hot season but great for beaches. Songkran (Thai New Year) in April is a unique cultural experience.', type: 'leaf' },
      { period: 'June – October', description: 'Rainy season with afternoon showers. Lower prices and fewer crowds. Still enjoyable.', type: 'rain' },
    ],
    inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'Airport Transfers', 'Sightseeing Tours', 'Coral Island Trip', 'English-Speaking Guide', 'Travel Insurance'],
    faq: [
      { q: 'Do Indians need a visa for Thailand?', a: 'Indians get Visa on Arrival for 15 days or can apply for a 60-day tourist visa. We assist with all documentation.' },
      { q: 'Is Thailand safe for Indian travelers?', a: 'Very safe! Thailand is one of the most tourist-friendly countries in Asia with excellent infrastructure.' },
      { q: 'What currency is used?', a: 'Thai Baht (THB). ATMs and money exchange available everywhere. Credit cards widely accepted in cities.' },
      { q: 'Is Thai food suitable for vegetarians?', a: 'Yes, Thai cuisine has many vegetarian options. We can arrange vegetarian/Jain meals at restaurants and hotels.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BHUTAN
  // ═══════════════════════════════════════════════════════════════════════════
  'bhutan': {
    slug: 'bhutan',
    name: 'Bhutan',
    heroImage: 'https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroTitle: 'Bhutan Tour Packages 2026 | Land of the Thunder Dragon',
    heroDescription: 'Discover the last Shangri-La — Bhutan, a mystical Himalayan kingdom of ancient monasteries, dramatic dzongs, pristine forests, and the philosophy of Gross National Happiness. Trek to the iconic Tiger\'s Nest and experience a culture untouched by time.',
    packages: [
      { name: 'Bhutan', duration: '6D / 5N', price: 29999, highlights: ['Tiger\'s Nest', 'Thimphu', 'Paro', 'Punakha Dzong'] },
    ],
    featuredImage: { src: 'https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Tiger\'s Nest Monastery — Paro, Bhutan' },
    aboutHeading: 'Bhutan — Land of the Thunder Dragon',
    aboutParagraphs: [
      'Bhutan is the world\'s only carbon-negative country and a Himalayan kingdom that measures success by Gross National Happiness. Ancient Buddhist monasteries, dramatic dzongs (fortress-monasteries), and pristine forests make it a truly unique destination.',
      'The iconic Tiger\'s Nest (Paro Taktsang), perched on a cliff at 3,120 m, is one of the world\'s most sacred and spectacular Buddhist sites. Thimphu and Punakha offer rich cultural experiences with vibrant festivals and warm Bhutanese hospitality.',
    ],
    whyVisit: [
      { emoji: '🛕', text: 'Tiger\'s Nest Monastery' },
      { emoji: '🏰', text: 'Punakha Dzong' },
      { emoji: '🏔️', text: 'Himalayan Mountain Views' },
      { emoji: '🙏', text: 'Buddhist Culture & Festivals' },
      { emoji: '🌿', text: 'Pristine Nature & Forests' },
      { emoji: '😊', text: 'Gross National Happiness' },
    ],
    placesToVisit: [
      { name: 'Tiger\'s Nest (Paro Taktsang)', description: 'Bhutan\'s most iconic landmark — a sacred Buddhist monastery clinging to a cliff face at 3,120 m. The 2-3 hour hike through pine forests offers breathtaking views and a deeply spiritual experience.', image: 'https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Punakha Dzong', description: 'The most beautiful dzong in Bhutan, set at the confluence of two rivers. This fortress-monastery served as the capital and is a masterpiece of Bhutanese architecture.', image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Thimphu', description: 'Bhutan\'s capital city with the giant Buddha Dordenma statue, Tashichho Dzong, Memorial Chorten, and the only capital in the world without traffic lights.', image: 'https://images.pexels.com/photos/414746/pexels-photo-414746.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ],
    aboutPackagesHeading: 'About Bhutan Tour Packages',
    aboutPackagesParagraphs: [
      'Our Bhutan package covers Paro, Thimphu, and Punakha in 6 days with comfortable stays, meals, guided tours, and the Tiger\'s Nest trek.',
      'Package includes hotel accommodation, all meals, airport transfers, licensed Bhutanese guide, sightseeing, and permit assistance.',
    ],
    bestTime: [
      { period: 'March – May', description: 'Spring with blooming rhododendrons and clear Himalayan views. Pleasant temperatures ideal for trekking to Tiger\'s Nest.', type: 'sun', recommended: true },
      { period: 'September – November', description: 'Autumn with crystal-clear skies, harvest festivals, and stunning mountain panoramas. Best visibility for Himalayan peaks.', type: 'leaf' },
      { period: 'June – August', description: 'Monsoon with rain but lush green valleys. Fewer tourists and lower prices. Some trails may be slippery.', type: 'rain' },
    ],
    inclusions: ['Hotel Accommodation', 'All Meals', 'Airport Transfers', 'Licensed Bhutanese Guide', 'Sightseeing', 'Monument Entry Fees', 'Permit & Visa Assistance', 'Sustainable Development Fee'],
    faq: [
      { q: 'Do Indians need a visa for Bhutan?', a: 'Indians do not need a visa for Bhutan! You only need a valid Indian passport or Voter ID. We handle all permit formalities.' },
      { q: 'How to reach Bhutan?', a: 'Fly to Paro (Druk Air or Bhutan Airlines from Delhi, Kolkata, Mumbai). You can also enter by road via Phuentsholing from West Bengal.' },
      { q: 'Is Bhutan expensive?', a: 'Bhutan has a Sustainable Development Fee, but our packages include this. Once paid, the country offers great value with all meals, guide, and transport included.' },
      { q: 'How difficult is the Tiger\'s Nest trek?', a: 'The 2-3 hour uphill hike is moderate. Horses are available for the first half. Take it slow and enjoy the views!' },
    ],
  },
};

// ─── Generate default data for remaining destinations ────────────────────────

function generateDefault(slug: string, name: string, image: string, subtitle: string, highlights: string[], description: string, category: string, price: number, duration: string): DestinationDetail {
  const isInternational = category === 'International';
  const isPilgrimage = category === 'Pilgrimage';
  return {
    slug,
    name,
    heroImage: image.replace('w=800', 'w=1920'),
    heroTitle: `${name} Tour Packages 2026 | Best Deals & Offers`,
    heroDescription: description + ` Book our customized ${name} tour packages starting from ₹${price.toLocaleString('en-IN')} per person with Him Yatra Holidays.`,
    packages: [
      { name: `${name} Explorer`, duration, price, highlights: highlights.slice(0, 4) },
      { name: `${name} Premium`, duration: duration.replace(/(\d+)D/, (_, d) => `${parseInt(d) + 2}D`).replace(/(\d+)N/, (_, n) => `${parseInt(n) + 2}N`), price: Math.round(price * 1.35), highlights: [...highlights.slice(0, 3), 'Premium Stay'] },
      { name: `${name} Budget`, duration: duration.replace(/(\d+)D/, (_, d) => `${Math.max(3, parseInt(d) - 1)}D`).replace(/(\d+)N/, (_, n) => `${Math.max(2, parseInt(n) - 1)}N`), price: Math.round(price * 0.8), highlights: highlights.slice(0, 3) },
    ],
    featuredImage: { src: image.replace('w=800', 'w=1200'), caption: `Beautiful ${name} — ${subtitle}` },
    aboutHeading: `${name} Tour`,
    aboutParagraphs: [
      description,
      `Our ${name} tour packages are designed to give you the most authentic and memorable experience. With experienced guides, comfortable stays, and hassle-free logistics, your ${name} trip will be one to remember.`,
    ],
    whyVisit: [
      { emoji: '🌄', text: `Stunning ${isPilgrimage ? 'spiritual' : 'natural'} beauty` },
      { emoji: isPilgrimage ? '🛕' : '🏞️', text: highlights[0] || 'Iconic landmarks' },
      { emoji: '📸', text: 'Amazing photography spots' },
      { emoji: isInternational ? '✈️' : '🗺️', text: isInternational ? 'International experience' : 'Rich cultural heritage' },
      { emoji: '💑', text: 'Perfect for couples & families' },
      { emoji: '🌟', text: 'Unique experiences & adventures' },
    ],
    placesToVisit: highlights.slice(0, 5).map(h => ({
      name: h,
      description: `${h} is one of the must-visit attractions in ${name}. It offers a unique experience that captures the essence of this beautiful destination.`,
      image: image.replace('w=800', 'w=600'),
    })),
    aboutPackagesHeading: `About ${name} Tour Packages`,
    aboutPackagesParagraphs: [
      `Our ${name} packages offer the best value for your money with carefully crafted itineraries, quality accommodation, and experienced guides.`,
      `All packages include comfortable stays, daily meals, transfers, sightseeing, and dedicated tour assistance. ${isPilgrimage ? 'Special darshan arrangements included.' : ''}`,
    ],
    bestTime: isPilgrimage ? [
      { period: 'April – June', description: 'Pleasant weather, ideal for pilgrimage yatras.', type: 'sun' as const, recommended: true },
      { period: 'September – November', description: 'Post-monsoon clarity. Comfortable temperatures.', type: 'leaf' as const },
      { period: 'December – March', description: 'Cold weather. Many routes may be closed.', type: 'snow' as const },
    ] : isInternational ? [
      { period: 'October – March', description: 'Best weather for tourism and sightseeing.', type: 'sun' as const, recommended: true },
      { period: 'April – June', description: 'Warm but fewer crowds. Budget-friendly.', type: 'sun' as const },
      { period: 'July – September', description: 'Monsoon/rainy season in some regions.', type: 'rain' as const },
    ] : [
      { period: 'October – March', description: 'Best weather for tourism and sightseeing.', type: 'sun' as const, recommended: true },
      { period: 'April – June', description: 'Warm but great for specific activities.', type: 'sun' as const },
      { period: 'July – September', description: 'Monsoon season. Lush greenery.', type: 'rain' as const },
    ],
    inclusions: isPilgrimage
      ? ['Hotel/dharamshala stay', 'Daily meals', 'Transport', 'Darshan arrangements', 'Puja assistance', 'Guide', 'Permits', 'Emergency support']
      : ['Hotel accommodation', 'Daily breakfast', 'Daily dinner', 'Transfers', 'Sightseeing', 'Local transport', 'Tour guide', 'All taxes'],
    faq: [
      { q: `What is the best time to visit ${name}?`, a: `The best time depends on your preferences. Generally, October to March offers the most pleasant weather for most destinations.` },
      { q: `How many days are needed for ${name}?`, a: `We recommend ${duration.match(/(\d+)D/)?.[1] || '5'}–${parseInt(duration.match(/(\d+)D/)?.[1] || '5') + 2} days for a comprehensive experience of ${name}.` },
      { q: `Is ${name} safe for tourists?`, a: `Yes, ${name} is a popular and safe tourist destination with well-developed tourism infrastructure.` },
      { q: `What is included in the package?`, a: `Our packages include accommodation, meals, transfers, sightseeing, and dedicated tour assistance.` },
      { q: `Do I need any special permits?`, a: isPilgrimage ? 'Some pilgrimage sites require registration. We handle all permits and arrangements.' : isInternational ? 'Visa requirements vary. We provide visa assistance for all international packages.' : 'No special permits needed for most tourist areas. We arrange any required permits.' },
      { q: `What should I carry?`, a: `Pack comfortable clothing suitable for the weather, walking shoes, and personal essentials. We provide a detailed packing list before your trip.` },
      { q: `Can I customize the itinerary?`, a: `Absolutely! All our packages are fully customizable. Contact us and we\'ll create a personalized itinerary based on your preferences.` },
      { q: `How can I book?`, a: `You can book through our website, call us at +91 98171 53799, or WhatsApp us. We respond within 2 hours with a personalized quote.` },
    ],
  };
}

// ─── Auto-generate remaining destinations ────────────────────────────────────

const autoGenDestinations: Array<{ slug: string; name: string; image: string; subtitle: string; highlights: string[]; description: string; category: string; price: number; duration: string }> = [
  { slug: 'guwahati-shillong', name: 'Guwahati & Shillong', image: 'https://images.pexels.com/photos/2907196/pexels-photo-2907196.jpeg?auto=compress&cs=tinysrgb&w=800', subtitle: 'Scotland of the East', highlights: ['Kamakhya Temple', 'Shillong Peak', 'Elephant Falls', 'Dawki River', 'Living Root Bridges'], description: 'Misty hills, living root bridges and crystal-clear rivers — the unexplored gem of Northeast India.', category: 'Domestic', price: 24999, duration: '6D / 5N' },
  { slug: 'nainital-corbett', name: 'Nainital & Jim Corbett', image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=800', subtitle: 'Lakes & Wildlife', highlights: ['Naini Lake', 'Jim Corbett Safari', 'Naina Devi Temple', 'Snow View Point', 'Bhimtal'], description: 'Boat rides on emerald lakes and thrilling tiger safaris in India\'s oldest national park.', category: 'Domestic', price: 28999, duration: '6D / 5N' },
  { slug: 'kashmir-winter', name: 'Kashmir Winter Special', image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800', subtitle: 'Snow Paradise', highlights: ['Gulmarg Skiing', 'Frozen Dal Lake', 'Snow Trekking', 'Gondola Ride', 'Pahalgam Snow'], description: 'A winter wonderland of frozen lakes, snow-laden pines and world-class skiing in Gulmarg.', category: 'Domestic', price: 20200, duration: '5D / 4N' },
  { slug: 'madhya-pradesh', name: 'Madhya Pradesh', image: 'https://images.pexels.com/photos/5007839/pexels-photo-5007839.jpeg?auto=compress&cs=tinysrgb&w=800', subtitle: 'Heart of India', highlights: ['Khajuraho Temples', 'Bandhavgarh Safari', 'Sanchi Stupa', 'Pachmarhi', 'Orchha'], description: 'Ancient temples, tiger reserves and UNESCO marvels — the cultural heartland of India awaits.', category: 'Domestic', price: 9999, duration: '5D / 4N' },
  { slug: 'chardham', name: 'Chardham Yatra', image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=800', subtitle: 'The Sacred Four', highlights: ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath', 'Rishikesh'], description: 'The holiest yatra — four sacred shrines nestled in the Garhwal Himalayas, a once-in-a-lifetime spiritual journey.', category: 'Pilgrimage', price: 78999, duration: '12D / 11N' },
  { slug: 'kedarnath-rishikesh', name: 'Kedarnath & Rishikesh', image: 'https://images.pexels.com/photos/2905570/pexels-photo-2905570.jpeg?auto=compress&cs=tinysrgb&w=800', subtitle: 'Shiva & Sacred Ganges', highlights: ['Kedarnath Temple', 'Ganga Aarti', 'Ram Jhula', 'Vasuki Tal', 'Triveni Ghat'], description: 'Trek to the abode of Lord Shiva and feel the divine energy of Rishikesh\'s sacred ghats.', category: 'Pilgrimage', price: 54999, duration: '7D / 6N' },
  { slug: 'badrinath', name: 'Badrinath', image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800', subtitle: 'Abode of Vishnu', highlights: ['Badrinath Temple', 'Mana Village', 'Tapt Kund', 'Vasudhara Falls', 'Narad Kund'], description: 'Visit India\'s last village at Mana and seek blessings at the sacred Badrinath temple amid towering peaks.', category: 'Pilgrimage', price: 39999, duration: '6D / 5N' },
  { slug: 'kedarnath', name: 'Kedarnath', image: 'https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&w=800', subtitle: 'Mahadev Ka Dham', highlights: ['Kedarnath Temple', 'Chorabari Tal', 'Gaurikund', 'Bhairav Temple', 'Vasuki Tal'], description: 'A soul-stirring trek to one of the twelve Jyotirlingas, surrounded by snow peaks and pristine valleys.', category: 'Pilgrimage', price: 37999, duration: '5D / 4N' },
  { slug: 'do-dham', name: 'Do Dham Yatra', image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800', subtitle: 'Twin Sacred Shrines', highlights: ['Kedarnath', 'Badrinath', 'Rishikesh', 'Devprayag', 'Rudraprayag'], description: 'Combine two of India\'s most sacred Dhams in one divine yatra through the majestic Garhwal hills.', category: 'Pilgrimage', price: 54999, duration: '8D / 7N' },
  { slug: 'haridwar', name: 'Haridwar', image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800', subtitle: 'Gateway to the Gods', highlights: ['Har Ki Pauri', 'Ganga Aarti', 'Mansa Devi', 'Chandi Devi', 'Rajaji Park'], description: 'Witness the mesmerizing Ganga Aarti and bathe in holy waters at one of India\'s seven sacred cities.', category: 'Pilgrimage', price: 27999, duration: '4D / 3N' },
  { slug: 'bali', name: 'Bali', image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800', subtitle: 'Island of the Gods', highlights: ['Ubud Rice Terraces', 'Tanah Lot Temple', 'Seminyak Beach', 'Kintamani Volcano', 'Uluwatu'], description: 'Tropical temples, emerald rice paddies and sunset beaches — Bali is a paradise for every traveler.', category: 'International', price: 19999, duration: '6D / 5N' },
  { slug: 'malaysia', name: 'Malaysia', image: 'https://images.pexels.com/photos/22804/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800', subtitle: 'Truly Asia', highlights: ['Petronas Towers', 'Langkawi', 'Batu Caves', 'George Town', 'Cameron Highlands'], description: 'Modern skylines, ancient rainforests and multicultural street food — Malaysia is Asia\'s melting pot.', category: 'International', price: 45500, duration: '6D / 5N' },
  { slug: 'singapore', name: 'Singapore', image: 'https://images.pexels.com/photos/3152126/pexels-photo-3152126.jpeg?auto=compress&cs=tinysrgb&w=800', subtitle: 'The Lion City', highlights: ['Marina Bay Sands', 'Sentosa Island', 'Gardens by the Bay', 'Universal Studios', 'Chinatown'], description: 'A futuristic city-state where sky-high gardens, world-class dining and multicultural buzz converge.', category: 'International', price: 89999, duration: '5D / 4N' },
  { slug: 'vietnam', name: 'Vietnam', image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800', subtitle: 'Ascending Dragon', highlights: ['Ha Long Bay', 'Hoi An', 'Ho Chi Minh City', 'Sapa Rice Terraces', 'Phong Nha Caves'], description: 'Emerald bays, ancient lantern-lit towns and vibrant street food — Vietnam is an unforgettable adventure.', category: 'International', price: 53999, duration: '7D / 6N' },
  { slug: 'thailand', name: 'Thailand', image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800', subtitle: 'Land of Smiles', highlights: ['Bangkok Temples', 'Phuket Beaches', 'Chiang Mai', 'Phi Phi Islands', 'Floating Markets'], description: 'Golden temples, tropical islands and legendary street food — Thailand is the ultimate Southeast Asian escape.', category: 'International', price: 26999, duration: '6D / 5N' },
  { slug: 'bhutan', name: 'Bhutan', image: 'https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=800', subtitle: 'Last Shangri-La', highlights: ['Tiger\'s Nest', 'Punakha Dzong', 'Thimphu', 'Paro Valley', 'Buddha Dordenma'], description: 'The world\'s happiest country — ancient dzongs, pristine forests and a culture that measures success in happiness.', category: 'International', price: 29999, duration: '6D / 5N' },
];

// Populate remaining destinations
autoGenDestinations.forEach(d => {
  if (!destinationDetails[d.slug]) {
    destinationDetails[d.slug] = generateDefault(d.slug, d.name, d.image, d.subtitle, d.highlights, d.description, d.category, d.price, d.duration);
  }
});

// ─── Lookup helper ───────────────────────────────────────────────────────────

export function getDestinationBySlug(slug: string): DestinationDetail | undefined {
  return destinationDetails[slug];
}
