export interface Artwork {
  id: string;
  title: string;
  category: string;
  priceStart: number;
  image: string;
  description: string;
  materials: string[];
  dimensions?: string;
  customizationAvailable: boolean;
  featured?: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  includes: string[];
  startingPrice: number;
  duration: string;
  materials: string[];
  suitableFor: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  photo: string;
  review: string;
  location: string;
  date: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  likes: number;
  comments: number;
  caption: string;
  url: string;
}

export const SITE_INFO = {
  name: "Nivi Art Hub",
  founder: "Surya",
  founderRole: "Artist & Founder",
  location: "Coimbatore, Tamil Nadu, India",
  phone: "+91 98425 40163",
  whatsappNumber: "919842540163",
  email: "niviarthub@gmail.com",
  instagram: "@nivi_art_hub",
  instagramUrl: "https://instagram.com/nivi_art_hub",
  workingHours: "Monday - Saturday: 9:00 AM - 7:00 PM",
  whatsappDefaultMsg: "Hello Nivi Art Hub,\nI'm interested in getting a customized handcrafted artwork. Please share the details.",
};

export const CATEGORIES = [
  "All",
  "Photo Embroidery",
  "Mirror Welcome Board",
  "Mandala Photo Frame",
  "Miniature Frame",
  "Papercut Light Box",
  "Name Board",
  "Photo Frame",
  "String Art",
  "Gift Hamper Box",
  "Home Décors",
  "Accessories",
  "Clothing",
];

