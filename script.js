/**
 * VISTA — Modern Image Gallery
 * script.js
 *
 * Modules:
 *  1. Image Data
 *  2. State Management
 *  3. DOM References
 *  4. Gallery Rendering
 *  5. Filtering & Search
 *  6. Lightbox
 *  7. Favorites (localStorage)
 *  8. Navbar Behavior
 *  9. Toast Notifications
 * 10. Scroll Reveal
 * 11. Footer & Utilities
 * 12. Initialization
 */

'use strict';

/* ================================================================
   1. IMAGE DATA
   ================================================================ */
const IMAGE_DATA = [
  /* — Nature — */
  {
    id: 1,
    category: 'nature',
    title: 'Alpine Serenity',
    description: 'A breathtaking panorama of the Swiss Alps at golden hour, where snow-capped peaks pierce through a canvas of amber and violet.',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80',
  },
  {
    id: 2,
    category: 'nature',
    title: 'Emerald Canopy',
    description: 'Ancient redwood trees form a cathedral of green light in the Pacific Northwest, their trunks disappearing into morning mist.',
    src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=500&q=80',
  },
  {
    id: 3,
    category: 'nature',
    title: 'Desert Bloom',
    description: 'Wildflowers erupt across the Sonoran Desert after rare spring rains, turning the arid landscape into a vibrant tapestry.',
    src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&q=80',
  },
  {
    id: 4,
    category: 'nature',
    title: 'Northern Lights',
    description: 'The Aurora Borealis dances across the Icelandic sky in ribbons of emerald and magenta, reflecting off a frozen lake below.',
    src: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=500&q=80',
  },
  {
    id: 5,
    category: 'nature',
    title: 'Ocean Fury',
    description: 'Massive Pacific swells crash against rugged sea stacks at Oregon Coast, sending towers of white spray into a stormy sky.',
    src: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=500&q=80',
  },
  {
    id: 6,
    category: 'nature',
    title: 'Misty Highlands',
    description: 'Rolling hills of the Scottish Highlands emerge from a sea of low clouds, their ancient heather glowing purple in diffused light.',
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&q=80',
  },
  {
    id: 7,
    category: 'nature',
    title: 'Autumn Mirror',
    description: 'A perfectly still mountain lake reflects a blazing autumn canopy — a symmetrical masterpiece of gold, crimson, and amber.',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
  },
  {
    id: 8,
    category: 'nature',
    title: 'Lava Flow',
    description: 'Molten lava from Kilauea spills into the Pacific, creating explosive plumes of steam where fire meets the sea.',
    src: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=500&q=80',
  },

  /* — Architecture — */
  {
    id: 9,
    category: 'architecture',
    title: 'Glass & Steel',
    description: 'Soaring glass towers in Singapore\'s financial district catch the last light of day, their facades transforming into mirrors of the sky.',
    src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&q=80',
  },
  {
    id: 10,
    category: 'architecture',
    title: 'Ancient Arches',
    description: 'The timeless stone arches of Rome\'s Colosseum stand as monuments to human ambition, their shadows falling the same as they did 2000 years ago.',
    src: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500&q=80',
  },
  {
    id: 11,
    category: 'architecture',
    title: 'Brutalist Beauty',
    description: 'The raw concrete poetry of a mid-century civic center — sharp geometric forms that declare their purpose without apology.',
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=80',
  },
  {
    id: 12,
    category: 'architecture',
    title: 'Corridor of Light',
    description: 'A Moroccan riad\'s interior courtyard channels light through an intricately carved cedar mashrabiya, casting geometric shadows on white plaster.',
    src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&q=80',
  },
  {
    id: 13,
    category: 'architecture',
    title: 'Tokyo Night Grid',
    description: 'An aerial view of Tokyo\'s Shinjuku district after dark — a luminous circuit board stretching to the horizon, vibrant and infinite.',
    src: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&q=80',
  },
  {
    id: 14,
    category: 'architecture',
    title: 'Desert Modernism',
    description: 'A Palm Springs mid-century modern home rises from the Coachella Valley floor — clean lines and horizontal planes in perfect harmony with the desert landscape.',
    src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&q=80',
  },
  {
    id: 15,
    category: 'architecture',
    title: 'Gothic Spires',
    description: 'The flying buttresses and soaring spires of Notre-Dame de Paris — a testament to medieval engineering and devotion carved in limestone.',
    src: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=500&q=80',
  },
  {
    id: 16,
    category: 'architecture',
    title: 'Infinity Pool',
    description: 'An infinity-edge pool at a Bali resort merges with the jungle canopy below, creating a seamless horizon between water, green, and sky.',
    src: 'https://images.unsplash.com/photo-1575909812264-6902b55846ad?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1575909812264-6902b55846ad?w=500&q=80',
  },

  /* — Travel — */
  {
    id: 17,
    category: 'travel',
    title: 'Santorini Dusk',
    description: 'The iconic blue domes of Santorini glow against a burning Aegean sunset — a vision that has defined Mediterranean romance for generations.',
    src: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=500&q=80',
  },
  {
    id: 18,
    category: 'travel',
    title: 'Kyoto in Bloom',
    description: 'Cherry blossoms rain down on the stone lanterns lining Maruyama Park — Japan\'s hanami season captured in a single fleeting moment.',
    src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=500&q=80',
  },
  {
    id: 19,
    category: 'travel',
    title: 'Sahara at Sunrise',
    description: 'The first light of day sculpts impossibly perfect shadows across the rust-red dunes of the Sahara — Earth\'s greatest sculpture garden.',
    src: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=500&q=80',
  },
  {
    id: 20,
    category: 'travel',
    title: 'Patagonia Wilds',
    description: 'The granite towers of Torres del Paine pierce a sky swirling with lenticular clouds — wilderness at its most dramatic and untamed.',
    src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&q=80',
  },
  {
    id: 21,
    category: 'travel',
    title: 'Venetian Canal',
    description: 'A gondolier navigates the quiet backwaters of Venice at dawn, past centuries-old palazzo facades reflected in impossibly still water.',
    src: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=500&q=80',
  },
  {
    id: 22,
    category: 'travel',
    title: 'Marrakech Souk',
    description: 'The labyrinthine medina of Marrakech overflows with color and sound — spice pyramids, hand-woven rugs, and the call of the muezzin at dusk.',
    src: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=500&q=80',
  },
  {
    id: 23,
    category: 'travel',
    title: 'Norwegian Fjord',
    description: 'A sleek cruise ship inches through Geirangerfjord — a UNESCO World Heritage marvel of sheer cliff faces and cascading waterfalls.',
    src: 'https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=500&q=80',
  },
  {
    id: 24,
    category: 'travel',
    title: 'Bali Temple',
    description: 'The tiered merus of Pura Ulun Danu Bratan rise from a sacred lake in the Balinese highlands, shrouded in morning incense and volcanic mist.',
    src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&q=80',
  },

  /* — Technology — */
  {
    id: 25,
    category: 'technology',
    title: 'Circuit Dreams',
    description: 'An extreme macro of a CPU die reveals a microscopic city of copper traces and transistors — the invisible architecture of our digital world.',
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80',
  },
  {
    id: 26,
    category: 'technology',
    title: 'Data Streams',
    description: 'Fiber optic cables carry the world\'s information as pulses of light — billions of conversations, transactions, and discoveries traveling at the speed of thought.',
    src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&q=80',
  },
  {
    id: 27,
    category: 'technology',
    title: 'Rocket Ascent',
    description: 'A SpaceX Falcon 9 punches through the troposphere trailing a pillar of fire — humanity\'s determination to push beyond the edge of the sky.',
    src: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=500&q=80',
  },
  {
    id: 28,
    category: 'technology',
    title: 'Neural Network',
    description: 'A visualization of an artificial neural network in training — nodes fire and connections strengthen, learning to see patterns in a world of noise.',
    src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&q=80',
  },
  {
    id: 29,
    category: 'technology',
    title: 'Robotic Precision',
    description: 'An industrial robot arm welds an automotive frame with micrometer accuracy — the marriage of power and precision that defines modern manufacturing.',
    src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&q=80',
  },
  {
    id: 30,
    category: 'technology',
    title: 'Server Farm',
    description: 'Row upon row of blade servers hum in a hyperscale data center — the physical embodiment of the cloud, cool and vast and utterly essential.',
    src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80',
  },
  {
    id: 31,
    category: 'technology',
    title: 'EV Charging',
    description: 'An electric vehicle charges at a solar-powered station at sunset — a quiet symbol of the energy transition reshaping our world.',
    src: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=500&q=80',
  },
  {
    id: 32,
    category: 'technology',
    title: 'Drone Swarm',
    description: 'A choreographed swarm of 500 drones traces luminous patterns across a night sky — technology becoming art at the intersection of code and light.',
    src: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&q=80',
  },

  /* — People — */
  {
    id: 33,
    category: 'people',
    title: 'The Elder\'s Wisdom',
    description: 'Portrait of a Ladakhi elder — deep-set eyes that have watched decades of mountains and seasons carry an ocean of quiet knowledge.',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
  },
  {
    id: 34,
    category: 'people',
    title: 'Joy Unfiltered',
    description: 'A child in a Senegalese village runs through a summer rainstorm, arms outstretched, face tilted skyward — pure, unscripted joy.',
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&q=80',
  },
  {
    id: 35,
    category: 'people',
    title: 'The Artisan',
    description: 'A master ceramicist in Fez shapes wet clay on a spinning wheel — hands coated in earth, mind fully present in the ancient ritual of making.',
    src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80',
  },
  {
    id: 36,
    category: 'people',
    title: 'Urban Solitude',
    description: 'A lone figure reads on a bench in a rain-slicked New York plaza — islands of stillness possible even inside the city\'s relentless surge.',
    src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&q=80',
  },
  {
    id: 37,
    category: 'people',
    title: 'Flamenco Fire',
    description: 'A flamenco dancer mid-turn in a Seville tablao — red dress a blur, face fierce, every sinew expressing centuries of emotional tradition.',
    src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&q=80',
  },
  {
    id: 38,
    category: 'people',
    title: 'Market at Dawn',
    description: 'Women traders at a Cambodian floating market paddle dugout canoes laden with tropical fruits at 5 AM, bartering as their grandmothers did.',
    src: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=500&q=80',
  },
  {
    id: 39,
    category: 'people',
    title: 'The Graduate',
    description: 'A first-generation college graduate stands in full regalia before her proud family — a moment of arrival after a journey begun long before her birth.',
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&q=80',
  },
  {
    id: 40,
    category: 'people',
    title: 'Hands of Creation',
    description: 'A Guatemalan weaver\'s hands work a backstrap loom — fingers moving with practiced speed through a textile tradition stretching back 3000 years.',
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80',
  },
];

