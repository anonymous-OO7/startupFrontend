import { Home, Search, CircleUserIcon, BadgeInfo, Wrench } from "lucide-react";

export const sidebarLinks = [
  {
    imgURL: "/assets/home.svg",
    route: "/",
    label: "Home",
    logocmp: <Home />,
  },
  {
    imgURL: "/assets/search.svg",
    route: "/explore",
    label: "Explore",
    logocmp: <Search />,
  },
  {
    imgURL: "/assets/heart.svg",
    route: "/profile",
    label: "Profile",
    logocmp: <CircleUserIcon />,
  },
  {
    imgURL: "/assets/create.svg",
    route: "/about",
    label: "About",
    logocmp: <BadgeInfo />,
  },
  {
    imgURL: "/assets/community.svg",
    route: "/settings",
    label: "Settings",
    logocmp: <Wrench />,
  },
];

export const profileTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "replies", label: "Replies", icon: "/assets/members.svg" },
  { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
];

export const communityTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "members", label: "Members", icon: "/assets/members.svg" },
  { value: "requests", label: "Requests", icon: "/assets/request.svg" },
];

export const posts = [
  {
    creator: {
      $id: "user123",
      name: "John Doe",
      imageUrl:
        "data:image/jpeg;base64,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",
    },
    $createdAt: "2024-02-13T08:30:00Z",
    location: "New York",
    $id: "post123",
    caption: "Check out this beautiful sunset!",
    tags: ["sunset", "nature", "photography"],
    imageUrl:
      "data:image/jpeg;base64,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",
  },
  {
    creator: {
      $id: "user456",
      name: "Jane Smith",
      imageUrl:
        "data:image/jpeg;base64,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",
    },
    $createdAt: "2024-02-12T10:45:00Z",
    location: "Paris",
    $id: "post456",
    caption: "Exploring the streets of Paris!",
    tags: ["travel", "city", "architecture"],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92eisuWOx3tEjeW14mT9ACVgXDwIRBGtnww&usqp=CAU",
  },
  {
    creator: {
      $id: "user789",
      name: "Alice Johnson",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfO37MK81JIyR1ptwqr_vYO3w4VR-iC2wqQ&usqp=CAU",
    },
    $createdAt: "2024-02-11T15:20:00Z",
    location: "Tokyo",
    $id: "post789",
    caption: "Sushi time in Tokyo!",
    tags: ["food", "travel", "Japan"],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg5C1ZvRQN1S8wR6X3V3zNoxOAY6PTxWwiDA&usqp=CAU",
  },
  {
    creator: {
      $id: "user101112",
      name: "Bob Williams",
      imageUrl:
        "https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-firefly-marquee-text-to-image-0-mobile-600x600?$pjpeg$&jpegSize=100&wid=600",
    },
    $createdAt: "2024-02-10T12:00:00Z",
    location: "London",
    $id: "post101112",
    caption: "Rainy day in London ☔️",
    tags: ["weather", "city", "rain"],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1X-AN3kFs-XAzQU5uTMgBv7IXiWaT-L7zeQ&usqp=CAU",
  },
  {
    creator: {
      $id: "user131415",
      name: "Emma Brown",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXF9PPUtZi0nt98vbPsRivyJmqNoyZJzHADg&usqp=CAU",
    },
    $createdAt: "2024-02-09T09:10:00Z",
    location: "Sydney",
    $id: "post131415",
    caption: "Beach day in Sydney!",
    tags: ["beach", "summer", "Australia"],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLuUk_pMxMRUYw6BGwVNJAFbb6UcgQcxtU7w&usqp=CAU",
  },
  {
    creator: {
      $id: "user161718",
      name: "Michael Davis",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVF3QL9BxEjtKkA03YJPm1R3mod6dEA4M5MA&usqp=CAU",
    },
    $createdAt: "2024-02-08T16:30:00Z",
    location: "Rio de Janeiro",
    $id: "post161718",
    caption: "Carnival vibes in Rio!",
    tags: ["carnival", "Brazil", "party"],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGoMl9H9CxSfToFvUR51Z_h1ci-Qg8js-CZg&usqp=CAU",
  },
  {
    creator: {
      $id: "user192021",
      name: "Sophia Martinez",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAlpQBahpDZSNYA6W-nCeQlpF_RcoYkAbdSg&usqp=CAU",
    },
    $createdAt: "2024-02-07T14:45:00Z",
    location: "Rome",
    $id: "post192021",
    caption: "Throwing coins in the Trevi Fountain!",
    tags: ["travel", "Italy", "history"],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYFV-bwRLTx5vbXeIRyRZDH86KNG-4ktGcg&usqp=CAU",
  },
  {
    creator: {
      $id: "user222324",
      name: "William Wilson",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7PETXe5dLZODtdN9AUafllEpnmUORAitGbg&usqp=CAU",
    },
    $createdAt: "2024-02-06T11:20:00Z",
    location: "Dubai",
    $id: "post222324",
    caption: "Skyline views in Dubai!",
    tags: ["travel", "cityscape", "skyscrapers"],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpoerzMDKR__CRbrpRPakzH4Ay1cgjqWKA7SFM97USP63M-9hPngcEejm0UffzUFHA30I&usqp=CAU",
  },
  {
    creator: {
      $id: "user252627",
      name: "Olivia Taylor",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgh6xpnAu5DAvGzyGjRFFkFQ3JVvTup-CeA8QkieLaFiT4pGD9qYKrXpu2JUY93zOAQU&usqp=CAU",
    },
    $createdAt: "2024-02-05T08:00:00Z",
    location: "Santorini",
    $id: "post252627",
    caption: "Sunset in Santorini!",
    tags: ["sunset", "Greece", "island"],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh0n6-_RbrktCldGi_KgCHdeYsYaXoX7ZHmI_36BDa8R1OhcB5bSyDWKG7mB93fbrKC4Y&usqp=CAU",
  },
  {
    creator: {
      $id: "user282930",
      name: "Daniel Thomas",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&usqp=CAU",
    },
    $createdAt: "2024-02-04T17:00:00Z",
    location: "Hong Kong",
    $id: "post282930",
    caption: "City lights in Hong Kong!",
    tags: ["city", "night", "China"],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75ebrwvgVW5Ks_oLfCbG8Httf3_9g-Ynl_Q&usqp=CAU",
  },
  {
    creator: {
      $id: "user313233",
      name: "Isabella Clark",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTZiDYVFY3pHMqANAFlTdWbwF2KpclMAbp8g&usqp=CAU",
    },
    $createdAt: "2024-02-03T13:30:00Z",
    location: "Maui",
    $id: "post313233",
    caption: "Hiking adventures in Maui!",
    tags: ["hiking", "nature", "Hawaii"],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6heoi_pAwutfXxU8Cdh7EcazRk3rgQcx7JQ&usqp=CAU",
  },
  {
    creator: {
      $id: "user343536",
      name: "James Rodriguez",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTK500IQ_2NpiNk7Ed_4phbWDtLSZ7QGWuNA&usqp=CAU",
    },
    $createdAt: "2024-02-02T10:15:00Z",
    location: "Barcelona",
    $id: "post343536",
    caption: "Tapas time in Barcelona!",
    tags: ["food", "Spain", "travel"],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4cHHcVUGps_3N52mtiCcFrFrFqbm6aiPMrQ&usqp=CAU",
  },
  {
    creator: {
      $id: "user373839",
      name: "Emily Adams",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2smYas6mJdzbYGrCLXLOlWq6rN206k6zUPQ&usqp=CAU",
    },
    $createdAt: "2024-02-01T14:00:00Z",
    location: "Kyoto",
    $id: "post373839",
    caption: "Cherry blossoms in Kyoto!",
    tags: ["nature", "Japan", "spring"],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&usqp=CAU",
  },
];