export const ARTWORKS: Artwork[] = [
  // PHOTO EMBROIDERY (5 Artworks)
  {
    id: "pe-1",
    title: "Wedding Garland Couple Photo Embroidery Frame (LAKSHMI ♡ ANBU)",
    category: "Photo Embroidery",
    priceStart: 1499,
    image: "/images/photo_embroidery_wedding_garland.jpg",
    description: "Bespoke hand-embroidered South Indian flower garlands (Maalai) and metallic sunburst rays stitched directly over a black & white wedding photograph with couple name calligraphy (LAKSHMI ♡ ANBU).",
    materials: ["Hand Embroidered Silk Threads", "Anchor French Knots", "Teak Wood Frame", "Black & White Photo"],
    dimensions: "10 x 14 inches",
    customizationAvailable: true,
    featured: true,
  },
  {
    id: "pe-2",
    title: "Family Memory Floral Corner Photo Embroidery",
    category: "Photo Embroidery",
    priceStart: 1999,
    image: "/images/photo_embroidery_family_floral.jpg",
    description: "Multi-photo family heirloom keepsake featuring hand-stitched vibrant orange, pink, and yellow zardosi floral borders surrounding cherished family moments.",
    materials: ["Zardosi Floral Stitching", "Raw Silk Matting", "Textured Dark Teak Frame"],
    dimensions: "12 x 16 inches",
    customizationAvailable: true,
    featured: true,
  },
  {
    id: "pe-3",
    title: "Butterfly Wings Hand-Embroidered Portrait Frame",
    category: "Photo Embroidery",
    priceStart: 999,
    image: "/images/photo_embroidery_butterfly.jpg",
    description: "Whimsical photo embroidery featuring intricate hand-stitched fairy butterfly wings and floral crown highlights over a portrait photo.",
    materials: ["Silk Embroidery Threads", "Sequin Accents", "Teak Wood Frame"],
    dimensions: "10 x 12 inches",
    customizationAvailable: true,
    featured: true,
  },
  {
    id: "pe-4",
    title: "Iniyaa Concentric Thread Spiral Name Embroidery Frame",
    category: "Photo Embroidery",
    priceStart: 799,
    image: "/images/photo_embroidery_iniyaa.jpg",
    description: "Vibrant blue and golden yellow thread spiral embroidery encircling a child's portrait with custom hand-stitched name lettering (Iniyaa).",
    materials: ["Concentric Thread Stitching", "Raw Silk Paper", "Teak Frame"],
    dimensions: "8 x 10 inches",
    customizationAvailable: true,
    featured: true,
  },
  {
    id: "pe-5",
    title: "Spiderman 3D Web Custom Thread Embroidery Frame",
    category: "Photo Embroidery",
    priceStart: 799,
    image: "/images/photo_embroidery_spiderman_web.jpg",
    description: "Fun 3D thread embroidery frame for superhero fans featuring hand-stitched web lines extending out from a Spiderman action portrait.",
    materials: ["3D Web Threading", "Matte Photo Print", "Dark Walnut Frame"],
    dimensions: "8 x 10 inches",
    customizationAvailable: true,
    featured: true,
  },

  // MIRROR WELCOME BOARD (4 Artworks)
  {
    id: "mwb-1",
    title: "Temple Gopuram Wedding Mirror Welcome Board",
    category: "Mirror Welcome Board",
    priceStart: 10999,
    image: "/images/mirror_welcome_gopuram.jpg",
    description: "Bespoke South Indian wedding mirror welcome sign featuring hand-painted colorful Temple Gopuram, couple illustration, traditional Tamil calligraphic lettering, lotus garlands (Maalai), peacocks, white elephants, and gold carved frame.",
    materials: ["High-Shine Glass Mirror", "Ornate Gold Carved Frame", "Eco Acrylic Paints", "Tamil Calligraphy"],
    dimensions: "24 x 36 inches",
    customizationAvailable: true,
    featured: true,
  },
  {
    id: "mwb-2",
    title: "Ambhu Lakshmi Seemandham Arched Wooden Mirror Board",
    category: "Mirror Welcome Board",
    priceStart: 8999,
    image: "/images/mirror_welcome_seemandham.jpg",
    description: "Handcrafted arched wooden mirror welcome board designed for Seemandham / Baby Shower functions (WELCOME TO Ambhu Lakshmi's Seemandham) with lotus garlands, baby footprints, and traditional mother artwork.",
    materials: ["Natural Wood Arch Frame", "Beveled Edge Mirror", "Hand-Painted Motif", "Acrylic Lettering"],
    dimensions: "20 x 30 inches",
    customizationAvailable: true,
    featured: true,
  },
  {
    id: "mwb-3",
    title: "Temple Gopuram Mirror Board Intricate Detail View",
    category: "Mirror Welcome Board",
    priceStart: 10999,
    image: "/images/mirror_welcome_gopuram_closeup.jpg",
    description: "Close-up craftsmanship view of hand-painted Gopuram details, fine Tamil lettering, and vibrant acrylic colors on beveled glass mirror.",
    materials: ["Beveled Mirror", "Ornate Carved Frame", "Fine Brushwork"],
    dimensions: "24 x 36 inches",
    customizationAvailable: true,
    featured: false,
  },

  // MANDALA PHOTO FRAME (3 Artworks)
  {
    id: "mpf-1",
    title: "Chandra ♡ Prakash Red Corner Mandala Wedding Frame",
    category: "Mandala Photo Frame",
    priceStart: 1499,
    image: "/images/mandala_wedding_chandra_prakash.jpg",
    description: "Personalized wedding mandala frame featuring hand-drawn red & black corner mandala motifs surrounding a central couple portrait with wedding date typography (Chandra 28.01.2026 Prakash), finished in a gold-inner trim teakwood frame.",
    materials: ["Micro Fine Ink Pen", "Red Watercolor Accents", "Gold Inner Trim Teak Frame", "Glass Panel"],
    dimensions: "12 x 16 inches",
    customizationAvailable: true,
    featured: true,
  },
  {
    id: "mpf-2",
    title: "Vibrant Blue Multi-Ring Ink Mandala Couple Frame",
    category: "Mandala Photo Frame",
    priceStart: 1299,
    image: "/images/mandala_blue_ring.jpg",
    description: "Intricate multi-ring circular mandala ink drawing in cobalt blue and black, framing a circular couple photo in a dark walnut shadow box frame.",
    materials: ["Cobalt Blue Ink Pen", "Archival Mandala Paper", "Dark Walnut Frame", "Glass Panel"],
    dimensions: "10 x 14 inches",
    customizationAvailable: true,
    featured: true,
  },
  {
    id: "mpf-3",
    title: "Yellow Leaf Accent Hand-Drawn Ink Mandala Frame",
    category: "Mandala Photo Frame",
    priceStart: 1299,
    image: "/images/mandala_yellow_leaf.jpg",
    description: "Hand-drawn circular mandala with bright yellow watercolor corner leaves and custom portrait matting.",
    materials: ["Fine Ink Pen", "Watercolor Accents", "Teak Wood Frame"],
    dimensions: "10 x 12 inches",
    customizationAvailable: true,
    featured: false,
  },

  // MINIATURE FRAME / SHADOW BOX (3 Artworks)
  {
    id: "mf-1",
    title: "Dual-Room Birthday 3D Miniature Shadow Box (NIVANYAA)",
    category: "Miniature Frame",
    priceStart: 2999,
    image: "/images/miniature_shadowbox_dual_room_birthday.jpg",
    description: "Intricate 3D dual-room miniature shadow box (crafted for NIVANYAA) featuring a floral living room with mini TV screen (Lion King), books, plush toys, and a sparkling gold birthday hall with cake, easel stand, and family portrait.",
    materials: ["Teak Shadow Box Frame", "Handmade 3D Furniture", "Miniature Books & TV", "Glitter Wall Decor"],
    dimensions: "12 x 18 x 4 inches",
    customizationAvailable: true,
    featured: true,
  },
  {
    id: "mf-2",
    title: "Romantic Couple Park Bench 3D Shadow Box Frame",
    category: "Miniature Frame",
    priceStart: 1999,
    image: "/images/miniature_shadowbox_romantic_bench.jpg",
    description: "Handcrafted 3D romantic shadow box featuring couple figures sitting on a miniature park bench, wooden LOVE letter blocks, hanging Polaroid clothesline photos, red rose heart backdrop, and pearl garlands.",
    materials: ["Wood Bench Miniatures", "Polaroid Photo Clothesline", "Pink Silk Backdrop", "LOVE Block Art"],
    dimensions: "10 x 14 x 3 inches",
    customizationAvailable: true,
    featured: true,
  },
  {
    id: "mf-3",
    title: "3D Miniature Cozy Room Shadow Box Pen Stand",
    category: "Miniature Frame",
    priceStart: 1299,
    image: "/images/miniature_shadowbox_penstand.jpg",
    description: "Functional desktop pen stand incorporating a 3D miniature cozy room with couple figure on a bench, laptop, bookshelf, anchor motif, Winnie the Pooh, and Minion decor.",
    materials: ["Dual Pen Stand Wood Box", "Miniature Laptop & Furniture", "Acrylic Glass Front"],
    dimensions: "8 x 8 x 4 inches",
    customizationAvailable: true,
    featured: true,
  },

  // PAPERCUT LIGHT BOX (2 Artworks)
  {
    id: "plb-1",
    title: "Naruto Anime Silhouette 4D Layer Cut Papercut Light Box",
    category: "Papercut Light Box",
    priceStart: 3499,
    image: "/images/papercut_lightbox_naruto_anime.jpg",
    description: "Bespoke 4D Layer Cut precision papercraft light box featuring multi-depth silhouettes of Naruto, Kakashi, Sasuke, and Team 7 with leaf village emblem, illuminated with warm glowing LED backlighting.",
    materials: ["4D Layer Cut Acid-Free Paper", "Warm LED Ambient Backlight", "Dark Teak Shadow Box", "Glass Panel"],
    dimensions: "8 x 12 x 3 inches",
    customizationAvailable: true,
    featured: true,
  },
  {
    id: "plb-2",
    title: "CSK Dhoni 7 Roaring Lion 4D Layer Cut Papercut Light Box",
    category: "Papercut Light Box",
    priceStart: 3499,
    image: "/images/papercut_lightbox_csk_dhoni7.jpg",
    description: "Intricate 4D Layer Cut papercraft light box depicting MS Dhoni 7 in iconic batting, trophy-winning, and roaring lion silhouettes with 'CSK DHONI 7' typography and golden LED illumination.",
    materials: ["Multi-Depth 4D Layer Cut Paper", "Gold Warm LED Strip", "Teak Shadow Box", "Glass Cover"],
    dimensions: "8 x 12 x 3 inches",
    customizationAvailable: true,
    featured: true,
  },

  // NAME BOARD (4 Artworks)
  {
    id: "nb-1",
    title: "Joker Comic Theme LED Light Box Name Board (SAKTHI)",
    category: "Name Board",
    priceStart: 2499,
    image: "/images/name_board_sakthi_joker_led.jpg",
    description: "Customized LED backlit shadow box name board featuring comic book collage background, Joker 'Why so serious!' typography, 'IT's you vs you' quote, and bold LED illuminated name lettering (SAKTHI).",
    materials: ["LED Strip Backlight", "Comic Book Cutouts", "Teak Shadow Box", "Glass Panel"],
    dimensions: "10 x 14 inches",
    customizationAvailable: true,
    featured: true,
  },
  {
    id: "nb-2",
    title: "Personalized Birthday Doodle & Hobby Story Name Board (Dhanu)",
    category: "Name Board",
    priceStart: 1599,
    image: "/images/name_board_dhanu_birthday_doodle.jpg",
    description: "Hand-drawn custom birthday story name board depicting favorite hobbies (Cricket, Movie popcorn, Spiderman, Hanuman, Painting, Animals, Ice Cream) with central bold name 'Dhanu' and birthday banner.",
    materials: ["Hand-Drawn Color Doodles", "Custom Birthday Date", "Textured Dark Teak Frame"],
    dimensions: "12 x 16 inches",
    customizationAvailable: true,
    featured: true,
  },
  {
    id: "nb-3",
    title: "Split Mandala Hand-Drawn Custom Name Board (Nivanyaa)",
    category: "Name Board",
    priceStart: 1499,
    image: "/images/name_board_nivanyaa_mandala.jpg",
    description: "Elegant split mandala fine-ink drawing with central magenta calligraphy name 'Nivanyaa' and colorful yellow, red, and green watercolor corner accents.",
    materials: ["Micro Ink Pen", "Watercolor Accents", "Dark Teak Frame", "Glass Panel"],
    dimensions: "10 x 14 inches",
    customizationAvailable: true,
    featured: true,
  },
  {
    id: "nb-4",
    title: "Pearl Bead Embroidered Baby Birth Announcement Hoop Frame",
    category: "Name Board",
    priceStart: 1299,
    image: "/images/name_board_soundar_baby_embroidery.jpg",
    description: "Delicate silk thread embroidered birth announcement frame for Soundar mam's Baby Girl (27.11.2025) with mother-child holding hands embroidery, floral bouquet, and circular pearl bead border.",
    materials: ["Hand Embroidered Raw Silk", "Pearl Bead Trim", "Dark Teak Frame"],
    dimensions: "8 x 12 inches",
    customizationAvailable: true,
    featured: true,
  },

  // PHOTO FRAME (3 Artworks)
  {
    id: "pf-1",
    title: "Birthday Music Sheet & Calendar Collage Frame",
    category: "Photo Frame",
    priceStart: 1799,
    image: "/images/photo_frame_birthday_calendar.jpg",
    description: "Bespoke birthday memory frame featuring a music sheet backdrop, torn paper bottom border with custom calendar month highlight, and heartwarming quote: 'Today and every day, wishing only the best for you - Happy birthday' in a dark teak wood frame.",
    materials: ["Music Sheet Matting", "Custom Calendar Highlight", "Dark Teak Frame", "Glass Panel"],
    dimensions: "12 x 16 inches",
    customizationAvailable: true,
    featured: true,
  },
  {
    id: "pf-2",
    title: "Floating Glass Grid Baby Milestone Collage Frame",
    category: "Photo Frame",
    priceStart: 1699,
    image: "/images/photo_frame_floating_baby_collage.jpg",
    description: "Elegant floating glass photo frame with a gold-inner trim dark wood frame, displaying an 8-photo grid collage of growing baby milestone moments.",
    materials: ["Double Floating Glass", "Gold Inner Trim Dark Frame", "High Gloss Photo Print"],
    dimensions: "12 x 16 inches",
    customizationAvailable: true,
    featured: true,
  },
  {
    id: "pf-3",
    title: "Pop-Out Acrylic Anniversary Collage Frame",
    category: "Photo Frame",
    priceStart: 1299,
    image: "/images/photo_frame_acrylic_anniversary.jpg",
    description: "Modern acrylic anniversary memory board featuring a central color couple portrait layered over black & white memory photos with stylish 'HAPPY Anniversary' typography.",
    materials: ["High-Gloss Acrylic Board", "Pop-Out 3D Layering", "Full Color & B&W Photo Printing"],
    dimensions: "10 x 14 inches",
    customizationAvailable: true,
    featured: true,
  },

  // STRING ART (2 Artworks)
  {
    id: "sa-1",
    title: "Double Heart Baby Footprints String Art Frame",
    category: "String Art",
    priceStart: 1899,
    image: "/images/string_art_baby_footprints.jpg",
    description: "Bespoke double heart string art frame featuring vibrant royal blue and magenta pink thread-wound hearts with baby footprint cutouts, inscribed with the touching quote: 'Your little feet will make the biggest footprints in our hearts....' in a crisp white shadow box.",
    materials: ["Steel Pins", "Royal Blue & Pink Silk Threads", "Baby Footprint Cutouts", "White Wooden Shadow Box"],
    dimensions: "10 x 14 inches",
    customizationAvailable: true,
    featured: true,
  },
  {
    id: "sa-2",
    title: "Heart String & Thread Memory Frame",
    category: "String Art",
    priceStart: 799,
    image: "/images/artwork_string_art.jpg",
    description: "Intricate red and cream thread-wound heart border enveloping your favorite family memory photo, mounted on a solid wooden easel frame.",
    materials: ["Pine Wood Base", "Silk Metallic Threads", "Handmade Lace", "Custom Photos"],
    dimensions: "8 x 12 inches",
    customizationAvailable: true,
    featured: true,
  },

  // GIFT HAMPER BOX (4 Artworks)
  {
    id: "ghb-1",
    title: "Royal Anniversary Couple Frame & Pink Roses Hamper",
    category: "Gift Hamper Box",
    priceStart: 2499,
    image: "/images/hamper_anniversary_roses.jpg",
    description: "Luxury anniversary gift hamper box featuring a customized couple portrait frame, Tamil poetry keepsake booklet ('அவளும் நானும்...'), delicate pink artificial roses, and premium chocolate assortment (KitKat, 5Star, Cadbury Dairy Milk).",
    materials: ["Gold Patterned Keepsake Box", "Teak Wood Frame", "Tamil Poetry Booklet", "Pink Silk Roses", "Branded Chocolates"],
    dimensions: "14 x 18 inches",
    customizationAvailable: true,
    featured: true,
  },
  {
    id: "ghb-2",
    title: "Custom Birthday Photo Wrapped Chocolates Hamper Tray (Iniyaa)",
    category: "Gift Hamper Box",
    priceStart: 999,
    image: "/images/hamper_custom_chocolates_iniyaa.jpg",
    description: "Woven gold wire hamper tray packed with personalized custom photo-wrapped chocolate bars featuring birthday kid portrait and name typography ('HAPPY BIRTHDAY Iniyaa').",
    materials: ["Gold Wire Hamper Basket", "Custom Photo Wrappers", "Premium Milk Chocolates", "Floral Border Details"],
    dimensions: "12 x 12 inches",
    customizationAvailable: true,
    featured: true,
  },
  {
    id: "ghb-3",
    title: "Luxury Silk Chocolates & Photo Frame Red Heart Box",
    category: "Gift Hamper Box",
    priceStart: 1999,
    image: "/images/hamper_silk_heart_frame.jpg",
    description: "Elegant white magnetic gift box featuring a handmade photo collage frame, red metallic tin heart box, Cadbury Dairy Milk Silk bars, and shredded paper cushioning.",
    materials: ["Magnetic Closure Box", "Red Tin Heart Box", "Cadbury Silk Chocolates", "Handmade Photo Collage"],
    dimensions: "10 x 12 inches",
    customizationAvailable: true,
    featured: true,
  },
  {
    id: "ghb-4",
    title: "Handmade Mini Paper Sunflower & Love Note Craft Box",
    category: "Gift Hamper Box",
    priceStart: 1499,
    image: "/images/hamper_sunflower_craft.jpg",
    description: "Sweet handcrafted gift set with a bouquet of mini paper sunflowers, accordion 'Soulmate' kraft paper card, and mini love note box ('Just a little love note...').",
    materials: ["Handmade Kraft Paper", "Mini Paper Sunflowers", "Accordion Card", "Love Note Box"],
    dimensions: "8 x 10 inches",
    customizationAvailable: true,
    featured: true,
  },

  // OTHER CATEGORIES (1 Artwork)
  {
    id: "hd-1",
    title: "Heritage South Indian Lippan Mirror Frame",
    category: "Home Décors",
    priceStart: 1799,
    image: "/images/artwork_mandala_couple_alt.jpg",
    description: "Authentic clay mud and mirror craft work embedded with golden mandala motif and traditional Tamil kolam borders.",
    materials: ["Clay Compound", "Convex Glass Mirrors", "MDF Board", "Eco-Acrylic Paint"],
    dimensions: "12 x 12 inches",
    customizationAvailable: true,
    featured: false,
  },
];