/* ================================================================
   2. STATE MANAGEMENT
   ================================================================ */
const state = {
  /** Currently active category filter */
  activeFilter: 'all',

  /** Current search query string */
  searchQuery: '',

  /** Array of image IDs marked as favorites */
  favorites: [],

  /** Index of image open in lightbox (relative to filteredImages) */
  lightboxIndex: -1,

  /** Whether the lightbox is open */
  lightboxOpen: false,

  /** Whether the mobile menu is open */
  mobileMenuOpen: false,

  /** Whether the search bar is visible */
  searchOpen: false,

  /**
   * Computed: images filtered by current category and search query.
   * Recalculated whenever filter or search changes.
   */
  get filteredImages() {
    return IMAGE_DATA.filter(img => {
      const matchesCategory =
        state.activeFilter === 'all' || img.category === state.activeFilter;
      const q = state.searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        img.title.toLowerCase().includes(q) ||
        img.category.toLowerCase().includes(q) ||
        img.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  },
};

/* ================================================================
   3. DOM REFERENCES
   ================================================================ */
const DOM = {
  navbar:          document.getElementById('navbar'),
  hamburger:       document.getElementById('hamburger'),
  mobileMenu:      document.getElementById('mobileMenu'),
  mobileLinks:     document.querySelectorAll('.mobile-link'),

  searchToggle:    document.getElementById('searchToggle'),
  searchWrapper:   document.getElementById('searchBarWrapper'),
  searchInput:     document.getElementById('searchInput'),
  searchClear:     document.getElementById('searchClear'),
  searchInfo:      document.getElementById('searchResultsInfo'),

  filterBtns:      document.querySelectorAll('.filter-btn'),
  galleryGrid:     document.getElementById('galleryGrid'),
  noResults:       document.getElementById('noResults'),
  resetFilters:    document.getElementById('resetFilters'),

  lightbox:        document.getElementById('lightbox'),
  lightboxBackdrop:document.getElementById('lightboxBackdrop'),
  lightboxImage:   document.getElementById('lightboxImage'),
  lightboxLoader:  document.getElementById('lightboxLoader'),
  lightboxTitle:   document.getElementById('lightboxTitle'),
  lightboxDesc:    document.getElementById('lightboxDesc'),
  lightboxCategory:document.getElementById('lightboxCategory'),
  lightboxClose:   document.getElementById('lightboxClose'),
  lightboxPrev:    document.getElementById('lightboxPrev'),
  lightboxNext:    document.getElementById('lightboxNext'),
  lightboxFavBtn:  document.getElementById('lightboxFavBtn'),
  lightboxCurrent: document.getElementById('lightboxCurrent'),
  lightboxTotal:   document.getElementById('lightboxTotal'),

  navFavCount:     document.getElementById('navFavCount'),
  favNavBtn:       document.getElementById('favNavBtn'),

  toastContainer:  document.getElementById('toastContainer'),
  footerYear:      document.getElementById('footerYear'),
};

/* ================================================================
   4. GALLERY RENDERING
   ================================================================ */

/**
 * Builds the HTML string for a single gallery card.
 * @param {Object} img - Image data object
 * @param {number} imgIndex - Index within filteredImages array
 * @returns {string} HTML string
 */
function buildCardHTML(img, imgIndex) {
  const isFavorited = state.favorites.includes(img.id);
  const favClass    = isFavorited ? ' favorited' : '';

  return `
    <article
      class="gallery-card"
      role="listitem"
      data-id="${img.id}"
      data-index="${imgIndex}"
      tabindex="0"
      aria-label="${img.title}, ${img.category} photo"
    >
      <div class="card-image-wrapper">
        <img
          src="${img.thumb}"
          alt="${img.title}"
          loading="lazy"
          decoding="async"
        />
        <div class="card-overlay" aria-hidden="true">
          <button class="card-view-btn" tabindex="-1" aria-label="View ${img.title}">
            View Image
          </button>
        </div>
        <button
          class="card-fav-btn${favClass}"
          aria-label="${isFavorited ? 'Remove from' : 'Add to'} favorites: ${img.title}"
          aria-pressed="${isFavorited}"
          data-id="${img.id}"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${isFavorited ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="card-body">
        <span class="card-category" data-cat="${img.category}">${capitalizeFirst(img.category)}</span>
        <h3 class="card-title">${img.title}</h3>
      </div>
    </article>
  `;
}

/**
 * Renders gallery cards for the current filtered state.
 * Uses a document fragment for performance.
 */
function renderGallery() {
  const images = state.filteredImages;
  const grid   = DOM.galleryGrid;

  /* Show/hide no-results message */
  if (images.length === 0) {
    grid.innerHTML = '';
    DOM.noResults.hidden = false;
    return;
  }
  DOM.noResults.hidden = true;

  /* Build cards via fragment */
  const fragment = document.createDocumentFragment();
  const temp     = document.createElement('div');
  images.forEach((img, idx) => {
    temp.innerHTML = buildCardHTML(img, idx);
    fragment.appendChild(temp.firstElementChild);
  });

  grid.innerHTML = '';
  grid.appendChild(fragment);

  /* Update search info label */
  updateSearchInfo(images.length);
}

/* ================================================================
   5. FILTERING & SEARCH
   ================================================================ */

/** Activates a filter category and re-renders the gallery. */
function setFilter(filterValue) {
  state.activeFilter = filterValue;

  /* Update button states */
  DOM.filterBtns.forEach(btn => {
    const isActive = btn.dataset.filter === filterValue;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive.toString());
  });

  renderGallery();
}

/** Handles search input with debounce to avoid unnecessary renders. */
let searchDebounceTimer = null;
function handleSearch(query) {
  clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(() => {
    state.searchQuery = query;
    DOM.searchClear.hidden = query.length === 0;
    renderGallery();
  }, 220);
}

/** Updates the results count label below the search bar. */
function updateSearchInfo(count) {
  if (!state.searchQuery && state.activeFilter === 'all') {
    DOM.searchInfo.textContent = '';
    return;
  }
  const label = state.activeFilter !== 'all'
    ? `in "${capitalizeFirst(state.activeFilter)}"`
    : '';
  const queryLabel = state.searchQuery ? `for "${state.searchQuery}" ` : '';
  DOM.searchInfo.textContent =
    `Showing ${count} image${count !== 1 ? 's' : ''} ${queryLabel}${label}`.trim();
}

/** Resets all filters and search. */
function resetAll() {
  state.searchQuery = '';
  DOM.searchInput.value = '';
  DOM.searchClear.hidden = true;
  setFilter('all');
}

/* ================================================================
   6. LIGHTBOX
   ================================================================ */

/**
 * Opens the lightbox at a given index within filteredImages.
 * @param {number} index
 */
function openLightbox(index) {
  const images = state.filteredImages;
  if (index < 0 || index >= images.length) return;

  state.lightboxIndex = index;
  state.lightboxOpen  = true;

  updateLightboxContent(images[index], images.length);

  DOM.lightbox.hidden = false;
  DOM.lightbox.setAttribute('aria-hidden', 'false');
  DOM.lightbox.classList.add('open');

  /* Prevent body scroll */
  document.body.style.overflow = 'hidden';

  /* Focus the close button for accessibility */
  requestAnimationFrame(() => DOM.lightboxClose.focus());
}

/**
 * Updates lightbox image and metadata.
 * @param {Object} img
 * @param {number} total
 */
function updateLightboxContent(img, total) {
  /* Show loader, hide image */
  DOM.lightboxLoader.removeAttribute('hidden');
  DOM.lightboxImage.classList.add('loading');
  DOM.lightboxImage.alt = img.title;

  /* Load image */
  const tempImg = new Image();
  tempImg.onload = () => {
    DOM.lightboxImage.src  = img.src;
    DOM.lightboxImage.classList.remove('loading');
    DOM.lightboxLoader.setAttribute('hidden', '');
  };
  tempImg.onerror = () => {
    DOM.lightboxImage.src  = img.thumb; /* Fallback to thumb */
    DOM.lightboxImage.classList.remove('loading');
    DOM.lightboxLoader.setAttribute('hidden', '');
  };
  tempImg.src = img.src;

  /* Metadata */
  DOM.lightboxTitle.textContent    = img.title;
  DOM.lightboxDesc.textContent     = img.description;
  DOM.lightboxCategory.textContent = capitalizeFirst(img.category);
  DOM.lightboxCurrent.textContent  = state.lightboxIndex + 1;
  DOM.lightboxTotal.textContent    = total;

  /* Favorite state */
  const isFav = state.favorites.includes(img.id);
  DOM.lightboxFavBtn.setAttribute('aria-pressed', isFav.toString());
  DOM.lightboxFavBtn.querySelector('svg').setAttribute(
    'fill', isFav ? 'currentColor' : 'none'
  );
  DOM.lightboxFavBtn.setAttribute(
    'aria-label',
    `${isFav ? 'Remove from' : 'Add to'} favorites: ${img.title}`
  );

  /* Disable prev/next at boundaries */
  DOM.lightboxPrev.disabled = state.lightboxIndex === 0;
  DOM.lightboxNext.disabled = state.lightboxIndex === total - 1;
}

/** Closes the lightbox. */
function closeLightbox() {
  state.lightboxOpen = false;
  DOM.lightbox.classList.remove('open');

  /* Wait for transition then hide */
  setTimeout(() => {
    DOM.lightbox.setAttribute('aria-hidden', 'true');
    DOM.lightboxImage.src = '';
    document.body.style.overflow = '';
  }, 320);

  /* Return focus to triggering card */
  const triggeredCard = DOM.galleryGrid.querySelector(
    `[data-index="${state.lightboxIndex}"]`
  );
  if (triggeredCard) triggeredCard.focus();
}

/** Navigates to previous image in lightbox. */
function lightboxPrev() {
  if (state.lightboxIndex > 0) {
    state.lightboxIndex--;
    updateLightboxContent(
      state.filteredImages[state.lightboxIndex],
      state.filteredImages.length
    );
  }
}

/** Navigates to next image in lightbox. */
function lightboxNext() {
  const images = state.filteredImages;
  if (state.lightboxIndex < images.length - 1) {
    state.lightboxIndex++;
    updateLightboxContent(images[state.lightboxIndex], images.length);
  }
}

/* ================================================================
   7. FAVORITES (localStorage)
   ================================================================ */
const FAVORITES_KEY = 'vista_favorites_v1';

/** Loads favorites from localStorage into state. */
function loadFavorites() {
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    state.favorites = stored ? JSON.parse(stored) : [];
  } catch {
    state.favorites = [];
  }
}

