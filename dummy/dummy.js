const commonEnglishWords = [
    "the", "be", "to", "of", "and", "a", "in", "that", "have", "I", "it", "for", "not", "on", "with", "he", "as", "you", "do", "at", "this", "but", "his", "by", "from", "they", "we", "say", "her", "she", "or", "an", "will", "my", "one", "all", "would", "there", "their", "what", "so", "up", "out", "if", "about", "who", "get", "which", "go", "me", "when", "make", "can", "like", "time", "no", "just", "him", "know", "take", "people", "into", "year", "your", "good", "some", "could", "them", "see", "other", "than", "then", "now", "look", "only", "come", "its", "over", "think", "also", "back", "after", "use", "two", "how", "our", "work", "first", "well", "way", "even", "new", "want", "because", "any", "these", "give", "day", "most", "us", "way", "look", "more", "find", "here", "thing", "give", "many", "well", "very", "long", "make", "great", "last", "should", "put", "place", "come", "made", "might", "must", "them", "call", "than", "before", "big", "can", "every", "many", "word", "other", "find", "good", "new", "now", "could", "around", "sound", "ask", "give", "own", "under", "such", "very", "just", "both", "mean", "put", "help", "start", "same", "few", "tell", "show", "think", "around", "long", "help", "also", "even", "new", "after", "back", "good", "because", "came", "found", "show", "own", "each", "other", "old", "before", "away", "take", "right", "too", "great", "show", "just", "me", "you", "new", "where", "old", "just", "give", "may", "hear", "year", "read", "said", "she", "all", "can", "we", "say", "want", "any", "how", "first", "after", "thing", "just", "made", "two", "more", "man", "let", "who", "want", "before", "him", "give", "do", "try", "ask", "own", "must", "let", "now", "two", "tell", "day", "over", "well", "all", "any", "work", "high", "old", "his", "still", "off", "play", "let", "now", "come", "hand", "old", "large", "big", "few", "well", "put", "word", "against", "form", "affect", "head", "men", "need", "large", "move", "for", "form", "big", "found", "follow", "even", "give", "long", "new", "get", "place", "why", "say", "some", "take", "look", "get", "high", "away", "move", "day", "play", "tell", "put", "first", "how", "come", "set", "day", "end", "try", "same", "she", "take", "set", "new", "point", "sound", "do", "have", "put", "under", "life", "find", "most", "over", "right", "through", "under", "even", "good", "such", "do", "off", "too", "not", "come", "over", "before", "found", "small", "try", "set", "name", "large", "because", "might", "more", "through", "off", "like", "all", "when", "these", "could", "work", "might", "even", "need", "here", "such", "why", "how", "try", "men", "out", "want", "own", "come", "home", "play", "after", "all", "over", "from", "can", "her", "even", "him", "say", "year", "own", "there", "work", "out", "then", "which", "out", "only", "his", "him", "some", "there", "could", "only", "do", "work", "than", "know", "our", "may", "out", "first", "make", "has", "how", "where", "their", "may", "can", "more", "when", "two", "years", "before", "way", "us", "its", "over", "from", "time", "out", "other", "two", "make", "could", "first", "may", "even", "her", "old", "new", "from", "year", "say", "its", "first", "after", "which", "most", "back", "use", "does", "say", "year", "like", "just", "which", "one", "does", "our", "if", "time", "know", "said", "go", "most", "way", "after", "high", "way", "even", "own", "only", "like", "get", "her", "two", "their", "want", "said", "go", "some", "her", "our", "say", "see", "may", "there", "has", "how", "has", "all", "over", "own", "even", "very", "go", "her", "day", "out", "even", "over", "most", "only", "own", "could", "very", "our", "she", "does", "over", "first", "way", "other", "why", "our", "out", "new", "just", "all", "does", "from", "even", "over", "use", "may", "has", "any", "said", "all", "may", "even", "him", "can", "even", "use", "year", "want"]

