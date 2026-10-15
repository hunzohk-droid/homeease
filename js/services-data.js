const services = [
  {
    slug: "home-cleaning",
    name: "Home Cleaning",
    category: "Cleaning",
    shortDescription: "Keep your home fresh with everyday cleaning.",
    fullDescription:
      "Cleaning for everyday living spaces, including bedrooms, bathrooms, kitchens, and common areas. The final scope is agreed before work starts.",
    includedTasks: [
      "Dust accessible surfaces",
      "Sweep and mop floors",
      "Vacuum carpets and rugs",
      "Clean bathroom surfaces",
      "Wipe kitchen countertops and appliance exteriors",
      "Empty household bins"
    ],
    exclusions: [
      "Deep stain removal",
      "Cleaning inside appliances",
      "Exterior window cleaning",
      "Hazardous waste or mould removal"
    ],
    pricingText: "Request a quote",
    active: true
  },
  {
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    category: "Cleaning",
    shortDescription: "Thorough cleaning for dirt and buildup in your home.",
    fullDescription:
      "Detailed cleaning for areas that need more attention than regular housekeeping. Specific rooms and cleaning tasks are agreed before work starts.",
    includedTasks: [
      "Clean accessible skirting boards and door frames",
      "Remove surface grease from kitchen areas",
      "Scrub bathroom tiles and fixtures",
      "Dust accessible shelves and furniture",
      "Clean accessible corners",
      "Vacuum and mop floors"
    ],
    exclusions: [
      "Professional carpet or upholstery cleaning",
      "Pest removal",
      "Hazardous waste or mould removal",
      "Moving heavy furniture",
      "Exterior cleaning"
    ],
    pricingText: "Request a quote",
    active: true
  },
  {
    slug: "plumbing-repairs",
    name: "Plumbing Repairs",
    category: "Plumbing",
    shortDescription: "Get help with leaking taps, toilets, and minor plumbing problems.",
    fullDescription:
      "Assessment and repair of common household plumbing issues. Required parts, suitability, and the final scope are confirmed before repairs begin.",
    includedTasks: [
      "Inspect the reported plumbing issue",
      "Repair minor accessible leaks",
      "Repair or replace agreed tap components",
      "Address minor toilet fixture problems",
      "Test repaired fixtures for leaks"
    ],
    exclusions: [
      "Major pipe replacement",
      "Underground drainage work",
      "Gas pipe repairs",
      "Structural alterations",
      "Replacement parts unless included in the quote"
    ],
    pricingText: "Request a quote",
    active: true
  },
  {
    slug: "electrical-repairs",
    name: "Electrical Repairs",
    category: "Electrical",
    shortDescription: "Get help with faulty switches, sockets, and light fittings.",
    fullDescription:
      "Assessment and repair of common household electrical fixtures by appropriately qualified professionals. Work proceeds only after suitability and scope are confirmed.",
    includedTasks: [
      "Assess the reported electrical issue",
      "Repair or replace agreed switches and sockets",
      "Repair or replace agreed light fittings",
      "Check repaired fixtures for safe operation"
    ],
    exclusions: [
      "Whole-home rewiring",
      "Main electrical panel replacement",
      "Utility supply repairs",
      "Structural alterations",
      "Replacement parts unless included in the quote"
    ],
    pricingText: "Request a quote",
    active: true
  },
  {
    slug: "furniture-assembly",
    name: "Furniture Assembly",
    category: "Assembly",
    shortDescription: "Have flat-pack beds, desks, and other furniture assembled.",
    fullDescription:
      "Assembly of household flat-pack furniture using the manufacturer's instructions and supplied components. Furniture type and assembly requirements are confirmed in advance.",
    includedTasks: [
      "Check supplied parts against the instructions",
      "Assemble agreed furniture items",
      "Tighten fittings and check stability",
      "Place assembled furniture in the agreed room",
      "Gather packaging in a designated area"
    ],
    exclusions: [
      "Supplying furniture or missing parts",
      "Custom furniture construction",
      "Furniture repairs",
      "Moving furniture between properties",
      "Wall anchoring unless included in the agreed scope"
    ],
    pricingText: "Request a quote",
    active: true
  },
  {
    slug: "tv-mounting",
    name: "TV Mounting",
    category: "Installation",
    shortDescription: "Mount your TV on a suitable wall at your preferred height.",
    fullDescription:
      "Wall mounting for a compatible television and bracket. Wall suitability, TV size, mounting position, and required materials are checked before installation.",
    includedTasks: [
      "Check wall and bracket suitability",
      "Agree on the mounting position",
      "Install the compatible wall bracket",
      "Attach and level the television",
      "Connect existing accessible cables",
      "Check mounting stability"
    ],
    exclusions: [
      "Supplying the TV or bracket",
      "Concealing cables inside walls",
      "Installing new electrical sockets",
      "Structural wall repairs",
      "Mounting on unsuitable surfaces"
    ],
    pricingText: "Request a quote",
    active: true
  },
  {
    slug: "interior-painting",
    name: "Interior Painting",
    category: "Painting",
    shortDescription: "Refresh your rooms with professionally applied interior paint.",
    fullDescription:
      "Painting of agreed interior walls and ceilings. Surface condition, preparation, paint selection, and number of coats are confirmed before work starts.",
    includedTasks: [
      "Protect nearby floors and furniture",
      "Prepare agreed surfaces",
      "Fill minor surface imperfections",
      "Apply the agreed paint and number of coats",
      "Clean the immediate work area"
    ],
    exclusions: [
      "Major plaster or structural repairs",
      "Exterior painting",
      "Wallpaper removal unless agreed",
      "Hazardous paint or mould treatment",
      "Paint and materials unless included in the quote"
    ],
    pricingText: "Request a quote",
    active: true
  },
  {
    slug: "general-handyman",
    name: "General Handyman",
    category: "Handyman",
    shortDescription: "Get practical help with small repairs and everyday home tasks.",
    fullDescription:
      "Help with minor household maintenance and installation tasks. Each requested task is assessed and agreed before work starts.",
    includedTasks: [
      "Assess agreed minor repair tasks",
      "Tighten loose handles and fittings",
      "Adjust cabinet hinges",
      "Hang agreed pictures or shelves on suitable walls",
      "Complete minor non-specialist repairs",
      "Tidy the immediate work area"
    ],
    exclusions: [
      "Specialist electrical or plumbing work",
      "Structural repairs",
      "Major renovation work",
      "Roof work",
      "Materials and replacement parts unless included in the quote"
    ],
    pricingText: "Request a quote",
    active: true
  }
];