/** Persists favorites to localStorage. */
function saveFavorites() {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(state.favorites));
  } catch {
    /* localStorage unavailable (private browsing, quota exceeded) */
  }
}

/**
 * Toggles favorite status for an image ID.
 * @param {number} id - Image ID
 */
function toggleFavorite(id) {
  const idx = state.favorites.indexOf(id);
  const img = IMAGE_DATA.find(i => i.id === id);
  if (!img) return;

  if (idx === -1) {
    /* Add to favorites */
    state.favorites.push(id);
    showToast(`Added "${img.title}" to favorites`, '♥');
  } else {
    /* Remove from favorites */
    state.favorites.splice(idx, 1);
    showToast(`Removed "${img.title}" from favorites`, '♡');
  }

  saveFavorites();
  updateFavoriteCount();
  syncCardFavoriteUI(id);

  /* Sync lightbox button if open */
  if (state.lightboxOpen) {
    const currentImg = state.filteredImages[state.lightboxIndex];
    if (currentImg && currentImg.id === id) {
      const isFav = state.favorites.includes(id);
      DOM.lightboxFavBtn.setAttribute('aria-pressed', isFav.toString());
      DOM.lightboxFavBtn.querySelector('svg').setAttribute(
        'fill', isFav ? 'currentColor' : 'none'
      );
    }
  }
}

