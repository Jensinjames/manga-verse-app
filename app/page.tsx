// Defines a section with a description and optional style
interface Section {
  description: string;
  style?: string;
}

// Represents a Manga or Animation with a title and genre
interface MangaOrAnimation {
  title: string;
  genre: string[];
  coverUrl: string;
}

// Represents a Creator with a name, artwork, and creation description
interface Creator {
  name: string;
  artworkUrl: string;
  creationDescription: string;
}

// Represents a Genre with a name and icon
interface Genre {
  name: string;
  iconClass: string;
}

// Defines the main structure of the MangaVerse platform
interface MangaVersePlatform {
  heroSection: Section;
  librarySection: {
    section: Section;
    featuredContent: MangaOrAnimation[];
    genres: Genre[];
  };
  creatorsShowcase: {
    featuredCreators: Creator[];
    newAndNoteworthy: Creator[];
  };
  toolsAndResources: {
    creativeTools: string[];
    analyticsAndMonetization: string[];
  };
  communityEngagement: {
    forums: string[];
    upcomingEvents: {
      title: string;
      date: string;
      description?: string;
    }[];
    exclusiveContent: string[];
  };
}

// Example usage
const mangaVerse: MangaVersePlatform = {
  heroSection: {
    description: "This is the hero section where users are introduced to MangaVerse.",
    style: "auto",
  },
  librarySection: {
    section: {
      description: "The library section is where users can browse through the vast collection of manga adaptations and original animations.",
      style: "auto",
    },
    featuredContent: [
      {
        title: "Samurai X",
        genre: ["Historical", "Action"],
        coverUrl: "https://source.unsplash.com/random/200x300?manga",
      },
      // More MangaOrAnimation objects
    ],
    genres: [
      {
        name: "Horror",
        iconClass: "fas fa-ghost",
      },
      // More Genre objects
    ],
  },
  creatorsShowcase: {
    featuredCreators: [
      {
        name: "Alex Doe",
        artworkUrl: "https://source.unsplash.com/random/200x200?manga",
        creationDescription: "Creator of 'Epic Samurai'",
      },
      // More Creator objects
    ],
    newAndNoteworthy: [
      // Creator objects
    ],
  },
  toolsAndResources: {
    creativeTools: ["Advanced Illustration Tools", "Intuitive Writing Interface"],
    analyticsAndMonetization: ["Real-time Performance Metrics", "Multiple Revenue Streams"],
  },
  communityEngagement: {
    forums: ["For every genre"],
    upcomingEvents: [
      {
        title: "Manga Drawing Workshop",
        date: "May 15, 2023",
      },
      // More events
    ],
    exclusiveContent: ["Exclusive member content"],
  },
};