const commonEnglishObjects = [
    "table", "chair", "desk", "lamp", "book", "pen", "pencil", "notebook", "computer", "keyboard",
    "mouse", "monitor", "phone", "clock", "calendar", "door", "window", "car", "bicycle", "motorcycle",
    "television", "radio", "couch", "bed", "pillow", "blanket", "plate", "fork", "spoon", "knife",
    "cup", "glass", "bowl", "pot", "pan", "stove", "oven", "refrigerator", "microwave", "sink",
    "toilet", "shower", "bathtub", "towel", "soap", "shampoo", "toothbrush", "toothpaste", "mirror",
    "brush", "comb", "hairdryer", "closet", "dresser", "shirt", "pants", "shoes", "socks", "jacket",
    "hat", "scarf", "gloves", "tie", "belt", "wallet", "purse", "bag", "suitcase", "umbrella",
    "backpack", "watch", "bracelet", "earrings", "necklace", "ring", "glasses", "sunglasses", "camera",
    "headphones", "microphone", "guitar", "drums", "piano", "violin", "trumpet", "flute", "keyboard",
    "saxophone", "accordion", "bass", "viola", "cello", "harmonica", "harp", "painting", "drawing",
    "sculpture", "photograph", "vase", "statue", "figurine", "candle", "lampshade", "mirror", "clock",
    "ruler", "calculator", "globe", "map", "flag", "calendar", "postcard", "journal", "diary",
    "notebook", "sketchbook", "album", "portfolio", "folder", "file", "document", "paper", "envelope",
    "stamp", "tape", "glue", "scissors", "stapler", "pencil sharpener", "eraser", "chalk", "marker",
    "highlighter", "ink", "paint", "brush", "canvas", "easel", "palette", "charcoal", "pastels",
    "watercolor", "acrylic", "oil paint", "gouache", "brush pen", "sketchpad", "paperclip", "staple",
    "thumbtack", "push pin", "ruler", "protractor", "compass", "chalkboard", "whiteboard", "bulletin board",
    "poster", "banner", "flyer", "brochure", "pamphlet", "leaflet", "magazine", "newspaper", "book",
    "novel", "story", "essay", "poem", "article", "column", "editorial", "review", "interview",
    "feature", "advertisement", "menu", "recipe", "instruction", "manual", "guide", "catalog", "index",
    "table of contents", "bibliography", "appendix", "footnote", "heading", "subheading", "title", "caption",
    "footnote", "paragraph", "sentence", "word", "letter", "punctuation", "quote", "parenthesis", "ellipsis",
    "question", "exclamation", "comma", "period", "colon", "semicolon", "hyphen", "dash", "apostrophe",
    "quotation marks", "parentheses", "brackets", "brace", "underscore", "bullet", "asterisk", "slash", "backslash",
    "ampersand", "percent sign", "dollar sign", "pound sign", "euro sign", "yen sign", "copyright symbol",
    "registered trademark symbol", "trademark symbol", "degree symbol", "plus sign", "minus sign", "equals sign",
    "greater than sign", "less than sign", "at symbol", "hashtag", "smiley face", "heart", "star", "circle",
    "square", "triangle", "diamond", "arrow", "line", "curve", "wave", "cloud", "sun", "moon",
    "star", "planet", "galaxy", "universe", "tree", "flower", "grass", "bush", "rock", "stone",
    "mountain", "hill", "valley", "canyon", "river", "stream", "lake", "pond", "ocean", "sea",
    "beach", "desert", "jungle", "forest", "rainforest", "tundra", "arctic", "antarctic", "island",
    "volcano", "earthquake", "tornado", "hurricane", "tsunami", "flood", "fire", "blizzard", "avalanche",
    "meteor", "comet", "asteroid", "rocket", "spaceship", "satellite", "space station", "astronaut", "alien",
    "UFO", "robot", "computer", "internet", "website", "webpage", "blog", "forum", "social media",
    "search engine", "email", "chat", "video call", "text message", "phone call", "voicemail", "alarm",
    "reminder", "calendar", "clock", "timer", "stopwatch", "thermometer", "barometer", "compass", "map",
    "GPS", "ruler", "scale", "calculator", "notebook", "journal", "diary", "agenda", "planner",
    "calendar", "schedule", "appointment", "meeting", "conference", "lecture", "presentation", "seminar", "workshop",
    "class", "lesson", "course", "school", "college", "university", "library", "bookstore", "cafeteria",
    "restaurant", "cafe", "bakery", "grocery store", "supermarket", "market", "mall", "shopping center", "department store",
    "boutique", "shop", "store", "pharmacy", "bank", "ATM", "post office", "mail", "parcel", "package",
    "stamp", "envelope", "letter", "postcard", "mailbox", "courier", "delivery", "shipping", "reception",
    "lobby", "waiting room", "office", "desk", "chair", "computer", "laptop", "monitor", "keyboard",
    "mouse", "printer", "scanner", "photocopier", "fax", "telephone", "landline", "cell phone", "smartphone",
    "tablet", "device", "gadget", "charger", "battery", "headset", "earphones", "speaker", "microphone"]