export const SERVICES: Service[] = [
  {
    id: "photo-embroidery",
    name: "Photo Embroidery",
    description: "Intricate hand-stitched thread artwork layered directly over your printed photographs—including South Indian wedding garlands (Maalai), family floral corners, fairy butterfly wings, spiral name halos, and 3D Spiderman webs.",
    includes: ["Wedding Garland (Maalai) Embroidery (LAKSHMI ♡ ANBU)", "Family Memory Floral Corner Embroidery", "Fairy Butterfly Wings Embroidery", "Iniyaa Spiral Name Embroidery", "3D Spiderman Web Embroidery"],
    startingPrice: 799,
    duration: "3 - 7 Days",
    materials: ["Anchor Silk Threads", "Zardosi Gold Thread", "Black & White / Color Photos", "Teak Frames"],
    suitableFor: ["Weddings & Anniversaries", "Birthday Keepsakes", "Kids Memory Frames", "Heirloom Family Gifts"],
    image: "/images/photo_embroidery_wedding_garland.jpg",
  },
  {
    id: "mirror-welcome-board",
    name: "Mirror Welcome Board",
    description: "Luxurious South Indian hand-painted mirror welcome boards for weddings, Seemandham (baby shower), engagements, and housewarming ceremonies. Features custom Tamil calligraphy, hand-painted Temple Gopuram, lotus garlands, peacocks, elephants, and ornate gold or wooden arch frames.",
    includes: ["Temple Gopuram Wedding Mirror Board", "Seemandham & Baby Shower Mirror Board", "Engagement & Housewarming Mirror Sign", "Gold Ornate & Wooden Arch Frames"],
    startingPrice: 1999,
    duration: "4 - 8 Days",
    materials: ["High-Shine Beveled Mirror", "Ornate Gold Frame", "Wooden Arch", "Eco Acrylic Paints"],
    suitableFor: ["Weddings & Reception Entrances", "Seemandham (Baby Shower)", "Engagement Ceremonies", "Housewarming (Grihapravesham)"],
    image: "/images/mirror_welcome_gopuram.jpg",
  },
  {
    id: "mandala-photo-frame",
    name: "Mandala Photo Frame",
    description: "Intricate hand-drawn mandala ink art custom-crafted around your favorite couple, family, or wedding photos. Features multi-ring circular patterns, red & gold corner mandalas, cobalt blue ink rings, yellow watercolor accents, and personalized date typography.",
    includes: ["Red & Gold Corner Mandala Wedding Frame", "Blue Multi-Ring Ink Mandala Frame", "Yellow Leaf Accent Mandala Frame", "Black Fine Line Mandala Frame"],
    startingPrice: 1299,
    duration: "3 - 7 Days",
    materials: ["Fine Micro-Ink Pen", "Watercolor Accents", "Archival Paper", "Teak & Gold Trim Frames"],
    suitableFor: ["Weddings & Anniversaries", "Couples Gifting", "Housewarming Memories", "Birthday Keepsakes"],
    image: "/images/mandala_wedding_chandra_prakash.jpg",
  },
  {
    id: "miniature-frames",
    name: "Miniature Shadow Box",
    description: "Enchanting 3D micro-art shadow boxes including dual-room birthday setups, romantic park bench couple scenes with LOVE blocks & Polaroid clotheslines, and functional desktop pen stand mini rooms.",
    includes: ["Dual-Room Birthday 3D Shadow Box", "Romantic Park Bench Couple Shadow Box", "Desktop Pen Stand Mini Room", "Papercut Light Boxes"],
    startingPrice: 1499,
    duration: "4 - 8 Days",
    materials: ["Natural Wood Shadow Box", "Miniature Furniture", "Polaroid Photos", "LED Lighting"],
    suitableFor: ["Birthday Keepsakes", "Anniversary Gifts", "Desk & Office Decor", "Romantic Surprises"],
    image: "/images/miniature_shadowbox_dual_room_birthday.jpg",
  },
  {
    id: "papercut-light-box",
    name: "Papercut Light Box (4D Layer Cut)",
    description: "Bespoke 4D Layer Cut precision papercraft light boxes created with multi-layered depth silhouettes and ambient warm LED backlighting. Popular themes include Anime (Naruto, One Piece), Cricket Superstars (CSK MS Dhoni 7), nature, and custom romantic couple silhouettes.",
    includes: ["Naruto Anime 4D Layer Cut Light Box", "CSK MS Dhoni 7 Roaring Lion Light Box", "Custom Couple 4D Silhouette Light Box", "Teak Shadow Box LED Frame"],
    startingPrice: 2999,
    duration: "3 - 6 Days",
    materials: ["4D Layer Cut Acid-Free Paper", "Warm LED Ambient Lighting", "Teak Shadow Box", "Glass Panel"],
    suitableFor: ["Anime & Gaming Enthusiasts", "Cricket Fans (MS Dhoni 7)", "Night Desk Lamps", "Birthday & Anniversary Gifting"],
    image: "/images/papercut_lightbox_naruto_anime.jpg",
  },
  {
    id: "name-boards",
    name: "Name Boards",
    description: "Custom personalized name boards including Joker Comic Theme LED Light Boxes, Hand-Drawn Hobby & Birthday Story Boards, Split Mandala Custom Name Boards, and Embroidered Pearl Bead Birth Announcement Hoop Frames.",
    includes: ["Joker Comic Theme LED Name Board", "Birthday Hobby & Story Doodle Board", "Split Mandala Ink Name Board", "Pearl Embroidered Birth Announcement Hoop"],
    startingPrice: 1299,
    duration: "3 - 6 Days",
    materials: ["LED Backlit Light Box", "Teak Wood", "Raw Silk & Pearl Beads", "Archival Ink"],
    suitableFor: ["Home Entrances", "Kids Bedrooms", "Birth Announcements", "Gifts & Room Decor"],
    image: "/images/name_board_sakthi_joker_led.jpg",
  },
  {
    id: "photo-frames",
    name: "Photo Frames",
    description: "Artistic personalized photo keepsakes combining music sheet calendar collages, floating glass baby milestone grids, pop-out acrylic anniversary boards, and custom framed prints.",
    includes: ["Birthday Music Sheet & Calendar Frame", "Floating Glass Grid Baby Milestone Frame", "Pop-Out Acrylic Anniversary Frame", "Book Album & Collage Frames"],
    startingPrice: 999,
    duration: "3 - 7 Days",
    materials: ["Floating Double Glass", "Teak & Gold Trim Frames", "High Gloss Photo Printing", "Music Sheet Backdrop"],
    suitableFor: ["Birthdays", "Anniversaries", "Baby Milestones", "Family Memory Walls"],
    image: "/images/photo_frame_birthday_calendar.jpg",
  },
  {
    id: "string-art",
    name: "String & Thread Art",
    description: "Geometric precision artwork created by weaving colorful silk threads around pins to form heart portraits, baby footprint keepsakes, couple names, and wedding motifs.",
    includes: ["Double Heart Baby Footprints String Frame", "Portrait String Art", "Heart Thread Memory Frame", "Wedding String Art"],
    startingPrice: 1299,
    duration: "4 - 8 Days",
    materials: ["Pine wood board", "Steel pins", "Nylon & silk threads", "Baby Footprint Cutouts"],
    suitableFor: ["Baby Shower / New Born Keepsakes", "Wedding Ceremonies", "Couples Anniversary", "Statement Wall Art"],
    image: "/images/string_art_baby_footprints.jpg",
  },
  {
    id: "gift-hamper-box",
    name: "Gift Hamper Box",
    description: "Bespoke luxury hampers tailored for anniversaries, birthdays, weddings, and romantic milestones. Packed with customized photo-wrapped chocolates, handmade couple frames, Tamil poetry booklets, red tin heart boxes, mini paper sunflower bouquets, and premium chocolates.",
    includes: ["Anniversary Couple Frame & Pink Roses Hamper", "Custom Photo Wrapped Chocolates Basket", "Cadbury Silk & Red Heart Gift Box", "Mini Paper Sunflower & Love Note Craft Box"],
    startingPrice: 999,
    duration: "3 - 6 Days",
    materials: ["Magnetic Luxury Box", "Wire Basket", "Custom Chocolate Wrappers", "Paper Sunflowers", "Cadbury Silk"],
    suitableFor: ["Anniversaries", "Birthdays", "Valentine & Romantic Keepsakes", "Wedding Return Gifts"],
    image: "/images/hamper_anniversary_roses.jpg",
  },
  {
    id: "home-decors",
    name: "Home Décors",
    description: "Heritage South Indian art accents including Pooja art plates, Mandala wall pieces, Lippan wall art, Kolam Manai, Terracotta pots, coasters, and serving trays.",
    includes: ["Pooja Art Plates", "Mandala Art", "Lippan Art", "Kolam Manai", "Terracotta Pots", "Coasters", "Trays"],
    startingPrice: 300,
    duration: "3 - 6 Days",
    materials: ["Terracotta clay", "Natural teak", "Eco acrylic paints", "Mirrors"],
    suitableFor: ["Pooja Room", "Living Room Decor", "Festival Gifting"],
    image: "/images/mandala_yellow_leaf.jpg",
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Handcrafted traditional jewelry and hair accessories customized to match your ethnic outfits, including silk thread bangles, hair bands, clips, and terracotta jewelry.",
    includes: ["Silk Thread Bangles", "Hair Clips", "Hair Bands", "Terracotta Jewellery"],
    startingPrice: 150,
    duration: "2 - 4 Days",
    materials: ["Silk threads", "Baked clay", "Stone lace", "Base metal hoops"],
    suitableFor: ["Bridal Wear", "Festive Celebrations", "Ethnic Outfits"],
    image: "/images/photo_embroidery_butterfly.jpg",
  },
  {
    id: "clothing",
    name: "Clothing",
    description: "Bespoke hand embroidery and fabric painting on designer ethnic dresses, sarees, blouses, and festive wear crafted with perfection.",
    includes: ["Embroidery", "Fabric Painting", "Customized Dresses"],
    startingPrice: 600,
    duration: "5 - 10 Days",
    materials: ["Cotton", "Silk", "Zari", "Fabric colors"],
    suitableFor: ["Custom Bridal Wear", "Festive Sarees", "Kids Ethnic Outfits"],
    image: "/images/photo_embroidery_family_floral.jpg",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Lakshmi & Anbu",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    review: "The hand-embroidered South Indian flower garland over our wedding photo was beyond words! The thread work craftsmanship is extraordinary.",
    location: "Coimbatore, Tamil Nadu",
    date: "1 week ago",
  },
  {
    id: "test-2",
    name: "Sakthi & Dhanu",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    review: "Nivi Art Hub created a Joker comic theme LED light box name board and a custom birthday hobby story board for us! The LED backlight and fine drawing details made it an extraordinary gift!",
    location: "Coimbatore, Tamil Nadu",
    date: "2 weeks ago",
  },
  {
    id: "test-3",
    name: "Nivanyaa & Family",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    review: "Ordered the dual-room birthday 3D miniature shadow box for my daughter Nivanyaa with mini TV screen, book shelves, and gold room decor. It blew everyone's mind at the birthday party!",
    location: "Chennai, Tamil Nadu",
    date: "1 month ago",
  },
  {
    id: "test-4",
    name: "Iniyaa & Family",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    review: "Ordered the INIYAA spiral photo embroidery and Spiderman web thread frame for my kids' rooms. Beautiful thread work that will be cherished forever!",
    location: "Bengaluru, Karnataka",
    date: "2 months ago",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Share your Theme & Photos",
    description: "Reach out via WhatsApp or Contact form with your preferred photo, embroidery ideas, or custom name/board vision.",
    iconName: "Lightbulb",
  },
  {
    step: 2,
    title: "Discussion",
    description: "We discuss frame size, thread color palette, miniature props, LED lighting options, and transparent pricing.",
    iconName: "MessageCircle",
  },
  {
    step: 3,
    title: "Design Approval",
    description: "We share thread layout placement, vector sketches, and embroidery mockups for your approval before stitching.",
    iconName: "CheckCircle2",
  },
  {
    step: 4,
    title: "Handcrafting & Embroidery",
    description: "Surya and our craft artisans hand-stitch silk threads, precision-cut paper layers, wire LED lights, and finish your artwork.",
    iconName: "Sparkles",
  },
  {
    step: 5,
    title: "Delivery",
    description: "Safely padded, luxury ribbon-wrapped, and shipped right to your doorstep across India & internationally.",
    iconName: "Truck",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "How many Photo Embroidery styles do you offer?",
    answer: "We offer 5 signature styles: South Indian Wedding Flower Garland (Maalai) Embroidery (LAKSHMI ♡ ANBU), Family Memory Floral Corner Embroidery, Fairy Butterfly Wings Embroidery, Concentric Thread Spiral Name Embroidery (Iniyaa), and 3D Superhero Web Embroidery (Spiderman).",
    category: "Craft",
  },
  {
    question: "How long does a Photo Embroidery frame take to create?",
    answer: "Because every thread is hand-stitched through archival photo paper, photo embroidery frames take between 3 to 7 business days.",
    category: "Timeline",
  },
  {
    question: "Do you ship fragile artworks safely across India?",
    answer: "Yes! All handcrafted frames feature teak wood border framing, protective glass panels, and multi-wrap shockproof padding for 100% damage-free delivery.",
    category: "Shipping",
  },
  {
    question: "Can I customize the names, threads, and photo colors?",
    answer: "Every piece is 100% customizable! You can send any photo (black & white or color), pick your thread color palette, and include personalized calligraphy names or dates.",
    category: "Customization",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Google Pay, PhonePe, Paytm, UPI transfers, Direct Bank Transfers, and major credit/debit cards. A 50% deposit is required upon design approval.",
    category: "Payment",
  },
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "ig-1",
    image: "/images/photo_embroidery_wedding_garland.jpg",
    likes: 1240,
    comments: 112,
    caption: "Wedding Garland Photo Embroidery for LAKSHMI ♡ ANBU! Hand-stitched silk flower garlands over B&W wedding portrait. 🌸✨ #niviarthub #photoembroidery",
    url: "https://instagram.com/nivi_art_hub",
  },
  {
    id: "ig-2",
    image: "/images/name_board_sakthi_joker_led.jpg",
    likes: 1150,
    comments: 108,
    caption: "Joker Comic Theme LED Light Box Name Board created for SAKTHI! 'Why so serious!' 🃏💡 #nameboard",
    url: "https://instagram.com/nivi_art_hub",
  },
  {
    id: "ig-3",
    image: "/images/papercut_lightbox_naruto_anime.jpg",
    likes: 1120,
    comments: 104,
    caption: "Naruto Team 7 Silhouette 4D Layer Cut Papercut Light Box! 🍃⚡ #papercutlightbox",
    url: "https://instagram.com/nivi_art_hub",
  },
  {
    id: "ig-4",
    image: "/images/mirror_welcome_gopuram.jpg",
    likes: 852,
    comments: 64,
    caption: "Traditional South Indian Temple Gopuram Wedding Mirror Welcome Board with Tamil calligraphy! 🪞🌸 #mirrorwelcomeboard",
    url: "https://instagram.com/nivi_art_hub",
  },
];