/**
 * Syncs the heart icon on gallery cards after a favorite toggle.
 * @param {number} id
 */
function syncCardFavoriteUI(id) {
  const btn = DOM.galleryGrid.querySelector(`.card-fav-btn[data-id="${id}"]`);
  if (!btn) return;

  const isFav = state.favorites.includes(id);
  btn.classList.toggle('favorited', isFav);
  btn.setAttribute('aria-pressed', isFav.toString());
  btn.querySelector('svg').setAttribute('fill', isFav ? 'currentColor' : 'none');
}

/** Updates the navbar favorites counter badge. */
function updateFavoriteCount() {
  const count = state.favorites.length;
  DOM.navFavCount.textContent = count;
  DOM.navFavCount.classList.toggle('visible', count > 0);
}

/* ================================================================
   8. NAVBAR BEHAVIOR
   ================================================================ */

/** Toggles mobile hamburger menu. */
function toggleMobileMenu() {
  state.mobileMenuOpen = !state.mobileMenuOpen;

  DOM.hamburger.classList.toggle('open', state.mobileMenuOpen);
  DOM.hamburger.setAttribute('aria-expanded', state.mobileMenuOpen.toString());
  DOM.mobileMenu.classList.toggle('open', state.mobileMenuOpen);
  DOM.mobileMenu.setAttribute('aria-hidden', (!state.mobileMenuOpen).toString());

  /* Toggle tabindex on mobile links */
  DOM.mobileLinks.forEach(link => {
    link.tabIndex = state.mobileMenuOpen ? 0 : -1;
  });
}