const commonEnglishVerbs = [
    "be", "have", "do", "say", "get", "make", "go", "know", "take", "see",
    "come", "think", "look", "want", "give", "use", "find", "tell", "ask", "work",
    "seem", "feel", "try", "leave", "call", "need", "try", "feel", "become", "leave",
    "put", "mean", "keep", "let", "begin", "seem", "help", "talk", "turn", "start",
    "show", "hear", "play", "run", "move", "like", "live", "believe", "hold", "bring",
    "happen", "write", "provide", "sit", "stand", "lose", "pay", "meet", "include", "continue",
    "set", "learn", "change", "lead", "understand", "watch", "follow", "stop", "create", "speak",
    "read", "allow", "add", "spend", "grow", "open", "walk", "win", "offer", "remember",
    "love", "consider", "appear", "buy", "wait", "serve", "die", "send", "expect", "build",
    "stay", "fall", "cut", "reach", "kill", "remain", "suggest", "raise", "pass", "sell",
    "require", "report", "decide", "pull", "break", "apply", "explain", "wish", "sell", "drive",
    "accept", "belong", "remain", "visit", "bear", "experience", "discuss", "cover", "enter", "involve",
    "offer", "sound", "accept", "receive", "discuss", "report", "decide", "return", "exist", "ensure",
    "ask", "add", "receive", "allow", "hope", "develop", "carry", "seek", "cover", "depend",
    "try", "move", "suffer", "avoid", "express", "prepare", "arrive", "attend", "compare", "apply",
    "report", "drink", "walk", "hear", "determine", "remain", "eat", "cover", "suggest", "sing",
    "reach", "kill", "press", "remain", "connect", "burn", "shoot", "talk", "store", "fly",
    "cook", "lift", "die", "stick", "split", "work", "reach", "admit", "print", "spread",
    "perform", "stay", "spread", "sell", "contain", "shoot", "depend", "surround", "smell", "consist",
    "insist", "walk", "admit", "wear", "accomplish", "run", "complain", "sing", "announce", "concentrate",
    "destroy", "submit", "beat", "accompany", "appreciate", "relate", "observe", "detect", "correspond", "conduct",
    "live", "apologize", "hesitate", "sustain", "comprise", "insist", "focus", "anticipate", "relax", "acquire",
    "retain", "satisfy", "calculate", "translate", "omit", "assess", "communicate", "react", "trace", "hurt",
    "ruin", "acknowledge", "fulfill", "alter", "search", "enjoy", "acknowledge", "predict", "emphasize", "interact",
    "converse", "hesitate", "calculate", "anticipate", "email", "skate", "ride", "play", "freeze", "promise",
    "shout", "insist", "agree", "claim", "neglect", "doubt", "deserve", "occupy", "link", "rely",
    "yell", "delay", "explode", "glance", "emphasize", "restore", "overcome", "manufacture", "guarantee", "overlook",
    "comprise", "amuse", "entertain", "jump", "worry", "fancy", "glare", "borrow", "wonder", "relate",
    "faint", "comprehend", "suspect", "crash", "inspect", "fade", "communicate", "respect", "gaze", "lean",
    "murmur", "interpret", "bake", "climb", "excel", "adapt", "relax", "campaign", "participate", "arise",
    "dine", "contemplate", "resume", "bend", "question", "hesitate", "recite", "conform", "blame", "meditate",
    "shine", "recognize", "discover", "investigate", "estimate", "flee", "lick", "whisper", "manipulate", "progress",
    "stroke", "bless", "travel", "venture", "reside", "refrain", "complain", "indicate", "cater", "triumph",
    "travel", "resemble", "stumble", "transmit", "sob", "stride", "encounter", "meditate", "applaud", "plead",
    "administer", "believe", "defend", "inject", "linger", "celebrate", "inspire", "splash", "decorate", "yawn",
    "accuse", "confess", "abandon", "tolerate", "crave", "criticize", "linger", "gasp", "analyze", "conceal",
    "gasp", "survive", "sing", "swallow", "attend", "gaze", "sneak", "accelerate", "hike", "assemble",
    "hail", "twitch", "linger", "examine", "cram", "deposit", "exert", "fuss", "multiply", "humiliate",
    "swell", "excel", "motivate", "recommend", "whisper", "boast", "crawl", "rebel", "cultivate", "embody",
    "circulate", "descend", "deceive", "jog", "discriminate", "thrive", "skip", "stroll", "endorse", "critique",
    "inspect", "revolve", "whine", "renew", "overwhelm", "suppress", "fake", "trip", "applaud", "crawl",
    "verify", "linger", "restrain", "hug", "critique", "grumble", "trickle", "lurk", "detest", "adapt",
    "distract", "glide", "recite"]