export const threads = [
  {
    id: "1",
    currentUserId: "user123",
    parentId: null,
    content: "This is the main thread content",
    author: {
      name: "John Doe",
      image: "/path/to/user/image.jpg",
      id: "author123",
    },
    community: {
      id: "community123",
      name: "Sample Community",
      image: "/path/to/community/image.jpg",
    },
    createdAt: "2024-03-07T12:00:00Z",
    comments: [
      {
        author: {
          image: "/path/to/commenter/image1.jpg",
        },
      },
      {
        author: {
          image: "/path/to/commenter/image2.jpg",
        },
      },
    ],
  },
  {
    id: "2",
    currentUserId: "user456",
    parentId: null,
    content: "This is another thread without any comments.",
    author: {
      name: "Jane Smith",
      image: "/path/to/another/user/image.jpg",
      id: "author456",
    },
    community: {
      id: "community456",
      name: "Another Sample Community",
      image: "/path/to/another/community/image.jpg",
    },
    createdAt: "2024-03-08T10:00:00Z",
    comments: [],
  },
  {
    id: "3",
    currentUserId: "user789",
    parentId: null,
    content: "Thread with some comments.",
    author: {
      name: "Alice Johnson",
      image: "/path/to/yet/another/user/image.jpg",
      id: "author789",
    },
    community: {
      id: "community789",
      name: "Yet Another Sample Community",
      image: "/path/to/yet/another/community/image.jpg",
    },
    createdAt: "2024-03-09T08:00:00Z",
    comments: [
      {
        author: {
          image: "/path/to/commenter/image3.jpg",
        },
      },
    ],
  },
  {
    id: "4",
    currentUserId: "user123",
    parentId: null,
    content: "Yet another thread without comments.",
    author: {
      name: "John Doe",
      image: "/path/to/user/image.jpg",
      id: "author123",
    },
    community: {
      id: "community123",
      name: "Sample Community",
      image: "/path/to/community/image.jpg",
    },
    createdAt: "2024-03-10T15:00:00Z",
    comments: [],
  },
  {
    id: "5",
    currentUserId: "user789",
    parentId: null,
    content: "Thread with more comments.",
    author: {
      name: "Alice Johnson",
      image: "/path/to/yet/another/user/image.jpg",
      id: "author789",
    },
    community: {
      id: "community789",
      name: "Yet Another Sample Community",
      image: "/path/to/yet/another/community/image.jpg",
    },
    createdAt: "2024-03-11T17:00:00Z",
    comments: [
      {
        author: {
          image: "/path/to/commenter/image4.jpg",
        },
      },
      {
        author: {
          image: "/path/to/commenter/image5.jpg",
        },
      },
      {
        author: {
          image: "/path/to/commenter/image6.jpg",
        },
      },
    ],
  },
];
