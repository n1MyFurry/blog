import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import React from 'react';

export const categoryFilters = [
    "Discover",
    "Travel",
    "Health",
    "Cooking",
    "Motivation",
    "Tech",
    "Fashion",
    "Financial",
    "Photography"
]

export const navLinks = [
    { text: "Best of the week", href: "/bestweek" },
    { text: "Most viewed", href: "/mostviews" }
]

export const adminUsersTableHeader = [
    { name: "Id", width: "90px" },
    { name: "Name", width: "300px" },
    { name: "Email", width: "300px" },
    { name: "Avatar", width: "150px" },
    { name: "Admin", width: "150px" },
    { name: "Moder", width: "150px" },
    { name: "Reg.Date", width: "150px" },
    { name: "Options", width: "300px" }
]

export const adminCreatePostTheme = [
    [
        { name: "Create Amazing Cooking Post", image: "/adminpostimages/food1.jpg", type: "food" },
        { name: "Create Amazing Discover Post", image: "/adminpostimages/discover.jpg", type: "discover" },
        { name: "Create Amazing Travel Post", image: "/adminpostimages/travel1.jpg", type: "travel" },
    ],
    [
        { name: "Create Amazing Health Post", image: "/adminpostimages/health.jpg", type: "health" },
        { name: "Create Amazing Motivation Post", image: "/adminpostimages/motivation1.jpg", type: "motivation" },
        { name: "Create Amazing Tech Post", image: "/adminpostimages/tech.jpg", type: "tech" },
    ],
    [
        { name: "Create Amazing Fashion Post", image: "/adminpostimages/fashion.jpg", type: "fashion" },
        { name: "Create Amazing Financial Post", image: "/adminpostimages/financial.jpg", type: "financial" },
        { name: "Create Amazing Photography Post", image: "/adminpostimages/photo.jpg", type: "photography" },
    ]
]

export const adminCreatePostStatus = [
    { status: "New", theme: "Choose Theme" },
    { status: "New", theme: "Set SEO" },
    { status: "New", theme: "Input Data" },
    { status: "New", theme: "Check Result" },
]

export const ingredTest = [
    { name: "Eggs", amount: "4 pieces", color: "#AF4DFC"},
    { name: "Cup milk", amount: "2/3", color: "#FA50AE"},
    { name: "Teaspoon cinnamon", amount: "1(1/2) pieces", color: "#FE6143"},
    { name: "Tablespoon vanilla", amount: "1 piece", color: "#F7DCE9"},
    { name: "Tablespoons butter", amount: "2 pieces", color: "#AF4DFC"},
    { name: "slices thick bread Texas toast", amount: "8 pieces", color: "#FA50AE"},
    { name: "slices thick bread Texas toast", amount: "4 pieces", color: "#FE6143"},
]