const commonSubjects = [
    "Mathematics", "Science", "English", "History", "Geography", "Art", "Music",
    "Physical Education", "Computer Science", "Literature", "Social Studies",
    "Foreign Languages", "Economics", "Health", "Civics", "Psychology",
    "Biology", "Chemistry", "Physics", "Environmental Science", "Anatomy", "Astronomy",
    "Botany", "Ecology", "Geology", "Meteorology", "Oceanography", "Zoology",
    "Algebra", "Geometry", "Trigonometry", "Calculus", "Statistics", "Probability",
    "English Literature", "American Literature", "World Literature", "Poetry", "Drama",
    "Fiction", "Non-fiction", "Writing", "Grammar", "Reading Comprehension",
    "World History", "European History", "Asian History", "African History", "Latin American History",
    "United States History", "Ancient History", "Medieval History", "Renaissance History", "Modern History",
    "Physical Geography", "Human Geography", "Cultural Geography", "Economic Geography", "Political Geography",
    "Art History", "Sculpture", "Painting", "Drawing", "Photography", "Architecture",
    "Music Theory", "Music History", "Instrumental Music", "Vocal Music", "Chorus",
    "Physical Education", "Sports", "Fitness", "Health Education", "Nutrition",
    "Computer Programming", "Web Development", "Database Management", "Network Security", "Information Technology",
    "Foreign Languages", "Spanish", "French", "German", "Chinese", "Japanese",
    "Italian", "Russian", "Arabic", "Latin", "Greek",
    "Microeconomics", "Macroeconomics", "International Economics", "Development Economics", "Labor Economics",
    "Health Science", "Nutrition Science", "Exercise Science", "Public Health", "Epidemiology",
    "Political Science", "Government", "International Relations", "Public Policy", "Comparative Politics",
    "Psychology", "Developmental Psychology", "Social Psychology", "Cognitive Psychology", "Abnormal Psychology",
    "Sociology", "Anthropology", "Cultural Studies", "Gender Studies", "Urban Studies",
    "Philosophy", "Ethics", "Logic", "Metaphysics", "Epistemology",
    "Religious Studies", "Bible Studies", "Theology", "Comparative Religion", "Religious Ethics",
    "Law", "Criminal Justice", "Legal Studies", "Constitutional Law", "Civil Rights Law",
    "Engineering", "Mechanical Engineering", "Civil Engineering", "Electrical Engineering", "Computer Engineering",
    "Chemical Engineering", "Biomedical Engineering", "Aerospace Engineering", "Environmental Engineering", "Materials Engineering",
    "Medicine", "Biology", "Chemistry", "Physics", "Mathematics",
    "Geography", "Computer Science", "Information Technology", "Literature", "Sociology",
    "Political Science", "Psychology", "Economics", "History", "Anthropology",
    "Art History", "Music History", "Religious Studies", "Philosophy", "Cultural Studies",
    "Environmental Science", "Health Science", "Criminology", "Law", "Engineering",
    "Education", "Business", "Management", "Marketing", "Finance",
    "Accounting", "Communication", "Journalism", "Film Studies", "Theater",
    "Dance", "Fashion Design", "Interior Design", "Architecture", "Graphic Design",
    "Animation", "Game Design", "Hospitality Management", "Tourism", "Culinary Arts",
    "Veterinary Science", "Agriculture", "Forestry", "Horticulture", "Fisheries",
    "Aquaculture", "Meteorology", "Astronomy", "Geology", "Oceanography",
    "Zoology", "Botany", "Ecology", "Conservation Biology", "Marine Biology",
    "Entomology", "Genetics", "Microbiology", "Cell Biology", "Biochemistry",
    "Neuroscience", "Pharmacology", "Immunology", "Pathology", "Epidemiology",
    "Biotechnology", "Bioinformatics", "Nanotechnology", "Astrophysics", "Particle Physics",
    "Quantum Mechanics", "Cosmology", "Condensed Matter Physics", "Optics", "Thermodynamics",
    "Robotics", "Artificial Intelligence", "Machine Learning", "Data Science", "Cybersecurity",
    "Computer Networks", "Software Engineering", "Human-Computer Interaction", "Database Management", "Web Development",
    "Algorithms", "Operating Systems", "Computer Graphics", "Digital Media", "Virtual Reality",
    "Augmented Reality", "Computer Vision", "Natural Language Processing", "Distributed Systems", "Cloud Computing",
    "Blockchain Technology", "Internet of Things", "Wireless Communication", "Big Data", "Quantum Computing",
    "Software Testing", "Mobile Development", "Game Development", "Embedded Systems", "Bioinformatics",
    "Forensic Science", "Criminal Justice", "Criminology", "Forensic Psychology", "Forensic Anthropology",
    "Forensic Pathology", "Forensic Toxicology", "Forensic Entomology", "Crime Scene Investigation", "Ballistics",
    "DNA Analysis", "Fingerprint Analysis", "Firearm Examination", "Footwear Analysis", "Handwriting Analysis",
    "Questioned Document Examination", "Digital Forensics", "Cybercrime Investigation", "White-Collar Crime", "Financial Crime",
    "Terrorism Investigation", "Cybersecurity", "Data Breach Investigation", "Fraud Investigation", "Identity Theft Investigation",
    "Network Forensics", "Mobile Forensics", "Computer Forensics", "Malware Analysis", "Incident Response",
    "Penetration Testing", "Vulnerability Assessment", "Risk Management", "Security Policy Development", "Security Awareness Training",
    "Ethical Hacking", "Social Engineering", "Physical Security", "Biometric Security", "Access Control",
    "Surveillance Systems", "Emergency Management", "Disaster Recovery", "Business Continuity Planning", "Crisis Management",
    "Hazmat Response", "Search and Rescue", "Emergency Medical Services", "Public Safety", "Homeland Security",
    "Counterterrorism", "Border Security", "Critical Infrastructure Protection", "Emergency Communications", "Emergency Operations Centers",
    "Fire Services", "Law Enforcement", "Police Science", "Criminal Investigation", "Community Policing",
    "Intelligence Analysis", "Crime Prevention", "Traffic Enforcement", "Patrol Operations", "K-9 Units",
    "Special Weapons and Tactics (SWAT)", "Hostage Negotiation", "Crime Scene Management", "Digital Evidence Collection", "Surveillance Operations",
    "Undercover Operations", "Gang Investigations", "Narcotics Investigations", "Financial Investigations", "Cyber Investigations", "Human Trafficking Investigations", "Child Explo"]
const commonAdjectives = [
    "good", "bad", "big", "small", "happy", "sad", "angry", "calm", "bright", "dark",
    "fast", "slow", "hot", "cold", "loud", "quiet", "hard", "soft", "heavy", "light",
    "tall", "short", "old", "young", "rich", "poor", "thick", "thin", "deep", "shallow",
    "wide", "narrow", "clean", "dirty", "wet", "dry", "sweet", "sour", "bitter", "spicy",
    "fresh", "stale", "smooth", "rough", "sharp", "dull", "brave", "fearful", "happy", "sad",
    "angry", "calm", "fierce", "gentle", "hard", "soft", "furious", "jolly", "merry", "solemn",
    "bright", "dark", "light", "heavy", "free", "bound", "vast", "tiny", "wise", "foolish",
    "lovely", "hideous", "courageous", "timid", "simple", "complex", "plain", "fancy", "clumsy", "graceful",
    "beautiful", "ugly", "delicious", "disgusting", "fragrant", "stinky", "fragile", "sturdy", "vibrant", "dull",
    "magnificent", "ordinary", "majestic", "humble", "mysterious", "obvious", "pleasant", "unpleasant", "practical", "impractical",
    "unique", "common", "rare", "plentiful", "scarce", "remote", "nearby", "empty", "full", "silent",
    "noisy", "tender", "harsh", "joyful", "sorrowful", "daring", "cautious", "generous", "selfish", "patient",
    "impatient", "adventurous", "reserved", "courteous", "rude", "gentle", "rough", "energetic", "lethargic", "proud",
    "modest", "strong", "weak", "mighty", "feeble", "prudent", "reckless", "loyal", "disloyal", "obedient",
    "disobedient", "innocent", "guilty", "honest", "dishonest", "candid", "sly", "optimistic", "pessimistic", "cheerful",
    "gloomy", "friendly", "hostile", "patient", "impatient", "active", "passive", "sincere", "insincere", "efficient",
    "inefficient", "frugal", "extravagant", "bright", "dull", "flexible", "rigid", "content", "discontent", "eager",
    "reluctant", "innovative", "conventional", "heroic", "cowardly", "idealistic", "realistic", "shy", "outgoing", "cooperative",
    "competitive", "bold", "timid", "creative", "conventional", "neat", "messy", "patient", "impatient", "thrifty",
    "wasteful", "lucky", "unlucky", "mature", "immature", "casual", "formal", "grateful", "ungrateful", "polite",
    "rude", "humble", "arrogant", "wise", "foolish", "sophisticated", "naive", "respectful", "disrespectful", "responsible",
    "irresponsible", "courteous", "uncouth", "diligent", "lazy", "ambitious", "unambitious", "intelligent", "stupid", "logical",
    "illogical", "sensitive", "insensitive", "modest", "vain", "reliable", "unreliable", "trustworthy", "untrustworthy", "charming",
    "repulsive", "attentive", "inattentive", "mysterious", "transparent", "persistent", "inconsistent", "reasonable", "unreasonable", "alert",
    "oblivious", "assertive", "passive", "vibrant", "lifeless", "convincing", "unconvincing", "graceful", "clumsy", "logical",
    "illogical", "realistic", "idealistic", "sympathetic", "unsympathetic", "adventurous", "cautious", "amicable", "hostile", "impartial",
    "biased", "candid", "sly", "honest", "dishonest", "innocent", "guilty", "optimistic", "pessimistic", "cheerful",
    "gloomy", "confident", "insecure", "grateful", "ungrateful", "lively", "dull", "constructive", "destructive", "friendly",
    "unfriendly", "loyal", "disloyal", "reserved", "outgoing", "sensible", "foolish", "gregarious", "withdrawn", "passionate",
    "indifferent", "reliable", "unreliable", "sociable", "unsociable", "sincere", "insincere", "sober", "excitable", "thorough",
    "superficial", "tactful", "blunt", "gracious", "rude"]
