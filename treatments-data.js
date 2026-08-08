// Malaya treatment menu — source of truth: supplied menu text. Do not edit prices without client confirmation.
window.MALAYA_TREATMENTS = [
{
  id: "biologique", label: "BIOLOGIQUE RECHERCHE",
  note: "PACKAGES AVAILABLE FOR ALL TREATMENTS.",
  groups: [
    { items: [
      { n: "Module Skin Instant Lab\u00AE", p: "$40", d: "To optimize the efficacy of our treatments." },
      { n: "Basic Biologique Recherche Treatment", p: "$100", d: "A unique, targeted treatment specifically designed for all Skin Instants\u00AE to cleanse and exfoliate the skin using targeting masks and serums." },
      { n: "Biologique Recherche Basic Hydrafacial", p: "$120", d: "A custom treatment customized to skin concerns and conditions, focusing on deep cleaning and exfoliating." },
      { n: "Soin Booster VIP O2", p: "$170", s: "For brighter skin.", d: "A treatment to detoxify and stimulate the epidermis and re-oxygenate skin tissue, for dull Skin Instants\u00AE choked by urban pollution. Your complexion is incredibly revitalized, and the skin is more luminous and radiant." },
      { n: "Soin Restructurant et Lissant", p: "$180", s: "For plumped-up skin.", d: "A skin reconditioning and plumping treatment suitable for all Skin Instants\u00AE. The skin of the face, neck and d\u00E9collet\u00E9 is hydrated, smoothed and regenerated." },
      { n: "Soin MC110", p: "$150", s: "For minimizing wrinkles.", d: "A treatment that reduces wrinkles and fine lines, designed for lackluster Skin Instants\u00AE. It leaves the skin on the face, neck and d\u00E9collet\u00E9 toned and redefined." },
      { n: "Module Micro-Puncture\u00AE", p: "$220", s: "To combat the effects of aging.", note: "Treatment included prior.", d: "An intensive treatment that activates collagen production through intra-epidermal micro-stimulation and helps combat premature signs of skin aging." },
      { n: "Soin Lift C.V.S", p: "$180", s: "For giving the face a lift.", d: "An exfoliating and firming treatment combined with a unique manual technique designed to treat Skin Instants\u00AE that are thick or lacking tone. The skin is revitalized and more toned, as if it has had a lift." },
      { n: "Soin Peeling aux Acides de Fruits", p: "$150", s: "For finer skin texture.", d: "An exfoliating and regenerating treatment for lined, lackluster and thick Skin Instants\u00AE. It leaves the skin smoothed and with a finer texture." },
      { n: "Hydration Ritual", p: "$120", d: "An intensive hydration treatment combining targeting serums and masks for fully hydrated skin." },
      { n: "Soin Toleskin", p: "$140", s: "Instant, soothing skin relief.", d: "Some Skin Instants\u00AE are highly intolerant, whether through heredity or as a result of draining medical or esthetic interventions, and need special care and instant soothing relief. This unique SOS treatment calms the skin while strengthening the epidermis, reducing skin sensitivity and decreasing redness and itching." },
      { n: "Soin Triple Lift (Remodeling Face\u00AE)", p: "$230", s: "For lifted skin.", note: "Includes treatment prior.", d: "The ultimate toning and firming treatment for saggy Skin Instants\u00AE that lack structure and tone. The features and contours of the face, neck and d\u00E9collet\u00E9 are retightened, leaving skin restructured." },
      { n: "Soin Seconde Peau", p: "$200", d: "A regenerating and lifting treatment featuring an electrospun mask with 80% pharmaceutical-grade hyaluronic acid, designed for altered Skin Instants\u00AE.", note: "We recommend three sessions at one-week intervals, followed by one session every three months." },
      { n: "Soin Masque Exfoliant P50 Visage", p: "$180", d: "An exfoliating and regenerating treatment for keratinized Skin Instants\u00AE and skin with an irregular micro-profile. It evens out skin tone, leaving the face smooth and glowing." },
      { n: "Module Contour des Yeux", p: "$70", s: "For a fresher appearance around the eyes.", d: "A unique, targeted treatment specifically designed for Skin Instants\u00AE with dark circles, bags or wrinkles around the eyes. It reduces puffiness, lightens dark circles and smooths fine lines and wrinkles to make the eye area look brighter." }
    ]},
    { title: "MODULE CO-FACTEURS", subtitle: "An intensive custom treatment.",
      description: "For even more visible results, enhance your treatment with the application of a mask pre-infused with active ingredients, which molds itself to the shape of your face for an individualized intensive treatment.",
      start: 16,
      items: [
        { n: "Platysma", p: "$40", d: "Anti-Ptosis Chin mask." },
        { n: "LiftKiss", p: "$30", d: "Contour and Volume Lips Patch." },
        { n: "Masque Pigm 400", p: "$45", d: "Brightening and Radiance Boosting Mask." },
        { n: "Eye Patches", p: "$30" },
        { n: "Masque Biologique F\u00E9erie", p: "$65", d: "Tone, Tense and Revitalise." },
        { n: "Masque Caviar Vert", p: "$40", d: "Anti-wrinkle, smoothing, Biocellulose mask." }
      ]}
  ]
},
{
  id: "treatment", label: "MICRONEEDLING",
  groups: [
    { items: [
      { n: "Microneedling", p: "Starting $80",
        opts: [["FACE", "Starting $80"], ["BODY", "Dependent on body-part size and issue targeted"]],
        d: "Microneedling is a minimally invasive treatment that uses fine needles to create controlled micro-channels in the skin, stimulating collagen and elastin production for smoother, firmer and more radiant skin. The serum cocktail used during the treatment is customized based on the client\u2019s skin type and concerns, whether hydration, brightening, anti-aging or acne support is needed. A personalized serum blend can also be added to a Smart Peel to create a combination treatment targeting multiple skin concerns." },
      { n: "Microneedling + Smart Peel", p: "Starting $150",
        opts: [["FACE", "Starting $150"], ["BODY", "Dependent on body-part size and issue targeted"]] },
      { n: "Microneedling + Hydrafacial", p: "Starting $150",
        opts: [["FACE", "Starting $150"], ["BODY", "Dependent on body-part size and issue targeted"]] }
    ]}
  ]
},
{
  id: "glow", label: "THE GLOW MENU",
  groups: [
    { items: [
      { n: "Transformation Facial Treatment", p: "$200",
        d: "A combination of a deep clean and smart peel made for all skin types, reducing pore size, accelerating skin turnover, whitening the skin, reducing pigmentation and acne scarring.",
        note: "Ideal for all skin types. Includes full-body massage." },
      { n: "Algae Peel", p: "$150 \u2013 $200",
        opts: [["FACE", "$150 \u2013 $200"], ["BODY", "Starting $200"]],
        d: "A deep peel crafted for all skin types. The outer layer of skin is removed, helping address pigmentation, scarring and stretch marks while also regulating sebum. Can be performed on the face and body.",
        note: "Body pricing dependent on body-part size and issue targeted." },
      { n: "Pro Retinol Treatment", p: "$80",
        opts: [["FACE", "$80"], ["BODY", "Starting $80"]],
        d: "A smart peel crafted for all skin types, accelerating skin turnover. The skin is revitalized, toned and given an added glow.",
        note: "Body pricing dependent on body-part size and issue targeted." },
      { n: "Azelaic Acid Treatment", p: "$80",
        opts: [["FACE", "$80"], ["BODY", "Starting $80"]],
        d: "A treatment intended to reduce redness, calm the skin and boost hydration. Ideal for all skin types, especially rosacea-prone, dry, dehydrated or sensitive skin.",
        note: "Body pricing dependent on body-part size and issue targeted." },
      { n: "Illumea Treatment", p: "$100",
        opts: [["FACE", "$100"], ["BODY", "Starting $100"]],
        d: "A smart peel made for all skin types, accelerating skin turnover, whitening the skin and reducing pigmentation and acne scarring.",
        note: "Ideal for all skin types. Body pricing dependent on body-part size and issue targeted." }
    ]}
  ]
},
{
  id: "beauty", label: "BEAUTY",
  subs: [
    { id: "nails", label: "NAILS", groups: [
      { items: [
        { n: "Traditional Manicure", p: "$15" }, { n: "Traditional Pedicure", p: "$20" },
        { n: "Medical Pedicure", p: "$25" }, { n: "Russian Manicure", p: "$20" },
        { n: "Russian Pedicure", p: "$25" }, { n: "Pose Normal Hands", p: "$8" },
        { n: "Pose Normal Feet", p: "$8" }, { n: "Pose Hands and Feet", p: "$15" },
        { n: "Pose Gelish Hands", p: "$15" }, { n: "Pose Gelish Feet", p: "$20" },
        { n: "Pose Rubber Hands", p: "$20" }, { n: "Pose Rubber Feet", p: "$25" },
        { n: "Acrylic Full Set", p: "$80" }, { n: "Acrylic Refill", p: "$40" },
        { n: "Gel Extension Full Set", p: "$80" }, { n: "Gel Extension Refill", p: "$40" },
        { n: "Broken Nail", p: "$5" }, { n: "Fake Nails", p: "$30" },
        { n: "Traditional Mani Pedi Pose Gelish", p: "$65" },
        { n: "Traditional Mani Pedi Pose Rubber", p: "$70" }
      ]},
      { title: "NAIL ADD-ONS", start: 21, items: [
        { n: "French Normal", p: "$3" }, { n: "French Gel", p: "$5" },
        { n: "Design", p: "Starting $3" }, { n: "Chrome", p: "$5" },
        { n: "Paraffin Hands", p: "$15" }, { n: "Paraffin Feet", p: "$20" },
        { n: "Men\u2019s Manicure", p: "$20" }, { n: "Men\u2019s Pedicure", p: "$25" }
      ]}
    ]},
    { id: "hair", label: "HAIR", groups: [
      { items: [
        { n: "Brushing", p: "$15" }, { n: "Haircut", p: "$50" }, { n: "Trimming", p: "$30" },
        { n: "Fusio Dose", p: "$35" }, { n: "Hair Mask", p: "$25" },
        { n: "Malaya Signature Hair Treatment", p: "$35" }, { n: "Caviar Treatment", p: "$50" },
        { n: "Premi\u00E8re Treatment", p: "$50" }, { n: "Scalp Scrub", p: "$35" },
        { n: "Rinsage", p: "$40" }, { n: "Full Hair Color", p: "Starting $80" },
        { n: "Root Retouch", p: "$45" }, { n: "Root Retouch INOA", p: "$60" },
        { n: "Blowout", p: "Starting $120" }, { n: "Krystal / Keratin / Protein", p: "Starting $100" },
        { n: "Half Updo", p: "Starting $30" }, { n: "Updo", p: "Starting $35" },
        { n: "Ponytail", p: "$25" }
      ]},
      { title: "HAIR COMBINATION SERVICES", start: 19,
        note: "Highlight and lowlight prices vary based on hair characteristics. Bridal packages: price upon request.",
        items: [
          { n: "Lowlight + Standard Mask + Roots + Rinsage + Trimming + Brushing", p: "Starting $200" },
          { n: "Highlight + Standard Mask + Roots + Rinsage + Trimming + Brushing", p: "Starting $250" }
        ]},
      { title: "HAIR PACKAGES", start: 21, items: [
        { n: "Standard Mask + Trim + Brushing", p: "$50" },
        { n: "Full Hair Color + Trim + Standard Mask + Brushing", p: "$150" },
        { n: "Roots + Rinsage + Trim + Brushing + Smoothing Ampule", p: "$110" },
        { n: "Full Hair Cut + Extend Roots + Extend AADE + Brushing", p: "$60" },
        { n: "Scalp Scrub + Hair Treatment + Brushing", p: "$50" }
      ]}
    ]},
    { id: "wax", label: "WAX", groups: [
      { items: [
        { n: "Nose", p: "$5" }, { n: "Ears", p: "$5" }, { n: "Upper Lip", p: "$5" },
        { n: "Chin", p: "$5" }, { n: "Sideburns", p: "$10" }, { n: "Full Face", p: "$20" },
        { n: "Neck, Front and Back", p: "$10" }, { n: "Chest", p: "$10" },
        { n: "Underarms", p: "$10" }, { n: "Full Arms", p: "$15" }, { n: "Half Legs", p: "$15" },
        { n: "Full Legs", p: "$20" }, { n: "Full Stomach", p: "$20" }, { n: "Full Back", p: "$25" },
        { n: "Full Bikini", p: "$15" }, { n: "Bikini Line", p: "$10" }, { n: "Full Buttocks", p: "$15" }
      ]}
    ]},
    { id: "threading", label: "THREADING", groups: [
      { items: [
        { n: "Full Face, Including Upper Lip and Eyebrows", p: "$20" },
        { n: "Upper Lip", p: "$5" }, { n: "Sideburns", p: "$10" }, { n: "Eyebrows", p: "$7" },
        { n: "Chin", p: "$5" }, { n: "Eyebrows + Upper Lip", p: "$10" }
      ]}
    ]},
    { id: "laser", label: "LASER HAIR REMOVAL", groups: [
      { title: "WOMEN\u2019S LASER \u2014 FACE", items: [
        { n: "Hairline", p: "$15" }, { n: "Sideburns", p: "$20" }, { n: "Upper Lip", p: "$10" },
        { n: "Chin", p: "$15" }, { n: "Cheeks", p: "$15" }, { n: "Upper Lip + Chin", p: "$20" },
        { n: "Full Face", p: "$50" }
      ]},
      { title: "WOMEN\u2019S LASER \u2014 BODY", start: 8, items: [
        { n: "Neck, Front and Back", p: "$30" }, { n: "Shoulders", p: "$20" },
        { n: "Underarms", p: "$40" }, { n: "Upper Arm", p: "$25" }, { n: "Lower Arm", p: "$25" },
        { n: "Full Arm", p: "$50" }, { n: "Nipples", p: "$15" }, { n: "Chest Line", p: "$15" },
        { n: "Full Chest with Nipples", p: "$30" }, { n: "Full Abdomen", p: "$50" },
        { n: "Abdominal Hair Line", p: "$15" }, { n: "Full Back", p: "$60" },
        { n: "Half Back", p: "$30" }, { n: "Hands", p: "$10" }, { n: "Feet", p: "$10" },
        { n: "Full Bikini with Bum Line", p: "$40" }, { n: "Bikini Line", p: "$30" },
        { n: "Buttock / Fesse", p: "$35" }, { n: "Thighs", p: "$50" },
        { n: "Full Legs", p: "$70" }, { n: "Lower Legs", p: "$30" }
      ]},
      { title: "WOMEN\u2019S LASER PACKAGES", start: 29, items: [
        { n: "Full Bikini + Underarms", p: "$70" },
        { n: "Full Body Standard with Face", p: "$220", note: "Includes: Face, underarms, arms, bikini and legs." },
        { n: "Full Body Standard", p: "$180", note: "Includes: Underarms, arms, bikini and legs." },
        { n: "Full Body with Extras", p: "$390", note: "Includes: Face, underarms, arms, back, abdomen, fesse, bikini and legs." }
      ]},
      { title: "MEN\u2019S LASER \u2014 FACE", items: [
        { n: "Sideburns", p: "$15" }, { n: "Ears", p: "$10" }, { n: "Beard Line", p: "$25" },
        { n: "Cheeks", p: "$20" }, { n: "Neck, Front and Back", p: "$25" }, { n: "Full Face", p: "$50" }
      ]},
      { title: "MEN\u2019S LASER \u2014 BODY", start: 7, items: [
        { n: "Shoulders", p: "$20" }, { n: "Underarms", p: "$40" }, { n: "Upper Arm", p: "$40" },
        { n: "Lower Arm", p: "$40" }, { n: "Full Arm", p: "$70" }, { n: "Chest", p: "$50" },
        { n: "Full Abdomen", p: "$50" }, { n: "Lower Abdomen / Abdominal Line", p: "$25" },
        { n: "Chest and Abdomen", p: "$90" }, { n: "Full Back", p: "$70" }, { n: "Half Back", p: "$35" },
        { n: "Hands", p: "$15" }, { n: "Feet", p: "$15" }, { n: "Thighs", p: "$60" },
        { n: "Full Legs", p: "$100" }, { n: "Lower Legs", p: "$50" }
      ]},
      { title: "MEN\u2019S LASER PACKAGE", start: 23, items: [
        { n: "Upper Body with Face", p: "$200", note: "Includes: Face, underarms, chest, full back and abdomen." }
      ]},
      { title: "LASER PACKAGE DISCOUNTS", note: "6 SESSIONS: 15% OFF \u00B7 8 SESSIONS: 20% OFF \u00B7 RETOUCH: 25%\u201350% OFF", items: [] }
    ]}
  ]
},
{
  id: "massage", label: "MASSAGE",
  groups: [
    { items: [
      { n: "Classic Massage", p: "From $40", du: "30 \u2013 90 MIN",
        opts: [["30 MIN", "$40"], ["60 MIN", "$60"], ["90 MIN", "$85"]],
        d: "A traditional full-body massage that relaxes muscles, relieves stress and improves circulation." },
      { n: "Deep Tissue Massage", p: "From $50", du: "60 \u2013 80 MIN",
        opts: [["30 MIN", "$50"], ["60 MIN", "$70"], ["90 MIN", "$100"]],
        d: "An intense massage focusing on deeper layers of muscle tissue to relieve chronic pain and tension.",
        note: "Recommended range: 60\u201380 minutes." },
      { n: "Body Scrub", p: "$40", du: "20 \u2013 30 MIN",
        d: "An exfoliating treatment that removes dead skin cells, leaving the skin smooth and refreshed." },
      { n: "Body Scrub + Classic Massage", p: "$85", du: "90 \u2013 100 MIN" },
      { n: "Body Scrub + Deep Tissue Massage", p: "$95", du: "90 \u2013 100 MIN" },
      { n: "Lymphatic Massage", p: "$70", du: "45 \u2013 60 MIN",
        d: "A gentle massage aimed at stimulating the lymphatic system to reduce swelling and support the immune system." },
      { n: "Madero Therapy", p: "$70", du: "60 MIN",
        d: "A massage technique that uses anatomically designed wooden tools to contour the body. It aims to break down fat deposits, improve lymphatic drainage, enhance circulation and tone the skin." },
      { n: "Head, Neck and Shoulder Massage", p: "$30", du: "20 \u2013 30 MIN",
        d: "A focused massage targeting tension in the head, neck and shoulders, helping relieve stress and headaches." },
      { n: "Reflexology Massage", p: "$30", du: "20 \u2013 35 MIN",
        d: "A therapeutic foot massage that applies pressure to specific points on the feet to improve overall health and reduce stress. This may also include points on the hands and ears." },
      { n: "Face Lift Massage", p: "$50", du: "45 \u2013 60 MIN",
        d: "A massage designed to tone facial muscles, reduce wrinkles and give a more youthful appearance. Slimming." }
    ]}
  ]
},
{
  id: "skincare", label: "SKINCARE",
  note: "SKINCARE PACKAGE DISCOUNTS \u2014 6 SESSIONS: 15% OFF \u00B7 8 SESSIONS: 20% OFF",
  subs: [
    { id: "hifu", label: "HIFU", groups: [
      { items: [
        { n: "Face", p: "$150" }, { n: "Neck", p: "$150" }, { n: "Face & Neck", p: "$200" },
        { n: "Double Chin", p: "$70" }, { n: "D\u00E9collet\u00E9", p: "$200" }, { n: "Abdomen", p: "$250" },
        { n: "Back", p: "$250" }, { n: "Buttock / Fesse", p: "$250" }, { n: "Inner Thighs", p: "$200" },
        { n: "Thighs, Front and Back", p: "$250" }
      ]}
    ]},
    { id: "rf", label: "RF MICRONEEDLING", groups: [
      { items: [
        { n: "Face", p: "$150" }, { n: "Neck", p: "$150" }, { n: "D\u00E9collet\u00E9", p: "$200" },
        { n: "Face and Neck", p: "$250" }, { n: "Face, Neck and D\u00E9collet\u00E9", p: "$370" },
        { n: "Stretch Marks", p: "Starting $150" }, { n: "Textured Skin", p: "Starting $150" },
        { n: "Hyperpigmentation", p: "Starting $150" }, { n: "Scars", p: "Starting $80" }
      ]}
    ]},
    { id: "pico", label: "PICOSECOND LASER BLEACHING", groups: [
      { items: [
        { n: "Full Face", p: "$35" }, { n: "Sideburns", p: "$20" }, { n: "Chin", p: "$15" },
        { n: "Neck, Front", p: "$25" }, { n: "Neck, Back", p: "$25" },
        { n: "Full Face and Neck, Front", p: "$50" }, { n: "Shoulders", p: "$40" },
        { n: "Upper Arms", p: "$60" }, { n: "Chest, Including Nipples", p: "$50" },
        { n: "Nipples", p: "$15" }, { n: "Abdomen", p: "$50" }, { n: "Abdomen Line", p: "$20" },
        { n: "Upper Back", p: "$70" }, { n: "Lower Back", p: "$70" }
      ]}
    ]},
    { id: "carbon", label: "CARBON LASER", groups: [
      { items: [
        { n: "Full Face", p: "$40" }, { n: "Neck", p: "$25" }, { n: "Face and Neck", p: "$55" },
        { n: "Underarms", p: "$40" }, { n: "Upper Arms", p: "$40" }, { n: "Elbows", p: "$20" },
        { n: "Bikini", p: "$40" }, { n: "Bikini Line", p: "$25" }, { n: "Knees", p: "$25" },
        { n: "Hands / Feet", p: "$15" }, { n: "Full Back", p: "$60" },
        { n: "Acne Scars / Scars", p: "Starting $15" }, { n: "Buttocks", p: "$50" }
      ]}
    ]},
    { id: "contura", label: "CONTURA", groups: [
      { items: [
        { n: "Arms", p: "$40" }, { n: "Abdomen", p: "$40" }, { n: "Waist", p: "$40" },
        { n: "Buttocks", p: "$50" }, { n: "Thighs", p: "$50" }, { n: "Calves", p: "$40" }
      ]}
    ]}
  ]
}
];