/** Toggles the search bar. */
function toggleSearch() {
  state.searchOpen = !state.searchOpen;

  DOM.searchWrapper.classList.toggle('open', state.searchOpen);
  DOM.searchWrapper.setAttribute('aria-hidden', (!state.searchOpen).toString());
  DOM.searchToggle.setAttribute('aria-expanded', state.searchOpen.toString());

  if (state.searchOpen) {
    DOM.searchInput.focus();
  } else {
    /* Clear search when closing */
    DOM.searchInput.value = '';
    state.searchQuery = '';
    DOM.searchClear.hidden = true;
    renderGallery();
  }
}

/** Adds `.scrolled` class to navbar when user scrolls down. */
function handleNavbarScroll() {
  DOM.navbar.classList.toggle('scrolled', window.scrollY > 40);
}

/**
 * Closes the mobile menu when a link is clicked (for smooth scroll).
 */
function handleMobileLinkClick() {
  if (state.mobileMenuOpen) toggleMobileMenu();
}

/* ================================================================
   9. TOAST NOTIFICATIONS
   ================================================================ */

/**
 * Displays a temporary toast notification.
 * @param {string} message - Notification text
 * @param {string} icon    - Emoji or character icon
 * @param {number} duration - Duration in ms (default 3000)
 */
function showToast(message, icon = 'i', duration = 3000) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'status');
  toast.innerHTML = `
    <span class="toast-icon" aria-hidden="true">${icon}</span>
    <span>${message}</span>
  `;

  DOM.toastContainer.appendChild(toast);

  /* Auto-remove */
  setTimeout(() => {
    toast.classList.add('toast-exit');
    toast.addEventListener('animationend', () => toast.remove(), { once: true });
  }, duration);
}