const commonPunctuation = [
    ",", " ?", "!", ",", ",", ",", " ;", , '', '', '', '', '', '', '', '', '']
const names = [
    "Liam", "Olivia", "Noah", "Emma", "Oliver", "Ava", "William", "Sophia", "Elijah", "Isabella",
    "James", "Mia", "Benjamin", "Charlotte", "Lucas", "Amelia", "Henry", "Harper", "Alexander", "Evelyn",
    "Michael", "Abigail", "Daniel", "Emily", "Matthew", "Elizabeth", "Jackson", "Avery", "David", "Sofia",
    "Joseph", "Ella", "Luke", "Madison", "Gabriel", "Scarlett", "Samuel", "Victoria", "Carter", "Aria",
    "Owen", "Grace", "Wyatt", "Chloe", "John", "Camila", "Jack", "Penelope", "Sebastian", "Riley",
    "Ethan", "Layla", "Daniel", "Nora", "Matthew", "Lily", "Levi", "Zoey", "Mateo", "Mila",
    "David", "Aubrey", "Ryan", "Hannah", "Lincoln", "Lillian", "Isaac", "Addison", "Nathan", "Eleanor",
    "Muhammad", "Natalie", "Caleb", "Luna", "Anthony", "Savannah", "Dylan", "Brooklyn", "Jayden", "Stella",
    "Ezra", "Hazel", "Thomas", "Ellie", "Joshua", "Paisley", "Christopher", "Audrey", "Andrew", "Skylar",
    "Hudson", "Violet", "Asher", "Claire", "Nicholas", "Bella", "Theodore", "Aurora", "Josiah", "Lucy",
    "Samuel", "Anna", "Jaxon", "Samantha", "Leo", "Caroline", "David", "Genesis", "Brayden", "Aaliyah",
    "Christian", "Kennedy", "Hunter", "Kinsley", "Isaiah", "Allison", "Lincoln", "Maya", "Charles", "Sarah",
    "Maverick", "Madelyn", "Aaron", "Adeline", "Eli", "Alexa", "Roman", "Alyssa", "Connor", "Isabelle",
    "Elias", "Leah", "Cameron", "Gabriella", "Robert", "Ariana", "Carson", "Elena", "Jordan", "Clara",
    "Cooper", "Hailey", "Ian", "Kaylee", "Jose", "Lillian", "Jace", "Madeline", "Collin", "Peyton",
    "Xavier", "Melanie", "Carson", "Sophie", "Jason", "Ruby", "Bentley", "Jade", "Nolan", "Alice",
    "Dominic", "Fiona", "Parker", "Sadie", "Adam", "Lydia", "Alex", "Nevaeh", "Tristan", "Alexandra",
    "Luis", "Isla", "Juan", "Quinn", "Brody", "Hadley", "Kyle", "Piper", "Diego", "London",
    "Kevin", "Naomi", "Jayce", "Eliana", "Adam", "Maria", "Timothy", "Eva", "Austin", "Serenity",
    "Sam", "Arianna", "Zachary", "Jasmine", "Nathaniel", "Valentina", "Xander", "Rylee", "Tyler", "Daisy",
    "Adrian", "Reagan", "Greyson", "Celeste", "Carter", "Harmony", "Luke", "Amanda", "Alexis", "Daniela",
    "Camden", "Georgia", "Santiago", "Brianna", "Jordan", "Catherine", "Eric", "Cora", "Kai", "Laila",
    "Brady", "Gianna", "Juan", "Gabrielle", "Brandon", "Ivy", "Israel", "Mary", "Kaiden", "Jocelyn",
    "Gavin", "Emery", "Ashton", "Jordyn", "Brayden", "Iris", "Easton", "Lyla", "Evan", "Alana",
    "Ezekiel", "Sara", "Axel", "Reese", "Silas", "Angelina", "Karter", "Leilani", "Theo", "Mya",
    "Weston", "Adalyn", "Micah", "Ana", "Wesley", "Bianca", "Xavier", "Paige", "Ezra", "Haven"
];
const productNames = [
    "Fantastic Wooden Chair",
    "Rustic Metal Table",
    "Elegant Glass Vase",
    "Vintage Leather Sofa",
    "Modern Ceramic Lamp",
    "Antique Silver Tray",
    "Sleek Marble Clock",
    "Cozy Cotton Blanket",
    "Chic Velvet Pillow",
    "Stylish Bamboo Basket",
    "Luxury Silk Curtains",
    "Minimalist Steel Shelf",
    "Glamorous Crystal Chandelier",
    "Handcrafted Pottery Mug",
    "Rugged Outdoor Backpack",
    "Trendy Cork Coasters",
    "Versatile Wicker Basket",
    "Quirky Ceramic Plant Pot",
    "Exotic Wood Serving Tray",
    "Whimsical Paper Lanterns",
    "Unique Rope Wall Hanging",
    "Fancy Gold-plated Flatware Set",
    "Adorable Plush Toy",
    "Premium Scented Candle",
    "Eco-friendly Bamboo Toothbrush",
    "Sturdy Stainless Steel Water Bottle",
    "Organic Cotton Tote Bag",
    "Durable Wooden Cutting Board",
    "Soothing Lavender Eye Mask",
    "Refreshing Citrus Body Scrub",
    "Hydrating Aloe Vera Gel",
    "Nourishing Coconut Hair Mask",
    "Revitalizing Green Tea Face Mask",
    "Soothing Chamomile Bath Salts",
    "Invigorating Eucalyptus Shower Gel",
    "Calming Lavender Essential Oil",
    "Gentle Rosehip Facial Cleanser",
    "Balancing Tea Tree Shampoo",
    "Detoxifying Charcoal Soap",
    "Radiant Vitamin C Serum",
    "Anti-aging Retinol Cream",
    "Brightening Turmeric Mask",
    "Exfoliating Coffee Scrub",
    "Soothing Oatmeal Bath Soak",
    "Relaxing Peppermint Foot Cream",
    "Energizing Grapefruit Body Lotion",
    "Rejuvenating Argan Oil",
    "Protective Sunscreen SPF 50",
    "Nourishing Lip Balm",
    "Glow-boosting Highlighter Palette",
    "Matte Lipstick Collection",
    "Eyeshadow Palette",
    "Blush and Bronzer Duo",
    "Liquid Foundation",
    "Setting Spray",
    "Makeup Brushes Set",
    "Eyelash Curler",
    "Brow Pomade",
    "Manicure Kit",
    "Nail Polish Collection",
    "Cuticle Oil",
    "Nail File Set",
    "Nail Art Stickers",
    "Hair Straightener",
    "Curling Iron",
    "Hair Dryer",
    "Leave-in Conditioner",
    "Hair Serum",
    "Dry Shampoo",
    "Hair Mask",
    "Heat Protectant Spray",
    "Volumizing Mousse",
    "Texturizing Sea Salt Spray",
    "Hydrating Face Mist",
    "Refreshing Body Mist",
    "Setting Powder",
    "Translucent Loose Powder",
    "Color Correcting Concealer Palette",
    "Makeup Remover Wipes",
    "Micellar Water",
    "Facial Cleansing Brush",
    "Hydrating Sheet Mask Set",
    "Under Eye Patches",
    "Exfoliating Scrub",
    "Hydrating Gel Moisturizer",
    "Rich Night Cream",
    "SPF Moisturizer",
    "Cleansing Oil",
    "Toner",
    "Eye Cream",
    "Serum",
    "Facial Oil",
    "Lip Scrub",
    "Body Scrub",
    "Hand Cream",
    "Foot Mask",
    "Body Butter",
    "Shower Gel",
    "Bubble Bath",
    "Body Oil",
    "Bath Bomb Set",
    "Candle Set",
    "Room Spray",
    "Diffuser",
    "Essential Oil Set",
    "Aromatherapy Kit",
    "Massage Oil",
    "Yoga Mat",
    "Yoga Block Set",
    "Foam Roller",
    "Resistance Bands",
    "Jump Rope",
    "Exercise Ball",
    "Dumbbell Set",
    "Kettlebell Set",
    "Weighted Vest",
    "Boxing Gloves",
    "Punching Bag",
    "Boxing Reflex Ball",
    "Speed Rope",
    "Gymnastic Rings",
    "Pull-up Bar",
    "Ab Roller",
    "Balance Board",
    "Massage Gun",
    "Foam Roller",
    "Compression Socks",
    "Running Belt",
    "Hydration Pack",
    "Running Shoes",
    "Fitness Tracker",
    "Wireless Headphones",
    "Activity Tracker",
    "Smartwatch",
    "Resistance Bands Set",
    "Yoga Block",
    "Yoga Strap",
    "Yoga Towel",
    "Yoga Mat Bag",
    "Yoga Bolster",
    "Yoga Wheel",
    "Yoga Blanket",
    "Yoga Ball",
    "Yoga Socks",
    "Yoga Gloves",
    "Yoga Pants",
    "Yoga Shorts",
    "Yoga Top",
    "Yoga Jacket",
    "Yoga Headband",
    "Yoga Bra",
    "Yoga Tank",
    "Yoga Skirt",
    "Yoga Dress",
    "Yoga Leggings",
    "Yoga Capris",
    "Yoga Shoes",
    "Yoga Sandals",
    "Yoga Mat Cleaner",
    "Yoga Eye Pillow",
    "Yoga Bolster Cover",
    "Yoga Bag",
    "Yoga Strap Cover",
    "Yoga Wheel Cover",
    "Yoga Block Cover",
    "Yoga Blanket Cover",
    "Yoga Towel Cover",
    "Yoga Mat Bag Cover",
    "Yoga Headband Cover",
    "Yoga Gloves Cover",
    "Yoga Pants Cover",
    "Yoga Shorts Cover",
    "Yoga Top Cover",
    "Yoga Jacket Cover",
    "Yoga Bra Cover",
    "Yoga Tank Cover",
    "Yoga Skirt Cover",
    "Yoga Dress Cover",
    "Yoga Leggings Cover",
    "Yoga Capris Cover",
    "Yoga Shoes Cover",
    "Yoga Sandals Cover",
    "Yoga Mat Cleaner Cover",
    "Yoga Eye Pillow Cover",
    "Yoga Bolster Cover Cover",
    "Yoga Bag Cover",
    "Yoga Strap Cover Cover",
    "Yoga Wheel Cover Cover",
    "Yoga Block Cover Cover",
    "Yoga Blanket Cover Cover",
    "Yoga Towel Cover Cover",
    "Yoga Mat Bag Cover Cover",
    "Yoga Headband Cover Cover",
    "Yoga Gloves Cover Cover",
    "Yoga Pants Cover Cover",
    "Yoga Shorts Cover Cover",
    "Yoga Top Cover Cover",
    "Yoga Jacket Cover Cover",
    "Yoga Bra Cover Cover",
    "Yoga Tank Cover Cover",
    "Yoga Skirt Cover Cover",
    "Yoga Dress Cover Cover",
    "Yoga Leggings Cover Cover",
    "Yoga Capris Cover Cover",
    "Yoga Shoes Cover Cover",
    "Yoga Sandals Cover Cover",
    "Yoga Mat Cleaner Cover Cover"]

