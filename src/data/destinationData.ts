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
      { name: 'Kashmir Explorer', duration: '6D / 5N', price: 22999, highlights: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Dal Lake'] },
      { name: 'Srinagar Pahalgam Gulmarg', duration: '6D / 5N', price: 20200, highlights: ['Shikara Ride', 'Gondola', 'Betaab Valley'] },
      { name: 'Kashmir Summer Holiday', duration: '7D / 6N', price: 25999, highlights: ['Sonamarg', 'Yusmarg', 'Doodhpathri'] },
      { name: 'Srinagar Pahalgam', duration: '6D / 5N', price: 24500, highlights: ['Aru Valley', 'Chandanwari', 'Houseboat'] },
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
    heroTitle: 'Leh Ladakh Tour Packages 2026 | Adventure Trips & Scenic Journeys',
    heroDescription: 'Explore the breathtaking landscapes of Ladakh with our customized tour packages. From the turquoise waters of Pangong Lake to the sand dunes of Nubra Valley, experience the world\'s highest motorable passes and ancient Buddhist monasteries.',
    packages: [
      { name: 'Leh Ladakh Explorer', duration: '6D / 5N', price: 25999, highlights: ['Leh Sightseeing', 'Magnetic Hill', 'Shanti Stupa'] },
      { name: 'Leh Ladakh with Nubra', duration: '7D / 6N', price: 34999, highlights: ['Nubra Valley', 'Khardung La', 'Diskit'] },
      { name: 'Pangong Lake Adventure', duration: '5D / 4N', price: 27999, highlights: ['Pangong Lake', 'Chang La', 'Thiksey'] },
      { name: 'Complete Ladakh Circuit', duration: '8D / 7N', price: 45500, highlights: ['Nubra', 'Pangong', 'Tso Moriri', 'Hemis'] },
    ],
    featuredImage: { src: 'https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Pangong Tso — The Color-Shifting Lake' },
    aboutHeading: 'Leh Ladakh Tour',
    aboutParagraphs: [
      'Leh Ladakh is one of India\'s most spectacular travel destinations, nestled in the northernmost region between the Karakoram and the Great Himalayan ranges. Known as the "Land of High Passes," Ladakh offers otherworldly landscapes of barren mountains, turquoise lakes, and ancient Buddhist culture.',
      'The region is a magnet for adventure enthusiasts — from motorcycle riders conquering Khardung La to trekkers exploring the Markha Valley. But Ladakh is equally rewarding for those seeking peace and spirituality at century-old monasteries like Hemis, Thiksey, and Lamayuru.',
    ],
    whyVisit: [
      { emoji: '🏔️', text: 'Stunning high-altitude mountains' },
      { emoji: '🏍️', text: 'Famous bike trip routes' },
      { emoji: '🌊', text: 'Pangong Lake — color-shifting waters' },
      { emoji: '🏜️', text: 'Nubra Valley sand dunes' },
      { emoji: '🛕', text: 'Ancient Buddhist monasteries' },
      { emoji: '📸', text: 'Photography paradise' },
    ],
    placesToVisit: [
      { name: 'Pangong Lake', description: 'A 134 km long high-altitude lake stretching from India to Tibet. Its waters shift between cobalt blue, turquoise, and emerald green depending on sunlight. Camping by the lake under a star-filled sky is unforgettable.', image: 'https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Nubra Valley', description: 'Known as the "Valley of Flowers," Nubra features white sand dunes at Hunder where you can ride double-humped Bactrian camels. The Diskit Monastery overlooks the valley with a giant Maitreya Buddha statue.', image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Khardung La', description: 'One of the world\'s highest motorable passes at 17,982 ft. The road to Nubra Valley crosses this legendary pass, offering breathtaking views of snow-covered peaks and the thrill of standing on top of the world.', image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Thiksey Monastery', description: 'A stunning 12-storey hilltop monastery resembling Lhasa\'s Potala Palace. Home to a two-storey seated Maitreya Buddha, it offers sunrise views and the peaceful chanting of resident monks.', image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { name: 'Magnetic Hill', description: 'A gravity-defying optical illusion where vehicles appear to roll uphill. Located on the Leh-Kargil Highway, it\'s one of Ladakh\'s quirkiest attractions and a fun stop on any Leh sightseeing tour.', image: 'https://images.pexels.com/photos/414746/pexels-photo-414746.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ],
    aboutPackagesHeading: 'About Leh Ladakh Tour Packages',
    aboutPackagesParagraphs: [
      'Our Ladakh tour packages are carefully crafted to give you the most authentic experience of this magical region. Whether you\'re a solo rider, a couple, or a family — we have the perfect itinerary.',
      'All packages include comfortable accommodation, daily meals, airport transfers, inner line permits, and a dedicated support team. We also offer customized bike trip packages with Royal Enfield rentals.',
    ],
    bestTime: [
      { period: 'May – June', description: 'Roads open, pleasant weather, ideal for bike trips and sightseeing.', type: 'sun', recommended: true },
      { period: 'July – September', description: 'Peak season. Warmest weather, all passes open, festivals.', type: 'sun' },
      { period: 'October – April', description: 'Extreme cold, most roads closed. Only for Chadar Trek enthusiasts.', type: 'snow' },
    ],
    inclusions: ['Hotel accommodation', 'Daily breakfast', 'Daily dinner', 'Airport transfers', 'Sightseeing tours', 'Inner Line Permits', 'Oxygen support', 'Driver allowance'],
    faq: [
      { q: 'What is the best time to visit Ladakh?', a: 'May to September is best. June–August offers the warmest weather with all passes open. May and September are shoulder months with fewer crowds.' },
      { q: 'How much does a Ladakh trip cost?', a: 'Our packages start from ₹25,999 per person including hotels, meals, transfers, and permits. Premium packages with luxury stays range from ₹40,000–₹55,000.' },
      { q: 'How many days are enough for Ladakh?', a: 'We recommend 5–8 days. This includes 1 day for acclimatization, 2 for Nubra Valley, 1 for Pangong Lake, and 1–2 for Leh local sightseeing.' },
      { q: 'Is Ladakh safe for tourists?', a: 'Yes, Ladakh is very safe. Altitude sickness is the main concern — we include acclimatization days and oxygen support in all packages.' },
      { q: 'Do I need permits for Ladakh?', a: 'Yes, Inner Line Permits (ILP) are required for Pangong, Nubra, and other areas. All permits are included in our packages.' },
      { q: 'Can I visit Pangong Lake?', a: 'Absolutely! Pangong Lake is accessible from June to September via Chang La Pass. Our Pangong Adventure package is specifically designed for this.' },
      { q: 'Can I travel to Ladakh by bike?', a: 'Yes! We offer bike trip packages with Royal Enfield rentals, support vehicles, and experienced ride marshals on the Manali-Leh and Srinagar-Leh highways.' },
      { q: 'What clothes should I carry?', a: 'Pack layered clothing — thermals, fleece, windproof jacket, warm socks, gloves, and beanie. Even in summer, nights drop to 0°C. Sunglasses and SPF 50 are essential.' },
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
      { name: 'Kerala Backwater Bliss', duration: '6D / 5N', price: 25000, highlights: ['Alleppey', 'Munnar', 'Kochi'] },
      { name: 'Kerala Honeymoon Special', duration: '7D / 6N', price: 32999, highlights: ['Houseboat', 'Tree House', 'Beach'] },
      { name: 'Kerala Hill & Beach', duration: '5D / 4N', price: 19999, highlights: ['Munnar', 'Thekkady', 'Kovalam'] },
      { name: 'Complete Kerala Circuit', duration: '8D / 7N', price: 38999, highlights: ['Kochi', 'Munnar', 'Alleppey', 'Varkala'] },
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
      { name: 'Rajasthan Royal Heritage', duration: '6D / 5N', price: 7800, highlights: ['Jaipur', 'Jodhpur', 'Udaipur'] },
      { name: 'Golden Triangle Tour', duration: '5D / 4N', price: 15999, highlights: ['Delhi', 'Agra', 'Jaipur'] },
      { name: 'Desert Safari Special', duration: '7D / 6N', price: 24999, highlights: ['Jaisalmer', 'Camel Safari', 'Camping'] },
      { name: 'Rajasthan Complete Circuit', duration: '10D / 9N', price: 39999, highlights: ['Jaipur', 'Jodhpur', 'Jaisalmer', 'Udaipur'] },
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
      { name: 'Shimla Manali Delight', duration: '7D / 6N', price: 29999, highlights: ['Mall Road', 'Solang Valley', 'Rohtang'] },
      { name: 'Manali Adventure', duration: '5D / 4N', price: 18999, highlights: ['Rohtang Pass', 'Rafting', 'Paragliding'] },
      { name: 'Shimla Heritage Tour', duration: '4D / 3N', price: 14999, highlights: ['Ridge', 'Kufri', 'Toy Train'] },
      { name: 'Honeymoon Special', duration: '6D / 5N', price: 32999, highlights: ['Private Cottage', 'Spa', 'Snow Points'] },
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
      { name: 'Darjeeling Gangtok Classic', duration: '7D / 6N', price: 29999, highlights: ['Tiger Hill', 'Tsomgo Lake', 'Nathula'] },
      { name: 'Darjeeling Tea Trail', duration: '5D / 4N', price: 19999, highlights: ['Tea Estates', 'Toy Train', 'Tiger Hill'] },
      { name: 'Sikkim Explorer', duration: '6D / 5N', price: 24999, highlights: ['Gangtok', 'Pelling', 'Ravangla'] },
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
      { name: 'Himachal Highlights', duration: '5D / 4N', price: 13499, highlights: ['Dharamshala', 'Dalhousie', 'Khajjiar'] },
      { name: 'Dharamshala McLeodganj', duration: '4D / 3N', price: 11999, highlights: ['Triund Trek', 'Dalai Lama Temple', 'Bhagsu Falls'] },
      { name: 'Dalhousie Kasauli', duration: '5D / 4N', price: 15999, highlights: ['Khajjiar', 'Kalatop', 'Monkey Point'] },
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