/* ================================================================
   10. SCROLL REVEAL ANIMATIONS
   ================================================================ */

/**
 * Initializes IntersectionObserver for scroll-reveal animations.
 * Elements with class `.reveal` animate in when they enter the viewport.
 */
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) {
    /* Fallback: show all reveal elements immediately */
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ================================================================
   11. EVENT LISTENERS
   ================================================================ */

/** Sets up all event listeners using delegation where possible. */
function initEventListeners() {

  /* — Navbar — */
  DOM.hamburger.addEventListener('click', toggleMobileMenu);
  DOM.searchToggle.addEventListener('click', toggleSearch);
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  DOM.mobileLinks.forEach(link =>
    link.addEventListener('click', handleMobileLinkClick)
  );

  /* Close mobile menu on outside click */
  document.addEventListener('click', e => {
    if (
      state.mobileMenuOpen &&
      !DOM.mobileMenu.contains(e.target) &&
      !DOM.hamburger.contains(e.target)
    ) {
      toggleMobileMenu();
    }
  });

  /* — Search — */
  DOM.searchInput.addEventListener('input', e => handleSearch(e.target.value));
  DOM.searchClear.addEventListener('click', () => {
    DOM.searchInput.value = '';
    DOM.searchInput.focus();
    handleSearch('');
  });

  /* — Filter Buttons — */
  DOM.filterBtns.forEach(btn => {
    btn.addEventListener('click', () => setFilter(btn.dataset.filter));
  });

  /* — Gallery grid (event delegation) — */
  DOM.galleryGrid.addEventListener('click', e => {
    /* Favorite button click */
    const favBtn = e.target.closest('.card-fav-btn');
    if (favBtn) {
      e.stopPropagation();
      toggleFavorite(Number(favBtn.dataset.id));
      return;
    }

    /* Card click → open lightbox */
    const card = e.target.closest('.gallery-card');
    if (card) {
      openLightbox(Number(card.dataset.index));
    }
  });

  /* Keyboard on gallery cards */
  DOM.galleryGrid.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.gallery-card');
      if (card) {
        e.preventDefault();
        openLightbox(Number(card.dataset.index));
      }
    }
  });

  /* — Reset filters button — */
  DOM.resetFilters.addEventListener('click', resetAll);

  /* — Favorites nav button — */
  DOM.favNavBtn.addEventListener('click', () => {
    /* Scroll to gallery and show a toast */
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
    showToast(
      state.favorites.length > 0
        ? `You have ${state.favorites.length} favorite image${state.favorites.length !== 1 ? 's' : ''}. Favorited cards show a heart icon.`
        : 'No favorites yet. Click the heart on any image to save it.',
      '♥'
    );
  });

  /* — Lightbox controls — */
  DOM.lightboxClose.addEventListener('click', closeLightbox);
  DOM.lightboxBackdrop.addEventListener('click', closeLightbox);
  DOM.lightboxPrev.addEventListener('click', lightboxPrev);
  DOM.lightboxNext.addEventListener('click', lightboxNext);
  DOM.lightboxFavBtn.addEventListener('click', () => {
    const img = state.filteredImages[state.lightboxIndex];
    if (img) toggleFavorite(img.id);
  });

  /* Keyboard navigation for lightbox */
  document.addEventListener('keydown', e => {
    if (!state.lightboxOpen) return;
    switch (e.key) {
      case 'Escape':    closeLightbox(); break;
      case 'ArrowLeft': lightboxPrev();  break;
      case 'ArrowRight':lightboxNext();  break;
    }
  });

  /* Trap focus inside lightbox */
  DOM.lightbox.addEventListener('keydown', e => {
    if (!state.lightboxOpen || e.key !== 'Tab') return;
    const focusable = DOM.lightbox.querySelectorAll(
      'button:not([disabled]), [href], input, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  });

  /* — Footer filter links — */
  document.querySelectorAll('.footer-filter-link').forEach(btn => {
    btn.addEventListener('click', () => {
      setFilter(btn.dataset.filter);
      document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* — Nav links active state on scroll — */
  const sections = document.querySelectorAll('section[id], main[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            const isActive = link.getAttribute('href') === `#${entry.target.id}`;
            link.classList.toggle('active', isActive);
            if (isActive) {
              link.setAttribute('aria-current', 'page');
            } else {
              link.removeAttribute('aria-current');
            }
          });
        }
      });
    },
    { threshold: 0.4 }
  );
  sections.forEach(s => sectionObserver.observe(s));

  /* Touch swipe support for lightbox */
  let touchStartX = 0;
  DOM.lightbox.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  DOM.lightbox.addEventListener('touchend', e => {
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 60) {
      delta < 0 ? lightboxNext() : lightboxPrev();
    }
  }, { passive: true });
}

/* ================================================================
   12. UTILITIES
   ================================================================ */

/**
 * Capitalizes the first letter of a string.
 * @param {string} str
 * @returns {string}
 */
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* ================================================================
   13. INITIALIZATION
   ================================================================ */

/** Main initialization function. Called when the DOM is ready. */
function init() {
  /* Set footer year */
  if (DOM.footerYear) {
    DOM.footerYear.textContent = new Date().getFullYear();
  }

  /* Load persisted favorites */
  loadFavorites();
  updateFavoriteCount();

  /* Initial gallery render */
  renderGallery();

  /* Add reveal class to sections */
  document.querySelectorAll('.section-header, .about-content, .about-visual, .footer-brand, .footer-links-group').forEach(el => {
    el.classList.add('reveal');
  });

  /* Set up scroll reveal */
  initScrollReveal();

  /* Set up all event listeners */
  initEventListeners();

  /* Initial navbar scroll check */
  handleNavbarScroll();

  /* Log success (development only) */
  /* console.info('[VISTA] Gallery initialized with', IMAGE_DATA.length, 'images.'); */
}

/* Run after DOM is fully parsed */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