const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
    "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
    "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
    "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
    "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
    "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
    "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
    "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro",
    "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
    "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay",
    "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
    "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea",
    "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania",
    "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
    "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
]
const cities = [
    "Tokyo", "Delhi", "Shanghai", "Sao Paulo", "Mumbai", "Mexico City", "Beijing", "Osaka", "Cairo", "New York City",
    "Dhaka", "Karachi", "Buenos Aires", "Istanbul", "Kolkata", "Manila", "Lagos", "Rio de Janeiro", "Moscow", "Shenzhen",
    "Jakarta", "Lahore", "Bangalore", "Seoul", "Cairo", "Kinshasa", "Tianjin", "Guangzhou", "Los Angeles", "Bogota",
    "Lima", "Tehran", "London", "Chennai", "Hyderabad", "Bangkok", "Ahmedabad", "Ho Chi Minh City", "New Taipei City",
    "Baghdad", "Hangzhou", "Santiago", "Riyadh", "Singapore", "Nagoya", "Wuhan", "Shenyang", "Chongqing", "Izmir",
    "Surat", "Johannesburg", "Ankara", "Kanpur", "Nanjing", "Busan", "Chengdu", "Lahore", "Mexico City", "Lima",
    "Rio de Janeiro", "Cairo", "Karachi", "Dhaka", "Tehran", "Bogota", "Bangkok", "Ho Chi Minh City", "Singapore",
    "Johannesburg", "Delhi", "Wuhan", "Los Angeles", "Chennai", "Buenos Aires", "Istanbul", "Tokyo", "Jakarta",
    "Bangalore", "New York City", "London", "Hangzhou", "Shanghai", "Hyderabad", "Kolkata", "Manila", "Moscow",
    "Sao Paulo", "Tianjin", "Seoul", "Lagos", "Beijing", "Mexico City", "Lima", "Bogota", "Rio de Janeiro",
    "Cairo", "Tehran", "Bangkok", "Karachi", "Delhi", "Jakarta", "Dhaka", "New York City", "Los Angeles",
    "Manila", "Sao Paulo", "Mexico City", "Mumbai", "Shanghai", "Tokyo", "Karachi", "Delhi", "Shanghai",
    "Sao Paulo", "Mumbai", "Mexico City", "Beijing", "Osaka", "Cairo", "New York City", "Dhaka", "Karachi",
    "Buenos Aires", "Istanbul", "Kolkata", "Manila", "Lagos", "Rio de Janeiro", "Moscow", "Shenzhen",
    "Jakarta", "Lahore", "Bangalore", "Seoul", "Cairo", "Kinshasa", "Tianjin", "Guangzhou", "Los Angeles",
    "Bogota", "Lima", "Tehran", "London", "Chennai", "Hyderabad", "Bangkok", "Ahmedabad", "Ho Chi Minh City",
    "New Taipei City", "Baghdad", "Hangzhou", "Santiago", "Riyadh", "Singapore", "Nagoya", "Wuhan", "Shenyang",
    "Chongqing", "Izmir", "Surat", "Johannesburg", "Ankara", "Kanpur", "Nanjing", "Busan", "Chengdu", "Lahore",
    "Mexico City", "Lima", "Rio de Janeiro", "Cairo", "Karachi", "Dhaka", "Tehran", "Bogota", "Bangkok",
    "Ho Chi Minh City", "Singapore", "Johannesburg", "Delhi", "Wuhan", "Los Angeles", "Chennai", "Buenos Aires",
    "Istanbul", "Tokyo", "Jakarta", "Bangalore", "New York City", "London", "Hangzhou", "Shanghai", "Hyderabad",
    "Kolkata", "Manila", "Moscow", "Sao Paulo", "Tianjin", "Seoul", "Lagos", "Beijing", "Mexico City", "Lima",
    "Bogota", "Rio de Janeiro", "Cairo", "Tehran", "Bangkok", "Karachi", "Delhi", "Jakarta", "Dhaka", "New York City",
    "Los Angeles", "Manila", "Sao Paulo", "Mexico City", "Mumbai", "Shanghai", "Tokyo", "Karachi", "Delhi", "Shanghai",
    "Sao Paulo", "Mumbai", "Mexico City", "Beijing", "Osaka", "Cairo", "New York City", "Dhaka", "Karachi", "Buenos Aires",
    "Istanbul", "Kolkata", "Manila", "Lagos", "Rio de Janeiro", "Moscow", "Shenzhen", "Jakarta", "Lahore", "Bangalore",
    "Seoul", "Cairo", "Kinshasa", "Tianjin", "Guangzhou", "Los Angeles", "Bogota", "Lima", "Tehran", "London", "Chennai",
    "Hyderabad", "Bangkok", "Ahmedabad", "Ho Chi Minh City", "New Taipei City", "Baghdad", "Hangzhou", "Santiago", "Riyadh",
    "Singapore", "Nagoya", "Wuhan", "Shenyang", "Chongqing", "Izmir", "Surat", "Johannesburg", "Ankara", "Kanpur", "Nanjing",
    "Busan", "Chengdu", "Lahore", "Mexico City", "Lima", "Rio de Janeiro", "Cairo", "Karachi", "Dhaka", "Tehran", "Bogota",
    "Bangkok", "Ho Chi Minh City", "Singapore", "Johannesburg", "Delhi", "Wuhan", "Los Angeles", "Chennai", "Buenos Aires",
    "Istanbul", "Tokyo", "Jakarta", "Bangalore", "New York City", "London", "Hangzhou", "Shanghai", "Hyderabad", "Kolkata",
    "Manila", "Moscow", "Sao Paulo", "Tianjin", "Seoul", "Lagos", "Beijing", "Mexico City", "Lima", "Bogota", "Rio de Janeiro",
    "Cairo", "Tehran", "Bangkok", "Karachi", "Delhi", "Jakarta", "Dhaka", "New York City", "Los Angeles", "Manila", "Sao Paulo",
    "Mexico City", "Mumbai"]


function getRandomItemFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


const generateDummySubject = () =>
    getRandomItemFromArray(commonSubjects)
const generateDummyName = () =>
    getRandomItemFromArray(names)
const generateDummyObject = () =>
    getRandomItemFromArray(commonEnglishObjects)
const generateDummyProductName = () => getRandomItemFromArray(productNames)

/**
 * Represents a Dummy class.
 * Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus nisl quis ligula malesuada, eget ullamcorper urna bibendum.
 * Integer lobortis orci non sapien fringilla malesuada. Duis in ex ut odio mattis volutpat a sed leo. Nunc egestas est nisi.
 */
class Dummy {
    /**
     * Generate random sentences without ponctuation
     * @param {number} stringLength 
     * @returns {string}
     */
    static string(stringLength = 1) {
        let dummyString = ''
        for (let index = 0; index < stringLength; index++) {
            dummyString += getRandomNumber(0, 10) > 2 ? getRandomItemFromArray(commonSubjects).toLowerCase() + ' ' : getRandomItemFromArray(names) + ' '
            dummyString += getRandomNumber(0, 10) > 4 ? getRandomItemFromArray(commonEnglishVerbs) + ' ' : getRandomItemFromArray(commonEnglishWords) + ' '
            dummyString += getRandomItemFromArray(commonEnglishObjects) + ' '
            dummyString += getRandomItemFromArray(commonEnglishWords) + ' '
            dummyString += getRandomNumber(0, 10) > 8 ? getRandomItemFromArray(commonEnglishWords) : getRandomItemFromArray(commonEnglishObjects)
            dummyString += ''
        }
        return dummyString
    }
    /**
     * Generate random sentences with ponctuation
     * @param {number} stringLength 
     * @returns {string}
     */
    static stringWithPonctuation(stringLength = 1) {
        let dummyString = ''
        let ponctuationMark = ''
        for (let index = 0; index < stringLength; index++) {
            dummyString += getRandomNumber(0, 10) > 2 ? getRandomItemFromArray(commonSubjects).toLowerCase() + ' ' : getRandomItemFromArray(names) + ' '
            dummyString += getRandomNumber(0, 10) > 4 ? getRandomItemFromArray(commonEnglishVerbs) + ' ' : getRandomItemFromArray(commonEnglishWords) + ' '
            dummyString += getRandomItemFromArray(commonEnglishObjects) + ' '
            dummyString += getRandomItemFromArray(commonEnglishWords) + ' '
            dummyString += getRandomNumber(0, 10) > 8 ? getRandomItemFromArray(commonEnglishWords) : getRandomItemFromArray(commonEnglishObjects)
            if (index != stringLength - 1) {
                dummyString += `${getRandomItemFromArray(commonPunctuation)} `
            }

        }
        return dummyString
    }

    /**
     * Generate random paragraphs
     * @param {number} paragraphLength - The number of paragraph , 1 paragraph by default
     * @returns {string}
     */
    static paragraph(paragraphLength = 1) {
        let dummyParagraph = ''
        for (let index = 0; index < paragraphLength; index++) {
            dummyParagraph += capitalizeFirstLetter(this.stringWithPonctuation(getRandomNumber(10, 20)))
            dummyParagraph += `.\n`
        }
        return dummyParagraph
    }
    static subject = () =>
        getRandomItemFromArray(commonSubjects)
    static name = () =>
        getRandomItemFromArray(names)
    static object = () =>
        getRandomItemFromArray(commonEnglishObjects)
    static productName = () => getRandomItemFromArray(productNames)
    static country = () => getRandomItemFromArray(countries)
    static city = () => getRandomItemFromArray(cities)
}

module.exports = Dummy